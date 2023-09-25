import "reflect-metadata";
import { Container } from "inversify"
import { TYPES } from "./types";
import { EggService } from "../services/EggService";
import { EggMapper } from "../mapper/EggMapper";
import { ValidatorInterface } from "../validator/ValidatorInterface";
import { EggValidator } from "../validator/EggValidator";
import { EggMapperInterface } from "../mapper/EggMapperInterface";
const eggContainer = new Container();

eggContainer.bind<EggMapperInterface>(TYPES.EggMapperInterface).to(EggMapper);
eggContainer.bind<EggService>(TYPES.EggService).to(EggService);
eggContainer.bind<ValidatorInterface>(TYPES.ValidatorInterface).to(EggValidator);

export { eggContainer };