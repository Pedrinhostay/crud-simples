import db from "../database/db.js";

class DeleteProducts {
  async delete(request, response) {
    const q = "DELETE FROM product WHERE `id` = ?";

    db.query(q, [request.params.id], (err) => {
      if (err) return response.json(err);

      return response.status(200).json("Produto deletado com sucesso...");
    });
  }
}

export default DeleteProducts;
