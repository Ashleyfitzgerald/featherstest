import {HookContext} from "@feathersjs/feathers";

export interface ValidatorInterface {
    validate(context:HookContext): Promise<void>
}