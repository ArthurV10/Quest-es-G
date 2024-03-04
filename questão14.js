import {pergunta, pede_numero, print } from "../Ajuda/funções.js";

function main(){
  print(`
  Posto de gasolina, preço do alcool e gasolina
  A - Alcool
  G - Gasolina`)
  const pergunta1 = pergunta("Escreva a letra correspondente ao produto: ")
  const litros = pede_numero("Digite a quantidade de litros desejada: ")
  
  if(pergunta1.toLowerCase() !== "g" && pergunta1.toLowerCase() !== "a" || litros < 0){
    print(`
    ===================
    Digitação invalida!
    ===================
    `)
    return main()}

  const preço = calculo_preço(pergunta1, litros)
  const aparecer_final = (`
  ==============|RESPOSTA|========≈=========

    O preço é ${preço}

  ==========================================
  
  `)

  print(aparecer_final)
  
}

function calculo_preço(tipo, litros){
  let tipo_produto = 0
  let porcentagem = 0
  if(tipo.toLowerCase() === "g")
    tipo_produto = 2.50
  if(tipo.toLowerCase() === "a")
    tipo_produto = 1.90

  if (tipo.toLowerCase() === "a"){
    if(litros <= 20)
    porcentagem = (litros * 3) / 100
   else if(litros > 20)
    porcentagem = (litros * 5)/ 100}

  if (tipo.toLowerCase() === "g"){
     if(litros <= 20)
    porcentagem = (litros * 4) / 100
    else if (litros > 20)
    porcentagem = (litros * 6)/ 100}

  const calculo_preço = (tipo_produto * litros)
  const desconto = (calculo_preço * porcentagem)
  const preço_final = (calculo_preço - desconto)
  return preço_final
}
main()
