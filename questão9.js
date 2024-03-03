import {pede_numero, print } from "../Ajuda/funções.js";

function main(){
    print(`
    Digite algumas das letras correspondentes ao turno:
    1 - Domingo
    2 - Segunda
    3 - Terça
    4 - Quarta
    5 - Quinta
    6 - Sexta
    7 - Sabado
    `)
  const numero = pede_numero("Digite o numero que corresponde ao dia da semana: ")
  const dia = analise_dia(numero)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
             ${dia}                                
--------------------------------------
**************************************
`)

if (numero <= 7 && numero > 0){
  return print(aparecer_final)
}else 
  print (`
=============================
O numero digitado é invalido!
=============================
  `)
  return main()


}

function analise_dia(dia){
  if(dia === 1)
    return "Domingo"
  else if(dia=== 2)
    return "Segunda"
  else if (dia === 3)
    return "Terça"
  else if (dia === 4)
    return "Quarta"
  else if (dia === 5)
    return "Quinta"
  else if (dia === 6)
    return "Sexta"
  else (dia === 7)
    return "Sabado"
}
      

main()