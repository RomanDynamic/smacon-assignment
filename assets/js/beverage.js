const beverageData = [
  {
    name: "Plum Wine (梅酒)",
    price: "$19.75",
    description: "Smooth and refined, often enjoyed neat or on the rocks.",
  },
  {
    name: "Beer (ビール)",
    price: "$30.80",
    description:
      "Non-alcoholic option with a spicy kick that complements meals.",
  },
  {
    name: "Sparkling Wine",
    price: "$26.05",
    description: "Sweet, fruity wine made from plums, served chilled.",
  },
  {
    name: "White Wine",
    price: "$26.05",
    description: "Champagne or Prosecco, providing a refreshing contrast.",
  },
  {
    name: "Japanese Whiskey",
    price: "$34.90",
    description: "Japanese rice wine, with varieties like Junmai, Ginjo.",
  },
  {
    name: "Matcha (抹茶)",
    price: "$16.50",
    description: "Distilled Japanese spirit, often served on the rocks.",
  },
  {
    name: "Green Tea (緑茶)",
    price: "$38.50",
    description: "Traditional Japanese beverage, often served with meals.",
  },
  {
    name: "Ginger Ale",
    price: "$18.60",
    description: "Light, crisp beers like Japanese lagers (e.g., Asahi).",
  },
  {
    name: "Shochu (焼酎)",
    price: "$21.30",
    description:
      "Finely ground green tea powder, served as a concentrated drink.",
  },
];

// Function to generate menu items
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
    $("#beverage-items").append(menuItemHTML);
  });
}

// Call the function to generate the menu

generateMenuItems(beverageData);
