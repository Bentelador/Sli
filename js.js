async function ben(serch, BS){
  let result;
  await fetch('https://raw.githubusercontent.com/Bentelador/movie-bai/refs/heads/main/MDB.json')
    .then(response => response.json())
    .then(jsonData => {
      const res = jsonData.filter(n => BS.every(genreArray => n.genre.includes(genreArray)))
      result = res.filter(n => n.title.toLowerCase().includes(serch));
    })
  return result;
}

async function genre(BS, str){
  const cont = BS.children
  const arr = []
  let newstr = str
    for (let i = 0; i < cont.length; i++) {
      if (cont[i].checked == true) {
        newstr += "&genre="+cont[i].name
      }
    }
  return newstr;
}

async function sorta(sort,result) {
  let bb;
  if (sort == "year") {
        bb = result.sort((yearA,yearB) => {
          return yearA.id - yearB.id;
        })
    }
  if (sort == "year_old") {
        bb = result.sort((yearA,yearB) => {
          return yearB.id - yearA.id;
        })
    }
  console.log(bb)
  return bb
}

async function genresearch(serch, BS, sort){
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
      result = res.filter(n => n.title.toLowerCase().includes(serch))
      result = sorta(sort,result)
      console.log(result)
    })
  return result;
}

export default ben
export { genre, genresearch }































