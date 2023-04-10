var express = require('express');
var router = express.Router();
const { Post } = require('../models')

/* /posts 패스로 들어온 요청 처리. */

router.get('/', async(req,res,next)=>{
  if(req.query.write){ // ?write=## 일 경우 views/post/edit를 렌더
    res.render('post/edit') //app.set에 지정된값(=views)으로 렌더->views/post/edit.pug
    return;
  }
  //write가 없다면
  const posts = await Post.find({}) // 전체 목록 찾기

  res.render('post/list',{ posts }) //render(템플릿이름, 전달되는값)
  //{ posts } === { posts : posts } posts를 posts라는 키값으로 전달하는것과 같다.
})

router.get('/:shortId', async(req,res,next)=>{ //숏아이디로 게시글 수정하거나 상세보기
  const { shortId } = req.params
  const post = await Post.findOne({
    shortId
  })

  if(req.query.edit){
    res.render('post/edit', { post })
    return;
  }

  res.render('post/view',{ post })
})

router.post('/', async(req,res,next)=>{
  const { title, content } = req.body

  try{
    if(!title || !content){
      throw new Error('제목과 내용을 입력해 주세요')
    }

    const post = await Post.create({
      title,
      content
    })
    res.redirect(`/posts/${post.shortId}`)// 방금 포스팅한 포스트상세보기로 리다이렉트
  } catch(err){
    next(err)
  }
})

router.post('/:shortId',async(req,res,next)=>{
  const { shortId } = req.params
  const { title, content } = req.body

  try{
    if(!title || !content){
      throw new Error('제목과 내용을 입력해 주세요')
    }
  
    await Post.updateOne({ shortId },{ //updateOne({수정할대상},{수정할내용})
    title,
    content
  })
  res.redirect(`/posts/${shortId}`)
  } catch(err){
    next(err)
  }
})

router.delete('/:shortId',async(req,res,next)=>{
  const { shortId }= req.params
  await Post.deleteOne({ shortId })
  res.send('OK')
})

module.exports = router;
