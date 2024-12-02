const eventList = document.querySelector('.menu-list')
const modal = document.getElementById("recipeModal")
const closeButton = document.querySelector(".close-button")

const modalElements = {
	name: document.getElementById('modalName'),
	Location: document.getElementById('modalLocation'),
	date: document.getElementById('modalDate'),
	time: document.getElementById('modalTime')
}

const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    const data = await response.json()
    return data
}

const getEvent = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
	return await response.json()
}


const showEventList = events => {
    events?.forEach(({_id, Name, Location, Date, Time }) => {
        const singleEvent = document.createElement('div')
        singleEvent.className = "menu-item"
        singleEvent.innerHTML = `
            <h2>${Name}</h2>
            <p><b>Location: ${Location}</b></>
            <p>Time: ${Time}</p>
        `
        singleEvent.onclick = () => showEventDetails(_id)
        eventList.appendChild(singleEvent)
    })

}

const showEventDetails = async Id => {

	const {Name, Location, Date, Time} = await getEvent(Id)

    console.log(Name, Location, Date, Time)

	modalElements.name.textContent = Name
	modalElements.Location.textContent = Location
	modalElements.date.textContent = Date
	modalElements.time.textContent = Time

	modal.style.display = 'flex'
}

closeButton.onclick = () => modal.style.display = 'none'

window.onclick = event => {
	if (event.target === modal) modal.style.display = 'none'
}

;(async () => {
    const events = await getEvents()
    showEventList(events)
})()