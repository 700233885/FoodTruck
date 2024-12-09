const menuItemName = document.querySelector('#MenuItemName')
const MenuItemDescription = document.querySelector9('#MenuItemDescription')
const menuItemPrice = document.querySelector('#MenuItemPrice')
const imageURL = document.querySelector('#ImageURL')

const eventName = document.querySelector('#EventName')
const eventLocation = document.querySelector9('#EventLocation')
const eventDate = document.querySelector('#EventDate')
const eventTime = document.querySelector('#EventTime')

const menuButton = document.querySelector('#MenuButton')
const eventButton = document.querySelector('#EventButton')

menuButton.Onclicked('clicked', () => {
    
})

const PostMenuItem = async () => {
    const response = await  fetch('/api/v1/manu', {
        method: 'POST',
        headers: {
            'Contenet-Type': 'application/json',
        },
        bodt: JSON.stringify()
    })
}

const PostEvent = async () => {
    const response = await fetch('/api/v1/events')
    const data = await response.json()
    return data
}


