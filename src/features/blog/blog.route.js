const { Router } = require('express');
const { blogController } = require("./blog.controller");
const authenticate = require("../../common/middlewares/authenticate");
const blogRouter = Router();

blogRouter.post('/create', authenticate, blogController); // 👈 middleware runs first

module.exports = blogRouter;

// blogRouter.get('/blog');
// /// get blog by id
// blogRouter.get('/blog/:id');
// /// update blog
// blogRouter.put('/blog/:id');
// /// delete blog
// blogRouter.delete('/blog/:id');