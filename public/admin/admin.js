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
        Description:menuItemDescription.value,
        Price:menuItemPrice.value,
        Image_url:imageURL.value
    }
    await PostMenuItem(menuItem)
    menuItemName.value = ""
    menuItemDescription.value = ""
    menuItemPrice.value = ""
    imageURL.value = ""
})

eventButton.addEventListener('click', async () => {
    const event = {
        Name:eventName.value,
        Location:eventLocation.value,
        Date:eventDate.value,
        Time:eventTime.value
    }
    await PostEvent(event)
    eventName.value = ""
    eventLocation.value = ""
    eventDate.value = ""
    eventTime.value = ""
})

const PostMenuItem = async (menuItem) => {
    const response = await fetch('/api/v1/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
    })
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
    return response.json()
}


