import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const CardSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4, 
        unique: true,
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const Card = mongoose.model("Cards", CardSchema);

export default Card;