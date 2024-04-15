export const renderItems = (data) => {
  console.log(data)
  // crear un elemento ul
  const ul = document.createElement("ul");
  //agregar un metodo que permite poner estilos al elemento ul
  ul.classList.add('flex-container');
  //
  data.forEach(movie => {
    const movieLi = document.createElement("li");
    //const semanticHTML= `
    //<dl itemscope itemtype="WomenInTech">
    //<img src="URL_DE_LA_IMAGEN_GENERADA" alt="Ada Lovelace" />
    //<dt>Nombre:</dt><dd itemprop="name">${movie.name}</dd>
    //<dt>Descripción:</dt><dd itemprop="description">Pionera de la informática, fue la primera programadora.</dd>
    //<dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">1843</dd>
    //<dt>Lugar de nacimiento:</dt><dd itemprop="placeOfBirth">London, England</dd>
    //<dt>Campo de desempeño:</dt><dd itemprop="mainField">Computer Science</dd>
    //</dl>  
    // `
    const movieImg = document.createElement ("img")
    const movieDiv = document.createElement ("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p");
    const h4 = document.createElement("h4");
    
    movieImg.src = movie.imagePath;
    h3.textContent = movie.name
    p.textContent = movie.shortDescription;
    h4.textContent = movie.facts.releaseYear;

    //movieLi.innerHTML=semanticHTML;

    ul.append(movieLi);
    movieLi.append(movieImg, movieDiv);
    movieDiv.append(h3, p, h4)

    movieLi.classList.add('flex-item');
    movieImg.classList.add('img');
    movieDiv.classList.add('div')
    h3.classList.add('h3');
    p.classList.add('p');
    h4.classList.add('h4');

  })
  return ul;
};

