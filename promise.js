function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0;
        for(let i = 1; i <= numero; i++) {
            res += 1;
        }
        resolve(res);
    });
}
calculoDemorado(10).then( (resultado) => {
    console.log(resultado)
})
