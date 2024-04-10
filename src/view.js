export const renderItems = (data) => {
  console.log(data)
  // crear un elemento ul
  const ul = document.createElement("ul");
  //agregar un metodo que permite poner estilos al elemento ul
  ul.classList.add('container');
  //
  data.forEach(card => {
    const cardLi = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    
    cardLi.textContent = card.name;
    p.textContent = card.shortDescription;
    img.src = card.imagePath;
    h4.textContent = card.facts.releaseYear;
    ul.append(cardLi, img, h4, p);

    cardLi.classList.add('card');
    p.classList.add('p');
    img.classList.add('img');
    h4.classList.add('h4');
  })
  return ul;
};

