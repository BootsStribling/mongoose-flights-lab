import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {
    type: String,
    enum: ["AUS", "DEN", "DFW", "LAX", "SAN"],
    default: "DEN"
  }, 
  flightNo: {
    type: Number,
    min: 10, max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      return new Date() * 31536000000
    }
  }}, {
      timestamps: true,
  }
)

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}