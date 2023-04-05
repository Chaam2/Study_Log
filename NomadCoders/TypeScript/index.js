class Dict {
    constructor() {
        this.words = {}; //words 초기화
    }
    add(animal) {
        if (this.words[animal.name] === undefined) { //animal파라미터에 들어온 단어가 아직 존재하지 않으면
            this.words[animal.name[0]] = animal.sound; //{animal.name:animal.char}
            this.words[animal.name[1]] = animal.char; //{animal.name:animal.char}
        }
    }
    find(name) {
        return `${name}는 ${this.words[name][0]}하고 울어요.
    특징 : ${this.words[name][1]}`;
    }
}
class Animal {
    constructor(name, //동물이름
    sound, //소리
    char //특징
    ) {
        this.name = name;
        this.sound = sound;
        this.char = char;
    }
}
const animalDict = new Dict();
const cat = new Animal('고양이', '야옹야옹', '다리가 네개');
const dog = new Animal('강아지', '멍멍멍', '산책을 좋아한다');
const chick = new Animal('병아리', '삐약삐약', '노랗고 귀엽다');
animalDict.add(cat);
animalDict.add(dog);
animalDict.add(chick);
animalDict.find('고양이');
