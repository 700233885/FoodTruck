




const getFoodData = async () => {

    //gettting the url and splitting it into parts to be used
    const urlParts = location.pathname.split('/').splice(1)
    const url = `/api/v1/ ${urlParts[0] === 'event' ? `event/${urlParts[1]}`: urlParts[0] === 'admin' ? '/admin' : ''}` // returns food of the requested id  or returns the admin page

    const result = await fetch(url)
    const {id, name, description, price, imageUrl} = await result.json()

    // TODO: need to decided were this shiz will go aka there is no html atm lmao

    const test = document.querySelector('.temp')

    test.textContent = {id, name, description, price, imageUrl}
}

getFoodData()