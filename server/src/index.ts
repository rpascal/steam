require("dotenv").config();

import { Server } from "./server";
import { inversifyContainer } from "./_config/inversify.config";
import { TYPES } from "./_config/inversifyTypes";

const server = inversifyContainer.get<Server>(TYPES.Server);
server.setup();
server.start();
