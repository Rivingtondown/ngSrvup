class SweetSweetBasil {
  name: string;
  color: string;
  constructor(){
    // console.log("Hello "+name)
    // this.color = startColor
  }
  getColor(){
    console.log(this.color)
  }
}
//let world = new SweetSweetBasil("World", "Green")
// let basil = new SweetSweetBasil("Basil", "Bright Green")
// basil.getColor()
// world.getColor()

// console.log(basil.color)

class Basil extends SweetSweetBasil {
  constructor(name:string, startColor:string){
    //super(name, startColor)
    super();
    this.name = name;
    this.color= startColor;
  }
  setNewColor(newColor:string){
    this.color = newColor
    super.getColor()
  }
}

let basil3 = new Basil("basil", "brite green")

basil3.getColor()
basil3.setNewColor("red")
basil3.getColor()