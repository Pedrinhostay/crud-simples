import db from "../database/db.js";

class CreateProducts {
  async create(request, response) {
    const q = "INSERT INTO product(`name`,`description`,`price`) VALUES(?)";

    const values = [
      request.body.name,
      request.body.description,
      request.body.price,
    ];

    db.query(q, [values], (err) => {
      if (err) return response.json(err);

      return response.status(200).json("Produto cadastrado com sucesso...");
    });
  }
}
export default CreateProducts;
