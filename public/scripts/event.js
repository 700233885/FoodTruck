const eventViewer = document.querySelector('.menu-list')

const getEvent = async () => {
    const [, events, id] = window.location.pathname.split('/')
    const url = events === 'events' ? `/api/v1/events/${id}` : ''
    const result = await fetch(url)
    return { Name, Location, Date, Time } = await result.json()
}

const showEventList = event => {
    const singleEvent = document.createElement('div')
    singleEvent.className = "menu-item"
    singleEvent.innerHTML = `
        <h2 class= "funny_font">${event.Name}</h2>
        <p><b>Location: ${event.Location}</b></>
        <p>Date: ${event.Date}</p>
        <p>Time: ${event.Time}</p>
    `
    eventViewer.appendChild(singleEvent)     
}

(async () => showEventList(await getEvent()))()

