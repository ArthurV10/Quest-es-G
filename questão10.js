import {pede_numero, print } from "../Ajuda/funções.js";

function main(){
    print(`
    Analise de notas!
    `)
  const numero1 = pede_numero("Digite a primeira nota: ")
  const numero2 = pede_numero("Digite a segunda nota: ")
  const media = calcular_media(numero1, numero2)
  const nota = analise_nota(media)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
RESULTADO: ${nota}                                
--------------------------------------
**************************************
`)

if (numero1 <= 10 && numero1 > 0 && numero2 <= 10 && numero2 > 0){
  return print(aparecer_final)
}else 
  print (`
==================================
As notas digitadas são invalidas!
==================================
  `)
  return main()


}

function calcular_media(num1, num2){
  return (num1 + num2) / 2
}
function analise_nota (media){
  if(media >= 9)
    return "A"
  else if(media >= 7.5)
    return "B"
  else if(media >= 6)
    return "C"
  else if(media >= 4)
    return "D"
  else
    return "E"
  
}
main()