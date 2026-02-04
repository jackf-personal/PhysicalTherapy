import express from "express";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();

/**
 * -----------------------------
 * Shared middleware
 * -----------------------------
 */

app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * -----------------------------
 * PRODUCTION (Vercel)
 * -----------------------------
 * Static landing page only
 * No server lifecycle
 * No routes
 * No listen()
 */

if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

/**
 * -----------------------------
 * LOCAL DEVELOPMENT ONLY
 * -----------------------------
 */

if (process.env.NODE_ENV !== "production") {
  (async () => {
    const { registerRoutes } = await import("./routes");
    const { setupVite } = await import("./vite");

    const httpServer = createServer(app);

    await registerRoutes(httpServer, app);
    await setupVite(httpServer, app);

    app.use((err: any, _req, res, next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      console.error("Internal Server Error:", err);

      if (res.headersSent) return next(err);
      res.status(status).json({ message });
    });

    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(port, "0.0.0.0", () => {
      log(`serving on port ${port}`);
    });
  })();
}

export default app;
