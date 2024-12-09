const router = require('express').Router()

const { getCollection, ObjectId } = require('../../../db-connection')
const getFoodTruckCollection = getCollection('FoodTruckApi')
const getMenu = getFoodTruckCollection('menu')
const getEvents = getFoodTruckCollection('events')

router.get('/menu', async (request, response) => { 
    const collection = await getMenu()
    const found = await collection.find().toArray()
    response.send(found)
})

router.get('/events', async (request, response) => {
    const collection = await getEvents()
    const found = await collection.find().toArray()
    response.send (found)
})

router.get('/menu/:id', async (request, response) => {
    const { id } = request.params

    const collection = await getMenu()
    const found = await collection.findOne({ _id: new ObjectId(id) })
    
    if(!found) response.send({error: `cannot find Menu Item with id: ${id}`})
    else response.send(found)
})

router.get('/events/:id', async (request, response) => {
    const { id } = request.params

    const collection = await getEvents()
    const found = await collection.findOne({ _id: new ObjectId(id) })
    
    if(!found) response.send({error: `cannot find an Event with id: ${id}`})
    else response.send(found)
})

router.post('/menu', async (request, response) => {
    const {Name, Description, pPrice, Image_url} = request.body
    const collection = await getMenu()
    const result = await collection.insertOne({Name, Description, Price, Image_url})
    response.send(result)

})

router.post('/events', async (request, response) => {
    const {Name, Location, Date, Time} = request.body
    console.log( request.body)
    const collection = await getEvents()
    const result = await collection.insertOne({Name, Location, Date, Time})
    response.send(result)
})

module.exports = router