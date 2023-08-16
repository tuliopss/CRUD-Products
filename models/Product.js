const { ObjectId } = require("mongodb");
const conn = require("../db/conn");

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = conn.db().collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection("products").find().toArray();
    return products;
  }

  static async getProductById(id) {
    const product = await conn
      .db()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
    return product;
  }

  static async removeProductById(id) {
    await conn
      .db()
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
    return;
  }

  async updateProduct(id) {
    //Usa-se a função em um objeto já instanciado, por isso nao precisa do static
    await conn
      .db()
      .collection("products")
      .updateOne({ _id: new ObjectId(id) }, { $set: this });

    return;
  }
}

module.exports = Product;
