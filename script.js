const notas = { 
    100:1,
    50:3,
    20:4,
    10:1,
    5:3,
    2:12,
    1:10 
}

var saldo = 122.50

const retira = document.querySelector("input")
let aux = {}

document.getElementById("bet").addEventListener('click',function() {
    if(!validacaoSaldo(10,saldo)){
        saque(notas,10,10)
    }    
},false);

document.getElementById("vinte").addEventListener('click',function() {
    if(!validacaoSaldo(20,saldo)){
        saque(notas,20,20)
    }    
},false);

document.getElementById("ciquenta").addEventListener('click',function() {
    if(!validacaoSaldo(50,saldo)){
        saque(notas,50,50)
    }    
},false);


document.getElementById("cem").addEventListener('click',function() {
    if(!validacaoSaldo(100,saldo)){
        saque(notas,100,100)
    }    
},false);

document.getElementById("duzentos").addEventListener('click',function() {
    if(!validacaoSaldo(200,saldo)){
        saque(notas,200,200)
    }    
},false);

document.getElementById("trezentos").addEventListener('click',function() {
    if(!validacaoSaldo(300,saldo)){
        saque(notas,300,300)
    }    
},false);

document.getElementById("saldo").textContent = "Saldo atual R$ " + saldo

function validacaoSaldo(retirada,saldo){
    if(retirada > saldo){
        document.getElementById("result").textContent = "Saldo insuficiente para realizar retirada."
        return true
    }
}

document.getElementById("buttonRetirar").addEventListener('click',function() {
    if(!validacaoSaldo(retira.value,saldo)){
        saque(notas,parseInt(retira.value), parseInt(retira.value))
    }    
},false);

function limpaObject(){
    for (var x in aux) delete aux[x];
}

function saque(notas,ret,valorInicial){
    document.getElementById("result").textContent = ""
    limpaObject()
    
    Object.keys(notas)
        .reverse()
        .map((k) => {
            if(ret !== 0){
                if ((k <= ret) && (notas[k] > 0)){
                    for (notas[k]; notas[k] > 0; notas[k] --){
                        if(ret >= k){
                            ret = ret -k
                            notas[k] = notas[k] -1
                        
                            if(aux[k] === undefined ){
                                aux[k] = 1
                            }else{
                                aux[k] += 1 ;
                            }
                        }
                    }
                }
            }
        })
        saldo = saldo - valorInicial

    document.getElementById("saldo").innerHTML = "Saldo atual R$ " + saldo
    imprimirNotas()
}

function imprimirNotas(){
    let notasImprimidas = ""
    Object.keys(aux)
        .map((k)=>{
            
            notasImprimidas = [ ...notasImprimidas, "Valor:" + k + " Quantidade:" + aux[k]]
        })
        
        document.getElementById("notas").innerHTML = notasImprimidas
}
