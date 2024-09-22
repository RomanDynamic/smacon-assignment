$(document).ready(function () {
  const sushiData = [
    {
      name: "Uramaki (裏巻き寿司)",
      description:
        "Rolled sushi wrapped in seaweed (nori) and sliced into bite-sized pieces.",
    },
    {
      name: "Gunkan (軍艦巻き)",
      description:
        "A bowl of vinegared rice topped with various sashimi and ingredients.",
    },
    {
      name: "Temaki (手巻き寿司)",
      description:
        "Inside-out rolls with rice on the outside and seaweed inside.",
    },
    {
      name: "Narezushi (馴れ寿司)",
      description:
        "Hand-rolled sushi in a cone shape with seaweed, rice, and fillings.",
    },
    {
      name: "Inari Sushi (稲荷寿司)",
      description: "Thinly sliced raw fish or seafood, served without rice.",
    },
    {
      name: "Aburi Sushi (炙り寿司)",
      description:
        "A bowl of vinegared rice topped with various sashimi and ingredients.",
    },
    {
      name: "Oshi Sushi (押し寿司)",
      description:
        "Small, ball-shaped sushi often decorated with colorful toppings.",
    },
    {
      name: "Sashimi (刺身)",
      description:
        "Fermented sushi, an ancient method of preserving fish with rice.",
    },
    {
      name: "Nigiri (握り寿司)",
      description:
        "Small, ball-shaped sushi often decorated with colorful toppings.",
    },
    {
      name: "Maki (巻き寿司)",
      description: "Hand-pressed sushi with fish or seafood atop rice.",
    },
    {
      name: "Temari (手まり寿司)",
      description:
        "Inside-out rolls with rice on the outside and seaweed inside.",
    },
    {
      name: "Chirashi (ちらし寿司)",
      description: "Lightly seared sushi with the top layer of fish torched.",
    },
  ];

  sushiData.forEach(function (sushi) {
    const sushiCard = `
   
            <div class="sushi-card">
              <div class="image-wrapper">
                <div class="image"></div>
                </div>
                <div class="content-wrapper">
                  <h3>${sushi.name}</h3>
                  <p>${sushi.description}</p>
                  </div>
                  </div>

                  `;

    $("#sushi-grid").append(sushiCard);
  });
});
