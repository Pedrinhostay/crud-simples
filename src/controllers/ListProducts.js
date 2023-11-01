import db from "../database/db.js";

class GetProducts {
  async list(_, response) {
    const q = "SELECT * FROM product";

    db.query(q, (err, result) => {
      if (err) return response.json(err);

      return response.status(200).json(result);
    });
  }
}

export default GetProducts;
