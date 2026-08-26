const express = require('express');
const app = express();
app.use(express.json());
const {pool} = require('pg');
const authRouter = require("./features/auth/auth.route");
const blogRouter = require("./features/blog/blog.route");
const userRouter = require("./features/user/user.route");

/// connect to auth , users , blogs
app.use('/auth', authRouter);
app.use('/blog', blogRouter);
app.use('/user', userRouter);

/// handle invalid routes
app.use((req, res, next) => {
    res.json({message: "Invalid route" , status: 404 , success: false});
});














app.listen(3000, () => console.log('Server started on port 3000'));