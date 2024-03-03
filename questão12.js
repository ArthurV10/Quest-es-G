import {pede_numero, print } from "../Ajuda/funções.js";

function main(){
    print(`
    Analise se numero é inteiro ou decimal!
    `)
  const numero1 = pede_numero("Digite o numero desejado: ")
  const inteiro_decimal = analise(numero1)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
        ${inteiro_decimal}                   
--------------------------------------
**************************************
`)

print(aparecer_final)
}

function analise (num1){
  if (Number.isInteger(num1))
    return "O numero é inteiro"
  else 
    return "O numero é decimal"
}
main()