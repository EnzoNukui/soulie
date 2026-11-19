package br.com.fiap.bean;

import java.time.LocalDate;

public class Notificacao {
    //Atributos

    private String titulo;
    private String mensagem;
    private LocalDate horario;

    //Construtores

    public Notificacao(){}

    public Notificacao(String titulo,
                       String mensagem,
                       LocalDate horario){

        this.titulo=titulo;
        this.mensagem=mensagem;
        this.horario=horario;
    }

    //Métodos

    public String exibir(){

        return titulo +
                "\n" +
                mensagem;

    }
}
