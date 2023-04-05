// http모듈로 라우팅하기
const http = require('http')//http 객체

const users = ['chacha', 'mimi', 'bunny', 'poppy']
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('<h1>Welcome world!</h1>')
  }else if(req.url === '/users'){
    res.end('<h1>'+users+'</h1>')
  }else if (req.url.split('/')[1] === 'users') {// users 경로일 때
    //url : /users/1, /users/2, ..
    const userIdx = req.url.split('/')[2]; // users/1<-숫자를 userIdx로 저장
    const userName = users[userIdx - 1];// users배열에서 숫자에 해당하는 이름 찾기
    res.end('<h1>' + userName + '</h1>');     
  }else{
    res.end('<h1>Page Not Available...:)</h1>')
  }
})
server.listen(3000)//요청이 오는지 귀기울이고 있다..
//node main.js 명령어 실행 후 브라우저에서 127.0.0.1(=local host):3000(=port번호)

