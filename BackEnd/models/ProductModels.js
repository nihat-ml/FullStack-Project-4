import { model, Schema } from "mongoose";

let ProductsSchema = new Schema({
    image:String,
    title:String,
    description:String,
    price:Number
})

export let ProductsModel = model("products", ProductsSchema)