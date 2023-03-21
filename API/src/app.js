const express=require("express"),
      http=require("http"),
      morgan=require("morgan"),
      mongoose=require("mongoose")

// Routers-------->>>>>
const sectionRouter=require("./routes/section.router");
const complaintRouter=require("./routes/complaint.router");
const profileRouter = require("./routes/profile.router");


const hostname="localhost", port=5000,url="mongodb://0.0.0.0:27017/general";
const app = express();

// MongoDB Connection ---------->>>>>

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}) // useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true
const con=mongoose.connection
con.on('open',()=>console.log("connected"))

// For parsing data
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Routing --------->>>>>
app.use(express.static(__dirname+'/public'))
// app.use("/sections",sectionRouter)
// app.use("/complaint",complaintRouter)
app.use("/profile",profileRouter)
app.use("/complain",complaintRouter)

// Server Started -------->>>>>>.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});