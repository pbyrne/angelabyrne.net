class Product {
  description;
  image;
  name;
  slug;

  constructor(data) {
    Object.assign(this, data);
    this.slug = this.slug || this.name.toLowerCase().replaceAll(" ", "-")
  }
}

export default [

  new Product({
    name: "Cup sleeve",
    image: "https://placehold.co/600x400",
    description: "Foo bar",
  }),

  new Product({
    name: "Coffee cup",
    image: "https://placehold.co/600x400",
    description: "Foo bar",
  }),

  new Product({
    name: "Heart",
    image: "https://placehold.co/600x400",
    description: "",
  }),

]
