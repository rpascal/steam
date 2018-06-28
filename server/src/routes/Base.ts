
import * as express from "express";
import { Router, Request, Response, NextFunction } from "express";

import { injectable } from "inversify";
import { TYPES } from "../_config/inversifyTypes";
import { Request as request, get } from "request";
import { AppConfig } from "../_config/app.config";

@injectable()
export class BaseRoute {
    private router: Router = express.Router();

    getRoute(): Router {
        this.router.use((req: Request, res: Response, next: NextFunction) => {
            next();
        });

        this.router.get("/", (req: Request, res: Response) => {
            res.json({ message: "Page Loaded for scraper" });
        });

        this.router.get('/steam', function (req, res, next) {
            get({
                uri: 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/',
                qs: {
                    key: AppConfig.steamApiKey,
                    steamid: req.query.steamUserId,
                    include_appinfo: true,
                    include_played_free_games: true
                }
            }).pipe(res);
        });

        return this.router;
    }

}