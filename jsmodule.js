import ben, { genre , genresearch } from "./js.js"
const urlParams = new URLSearchParams(window.location.search)
const ser = urlParams.get('search')
const genrearr = urlParams.getAll('genre') || []
const Tab = document.getElementById("table")
const button = document.getElementById("bun")
const BS = document.getElementById("Buttons")
const search = document.getElementById("search")
search.value = ser

async function startsite() {
    const benner = await ben(ser, genrearr)
    while (Tab.rows.length > 1) {
        Tab.deleteRow(1);
    }
    benner.forEach(moventry => {
      const Row = Tab.insertRow()
      const ID = Row.insertCell(0)
      const Titlet = Row.insertCell(1)
      const Rating = Row.insertCell(2)
      const Genre = Row.insertCell(3)
      const Synopsis = Row.insertCell(4)
      ID.textContent = moventry.id
      Titlet.textContent = moventry.title
      Rating.textContent = moventry.rating
      Genre.textContent = moventry.genre
      Synopsis.textContent = moventry.synopsis
    });
}

button.addEventListener("click", async () => {
    const str = 'main.html?search='+search.value
    const linkstr = await genre(BS, str)
    
    window.location.href=linkstr
    
})

BS.addEventListener("input", async () => {
    if (search.value.length < 3) {
        startsite()
        return false;
    }
    const benner = await genresearch(search.value, BS)
    while (Tab.rows.length > 1) {
        Tab.deleteRow(1);
    }
    benner.forEach(moventry => {
        const Row = Tab.insertRow()
        const ID = Row.insertCell(0)
        const Titlet = Row.insertCell(1)
        const Rating = Row.insertCell(2)
        const Genre = Row.insertCell(3)
        const Synopsis = Row.insertCell(4)
        ID.textContent = moventry.id
        Titlet.textContent = moventry.title
        Rating.textContent = moventry.rating
        Genre.textContent = moventry.genre
        Synopsis.textContent = moventry.synopsis
    });
})

startsite()




































