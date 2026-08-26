const express = require('express');
const config = require('dotenv').config();
const app = express();
app.use(express.json());
const pool = require('./common/db/db');

const authRouter = require("./features/auth/auth.route");
const blogRouter = require("./features/blog/blog.route");
const userRouter = require("./features/user/user.route");

/// connect to auth , users , blogs
app.use('/auth', authRouter);
app.use('/blog', blogRouter);
app.use('/user', userRouter);

app.get('/health', async (req, res) =>{
    const {rows} = await pool.query('SELECT 1+1 as result')
    res.send(rows[0]);
});
/// handle invalid routes
app.use((req, res, next) => {
    res.status(404).json({message: "Invalid route" , success: false});
});
/// handle global errors
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({message: err.message , success: false});
    }
)


app.listen(3000, () => console.log('Server started on port 3000'));