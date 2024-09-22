const dessertData = [
  {
    name: "Anmitsu (あんみつ)",
    price: "$14.90",
    description: "Layered pastry with matcha-flavored cream.",
  },
  {
    name: "Fruit Platter",
    price: "$27.40",
    description: "Firm jelly made from red bean paste, agar, and sug...",
  },
  {
    name: "Sesame Balls (ごま団子)",
    price: "$39.60",
    description: "Rich and creamy ice cream flavored with green tea po...",
  },
  {
    name: "Taiyaki (鯛焼き)",
    price: "$13.25",
    description: "Fish-shaped pastries filled with sweet fillings such as r...",
  },
  {
    name: "Dorayaki (どら焼き)",
    price: "$10.60",
    description: "Fresh seasonal fruits like melon, strawberries, or pe...",
  },
  {
    name: "Yokan (羊羹)",
    price: "$18.60",
    description: "Fried or baked rice balls coated in sesame seeds an...",
  },
  {
    name: "Matcha Ice Cream (抹茶アイスクリーム)",
    price: "$36.15",
    description: "Creamy cheesecake flavored with green tea, bl...",
  },
  {
    name: "Mille-Feuille Matcha Cake",
    price: "$32.20",
    description: "Traditional Japanese dessert with agar jelly, frui...",
  },
];

function generateMenuItems(data) {
  data.forEach((item) => {
    const menuItemHTML = `
              <div class="beverage-item">
                  <div class="beverage-item-left">
                      <div class="beverage-item-title">${item.name}</div>
                      <div class="beverage-item-description">${item.description}</div>
                  </div>
                  <div class="beverage-item-right">${item.price}</div>
              </div>

          `;
    $("#dessert-items").append(menuItemHTML);
  });
}

generateMenuItems(dessertData);
