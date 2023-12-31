const express = require("express");
const app = express();
const cors = require("cors")
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")

const MONGO_URL = 'mongodb+srv://qlynn:qlynn123@cluster0.knjl6lg.mongodb.net/blog?retryWrites=true&w=majority';

// dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
}).then(console.log("Connected")).catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("File has been uploaded");
})


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen("5000", () => {
    console.log("Backend is running");
});