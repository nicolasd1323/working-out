import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    URL: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)