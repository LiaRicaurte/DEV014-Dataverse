export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ul = document.createElement("ul");
  data.forEach(card => {
    const cardLi = document.createElement("li");
    const p = document.createElement("p")
    cardLi.textContent = card.name;
    p.textContent = card.shortDescription;  
    ul.append(cardLi, p);
  })
  return ul;
};

