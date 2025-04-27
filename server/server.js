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
    if(err) { res.json({message: "error inside server"});
    console.log("error :", err);
  }
    else{
     res.json(result);
  };
  })
  });
  
  app.post('/create', (req, res)=>{
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?,?)";
    console.log(req.body);
    const values = [
      req.body.name,
      req.body.email  ];
      db.query(sql ,values, (err, result)=>{
        if(err) { res.json(err);
        console.log("error :", err);
      }
        else{
         res.json(result);
      };
      })
  });
  
  
  app.get('/read/:id', (req, res) =>{
    const sql = "SELECT * FROM student WHERE ID=?";
    const id = req.params.id;
    db.query(sql ,[id] , (err , result)=>{
      if(err) { res.json({message: "error inside server"});
      console.log("error :", err);
    }
      else{
       res.json(result[0]);
    };
    })
    });

    app.put('/edit/:id', (req, res) => {
      const sql = "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";
      const id = req.params.id;
      const values = [
        req.body.name,
        req.body.email
      ];
      db.query(sql, [...values, id], (err, result) => {
        if(err) { 
          res.json({message: "error inside server"});
          console.log("error :", err);
        } else {
          res.json(result);
        }
      });
    });

    app.delete('/delete/:id', (req,res)=>{
      const sql = "DELETE FROM student WHERE ID=?";
      const id = req.params.id;
      db.query(sql ,[id] , (err , result)=>{
        if(err) { res.json({message: "error inside server"});
        console.log("error :", err);
      }
        else{
         res.json(result);
      };
      })
    })
  
  app.listen(port,()=>{ 
  console.log("the app is running on port 8081")
  }
  );