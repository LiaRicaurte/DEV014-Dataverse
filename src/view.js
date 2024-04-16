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
    <dl itemscope itemtype="ClásicosdelCine">
    <img src="${movie.imagePath}" alt="${movie.name}" />
    <dt>Nombre:</dt><dd itemprop="name">${movie.name}</dd>
    <dt>Género:</dt><dd itemprop="shortDescription">${movie.shortDescription}</dd>
    <dt>Descripción:</dt><dd itemprop="description">${movie.description}</dd>
    <dt>Fecha de Estreno:</dt><dd itemprop="releaseYear">${movie.facts.releaseYear}</dd>
    <dt>Tiempo de duración:</dt><dd itemprop="durationTime">${movie.facts.durationTime}</dd>
    <dt>Clasificación:</dt><dd itemprop="classification">${movie.facts.classification}</dd>
    </dl>  
     `

    movieLi.innerHTML=semanticHTML;

    movieLi.classList.add('flex-item');

    ul.append(movieLi);
    
  })
  return ul;
};

