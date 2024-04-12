export const renderItems = (data) => {
  console.log(data)
  // crear un elemento ul
  const ul = document.createElement("ul");
  //agregar un metodo que permite poner estilos al elemento ul
  ul.classList.add('flex-container');
  //
  data.forEach(card => {
    const cardLi = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    
    cardLi.textContent = card.name;
    img.src = card.imagePath;
    h4.textContent = card.facts.releaseYear;
    p.textContent = card.shortDescription;
    
    ul.append(cardLi);
    cardLi.append(img, h4, p)

    cardLi.classList.add('flex-item');
    p.classList.add('p');
    img.classList.add('img');
    h4.classList.add('h4');
  })
  return ul;
};

