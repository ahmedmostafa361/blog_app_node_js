const { Router } = require('express');
const { updateBlogController,blogController, blogDeleteController, blogRestoreController, blogHardDeletedController} = require("./blog.controller");
const authenticate = require("../../common/middlewares/authenticate");
const blogRouter = Router();

blogRouter.post('/create', authenticate, blogController); // 👈 middleware runs first
blogRouter.delete('/:id',authenticate, blogDeleteController);
blogRouter.patch('/:id',authenticate, blogRestoreController);
blogRouter.put('/:id',authenticate, updateBlogController);
blogRouter.delete('/:id',authenticate, blogHardDeletedController);

module.exports = blogRouter;

// blogRouter.get('/blog');
// /// get blog by id
// blogRouter.get('/blog/:id');
// /// update blog
// blogRouter.put('/blog/:id');
// /// delete blog
// blogRouter.delete('/blog/:id');