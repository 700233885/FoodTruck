const eventList = document.querySelector('.menu-list')
const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    const data = await response.json()
    return data
}


const showEventList = events => {
    events?.forEach(({ Name, Location, Date, Time }) => {
        const singleEvent = document.createElement('div')
        singleEvent.className = "menu-item"
        singleEvent.innerHTML = `
            <h2>${Name}</h2>
            <p><b>${Location}</b></>
            <p>$${Time}</p>
        `
        eventList.appendChild(singleEvent)
    })

}

;(async () => {
    const events = await getEvents()
    showEventList(events)
})()