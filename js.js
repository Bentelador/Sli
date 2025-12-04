async function ben(serch, BS){
  let result;
  await fetch('https://raw.githubusercontent.com/Bentelador/movie-bai/refs/heads/main/MDB.json')
    .then(response => response.json())
    .then(jsonData => {
      result = res.filter(n => n.title.toLowerCase().includes(serch));
    })
  return result;
}

async function sorta(sort,result) {
  let bb;
  if (sort == "year_old") {
        bb = result.sort((yearA,yearB) => {
          return yearA.year - yearB.year;
        })
    }
  if (sort == "year") {
        bb = result.sort((yearA,yearB) => {
          return yearB.year - yearA.year;
        })
    }
  if (sort == "rating") {
        bb = result.sort((A,B) => {
          return B.rating - A.rating;
        })
    }
  if (sort == "title") {
        const alphabeticOnlyRegex = /[^a-zA-Z0-9]/g; 
        bb = result.sort((A,B) => {
          const nameA = A.title.toLowerCase().replace(alphabeticOnlyRegex, "");
          const nameB = B.title.toLowerCase().replace(alphabeticOnlyRegex, "");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
    }
  if (sort == "relevance") {
        bb = result
    }
  return bb
}

async function search(serch, BS, sort){
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
      let resulta = res.filter(n => n.title.toLowerCase().includes(serch))
      result = sorta(sort,resulta)
    })
  return result;
}

export default ben
export { genre, search }







































