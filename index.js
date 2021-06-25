import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import xssClean from "xss-clean";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";

import apiRoutes from "./routes/api";
import coreRoutes from "./routes/core";

const app = express();

app.use(cors());
app.use(helmet());
app.use(xssClean());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // 100 requests per IP
});
app.use(limiter);
app.use(mongoSanitize());
app.use(hpp());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const serve = async () => {
  app.use("/api", apiRoutes);
  app.use("/core", coreRoutes);

  app.use(express.static(path.join(path.join(__dirname, "public"))));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.listen(3000, () => {
    console.log(`Server is running on 3000`);
  });
};

serve();
