const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');

const Post = mongoose.model('Post', PostSchema);

const createSampleData = async () => {
  await Post.deleteMany({}); // 모든 게시글 삭제

  const postList = [];

  for (let i = 1; i <= 100; i++) {
    postList.push({
      title: `제목 ${i}`,
      content: `내용 ${i}`,
    });
  }

  await Post.insertMany(postList); // 샘플 데이터 추가

  console.log('Sample data created successfully!');
};

module.exports = { Post, createSampleData };
