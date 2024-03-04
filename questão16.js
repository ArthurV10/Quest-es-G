import { pede_numero, print } from "../Ajuda/funções.js";

function main(){
  print(`
**************************************
 Escolha a Opção de Carne pelo numero
 1- Filé
 2- Alcatra
 3- Picanha
**************************************
 `)
  const opção = pede_numero("Digite o Numero da Opção Escolhida: ")
  const quantidade = pede_numero("Quantos Kg de carne é almejado: ")
  const pagamento = pede_numero(`
  =====================================
  Escolha o Metodo de Pagamento:
  1- Cartão Tabajara (5% de DESCONTO )
  2- Cartão de Credito
  3- Cartão de Debito
  4- PIX
  5- Mercado Pago
  ======================================
  `)

  if (quantidade < 0 || opção > 3 || opção > 5){
    print(`
=================================
Por Favor, Digite Numeros Validos
=================================
    `)
    return main()
  }

  const aparecer_carne = aparecer_tipo_carne(opção)
  const aparecer_pagamento = aparecer_tipo_pagamento(pagamento)
  let preço_total = calcular_preço(opção, quantidade)
  const desconto = desconto_total(preço_total, pagamento)
  const valor_real = (preço_total - desconto)
  const aparecer_final = (`
==============|RESPOSTA|==================
° Tipo de Carne: ${aparecer_carne}
° Quantidade Desejada: ${quantidade} Kg
° Preço Total: ${preço_total.toFixed(2)}
° Tipo de Pagamento:${aparecer_pagamento}
° Valor do Desconto: ${desconto.toFixed(2)}
° Valor a Pagar: ${valor_real.toFixed(2)}
==========================================
  
  `)
  print(aparecer_final) 
}

function aparecer_tipo_carne(opção){
  if(opção === 1)
    return "Filé"
  else if(opção === 2)
    return "Alcatra"
  else
    return "Picanha"
}

function aparecer_tipo_pagamento(pagamento){
  if(pagamento === 1)
    return "Cartão Tabajara"
  else if(pagamento === 2)
    return "Cartão Credito"
  else if(pagamento === 3)
    return "Cartão Debito"
  else if(pagamento === 4)
    return "PIX"
  else if(pagamento === 5)
    return "Mercado Pago"
}

function calcular_preço(carne, quantidade){
  if(carne === 1){
    if(quantidade > 5)
      return (5.80 * quantidade)
    else
      return(4.90 * quantidade)
  }
  if(carne === 2){
    if(quantidade > 5)
      return (6.80 * quantidade)
    else
      return(5.90 * quantidade)
  }
  if(carne === 3){
    if(quantidade > 5)
      return (7.80 * quantidade)
    else
      return(6.90 * quantidade)
  }
}

function desconto_total(preço_total, pagamento){
  if(pagamento === 1){
  const desconto = (preço_total * 0.05)
  const total = (preço_total - desconto)
    return total
  }else
    return 0
}
main()