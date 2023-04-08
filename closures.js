let umaFuncao = function () {
    console.log("Fui armazenada em uma variável");
}
umaFuncao()

function f (funcao) {
    funcao();
}
function g () {
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}

f (function (){
    console.log("Estou sendo passada para f")
})

const gResult = g()
gResult();

g()();

f(g);

f(g());

