const menuItemName = document.querySelector('#MenuItemName')
const menuItemDescription = document.querySelector('#MenuItemDescription')
const menuItemPrice = document.querySelector('#MenuItemPrice')
const imageURL = document.querySelector('#ImageURL')

const menuButton = document.querySelector('#MenuButton')

const eventName = document.querySelector('#EventName')
const eventLocation = document.querySelector('#EventLocation')
const eventDate = document.querySelector('#EventDate')
const eventTime = document.querySelector('#EventTime')

const eventButton = document.querySelector('#EventButton')

menuButton.addEventListener('click', async () => {
    const menuItem = {
        Name:menuItemName.value,
        Location:menuItemDescription.value,
        Date:menuItemPrice.value,
        Time:imageURL.value
    }
    await PostMenuItem(menuItem)
})

eventButton.addEventListener('click', async () => {
    const event = {
        Name:eventName.value,
        Description:eventLocation.value,
        Price:eventDate.value,
        Image_url:eventTime.value
    }
    console.log(eventName)
    console.log(event)
    await PostEvent(event)
})

const PostMenuItem = async (menuItem) => {
    const response = await fetch('/api/v1/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
    })
    console.log(JSON.stringify(menuItem))
    return response.json()
}

const PostEvent = async (event) => {
    const response = await fetch('/api/v1/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
    })
    console.log(JSON.stringify(event))
    return response.json()
}


