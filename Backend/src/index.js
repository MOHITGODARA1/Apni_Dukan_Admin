import dotenv from "dotenv"
dotenv.config();
import { app } from "./app.js";
import DB from "./db/connect.db.js";
import cors from "cors";


const PORT = process.env.PORT||5000;
app.use(cors({
  origin: ["https://apni-dukan-admin-omega.vercel.app","https://apnidukan-admin.onrender.com",`http://localhost:${PORT}`],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
DB().then(()=>{
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
).catch(
    (error)=>{
        console.error("Failed to connect to DB:", error);
    }
)

