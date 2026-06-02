package br.com.fiap.bean;

import java.time.LocalDate;

public class Comunidade extends Usuario{
    //Atributos
    private String nomeComunidade;
    private int membros;
    private String categoria;
    private String descricao;

    //Construtores

    public Comunidade(){}

    public Comunidade(String nome,
                      int idade,
                      String interesse,
                      LocalDate dataCadastro,
                      String nomeComunidade,
                      int membros,
                      String categoria,
                      String descricao) {

        super(nome,idade,interesse,dataCadastro);

        this.nomeComunidade = nomeComunidade;
        this.membros = membros;
        this.categoria = categoria;
        this.descricao = descricao;
    }

    //Getters e Setters

    public String getNomeComunidade() {
        return nomeComunidade;
    }

    public void setNomeComunidade(String nomeComunidade) {
        this.nomeComunidade = nomeComunidade;
    }

    public int getMembros() {
        return membros;
    }

    public void setMembros(int membros) {
        this.membros = membros;
    }

    //Métodos

    public void entrarComunidade(){
        membros++;
    }

    public void sairComunidade(){
        membros--;
    }

    public int mostrarMembros(){
        return membros;
    }
}
