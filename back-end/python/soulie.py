# Soulie - desafio 3
''' Feito por: 
    Arthur Carvalho Brito Martins - RM 572325 
    Diego Soares Trujillo - RM 570147
    Enzo Nukui da Silvia - RM 569770 
    Leticia Cardoso de Almeida - RM 569415 
    Leticia Dias Araujo Felix Moratori – RM569138 
'''

# --- BASE DE DADOS ---
categorias = ('Social', 'Conscientização', 'Resíduos', 'Sustentabilidade')

missoes = [
    ['Publicar', categorias[1]],
    ['Seguir novos usuários', categorias[0]],
    ['Reciclar', categorias[2]],
    ['Fazer algo sustentável', categorias[3]]
]

ranking = [['Diego', 50], ['Arthur', 100], ['Enzo', 200]]

# --- FUNÇÕES ---
def cadastrar_usuario():
    nome = input('Digite o seu nome: ')
    print(f'Seja bem-vindo {nome}! A Soulie está pronta para te ajudar!')
    return nome

def exibir_missoes(lista_de_missoes):
    print('\n--- Suas Missões Soulie ---')
    for i, item in enumerate(lista_de_missoes): 
        print(f"{i}. {item[0]} ({item[1]})") 

def exibir_ranking(lista_para_exibir):
    print('\n--- Ranking Global Soulie ---')
    for usuario in lista_para_exibir:
        print(f"Usuário: {usuario[0]} | Pontos: {usuario[1]}")

# --- PROGRAMA PRINCIPAL ---
opcao = -1
usuario_atual = "Convidado"
pontos_atuais = 0

while opcao != 0 and opcao < 5:
    print(f"\nUsuário: {usuario_atual} | Pontos: {pontos_atuais}")
    print("1. Cadastrar Usuário")
    print("2. Ver Missões")
    print("3. Ver Ranking")
    print("4. Concluir Missão")
    print("0. Sair")
    
    try:
        opcao = int(input('Escolha uma opção: '))

        match opcao:
            case 1:
                usuario_atual = cadastrar_usuario()
                
            case 2:
                exibir_missoes(missoes)
                
            case 3:
                exibir_ranking(ranking)

            case 4:
                # Verificação de segurança
                if usuario_atual == "Convidado":
                    print('Erro: Você precisa se cadastrar primeiro (Opção 1).')
                else:
                    exibir_missoes(missoes) 
                    escolha = int(input('Qual missão você concluiu? (0 a 3): '))
                    if 0 <= escolha < len(missoes):
                        pontos_atuais += 10
                        print(f'Sucesso! Você ganhou 10 pontos. Total: {pontos_atuais}')
                    else:
                        print('Erro: Essa missão não existe!')
            
            case 0:
                # Salva no ranking antes de fechar
                if usuario_atual != "Convidado":
                    ranking.append([usuario_atual, pontos_atuais])
                    exibir_ranking(ranking)
                print(f'Saindo... até a próxima {usuario_atual}')
                
            case _:
                print('Opção inválida! Tente novamente.')

    except ValueError:
        print('Erro: Digite apenas números para as opções do menu.')

print("Programa encerrado.")