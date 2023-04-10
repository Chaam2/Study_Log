const mongoose = require('mongoose')
const PostSchema = require('./schemas/post')

exports.Post = mongoose.model('Post',PostSchema)
/* ㄴ> 모델함수를 포스트라는 변수에 정의하고 내보낸것
const Post = mongoose.model('Post',PostSchema)
module exports = Post
ㄴ요거를 줄여서 쓴것
다른파일에서 require할때는
const Post = require('./models/post').Post 또는
const { Post } = require('../models/post') 이렇게 */