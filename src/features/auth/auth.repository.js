const pool = require("../../common/db/db.js");
const findUserByEmail = async (email) => {
    const {rows} = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return rows[0];
}
const createUser = async(email,name,hashPassword) => {
   const {rows}= await pool.query(
        "INSERT INTO users (email,name,password) VALUES ($1,$2,$3) RETURNING * ",
        [email,name,hashPassword]
    );
   return rows[0];
}
module.exports = {findUserByEmail,createUser}