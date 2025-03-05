const { Product } = require("../models/Product")
const { Sale } = require("../models/Sale")
const { getNextInvoiceNumber } = require("./counterController")


exports.create = async (req, res)=>{
    try {

        for(let item of req.body.items){
            const doc = await Product.findOne({code : item.productCode})

            if(!doc){
                throw new Error ('Product is not found!!!')
            }
    
            if(item.quantity > doc.stockQty){
                throw new Error(`ទំនិញ ${doc.name} មិនគ្រប់​គ្រាន់​`)
            }
        }

        const userId = req.user._id

        const invoiceNumber = await getNextInvoiceNumber()

        const data = {
            userId : userId,
            invoiceNumber : invoiceNumber,
            items : req.body.items,
            totalAmount : req.body.totalAmount
        }
        const newSale = await Sale.create(data)

        if(newSale){
            for(let item of req.body.items){
                const doc = await Product.findOne({code : item.productCode})
    
                if(!doc){
                    throw new Error ('Product is not found!!!')
                }

                const newStock = doc.stockQty - item.quantity
                // console.log(newStock)
                await Product.findOneAndUpdate({code : item.productCode}, {stockQty : newStock})
                // doc.stockQty = newStock
                // await doc.save()
                
            }
        }
        
        
        res.status(200).json({
            status : 'success',
            data : newSale
        })
    } catch (err) {
        res.status(500).json({
            status : 'error',
            message : err.message
        })
    }
}

exports.findAll = async (req, res)=>{
    try {
        let queryObject = {}
  
          const page = req.query.page * 1 || 1
          const limit = req.query.limit * 1 || 25
          const skip = (page - 1) * limit
  
        if (req.query.search) {
          queryObject = {
            invoiceNumber: { $regex: req.query.search, $options: "i" }
          }
        }
  
        const docs = await Sale.find(queryObject).skip(skip).limit(limit).sort({_id : -1}).populate("userId")
        const totalItems = await Sale.find(queryObject).countDocuments(queryObject)
        const totalPages = Math.ceil(totalItems / limit)
  
        res.status(200).json({
          status: "success",
          totalPages,
          data: docs,
        })
      } catch (err) {
        res.status(500).json({
          status: "Error",
          message: err.message,
        })
      }
  }

exports.findOne = async (req, res)=>{
    try {
        const doc = await Sale.findOne({invoiceNumber : req.params.invoice})
        if(!doc){
            throw new Error('Sale is not found with id')
        }
        res.status(200).json({
            status : 'success',
            data : doc
        })
    } catch (err) {
        res.status(500).json({
            status : 'error',
            message : err.message
        })
    }
}