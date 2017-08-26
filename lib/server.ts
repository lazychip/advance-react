import express = require("express");
import { Express, Request, Response, NextFunction } from "express";
import { OK } from "http-status-codes";
import config from "./config";

class Server {
  start(): Express {
    const app = this.initExpress();
    app.listen(config.PORT, () => {
      console.log(`Server Running on ${config.PORT}`);
    });
    return app;
  }
  private initExpress(): Express {
    const app = express();
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    this.setExpressRoutes(app);
    return app;
  }
  private setExpressRoutes(app: Express) {
    app.use("/", (req: Request, res: Response, next: NextFunction) => {
      res.render("index");
    });
  }
}

export default new Server().start();
