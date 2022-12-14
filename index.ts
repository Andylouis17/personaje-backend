import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/defaul.routes";
import personajeRoutes from "./routes/personaje.routes";

const server = new Server();

server.app.use(bodyParser.json())
server.app.use(bodyParser.urlencoded({extended:true}))

server.app.use('/',defaultRoutes);
server.app.use('/personajes',personajeRoutes);

mongoose.connect('mongodb+srv://Usher_Personajes:bendji17@cluster0.larpza5.mongodb.net/superHeroeDb',(error)=>{
    if(error){
        throw error;
    }
    console.log('Base de datos online');
})

server.start(()=>{
    console.log( `Servidor corriendo en puerto: ${server.port}`);
})
