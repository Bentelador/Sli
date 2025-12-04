import ben, { searchfunc } from "./js.js"
const urlParams = new URLSearchParams(window.location.search)
const ser = urlParams.get('search')
const genrearr = urlParams.getAll('genre') || []
const Tab = document.getElementById("table")
const button = document.getElementById("bun")
const sort = document.getElementById("sortSelect")
const next = document.getElementById("next")
const BS = document.getElementById("Buttons")
const search = document.getElementById("search")
search.value = ser

async function startsite() {
    const benner = await ben(ser, genrearr, sort.value)
    while (Tab.rows.length > 1) {
        Tab.deleteRow(1);
    }
    benner.slice(0,10).forEach(moventry => {
      const Row = Tab.insertRow()
      const ID = Row.insertCell(0)
      const Titlet = Row.insertCell(1)
      const Rating = Row.insertCell(2)
      const Genre = Row.insertCell(3)
      const Synopsis = Row.insertCell(4)
      const Year = Row.insertCell(5)
      ID.textContent = moventry.id
      Titlet.textContent = moventry.title
      Rating.textContent = moventry.rating
      Genre.textContent = moventry.genre
      Synopsis.textContent = moventry.synopsis
      Year.textContent = moventry.year
    });
}

button.addEventListener("click", async () => {
    window.location.href='main.html?search='+search.value
    
})

BS.addEventListener("input", async () => {
    const benner = await searchfunc(search.value, BS, sort.value)
    while (Tab.rows.length > 1) {
        Tab.deleteRow(1);
    }
    benner.slice(0,10).forEach(moventry => {
        const Row = Tab.insertRow()
        const ID = Row.insertCell(0)
        const Titlet = Row.insertCell(1)
        const Rating = Row.insertCell(2)
        const Genre = Row.insertCell(3)
        const Synopsis = Row.insertCell(4)
        const Year = Row.insertCell(5)
        ID.textContent = moventry.id
        Titlet.textContent = moventry.title
        Rating.textContent = moventry.rating
        Genre.textContent = moventry.genre
        Synopsis.textContent = moventry.synopsis
        Year.textContent = moventry.year
    });
})

next.addEventListener("click", async () => {
    const tabnum = Tab.rows.length
    const benner = await searchfunc(search.value, BS, sort.value)
    benner.slice(tabnum,tabnum+10).forEach(moventry => {
        const Row = Tab.insertRow()
        const ID = Row.insertCell(0)
        const Titlet = Row.insertCell(1)
        const Rating = Row.insertCell(2)
        const Genre = Row.insertCell(3)
        const Synopsis = Row.insertCell(4)
        const Year = Row.insertCell(5)
        ID.textContent = moventry.id
        Titlet.textContent = moventry.title
        Rating.textContent = moventry.rating
        Genre.textContent = moventry.genre
        Synopsis.textContent = moventry.synopsis
        Year.textContent = moventry.year
    });
})

startsite()


















































