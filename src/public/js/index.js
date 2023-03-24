const socket = io()
const productsContainer = document.getElementById("products")

socket.on("listProducts", (productos) => {
    const { products } = productos;
    productsContainer.innerHTML = "";
    products.forEach((prod) => {
      const card = createProductCard(prod);
      productsContainer.appendChild(card);
    });
  });
  
  const createProductCard = (prod) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${prod.thumbnail}" alt="${prod.title}" />
      <h2>${prod.title}</h2>
      <p>${prod.description}</p>
      <p class="price">$${prod.price}</p>
      <p>Code: ${prod.code}</p>
      <p>Stock: ${prod.stock}</p>
      <p>Status: ${prod.status}</p>
      <p>Category: ${prod.category}</p>
    `;
    return div;
  };