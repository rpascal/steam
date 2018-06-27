import { injectable } from "inversify";
import * as shortid from "shortid";

@injectable()
export class IdProvider {
    public get = (): string => shortid();
}