import * as express from "express";
import { Router, Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import { AppConfig } from "./_config/app.config";
import { BaseRoute } from "./routes/Base";


import { inversifyContainer } from "./_config/inversify.config";
import { injectable, inject } from "inversify";
import { TYPES } from "./_config/inversifyTypes";


@injectable()
export class Server {
  private app: express.Express = express();
  private PORT: number = AppConfig.port;
  @inject(TYPES.BaseRoute) private BaseRoute: BaseRoute;

  constructor() { }

  setup(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    this.app.use("/", this.BaseRoute.getRoute());

  }

  start(): void {
    this.app.listen(this.PORT, () => {
      console.log("server running", this.PORT);
    });
  }
}