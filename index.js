const express=require("express")

const app=express();

const {datarouter,datarouter1,datarouter2,datarouter3}=require("./Routes/data");
const cors=require("cors");
app.use(cors());

app.use("/api",datarouter);
app.use("/api",datarouter1);
app.use("/api",datarouter2);
app.use("/api",datarouter3);

app.listen(process.env.PORT || 8080,()=>{
    console.log("app is running");
})
 