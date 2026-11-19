package br.com.fiap.main;

import br.com.fiap.bean.*;

import javax.swing.*;
import javax.swing.text.DateFormatter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        String auxiliar;
        String escolha = "sim";
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        while(escolha.equalsIgnoreCase("sim")){

            try{

                JOptionPane.showMessageDialog(
                        null,
                        "Bem-vindo à Soulie!"
                );

                //NOME

                String nome =
                        JOptionPane.showInputDialog(
                                "Digite seu nome:"
                        );

                //IDADE

                auxiliar =
                        JOptionPane.showInputDialog(
                                "Digite sua idade:"
                        );

                int idade =
                        Integer.parseInt(auxiliar);

                //INTERESSE

                String interesse =
                        JOptionPane.showInputDialog(
                                "Qual seu interesse?\n" +
                                        "Fitness\n" +
                                        "Tecnologia\n" +
                                        "Jogos"
                        );

                //PRIMEIRO ACESSO

                PrimeiroAcesso acesso =
                        new PrimeiroAcesso(
                                nome,
                                idade,
                                interesse,
                                LocalDate.now(),
                                LocalDate.now(),
                                1,
                                "Conhecer pessoas"
                        );

                acesso.iniciarCadastro();

                //INTERFACE + SOULIE

                Soulie soulie =
                        new Soulie(
                                "Soulie",
                                "Animada"
                        );

                soulie.incentivarUsuario(nome);

                soulie.gerarInteracao();

                //ESCOLHA COMUNIDADE

                auxiliar =
                        JOptionPane.showInputDialog(
                                soulie.mostrarFrase()
                                        + "\n\nEscolha sua comunidade:"
                                        + "\n1. Fitness"
                                        + "\n2. Tecnologia"
                                        + "\n3. Jogos"
                        );

                int opcao =
                        Integer.parseInt(auxiliar);

                String nomeComunidade="";

                switch(opcao){

                    case 1:

                        nomeComunidade="Fitness";

                        break;

                    case 2:

                        nomeComunidade="Tecnologia";

                        break;

                    case 3:

                        nomeComunidade="Jogos";

                        break;

                    default:

                        throw new Exception(
                                "Opção inválida!"
                        );

                }

                //COMUNIDADE

                Comunidade comunidade =
                        new Comunidade(
                                nome,
                                idade,
                                interesse,
                                LocalDate.now(),
                                nomeComunidade,
                                500,
                                interesse,
                                "Comunidade Soulie"
                        );

                comunidade.entrarComunidade();


                //POSTAGEM

                Feed feed = new Feed();

                String postagem =
                        JOptionPane.showInputDialog(
                                "Faça sua primeira postagem:"
                        );

                feed.criarPostagem(postagem);

                feed.curtirPostagem();

                feed.comentarPostagem();


                //MISSÃO

                Missao missao =
                        new Missao(
                                "Primeira interação",
                                100,
                                LocalDate.now().plusDays(7)
                        );


                //NOTIFICAÇÃO

                Notificacao notificacao =
                        new Notificacao(
                                "Nova Missão!",
                                "Complete sua missão e ganhe pontos",
                                LocalDate.now()
                        );


                //STREAK

                Streak streak =
                        new Streak();

                streak.registrarEntrada();

                streak.atualizarRecorde();


                //ENGAJAMENTO INTERFACE

                float engajamento =
                        soulie.calcularEngajamento();


                JOptionPane.showMessageDialog(

                        null,

                        "=== PERFIL ==="

                                +"\n"

                                +acesso.mostrarPerfil()

                                +"\n\nPrimeiro Login: "
                                +acesso.getPrimeiroLogin().format(dtf)

                                +"\nEtapa Cadastro: "
                                +acesso.mostrarEtapa()

                                +"\n\n=== COMUNIDADE ==="

                                +"\nNome: "
                                +comunidade.getNomeComunidade()

                                +"\nMembros: "
                                +comunidade.mostrarMembros()

                                +"\n\n=== FEED ==="

                                +"\nPostagem: "
                                +feed.getPostagem()

                                +"\nCurtidas: "
                                +feed.getCurtidas()

                                +"\nComentários: "
                                +feed.getComentarios()

                                +"\n\n=== MISSÃO ==="

                                +"\n"
                                +missao.getNomeMissao()

                                +"\nRecompensa: "
                                +missao.mostrarPremio()

                                +"\n\n=== NOTIFICAÇÃO ==="

                                +"\n"
                                +notificacao.exibir()

                                +"\n\n=== STREAK ==="

                                +"\nDias: "
                                +streak.mostrarDias()





                );


                escolha =
                        JOptionPane.showInputDialog(
                                "Deseja continuar?"
                        );


            }

            catch(Exception e){

                JOptionPane.showMessageDialog(
                        null,
                        e.getMessage(),
                        "ERRO",
                        JOptionPane.ERROR_MESSAGE
                );

            }

        }

        JOptionPane.showMessageDialog(
                null,
                "Obrigado por usar Soulie!"
        );

    }
}

