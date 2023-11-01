import { Router } from "express";
import CreateProducts from "./controllers/CreateProducts.js";
import GetProducts from "./controllers/ListProducts.js";
import UpdateProducts from "./controllers/UpdateProducts.js";
import DeleteProducts from "./controllers/DeleteProducts.js";

const routes = Router();

routes.get("/", new GetProducts().list);
routes.post("/product", new CreateProducts().create);
routes.put("/product/:id", new UpdateProducts().update);
routes.delete("/product/:id", new DeleteProducts().delete);

export default routes;
