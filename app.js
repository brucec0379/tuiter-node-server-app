import express from 'express'
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/tuiter);
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT ||4000)

const CONNECTION_STRING = 'mongodb+srv://Chenghai0379:<LoveLzj1314.>@cluster0.y0wpi29.mongodb.net/?retryWrites=true&w=majority
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);