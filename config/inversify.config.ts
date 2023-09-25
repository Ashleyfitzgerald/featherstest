import "reflect-metadata";
import { Container } from "inversify"
import { TYPES } from "./types";

import { EggService } from "../services/EggService";
import { EggValidator, ValidatorInterface } from "../validator";
import { EggMapperInterface, EggMapper } from "../mapper";

const eggContainer = new Container();

eggContainer.bind<EggMapperInterface>(TYPES.EggMapperInterface).to(EggMapper);
eggContainer.bind<EggService>(TYPES.EggService).to(EggService);
eggContainer.bind<ValidatorInterface>(TYPES.ValidatorInterface).to(EggValidator);

export { eggContainer };