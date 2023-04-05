class Square{
  private width:number
  constructor(){
      this.width=0
  }
  getLength():number{
      return this.width
  }
  setLength(setter:number):void{
      this.width = setter
  }
  draw():void{
      console.log( '*'.repeat(this.width)+'\n'+
      ('*'+' '.repeat(this.width-2)+'*'+'\n').repeat(this.width-2)+
      '*'.repeat(this.width)
      )
  }
}

const c1 = new Square();

    c1.setLength(3);

    console.log(c1.getLength());
    c1.draw();








