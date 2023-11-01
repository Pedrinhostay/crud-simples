import db from "../database/db.js";

class UpdateProducts {
  async update(request, response) {
    const q =
      "UPDATE product SET `name` = ?, `description` = ?, `price` = ? WHERE `id` = ?";

    const values = [
      request.body.name,
      request.body.description,
      request.body.price,
    ];

    db.query(q, [...values, request.params.id], (err) => {
      if (err) return response.json(err);

      return response.status(200).json("Produto atualizado com sucesso...");
    });
  }
}

export default UpdateProducts;
