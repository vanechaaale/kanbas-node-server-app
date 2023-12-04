import "dotenv/config";
import express from 'express'
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
app.listen(process.env.PORT || 4000);