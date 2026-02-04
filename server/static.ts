import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Vite outputs to /dist relative to project root
  const distPath = path.resolve(process.cwd(), "dist");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find build directory at ${distPath}. Did you run the build?`
    );
  }

  // Serve static assets
  app.use(express.static(distPath));

  // SPA fallback (Express 4 compatible)
  app.get("*", (_req, res) => {
    res.type("html").sendFile(path.join(distPath, "index.html"));
  });
}
