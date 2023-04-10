/* async request handler를 왜 쓰나...?
매번 try-catch 작성하는게 귀찮고 실수하기 쉬우므로
-> request handler를 통해 try catch를 자동으로 실행하도록 구성한다. */

module.exports = (requestHandler) => {
  return async(req,res,next) =>{
    try{
      await requestHandler(req,res)
    }catch(err){
      next(err)
    }
  }
}