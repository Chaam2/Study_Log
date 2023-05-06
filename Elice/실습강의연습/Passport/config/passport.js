const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt.js');
const passport = require('passport');

const User = require('../models/User');

module.exports = function(passport){
  passport.use(
    new LocalStrategy({ usernameField: 'email'}, (email, password, done)=>{
      //user확인 -> User모델의 이메일이 파라미터의 이메일인지
      User.findOne({
        email : email,
      }).then(user => {
        if(!user) {
          return done(null, false, {message : '이메일을 다시 확인 해 주세요'})
        }//findOne으로 찾은 email이 같은 유저를 찾는데, 없으면 done에 메시지담아 리턴
        //비번확인(bcrypt.compare는 일치하면 true리턴)
        bcrypt.compare(password, user.password, (err,isMatch)=>{
          if(err) throw err; //if(err) return done(err)
          if(isMatch){
            return done(null, user);
          } else {
            return done(null, false, {message: '비밀번호가 일치하지 않습니다.'})
          }
        })
      }) //이메일로 유저를 찾아서, 아이디비번을 확인하고 그 찾은 유저를 리턴해주는 함수
    })
  )
}

//세션처리하기
//로그인 성공한 유저->세션에 저장
passport.serializeUser((user, done)=>{
  done(null, user.id)
});// user의 아이디를 세션에 저장하는 것 

//세션에 저장된 정보를 기반으로 실제 유저객체를 찾는것
passport.deserializeUser((id,done)=>{ //세션에 저장된 id값 찾아서
  User.findById(id,(err,user)=>{ //User모델에서 그 id값을 가진 user를 찾고
    done(err,user) // 그 유저정보를 리턴한다.
  })
})