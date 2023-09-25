import { feathers } from '@feathersjs/feathers'
import { koa, rest, bodyParser, errorHandler, serveStatic } from '@feathersjs/koa'
import { eggContainer } from "./config/inversify.config";
import { TYPES } from "./config/types";
import { EggService } from "./services/EggService";
import { ValidatorInterface } from "./validator/ValidatorInterface";

const eggService = eggContainer.get<EggService>(TYPES.EggService);
const eggValidator = eggContainer.get<ValidatorInterface>(TYPES.ValidatorInterface);

type ServiceTypes = {
    get: typeof eggService
}

const app = koa<ServiceTypes>(feathers())

// Use the current folder for static file hosting
app.use(serveStatic('.'))
// Register the error handle
app.use(errorHandler())
// Parse JSON request bodies
app.use(bodyParser())
// Register REST service handler
app.configure(rest())

app.use('get', eggService);

app.service('get').hooks({
    before: {
        create: eggValidator.validate
    }
});

// Start the server
app.listen(3030).then(() => console.log('Feathers server listening on localhost:3030'))