import {pede_numero, print } from "../Ajuda/funções.js";

function main(){
    print(`
    Quantidade de centenas, dezenas e unidades!
    `)
  const numero1 = pede_numero("Digite o numero desejado: ")
  const dividir_centena = centena(numero1)
  const dividir_dezena = dezena(numero1, dividir_centena)
  const dividir_unidade = unidade(numero1, dividir_centena, dividir_dezena)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
Existem ${dividir_centena}${dividir_dezena}${dividir_unidade}                    
--------------------------------------
**************************************
`)

if (numero1 < 1000){
  return print(aparecer_final)
}else 
  print (`
==================================
O numero digitado é invalido!
==================================
  `)
  return main()


}

function centena(num1){
  const centena = Math.trunc(num1 / 100)
    return `${centena} centena/s, `
}

function dezena (num1){
  const dezena = Math.trunc(num1 / 10)
  const centena_calculo = Math.trunc(num1 / 100) * 10
  const dezena_final = (dezena - centena_calculo)
    return `${dezena_final} centena/s e `
}

function unidade(num1, centena, dezena){
  const calculo_unidade = Math.trunc(num1 / 10) - (num1 / 10)
  const unidade = Math.abs(calculo_unidade * 10)
    return `${unidade.toFixed(0)} unidade/s`
}
main()