import ben from "./js.js"

const Tab = document.getElementById("table")
const button = document.getElementById("bun")
const BS = document.getElementById("Buttons")
const search = document.getElementById("search")
button.addEventListener("click", async () => {
    const benner = await ben(search.value, BS)
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












