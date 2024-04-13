export const renderItems = (data) => {
  console.log(data)
  // crear un elemento ul
  const ul = document.createElement("ul");
  //agregar un metodo que permite poner estilos al elemento ul
  ul.classList.add('flex-container');
  //
  data.forEach(card => {
    const cardLi = document.createElement("li");
    const cardImg = document.createElement ("img")
    const cardDiv = document.createElement ("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p");
    const h4 = document.createElement("h4");
    
    cardImg.src = card.imagePath;
    h3.textContent = card.name
    h4.textContent = card.facts.releaseYear;
    p.textContent = card.shortDescription;
    
    ul.append(cardLi);
    cardLi.append(cardImg, cardDiv);
    cardDiv.append(h3, h4, p)

    cardLi.classList.add('flex-item');
    cardImg.classList.add('img');
    cardDiv.classList.add('div')
    p.classList.add('p');
    h4.classList.add('h4');
  })
  return ul;
};

