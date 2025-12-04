import ben from "./js.js"
const urlParams = new URLSearchParams(window.location.search)
const ser = urlParams.get('search')
const Tab = document.getElementById("table")
const button = document.getElementById("bun")
const BS = document.getElementById("Buttons")
const search = document.getElementById("search")

async function startsite() {
    const benner = await ben(ser, BS)
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
    window.location.href='html.html?search='+search.value
})














