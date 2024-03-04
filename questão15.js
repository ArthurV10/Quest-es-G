import { pede_numero, print } from "../Ajuda/funções.js";

function main(){
  print(`
  Preço a ser pago na frutaria`)
  const morango = pede_numero("Quantos Kg de morango foram comprados?: ")
  const maçã = pede_numero("Quantos Kg de maça foram comprados?: ")
  if (maçã < 0 || morango < 0){
    print(`
========================
Não existe peso negativo
========================
    `)
  return main()
  }
  const preço = calculo_preço(morango, maçã)
  const aparecer_final = (`
  ==============|RESPOSTA|========≈=========

    O preço é ${preço}

  ==========================================
  
  `)
  print(aparecer_final) 
}

function calculo_preço(morango, maçã){
  let total_preço = 0
  let porcentagem = 0
  let preço_morango =0
  let preço_maçã = 0
  const peso = (morango + maçã)
  if(morango > 5){
    preço_morango = (2.20 * morango)
  }else 
    preço_morango = (2.50 * morango)

  if(maçã > 5){
    preço_maçã = (1.50 * maçã)
  }else 
    preço_maçã = (1.80 * maçã)

  let preço_total = preço_maçã + preço_morango

  if(preço_total > 25 || peso > 8){
   preço_total = (preço_total) - (preço_total * 0.10)
    return preço_total
  }else
    return preço_total
  

    
}
main()