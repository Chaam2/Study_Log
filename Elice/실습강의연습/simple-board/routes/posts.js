var express = require('express');
var router = express.Router();
const { Post } = require('../models')
const asyncHandler = require('../utils/async-handler')
/* /posts 패스로 들어온 요청 처리. */

router.get('/', asyncHandler(async(req,res)=>{
  if(req.query.write){ // ?write=## 일 경우 views/post/edit를 렌더
    res.render('post/edit') //app.set에 지정된값(=views)으로 렌더->views/post/edit.pug
    return;
  }
  
  const page = Number(req.query.page || 1);
  const perPage = Number(req.query.perPage || 10);
  const total = await Post.countDocuments({})
  const posts = await Post.find({})
    .sort({createdAt : -1})
    .skip(perPage * (page-1))
    .limit(perPage)
  
  const totalPage = Math.ceil(total/perPage)

  res.render('post/list',{ posts, page, totalPage, perPage }) //render(템플릿이름, 전달되는값)
  //{ posts } === { posts : posts } posts를 posts라는 키값으로 전달하는것과 같다.
}))

//숏아이디로 게시글 수정하거나 상세보기
router.get('/:shortId', asyncHandler(async(req,res)=>{ 
  const { shortId } = req.params
  const post = await Post.findOne({
    shortId
  })

  if(req.query.edit){
    res.render('post/edit', { post })
    return;
  }

  res.render('post/view',{ post })
}))

router.post('/', asyncHandler(async(req,res)=>{
  const { title, content } = req.body

  if(!title || !content){
    throw new Error('제목과 내용을 입력해 주세요')
  }

  const post = await Post.create({
    title,
    content
  })
  res.redirect(`/posts/${post.shortId}`)// 방금 포스팅한 포스트상세보기로 리다이렉트
}))

router.post('/:shortId',asyncHandler(async(req,res,next)=>{
  const { shortId } = req.params
  const { title, content } = req.body

  if(!title || !content){
    throw new Error('제목과 내용을 입력해 주세요')
  }
  //updateOne({수정할대상},{수정할내용})
  await Post.updateOne({ shortId },{ 
  title,
  content
})
res.redirect(`/posts/${shortId}`)
}))

router.delete('/:shortId',asyncHandler(async(req,res,next)=>{
  const { shortId }= req.params
  await Post.deleteOne({ shortId })
  res.send('ok')
}))

module.exports = router;
