import {pergunta, print } from "../Ajuda/funções.js";

function main(){
    print(`
    Digite algumas das letras correspondentes ao turno:
    M - Matutino
    V - Vespertino
    N - Noturno
    `)
  const letra = pergunta("Digite a Letra que corresponde ao turno: ")
  const letra_minusculo = letra.toLowerCase()
  const turno = analise_turno(letra_minusculo)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
  ${turno}                                
--------------------------------------
**************************************
`)

if (letra_minusculo === "m" || letra_minusculo === "n" || letra_minusculo === "v"  ){
  return print(aparecer_final)
}else 
  print (`
============================
A letra digitada é invalida!
============================
  `)
  return main()


}

function analise_turno(letra){
  if(letra === "m")
    return "Bom Dia!"
  else if(letra === "v")
    return "Boa Tarde!"
  else (letra === "n")
    return "Boa Noite!"
}
      

main()