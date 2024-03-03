#Aqui é feito um loop ate sair uma das saidas com break
while True:
  #Print com Tres aspas serve para ler varias linhas ao mesmo tempo
  print("""
==========================================
Digite a letra, assim diga qual é o sexo!
M = Masculino
F = Feminino
==========================================
      """)
  sexo = input("Diga qual letra foi escolhida: ")
  if sexo.lower() == "m":
    print ("""
        ************************
           o Sexo é Masculino
        ************************
           """)
    break #Para a função assim que for valida
  
  elif sexo.lower() == "f":
    print("""
        *********************
          O Sexo é Feminino
        *********************
          """)
    break #Para a função assim que for valida
  
  else:
    print("Sexo Invalido, Tente Novamente... ")
    # A função ficara em loop
