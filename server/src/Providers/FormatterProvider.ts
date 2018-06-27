import { injectable } from "inversify";

@injectable()
export class FormatterProvider {
    constructor() { }

    public format(obj: any, expanded?: boolean): string {
        if (expanded) {
            return JSON.stringify(obj, undefined, 2);
        }
        return JSON.stringify(obj);
    }
}
