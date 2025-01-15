import { ProductsModel } from "../models/ProductModels.js"

export const ProductController={
    getAll: async (req, res)=>{
        let products = await ProductsModel.find()
        res.send(products)
    },
    getById: async (req, res)=>{
        let id = req.params.id
        let myproduct = await ProductsModel.findById()
        res.send({
            message:"Succesfully Finded",
            data:myproduct
        })
    },
    deleteProduct: async (req, res)=>{
        let {id} = req.params
        await ProductsModel.findByIdAndDelete(id)
        res.send({
            message:"Delete Success"
        })
        

    },
    postProduct: async (req,res)=>{
        let newProduct = ProductsModel(req.body)
        console.log(req.body)
        await newProduct.save()
        res.send({
            message:"Success Post",
            data:req.body
        })
    },
    updateProduct: async (req, res)=>{
        let id = req.params.id
        let updateProduct = req.body
        let updatedProduct = await ProductsModel.findByIdAndUpdate({_id:id}, updateProduct, {new:true})
        res.send(updatedProduct)
    }
}
