const pool = require("../../common/db/db");
const findUserById = require("../user/user.repository").findUserById;
const createBlogRepository = require("./blog.repository").createBlogRepository;

const createBlogService = async (title, description, authorId) => {
    const userExist = await findUserById(authorId);
    if (!userExist) throw new Error("User not found");

    const blog = await createBlogRepository(title, description, authorId);
    if (!blog) throw new Error("Failed to create blog");

    return blog;
};

module.exports = { createBlogService };