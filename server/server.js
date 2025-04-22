import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();  
const port = 8081;

 app.use(cors());
 app.use(express.json());

 const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12774725',
    password: 'jP8MkZ4mj5',
    database: 'sql12774725',
    port: 3306
  });
  
  db.connect((err) => {
    if (err) {
      console.error('❌ Error connecting to database:', err);
    } else {
      console.log('✅ Connected to online MySQL database!');
    }
  });

app.listen((port,()=>{ 
console.log("the app is running on port 8081")
})
);