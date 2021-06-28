
class Something {
  #property;

  constructor(){
    this.#property = "test";
  }

  set property(message){
    this.#property = message;
  }

  get property(){
    return this.#property;
  }

  getPrivateMessage() {
      return this.#property;
  }
}

const instance = new Something();
console.log(instance.getPrivateMessage()); 
instance.property = "Nuevo";
console.log(instance.property)


const animals = [1,2,3]

animals.forEach(item => {

});