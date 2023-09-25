import { HookContext } from "@feathersjs/feathers";
import { injectable } from "inversify";

@injectable()
export class EggValidator {
    async validate(context:HookContext): Promise<void> {
        if (!context.data.yolk || !context.data.size) {
            throw new Error('Your request sucks')
        }

        return;
    }
}