const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');

const Post = mongoose.model('Post', PostSchema);

const dayjs = require('dayjs')
const createSampleData = async () => {

  const postList = [];

  for (let i = 1; i <= 20; i++) {
    const now = new Date()
    const createdAt = dayjs(now).format('YYYY-MM-DD HH:mm:ss')
    postList.push({
      title: `👀${i}번 제목 샘플입니다:)`,
      content: `${i}내용입니다.`,
      createdAt,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    /* 프로미스를 다른 형태로 표현하면 이렇게...
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    }); */
  }

  await Post.insertMany(postList); // 샘플 데이터 추가

  console.log('Sample data created successfully!');
};

module.exports = { Post , createSampleData};
