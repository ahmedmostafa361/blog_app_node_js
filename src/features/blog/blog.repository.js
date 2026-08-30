/// create blog repository
const prisma = require("../../common/db/prisma.js");
const createBlogRepository = async (title, content, authorId) => {
    const createdBlog = await prisma.blog.create(
        {
            data:{title:title,content:content,authorId:authorId}
        },
    )
    return createdBlog;
};
const HardDeleteBlogRepository = async (id, authorId) => {
    try{
        const deltedBlog =await prisma.blog.delete({where:{id:id,authorId:authorId}})
        return deltedBlog;
    }catch (error) {
        return null;
    }

}
/// create soft delete blog not hard delete using is_deleted column in db
const deleteBlogRepository = async (id,authorId) => {
    try{
        const deletedSoftBlog = prisma.blog.update({
        data: {isDeleted:true},
        where: {id: id, authorId: authorId}});
        return  deletedSoftBlog;
    }
    catch (error){
        return null;
    }


}
/// restore deleted blog by update ith is_deleted column to false
const restoreBlogRepository = async (id, authorId) => {
     try {
        const blog = prisma.blog.update(
             {
                 data:{isDeleted:false},
                 where:{id:id,authorId:authorId}
             }
         )
         return blog;
     }catch (error) {
         return null;
     }
};
/// check all blogs exist or not
const checkBlogExistsById = async (id) => {
   try{
      const blog =prisma.blog.findUnique({where:{id:id}});
      return blog;
   }catch (e) {
       return null;
   }
}
/// update blog
const  updateBlogRepository = async (id, newData) => {

    try {
        const blog = prisma.blog.update(
            {
                data:newData,
                where:{id:id}
            }
        )
        return blog;
    }catch (error) {
        return null;
    }
}

module.exports = {createBlogRepository,deleteBlogRepository,restoreBlogRepository,checkBlogExistsById,updateBlogRepository,HardDeleteBlogRepository};