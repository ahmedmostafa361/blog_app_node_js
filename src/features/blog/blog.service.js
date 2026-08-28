const pool = require("../../common/db/db");
const {updateBlogRepository,checkBlogExistsById,deleteBlogRepository, restoreBlogRepository} = require("./blog.repository");
const {checkUserExist} = require("../user/user.repository");
const findUserById = require("../user/user.repository").findUserById;
const createBlogRepository = require("./blog.repository").createBlogRepository;

const createBlogService = async (title, description, authorId) => {
    const userExist = await findUserById(authorId);
    if (!userExist) throw new Error("User not found");

    const blog = await createBlogRepository(title, description, authorId);
    if (!blog) throw new Error("Failed to create blog");

    return blog;
};
/// delete blog service
const deleteBlogService = async (id,authorId) => {
    const userExist = await checkUserExist(authorId);
    if (!userExist) throw new Error("User not found");
    const blog = await deleteBlogRepository(id,authorId);
    if (!blog) throw new Error("Failed to delete blog");
    return blog;
}
/// restore deleted blog by update ith is_deleted column to false
const restoreBlogService = async (id,authorId) => {
    const userExist = await checkUserExist(authorId);
    if (!userExist) throw new Error("User not found");
    const blog = await restoreBlogRepository(id,authorId);
    if (!blog) throw new Error("Failed to restore blog");
    return blog;
}
/// update blog services
const updateBlogService = async (id,newData, authorId) => {
   //check blog exist
    const blogExist = await checkBlogExistsById(id);
    if (!blogExist) throw new Error("Failed to update blog");
    Object.assign(blogExist, newData);
    /// update blog
    const updatedUser =updateBlogRepository(id,blogExist);
    if (!updatedUser) throw new Error("Failed to update blog");
    return updatedUser;

}
module.exports = { createBlogService,deleteBlogService,restoreBlogService,updateBlogService };