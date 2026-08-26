const pool = require("../../common/db/db");
const findUserById = async (id) => {
    const {rows} = await pool.query(`
    SELECT * FROM users WHERE id = ${id}`);
    return rows[0];
};
module.exports = {findUserById};