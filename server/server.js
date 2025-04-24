import cors from "cors";
import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();


const app = express();  
const port = 8081;

 app.use(cors());
 app.use(express.json());

 const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
  });
  
  db.connect((err) => {
    if (err) {
      console.error('❌ Error connecting to database:', err);
    } else {
      console.log('✅ Connected to online MySQL database!');
    }
  });

app.get('/', (req, res) =>{
const sql = "SELECT * FROM student";
db.query(sql , (err , result)=>{
  if(err) return res.json({message: "error inside server"});
  return res.json(result);
})
});

app.listen((port,()=>{ 
console.log("the app is running on port 8081")
})
);