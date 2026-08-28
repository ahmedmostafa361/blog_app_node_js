const { createBlogService, deleteBlogService, restoreBlogService, updateBlogService} = require("./blog.service"); // 👈 destructure

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
/// delete blog controller
const blogDeleteController = async (req, res, next) => {
    const { id } = req.params;
    const authorId = req.userId;
    try {
        const deletedBlog = await deleteBlogService(id,authorId);
        res.status(200).json({
            message: "Blog deleted successfully",
            success: true,
            user: deletedBlog
        });
    } catch (error) {
        next(error);
    }
}
const blogRestoreController = async (req, res, next) => {
    const { id } = req.params;
    const authorId = req.userId;
    try {
        const restoredBlog = await restoreBlogService(id,authorId);
        res.status(200).json({
            message: "Blog restored successfully",
            success: true,
            user: restoredBlog
        });
    } catch (error) {
        next(error);
    }
}

const updateBlogController = async (req, res, next) => {
    const { id } = req.params;
    let newData = req.body;
    const authorId = req.userId;
    try {
        const updatedBlog = await updateBlogService(id,newData,authorId);
        res.status(200).json({
            message: "Blog updated successfully",
            success: true,
            user: updatedBlog
        });

    }catch (error) {
        next(error);
    }
}
module.exports = { blogController,blogDeleteController,blogRestoreController,updateBlogController }