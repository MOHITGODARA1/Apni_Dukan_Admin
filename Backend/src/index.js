import dotenv from "dotenv"
dotenv.config();
import { app } from "./app.js";
import DB from "./db/connect.db.js";
import cors from "cors";


app.use(express.json());

app.use(cors({
  origin: ["https://apnidukanadmin.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
DB().then(()=>{
    const PORT = process.env.PORT||5000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
).catch(
    (error)=>{
        console.error("Failed to connect to DB:", error);
    }
)

