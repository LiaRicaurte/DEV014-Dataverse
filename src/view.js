export const renderItems = (data) => {
console.log(data)
// Aquí comienza tu código y puedes retornar lo que tu necesites
  const dataSet = document.createElement("ul");
  data.foreach(card => {
    const cardLi = document.createElement("li");
    dataSet.appendChild(cardLi);
  })
  return 'example';
};

