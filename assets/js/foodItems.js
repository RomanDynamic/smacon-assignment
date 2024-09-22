const foodData = [
  {
    name: "Aburi Sushi (炙り寿司)",
    price: "$34.90",
    description: "A bowl of vinegared rice topped with various sashi...",
  },
  {
    name: "Nigiri (握り寿司)",
    price: "$22.70",
    description: "Pressed sushi in a mold with fish and rice, cut into pieces.",
  },
  {
    name: "Chirashi (ちらし寿司)",
    price: "$24.75",
    description: "Lightly seared sushi with the top layer of fish torched.",
  },
  {
    name: "Maki (巻き寿司)",
    price: "$12.85",
    description: "Hand-rolled sushi in a cone shape with seaweed, rice,...",
  },
  {
    name: "Narezushi (馴れ寿司)",
    price: "$19.75",
    description: "Thinly sliced raw fish or seafood, served without rice.",
  },
  {
    name: "Oshi Sushi (押し寿司)",
    price: "$15.40",
    description: "Sushi wrapped with seaweed, often filled with r...",
  },
  {
    name: "Temaki (手巻き寿司)",
    price: "$11.55",
    description: "Inside-out rolls with rice on the outside and seaweed in...",
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
    $("#food-items").append(menuItemHTML);
  });
}

// Call the function to generate the menu
// $(document).ready(function () {
generateMenuItems(foodData);
// });
