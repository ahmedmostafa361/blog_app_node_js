const prisma = require("../../common/db/prisma");
const findUserById = async (id) => {
    try{
        const user = await prisma.user.findUnique(
            {where:{id:id}}
        );
        return user;
    }catch (e) {
            return null;
    }

};
/// create function to check user exist granted true or false
const checkUserExist = async (id) => {
    const user = await findUserById(id);
    return !!user;
}
module.exports = {findUserById,checkUserExist};