const { UUID } = require("sequelize");
const Posts = require("../models/posts.models");

const findAllPost = async () => {
  const Post = await Post.findAll();
  return Post;
};

const findPostById = async (id) => {
  const post = await Post.findOne({
    where: {
      id: id,
    },
  });
  return post;
};


const createPost = async (potsObj) =>{
  const newPost = await Post.create({
    id: UUID.V4(),
    content: potsObj.content,
    userId: potsObj.userId
  })
   return newPost
}

const updatePost = async (postId, postObj) =>{
  const selectedPost = await Post.findOne({
    where: {
      id: postId
    }
  })
  if(!selectedPost) return null
  const updatePost = await selectedPost.update(postObj)
  return updatePost
}

const deletePost = async (postId) =>{
  const selectedPost = await Post.findOne({
    where:{
      id: postId
    }
  })

  if(!selectedPost) return null
  const updatePost = await selectedPost.update({
    status:'deleted'
  })
  return updatePost
}