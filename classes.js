

class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.hypoalergenic = false;
    }

    updateHypo(){
      this.hypoalergenic = true
    }

    greeting() {
      console.log(`HI, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }
}

let dog1 = new Dog ('Buddy', 'golden retriever', 1)
let dog2 = new Dog ('Luna', 'Pitbull', 2)

dog2.updateHypo()

// console.log(dog1)
// console.log(dog2)

class Puppy extends Dog {
  constructor(name, breed, age, color, trainingLevel) {
    super(name, breed, age)

    this.color = color;
    this.trainingLevel = 0;
  }

  updateTraining(num){
    this.trainingLevel += num
  }
}

let puppers = new Puppy("kevin", "Yorkshire Terrier", .6, "brown/black")
let bubs = new Puppy("Wanda", "Irish Setter", 1, "red")


puppers.updateHypo()
bubs.updateTraining(1)


console.log(puppers)
puppers.greeting()

console.log(bubs)
bubs.greeting()
