export const renderItems = (data) => {
  console.log(data)
  // crear un elemento ul
  const ul = document.createElement("ul");
  //agregar un metodo que permite poner estilos al elemento ul
  ul.classList.add('flex-container');
  //
  data.forEach(movie => {
    const movieLi = document.createElement("li");
    const semanticHTML= `
    <dl itemscope itemtype="ClassicMovies">
    <img src="${movie.imagePath}" alt="${movie.name}" />
    <dd itemprop="name">${movie.name}</dd>
    <dd itemprop="shortDescription">${movie.shortDescription}</dd>
    <dd itemprop="releaseYear">${movie.facts.releaseYear}</dd>
    </dl>  
     `

    movieLi.innerHTML=semanticHTML;

    movieLi.classList.add('flex-item');

    ul.append(movieLi);
    
  })
  return ul;
};

