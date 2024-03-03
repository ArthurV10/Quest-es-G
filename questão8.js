import {pede_numero, print} from "../Ajuda/funções.js";

function main(){
    print("Desconto salarial")
  
    const hora = pede_numero("Digite a quantidade de horas: ")
    const valor_por_hora = pede_numero("Digite o valor por hora: ")
    const salario_bruto = multiplicação(hora, valor_por_hora)
    const porcentagem_ir = analise(salario_bruto)
    const mostrar_porcent = aparecer_porcent(porcentagem_ir)
    const ir = desconto_ir(salario_bruto, porcentagem_ir)
    const inss = desconto_inss(salario_bruto)
    const FGTS = calculo_fgts(salario_bruto)
    const total_descontos = (inss + ir)
    const salario_liquido = calcular_sal_liq(salario_bruto, total_descontos)
    const aparecer_final = (`
  *********|----RESPOSTA----|*********
  --------------------------------------
  Salário Bruto: (${valor_por_hora} * ${hora}) : ${salario_bruto.toFixed(2)}
  (-) IR (${mostrar_porcent}) : ${ir.toFixed(2)} 
  (-) INSS (10%) : ${inss.toFixed(2)}
  FGTS (11%) : ${FGTS.toFixed(2)}
  Total de descontos : ${total_descontos.toFixed(2)}
  Salário Liquido : ${salario_liquido.toFixed(2)}                
  --------------------------------------
  **************************************
  `)
  
  if(hora < 0 || valor_por_hora < 0){
    print (`
  ============================================
  Não Existe valores negativos nessa situação!
  ============================================
    `)
    return main()
  }else 
    return print(aparecer_final)
  
  
}

function multiplicação(hora, valor_hora){
    return (hora * valor_hora)
}

function analise (valor_porcent){
  if(valor_porcent <= 900)
    return 0
  else if(valor_porcent <= 1500)
    return 0.05
  else if(valor_porcent <= 2500)
    return 0.10
  else
    return 0.20
}

function aparecer_porcent(porcentagem){
  if(porcentagem === 0)
    return `Isento`
  else if(porcentagem === 0.05)
    return `5%`
  else if(porcentagem === 0.10)
    return `10%`
  else
    return `20%`
}

function desconto_ir(salario_bruto, porcent){
  return (salario_bruto * porcent)
}

function desconto_inss(salario){
  return (salario * 0.10)
}

function calculo_fgts(salario){
  return (salario * 0.11)
}

function calcular_sal_liq(salario, descontos){
  return (salario - descontos)
}
  main()