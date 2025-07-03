import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static HTML app
  app.get("/", (req, res) => {
    const filePath = path.resolve(process.cwd(), 'static.html');
    res.sendFile(filePath);
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // CORS proxy endpoint for OpenAI API (for development)
  app.post("/api/openai/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // In production, this would be replaced by direct frontend calls
      // This is just for development/testing
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY || "PAEEEAPI"}`
        },
        body: JSON.stringify({
          model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
          messages: [
            {
              role: "system",
              content: "You are PaeeeApi, a helpful AI assistant. Provide natural, helpful responses to user questions."
            },
            {
              role: "user",
              content: message
            }
          ],
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      res.json({ 
        content: data.choices[0].message.content,
        isOffline: false 
      });
    } catch (error) {
      console.error("OpenAI API Error:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
