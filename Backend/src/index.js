import dotenv from "dotenv"
dotenv.config();
import { app } from "./app.js";
import DB from "./db/connect.db.js";
import cors from "cors"

const corsOptions = {
  origin: 'https://apni-dukan-admin-backend.onrender.com',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '..', 'dist')));
DB().then(()=>{
    const PORT = process.env.PORT||5000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
).catch(
    (error)=>{
        console.error("Failed to connect to DB:", error);
    }
)

