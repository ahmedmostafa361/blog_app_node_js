const { createBlogService } = require("./blog.service"); // 👈 destructure

const blogController = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const authorId = req.userId; ///👈 comes from the verified token, not the body
        const createdBlog = await createBlogService(title, description, authorId);
        res.status(201).json({
            message: "Blog created successfully",
            success: true,
            user: createdBlog
        });
    } catch (error) {
        next(error);
    }
}
module.exports = { blogController }