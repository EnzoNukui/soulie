package br.com.fiap.bean;

import java.time.LocalDate;

public class Usuario {
    private String nome;
    private int idade;
    private String interesse;
    private LocalDate dataCadastro;
    private int diasConsecutivos;

    //Construtor vazio
    public Usuario(){}

    //Construtor completo
    public Usuario(String nome,
                   int idade,
                   String interesse,
                   LocalDate dataCadastro){

        this.nome = nome;
        this.idade = idade;
        this.interesse = interesse;
        this.dataCadastro = dataCadastro;

    }

    //Getters e Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getInteresse() {
        return interesse;
    }

    public void setInteresse(String interesse) {
        this.interesse = interesse;
    }

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public int getDiasConsecutivos() {
        return diasConsecutivos;
    }

    public void setDiasConsecutivos(int diasConsecutivos) {
        this.diasConsecutivos = diasConsecutivos;
    }

    //Métodos

    public String mostrarPerfil(){

        return "Nome: " + nome +
                "\nIdade: " + idade +
                "\nInteresse: " + interesse;

    }

    public void acessarAplicativo(){

        diasConsecutivos++;

    }


}
