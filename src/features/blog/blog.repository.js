/// create blog repository
const pool = require("../../common/db/db.js");
const createBlogRepository = async (title, description, authorId) => {
    const  {rows} = await pool.query(`
    INSERT INTO blogs (title,description,author_id) VALUES ('${title}','${description}',${authorId}) RETURNING *`);
    return rows[0];
};
/// create soft delete blog not hard delete using is_deleted column in db
const deleteBlogRepository = async (id,authorId) => {
    const {rows} = await pool.query(`
    UPDATE blogs SET is_deleted = true 
                 WHERE id = $1 
                   AND author_id = $2 
                   AND is_deleted = false
                     RETURNING *`,[id,authorId]);
    return rows[0];
}
/// restore deleted blog by update ith is_deleted column to false
const restoreBlogRepository = async (id, authorId) => {
    const { rows } = await pool.query(`
                UPDATE blogs SET is_deleted = false
                WHERE id = $1
                  AND author_id = $2
                  AND is_deleted = true
                    RETURNING *`,
        [id, authorId]);
    return rows[0];
};
/// check all blogs exist or not
const checkBlogExistsById = async (id) => {
    const {rows} = await pool.query(`
    SELECT * FROM blogs
             WHERE id = $1`, [id]
    );
    return rows[0];
}
/// update blog
const  updateBlogRepository = async (id, newData) => {
    const {rows} = await pool.query(`
    UPDATE blogs SET title = $3,
                     description = $2 
                      WHERE id = $1
                      RETURNING *`, [id, newData.description, newData.title]);
    return rows[0];
}

module.exports = {createBlogRepository,deleteBlogRepository,restoreBlogRepository,checkBlogExistsById,updateBlogRepository};