class Product {
  attribution;
  description;
  image;
  name;
  price;
  slug;

  constructor(data) {
    Object.assign(this, data);
    this.slug = this.slug || this.name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
  }
}

export default [

  new Product({
    attribution: `Pattern by <a href="https://www.myamigurumifarm.com">myamigurumifarm.com</a>`,
    description: "Approx. X″ tall by X″ wide",
    image: "https://placehold.co/600x400",
    name: "Coffee Cup amigurumi",
    price: 15,
  }),

  new Product({
    description: "Approx. X″ tall by X″ wide",
    image: "https://placehold.co/600x400",
    name: "Ear warmers (adult)",
    price: 20,
  }),

  new Product({
    description: "Approx. X″ tall by X″ wide",
    image: "https://placehold.co/600x400",
    name: "Ear warmers (child)",
    price: 15,
  }),

  new Product({
    attribution: `Pattern by <a href="https://www.loopsandlovecrochet.com">www.loopsandlovecrochet.com</a>`,
    description: "Approx. X″ tall by X″ wide",
    image: "https://placehold.co/600x400",
    name: "Heart stuffies",
    price: 10,
  }),

  new Product({
    attribution: `Original pattern inspired by <a href="https://www.etsy.com/shop/HandSpunBits">HandSpunBits on Etsy</a>`,
    description: "Approx. X″ tall by X″ wide",
    image: "https://placehold.co/600x400",
    name: "Cup sleeves",
    price: 5,
  }),

  new Product({
    attribution: `Pattern by <a href="https://www.sweetsofties.com">sweetsofties.com</a>`,
    description: "Approx. X″ tall by X″ wide. Due to their tiny size, octo squishes may not include all colors of selected Pride yarn.",
    image: "https://placehold.co/600x400",
    name: "Octo squishes",
    price: 5,
  }),

  new Product({
    attribution: `Pattern by <a href="https://www.youtube.com/@tallermanualperu">tallermanualperu on YouTube</a>`,
    description: "Approx. X″ tall by X″ wide",
    image: "https://placehold.co/600x400",
    name: "Roses",
    price: 15,
  }),

]
