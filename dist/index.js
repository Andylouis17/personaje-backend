"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const defaul_routes_1 = __importDefault(require("./routes/defaul.routes"));
const personaje_routes_1 = __importDefault(require("./routes/personaje.routes"));
const server = new server_1.default();
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', defaul_routes_1.default);
server.app.use('/personajes', personaje_routes_1.default);
mongoose_1.default.connect('mongodb+srv://Usher_Personajes:bendji17@cluster0.larpza5.mongodb.net/superHeroeDb', (error) => {
    if (error) {
        throw error;
    }
    console.log('Base de datos online');
});
server.start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`);
});
