const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', 'public')

router.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

router.get('/events/:eventId', (request, response) => {
    response.sendFile('event.html', { root })
})

router.get('/admin', (request, response) => {
    response.sendFile('admin.html', { root })
})

module.exports = router