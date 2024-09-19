export const renderItems = (data) => {
  const ul = document.createElement("ul");
  
  ul.classList.add('flex-container');
  
  data.forEach(movie => {
    const movieLi = document.createElement("li");
    
    movieLi.setAttribute('itemscope', '')
    movieLi.setAttribute('itemtype', movie.id)
    
    const semanticHTML= `
    <dl itemscope itemtype="ClassicMovies">
    <img src="${movie.imageUrl}" alt="${movie.name}" />
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

