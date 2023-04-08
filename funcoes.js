function hello (){
    console.log("Oi");
}
hello();

function hello (nome){
    console.log("Hello" + nome);
}
hello(" Breno");

function soma (a, b) {
    return (a + b);
}
const resu = soma (2, 3);
console.log (resu);

const dobro = function (n) {
    return n * 2;
}
const res = dobro(4);
console.log(res);

const triplo = function (n = 5) {
    return 3 * n;
}
console.log(triplo());
console.log(triplo(10));

const hello = () => console.log("Hello");
hello();
const dobro = (valor) => valor * 2;
console.log(dobro(10));
const triplo = (valor) => {
    return valor * 3;
}
console.log(triplo(10));
const ehPar = (n) => {
    n % 2 === 0;
}
console.log(ehPar(10));