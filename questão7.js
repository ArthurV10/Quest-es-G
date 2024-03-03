import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Indicador de aumento salarial!")

  const numero1 = pede_numero("Digite o primeiro valor: ")
  const analise_porcentagem_de_aumento = analisar(numero1)
  const nome_porcent = porcent(analise_porcentagem_de_aumento)
  const salario_novo = novo_valor(analise_porcentagem_de_aumento, numero1)
  const valor_aumento = valor_do_aumento(numero1, salario_novo)
  const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
· Salário antes do reajuste: ${numero1}
· Percentual de aumento aplicado: ${nome_porcent}
· Valor do aumento: ${valor_aumento.toFixed(2)}
· Novo salário, após o aumento: ${salario_novo}                         
--------------------------------------
**************************************
`)

if(numero1 < 0){
  print (`
=====================================
Não Existe preços negativos!
=====================================
  `)
  return main()
}else 
  return print(aparecer_final)


}

function analisar(num1){
  if (num1 <= 280 )
    return 0.20
  else if(num1 <= 700 )
    return 0.15
  else if (num1 <= 1500)
    return 0.10
  else 
    return 0.05
}

function porcent(num1){
  if(num1 === 0.20)
    return `20%`
  else if(num1 === 0.15)
    return `15%`
  else if(num1 === 0.10)
    return `10%`
  else
    return `5%`
}

function novo_valor(porcentagem, salario){
  const aumento = (salario * porcentagem)
  const total = (salario + aumento)
  return total
}

function valor_do_aumento(salario_antes, salario_novo){
  const calculo = (salario_novo - salario_antes)
    return calculo
}


main()