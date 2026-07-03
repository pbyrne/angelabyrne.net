class Product {
  attribution;
  description;
  images;
  name;
  price;
  slug;

  constructor(data) {
    Object.assign(this, data);
    this.slug = this.slug || this.name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
  }

  get image() {
    return this.images[0]
  }
  get url() {
    return `/products/${this.slug}/`
  }
}

export default [

  new Product({
    attribution: `Pattern by <a href="https://www.myamigurumifarm.com">myamigurumifarm.com</a>`,
    description: "Approx. X″ tall by X″ wide",
    images: [
      "images/coffee.jpeg",
    ],
    name: "Coffee Cup amigurumi",
    price: 15,
  }),

  new Product({
    description: "Approx. X″ tall by X″ wide",
    images: [
      "images/placeholder.png",
    ],
    name: "Ear warmer (adult)",
    price: 20,
  }),

  new Product({
    description: "Approx. X″ tall by X″ wide",
    images: [
      "images/placeholder.png",
    ],
    name: "Ear warmer (child)",
    price: 15,
  }),

  new Product({
    attribution: `Pattern by <a href="https://www.loopsandlovecrochet.com">www.loopsandlovecrochet.com</a>`,
    description: "Approx. X″ tall by X″ wide",
    images: [
      "images/heart.jpeg",
    ],
    name: "Heart stuffie",
    price: 10,
  }),

  new Product({
    attribution: `Original pattern inspired by <a href="https://www.etsy.com/shop/HandSpunBits">HandSpunBits on Etsy</a>`,
    description: "Approx. X″ tall by X″ wide",
    images: [
      "images/sleeve.jpeg",
    ],
    name: "Cup sleeve",
    price: 5,
  }),

  new Product({
    attribution: `Pattern by <a href="https://www.sweetsofties.com">sweetsofties.com</a>`,
    description: "Approx. X″ tall by X″ wide. Due to their tiny size, octo squishes may not include all colors of selected Pride yarn.",
    images: [
      "images/placeholder.png",
    ],
    name: "Octo squish",
    price: 5,
  }),

  new Product({
    attribution: `Pattern by <a href="https://www.youtube.com/@tallermanualperu">tallermanualperu on YouTube</a>`,
    description: "Approx. X″ tall by X″ wide",
    images: [
      "images/placeholder.png",
    ],
    name: "Rose",
    price: 15,
  }),

  new Product({
    description: "TK description for tote bag",
    images: [
      "images/tote-pride.jpeg",
      "images/tote-trans.jpeg",
    ],
    name: "Tote bag",
    price: 100,
  }),

]
