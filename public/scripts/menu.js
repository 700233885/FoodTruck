const menuList = document.querySelector('.menu-list')
const getMenu = async () => {
    const response = await fetch('/api/v1/menu')
    const data = await response.json()
    return data
}


const showMenuList = dishes => {
    dishes?.forEach(({ Name, Description, Price, Image_url }) => {
        console.log(Name)
        const menuItem = document.createElement('div')
        menuItem.className = "menu-item"
        menuItem.innerHTML = `
            <img src="${Image_url}" alt="${Name}"/>
            <h2>${Name}</h2>
            <p>${Description} | Price: ${Price}</p>
        `
        menuList.appendChild(menuItem)
    })

}

;(async () => {
    const dishes = await getMenu()
    showMenuList(dishes)
})()