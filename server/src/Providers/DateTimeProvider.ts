import * as moment from "moment";
import { injectable } from "inversify";

@injectable()
export class DateTimeProvider {
    constructor() { }

    public getLogTimeStamp(): string {
        return moment().format("L LTS");
    }
    public getFileNameTimeStamp(): string {
        return moment().format("MMDDYYYYHHmmSSS");
    }
    public now(): number {
        return Date.now();
    }
}