"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = void 0;
const express_1 = __importDefault(require("express"));
const errorHandler = require("errorhandler");
class Express {
    constructor(options) {
        this.options = options;
        this.app = express_1.default();
        this.config();
        this.app.set('port', this.options.port);
    }
    /**
     * Configure application
     */
    config() {
        this.app
            .use(express_1.default.static(this.options.static))
            .get('/', (req, res) => res.send('Hello World!'))
            .use(errorHandler());
    }
    /**
     * Bootstrap the application.
     */
    static bootstrap(options) {
        console.log("Try to start server");
        return new Express(options);
    }
}
exports.Express = Express;
//# sourceMappingURL=server.js.map