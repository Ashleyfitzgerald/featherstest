import { injectable, inject } from "inversify";
import {EggInterface} from "../entities/EggInterface";
import {EggMapperInterface} from "./EggMapperInterface";
import {Id} from "@feathersjs/feathers";

@injectable()
export class EggMapper implements EggMapperInterface {
    eggs: EggInterface[] = [];

    async putEgg(egg: EggInterface): Promise<boolean> {
        this.eggs.push(egg);
        return true;
    }

    async getEgg(id:any): Promise<EggInterface | null>{
        if (this.eggs[id]) {
            return this.eggs[id];
        }

        return null;
    }
}