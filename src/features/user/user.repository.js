const pool = require("../../common/db/db");
const findUserById = async (id) => {
    const {rows} = await pool.query(`
    SELECT * FROM users WHERE id = ${id}`);
    return rows[0];
};
/// create function to check user exist granted true or false
const checkUserExist = async (id) => {
    const {rows} = await pool.query(`
    SELECT EXISTS (SELECT 1 FROM users WHERE id = ${id}) AS result;`);
    return rows[0].result;
}
module.exports = {findUserById,checkUserExist};