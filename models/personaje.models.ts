import { Document, model, Schema } from "mongoose";


const personajeSchema = new Schema({
    nombre:{   
        type : String,
        require : [true, 'El nombre es requerido']  
    },
    nombreReal:{
        type : String
    },
    superPoder:{
        type : String
    },
    imagen:{
        type :String,
        require : [true, 'Imagen  requerido']
    }
})
interface IPersonaje extends Document{
    nombre: String,
    nombreReal: String,
    superPoder: String,
    imagen: String,
}
export const Personaje = model<IPersonaje>('personaje',personajeSchema);