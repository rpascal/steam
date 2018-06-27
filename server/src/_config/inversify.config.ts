import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./inversifyTypes";
import { DateTimeProvider } from "../Providers/DateTimeProvider";
import { FormatterProvider } from "../Providers/FormatterProvider";
import { IdProvider } from "../Providers/IdProvider";

import { BaseRoute } from "../routes/Base";

import { Server } from "../server";

const inversifyContainer = new Container();
inversifyContainer.bind<Server>(TYPES.Server).to(Server);

inversifyContainer.bind<DateTimeProvider>(TYPES.DateTimeProvider).to(DateTimeProvider);
inversifyContainer.bind<FormatterProvider>(TYPES.FormatterProvider).to(FormatterProvider);
inversifyContainer.bind<IdProvider>(TYPES.IdProvider).to(IdProvider);
inversifyContainer.bind<BaseRoute>(TYPES.BaseRoute).to(BaseRoute);

export { inversifyContainer };