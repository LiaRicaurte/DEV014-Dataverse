export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ul = document.createElement("ul");
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
  })
  return ul;
};

