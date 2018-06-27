
// import { AppConfig } from "../_config/app.config";
// import * as express from "express";
// import { Router, Request, Response } from "express";

// import { readdirSync } from "fs";
// import { join } from "path";

// import { injectable } from "inversify";
// import { TYPES } from "../_config/inversifyTypes";

// @injectable()
// export class AdsRoute {
//     private router: Router = express.Router();

//     private reformatDockerPathToLocalhost(path): string {
//         return path.replace(`${AppConfig.folders.DummyData}`, `/${AppConfig.folders.DummyData}`);
//     }



//     public getRoute(): Router {


//         const dummyData = [
//             { name: "appnexus", id: 1 },
//             { name: "appnexusAst", id: 2 },
//             { name: "gumgum", id: 3 },
//             { name: "indexExchange", id: 4 },
//             { name: "openx", id: 5 },
//             { name: "pulsepoint", id: 6 },
//             { name: "rubicon", id: 7 },
//             { name: "sonobi", id: 8 },
//             { name: "sovrn", id: 9 },
//         ];

//         this.router.route("/dsp/:dspID")
//             .get(function (req: Request, res: Response) {
//                 const dspID: number = +req.params.dspID;
//                 const dsp: any = dummyData.find(i => i.id === dspID);
//                 if (dsp)
//                     res.json(dsp);
//                 res.status(404).send("Not found");
//             });

//         this.router.route("/dsps")
//             .get(function (req: Request, res: Response) {
//                 res.json(dummyData);
//             });

//         this.router.get("/dsps/:dspID", (req: Request, res: Response) => {
//             const dspID: number = +req.params.dspID;

//             const getDirectories = source => {
//                 return readdirSync(source).map(name => {
//                     const path: string = join(source, name);
//                     const imgs: string[] = readdirSync(path);
//                     return {
//                         creativeID: name,
//                         path: path,
//                         firstFile: imgs.length > 0 ? this.reformatDockerPathToLocalhost(`${AppConfig.BaseURL}${path}/${imgs[0]}`) : ""
//                     };
//                 });
//             };

//             res.json(getDirectories(`${AppConfig.folders.DummyData}/${dspID}`));
//         });
//         this.router.get("/dsps/:dspID/:creative", (req: Request, res: Response) => {
//             const dspID: number = +req.params.dspID;
//             const creative: string = req.params.creative;

//             const getDirectories = source => {
//                 return readdirSync(source).map(name => {
//                     const path: string = join(source, name);
//                     return { path: this.reformatDockerPathToLocalhost(`${AppConfig.BaseURL}${path}`) };
//                 });
//             };

//             res.json(getDirectories(`${AppConfig.folders.DummyData}/${dspID}/${creative}`));
//         });
//         return this.router;
//     }

// }
