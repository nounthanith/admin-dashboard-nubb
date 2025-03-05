const { Counter } = require("./../models/Counter");

exports.getNextInvoiceNumber = async () =>  {
    const result = await Counter.findOneAndUpdate(
      { _id: 'invoiceNumber' }, // Select the document with _id 'invoiceNumber'
      { $inc: { sequence_value: 1 } }, // Increment the sequence_value by 1
      { new: true, upsert: true } // Return the updated document; create if not found
    );
    const invoiceNumber = `INV-${String(result.sequence_value).padStart(4, '0')}`
    return invoiceNumber
}

// Function to generate the next product code
exports.generateProductCode = async () => {
    // Increment and get the next sequence value
    const result = await Counter.findOneAndUpdate(
      { _id: 'productCode' }, // Select the document with _id 'productCode'
      { $inc: { sequence_value: 1 } }, // Increment the sequence_value by 1
      { new: true, upsert: true } // Return the updated document; create if not found
    );
  
    // Format the product code (e.g., PROD-0001)
    const productCode = `PROD-${String(result.sequence_value).padStart(4, '0')}`
    return productCode
  }
