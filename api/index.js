import express from "express";
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
const app = express();
const PORT = 8880;

app.use(express.json());





app.use("/api/post",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);

app.listen(PORT, () => {
    console.log("Connected!");
    console.log("listening on port " + PORT);
});
