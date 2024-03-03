import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Digite os valores desejados, para comnprar o mais barato")

  const numero1 = pede_numero("Digite o primeiro valor: ")
  const numero2 = pede_numero("Digite o segundo valor: ")
  const numero3 = pede_numero("Digite o terceiro valor: ")
  const analise_preço = analisar_mais_barato(numero1, numero2, numero3)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
  ${analise_preço}                                
--------------------------------------
**************************************
`)

if(numero1 < 0 || numero2 < 0 || numero3 < 0){
  print (`
=====================================
Não Existe preços negativos!
=====================================
  `)
  return main()
}else 
  return print(aparecer_final)


}

function analisar_mais_barato(num1, num2, num3){
  if(num1 < num2 && num1 < num3)
    return `O produto que deve ser levado é:
                Produto de ${num1}
                 `
  else if(num2 < num1 && num2 < num3)
    return `O prduto que de ser levado é:
                Produto de ${num2}
                `
  else
    return `O prduto que de ser levado é:
                Produto de ${num3}
    `

}

main()