//동물 사전 만들기
type Words = {
  [key:string]:Array<string>
}

class Dict{
  private words:Words
  constructor(){
    this.words={} //words 초기화
  }
  add(animal:Animal){//클래스를 파라미터로 받음
    if(this.words[animal.name]===undefined){//animal파라미터에 들어온 단어가 아직 존재하지 않으면
      this.words[animal.name][0]= animal.sound //{animal.name:animal.char}
      this.words[animal.name][1]= animal.char //{animal.name:animal.char}
    }
  }
  find(name:string){
    return `${name}는 ${this.words[name][0]}하고 울어요.
    특징 : ${this.words[name][1]}`
  }
}

class Animal {
  constructor(
    public name:string,//동물이름
    public sound:string, //소리
    public char:string //특징
  ){}
}

const animalDict = new Dict()
const cat = new Animal('고양이','야옹야옹','다리가 네개')
const dog = new Animal('강아지','멍멍멍','산책을 좋아한다')
const chick = new Animal('병아리','삐약삐약','노랗고 귀엽다')
animalDict.add(cat)
animalDict.add(dog)
animalDict.add(chick)



animalDict.find('고양이')