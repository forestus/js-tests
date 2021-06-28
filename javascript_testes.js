// Arrow function
const dinheiro = (centavos=10)=>{
    //variables blocked external acess
    this.centavos =centavos
    let teste3 = true
    //methods
    return {
        // centavos,
        increment: ()=>centavos++
    }
}
const data = dinheiro()
console.log(typeof dinheiro);
console.log(typeof data);

console.log(dinheiro.teste);// undefined
console.log(dinheiro.centavos);// undefined
console.log(data.centavos); // undefined
// console.log(data.increment); // undefined se a função estiver fora do return

console.log(data.increment(10));
console.log(data);
// console.log(teste3); //cannot acess
// console.log(cetavos); //cannot acess
// console.log(increment); //cannot acess


// factory 
function teste(centavos="10"){
    //variables cannot acess
    let teste2 = true
    //cannot use this
    return {
        
        //methods
        increment: ()=>centavos++
    }
}
const data = teste()
const data2 = new teste()
console.log(data);
console.log(data.teste2);
console.log(data2.teste2);


// Prototype
function teste(centavos = 10) {
    //variables cannot acess
    this.centavos = 10
    this.teste4 = true
}
teste.prototype.nomeDafuncao = ()=>{
    //variables cannot acess
    const testing = 7;
    this.testing2 = 10
    // return {testing} only with return
}
const testename = new teste(20)
console.log(testename);
console.log(testename.nomeDafuncao()); // acess only with return
console.log(testename.nomeDafuncao);
console.log(testename.teste4);
console.log(testename.centavos);
// console.log(centavos); //cannot acess
// console.log(teste4); //cannot acess
// console.log(testing); //cannot acess
// console.log(testing2); //cannot acess


// Object Literal
// const = { // all can acess variables
    // data:"",
    // teste: ""
// }

//Class
class Microfone {
    constructor(color = "black"){
        this.color = color;
        this.isOn = true;
    }

    togleOnOff(){
        if (this.isOn) {
            console.log("desligar");            
        } else {
            console.log("ligar");            
        }
        this.isOn = !this.isOn;
    }
}
const microfone = new Microfone("white");
console.log(microfone.color.toUpperCase()); 
// classe no javascript nao precisa herdar metodos de pacotes... ela ja tem todos os metodos vindos do prototype