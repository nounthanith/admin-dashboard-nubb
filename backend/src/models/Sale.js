const { default: mongoose } = require("mongoose");


exports.saleSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        require : [true, 'User is require!!!']
    },
    invoiceNumber : {
        type: String,
        unique: true,
        required: [true, 'invoice number is require']
    },

    totalAmount : {
        type: Number,
        required: [true, 'total price is require']
    },

    items : [
        {
          productName: String,
          productCode: String,
          quantity: Number,
          unitPrice: Number,
          totalPrice: Number,
        },
    ],
    createdAt : {
        type: Date,
        default: Date.now()
    }
})

const Sale = mongoose.model('Sale', this.saleSchema)

module.exports = { Sale }