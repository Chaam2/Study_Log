// 제네릭을 이용해 클래스를 선언하세요.
class Queue<T>{
  data:T[]=[]
  constructer(data:T[]){
  this.data=data
  }
  push(n:T){
      this.data.push(n)
  }
  pop():T|undefined{
      return this.data.shift()
  }
}
// 제네릭을 활용하여 push()와 pop() 메소드를 구현해주세요.


// 아래 코드가 올바르게 동작하도록 코드를 작성하세요.
const numberQueue = new Queue<number>()

numberQueue.push(0)
console.log(numberQueue.data)
console.log(numberQueue.pop())
