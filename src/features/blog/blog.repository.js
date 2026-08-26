/// create blog repository
const pool = require("../../common/db/db.js");
const createBlogRepository = async (title, description, authorId) => {
    const  {rows} = await pool.query(`
    INSERT INTO blogs (title,description,author_id) VALUES ('${title}','${description}',${authorId}) RETURNING *`);
    return rows[0];
};

module.exports = {createBlogRepository};