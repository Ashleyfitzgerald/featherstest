import { EggInterface } from "../entities/EggInterface";
import { inject, injectable } from "inversify";
import { TYPES } from "../config/types";
import { Id, Params } from "@feathersjs/feathers";
import { EggMapperInterface } from "../mapper/EggMapperInterface";
@injectable()
export class EggService {
    eggMapper: EggMapperInterface;

    constructor(
        @inject(TYPES.EggMapperInterface) eggMapper: EggMapperInterface
    ) {
        this.eggMapper = eggMapper
        console.log('this is instantiated')
    }

    async get(id: Id, params: Params): Promise<string | null> {
        let egg = await this.eggMapper.getEgg(id);

        return 'Looks like we printing real stuff now' + egg?.yolk + egg?.size;
    }

    async create(data: any, params: Params): Promise<string> {
        console.log('creating a thing...')

        let Egg: EggInterface = {
            yolk: data.yolk,
            size: data.size
        }

        this.eggMapper.putEgg(Egg)
        return '';
    }
}