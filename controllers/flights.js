import { Flight } from "../models/flight.js"
import methodOverride from "method-override"

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

function newFlight(req,res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res){
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(err){
    if(err) return res.redirect('/flights/new')
    res.redirect(`/flights`)
  })
}


export{
  index,
  newFlight as new,
  create,
}