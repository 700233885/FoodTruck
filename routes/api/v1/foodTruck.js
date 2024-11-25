const router = require('express').Router()

const { getCollection, ObjectId } = require('../../../db-connection')
const getFoodTruckCollection = getCollection('FoodTruckApi')
const getFoodTruck = getFoodTruckCollection('FoodTruck')

router.get('/api/v1/menu', async (request, response) => {
    
})

router.get('/api/v1/events', async (request, response) => {
    
})

router.get('api/v1/menu/:id', async (request, response) => {
    
})

router.get('/api/v1/events/:id', async (request, response) => {
    
})

router.get('POST /api/v1/menu', async (request, response) => {
    
})

router.get('/api/v1/events', async (request, response) => {
    
})

module.exports = router