async function ben(serch, BS){
  let result;
  await fetch('https://raw.githubusercontent.com/Bentelador/movie-bai/refs/heads/main/MDB.json')
    .then(response => response.json())
    .then(jsonData => {
      const cont = BS.children
      const arr = []
      for (let i = 0; i < cont.length; i++) {
        if (cont[i].checked == true) {
        arr.push(cont[i].name)
        }
      }
      const res = jsonData.filter(n => arr.every(genreArray => n.genre.includes(genreArray)))
      result = res.filter(n => n.title.toLowerCase().includes(serch));
    })
  return result;
}

async function genre(BS){
  const cont = BS.children
  const arr = []
    for (let i = 0; i < cont.length; i++) {
      if (cont[i].checked == true) {
        arr.push(cont[i].name)
      }
    }
  return arr
}

export default ben
export { genre }















