import * as appRoot from "app-root-dir";
const appRootDir = appRoot.get();
const port: number = +(process.env.PORT) || 9000;
const APIBase: string = process.env.APIBase || "http://localhost";


const steamApiKey: string = process.env.steam_api_key;
if (steamApiKey === undefined) {
  throw Error("Must include steam key");
}

export const AppConfig: IAppConfig = {
  port: port,
  BaseURL: `${APIBase}:${port}`,
  steamApiKey: steamApiKey,
  folders: {
    template: `${appRootDir}/TemplateHtmlPage`,
  },
};

interface IAppConfig {
  port: number;
  BaseURL: string;
  steamApiKey: string;
  folders: IFolders;
}
interface IFolders {
  template: string;
}