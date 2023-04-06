const express = require('express')
const app = express()

let members = require('./members')

app.use(express.json());//서버로 온 리퀘스트의 바디에 JSON데이터가 존재할 경우->추출해서 req.body프로퍼티의 값으로 설정해줌

app.get('/api/members',(req,res)=>{//api서버에 관한 url임을 나타내준다.
  const { team } = req.query // = team = req.query.team(디스트럭팅)
  if(team){
    const teamMembers = members.filter((m)=> m.team === team )
    res.send(teamMembers)
  }else{
    res.send(members)//배열의 Json으로 변환한 결과를 res의 body에 담아서 보내준다.
  }
})

app.get('/api/members/:id',(req,res)=>{//Route Parameter
  const { id } = req.params;
  const member = members.find((m)=>m.id===Number(id));
  if (member){
    res.send(member);
  } else{
    res.status(404)
      .send({ messeage:'There is no such member' });
  }
})

app.post('/api/members',(req,res)=>{
  const newMember = req.body; // req.body가 가리키는 객체를 정보를 뉴멤버로 저장하고
  members.push(newMember); // members배열에 마지막 요소로 추가한다.
  res.send(newMember); // 추가한 객체를 res에 담아 보내준다.
})

app.listen(3000,()=>{
  console.log('Server is listening...')
})