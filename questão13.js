import {pergunta, print } from "../Ajuda/funções.js";

function main(){
  print("Responda as perguntas do questionario com Sim ou Não")
  const pergunta1 = pergunta("Telefonou para a vitima?: ")
  const pergunta2 = pergunta("Esteve no local do crime?: ")
  const pergunta3 = pergunta("Mora perto da vitima?: ")
  const pergunta4= pergunta("Devia para a vitima?: ")
  const pergunta5 = pergunta("Ja trabalhou com a vitima?: ")
  const conclusão = julgamento(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)
  const aparecer_final = (`
  ==============|RESPOSTA|========≈=========

  ${conclusão}

  ==========================================
  
  `)

  if(pergunta1.toLowerCase() === "sim" || pergunta2.toLowerCase() === "sim" || pergunta3.toLowerCase() === "sim" || pergunta4.toLowerCase() === "sim" || pergunta5.toLowerCase() === "sim")
    return print(aparecer_final)
  else if (pergunta1.toLowerCase() === "não" && pergunta2.toLowerCase() === "não" && pergunta3.toLowerCase() === "não" && pergunta4.toLowerCase() === "não" && pergunta5.toLowerCase() === "não")
    return  print(aparecer_final)
  else {
    print ("COLOQUE SIM OU NÃO, RESPOSTA COLOCADA É INVALIDA")
    return main()
  }
}

function julgamento (resposta1, resposta2, resposta3, resposta4, resposta5){
  let contagem = 0
  if (resposta1.toLowerCase() === "sim") 
  contagem++
  if (resposta2.toLowerCase() === "sim") 
  contagem++
  if (resposta3.toLowerCase() === "sim") 
  contagem++
  if (resposta4.toLowerCase() === "sim") 
  contagem++
  if (resposta5.toLowerCase() === "sim") 
  contagem++
  if (contagem <= 1)
    return "Inocente"
  else if (contagem === 2)
    return "Suspeito"
  else if (contagem <= 4)
    return "Cumplice"
  else 
    return "Assassino"
}
main()
