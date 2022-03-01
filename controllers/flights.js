import methodOverride from "method-override"
import { Flight } from "../models/flight.js"

function index(req, res){
  console.log("*happy R2D2 index chirps")
  Flight.find({}, function (err, flights) {
    console.log(err)
    res.render("flights/index", {
      err,
      flights,
      title: 'All Flights'
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

export{
  index,
  newFlight as new,
}