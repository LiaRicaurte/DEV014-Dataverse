export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ul = document.createElement("ul");
  data.forEach(card => {
    const cardLi = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const year = document.createElement("year");
    cardLi.textContent = card.name;
    p.textContent = card.shortDescription;
    img.textContent = card.imageUrl;
    year.textContent = card.releaseYear;
    ul.append(cardLi, p);
    ul.append(cardLi, img);
    ul.append(cardLi, year);
  })
  return ul;
};

