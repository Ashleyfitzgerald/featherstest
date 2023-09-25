import { EggInterface } from "../entities/EggInterface";
import {Id} from "@feathersjs/feathers";

export interface EggMapperInterface {
    eggs: EggInterface[];

    putEgg(egg: EggInterface): Promise<Boolean>;
    getEgg(id:Id): Promise<EggInterface | null>;
}