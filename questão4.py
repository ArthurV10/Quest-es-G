while True:
  print ("Analise de notas!")
  nota1 = float(input("Digite a primeira nota do aluno: "))
  nota2 = float(input("Digite a segunda nota do aluno: "))
  if nota1 > 10 or nota2 > 10 or nota1 < 0 or nota2 < 0:
    print("A NOTA DIGITADO DEVE ESTAR ENTRE 0 E 10")
    continue
  else:
   def calcular_media(nota1, nota2):
    return (nota1 + nota2) / 2
   media = calcular_media(nota1, nota2)

  if media > 7 and media < 10:
    print("""
==============================
      VOCE FOI APROVADO!!!
==============================
          """)
    break
  elif media == 10:
    print("""
====================================
VOCE FOI APROVADO COM DISTINÇÃO !!!
====================================
          """)
    break
  else:
    print("""
====================================
        VOCE FOI REPROVADO !!!
====================================
          """)
    break