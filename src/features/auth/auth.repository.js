const prisma = require("../../common/db/prisma.js");
const findUserByEmail = async (email) => {
   const user = await prisma.user.findUnique({where:{email}});
   return user;
}
const createUser = async(email,name,hashPassword) => {
    const createdUser = await prisma.user.create({
        data:{email:email,name:name,password:hashPassword
        },
        omit: {password:true}
    });

    return createdUser;
}
module.exports = {findUserByEmail,createUser}