package br.com.fiap.bean;

import java.time.LocalDate;

public class PrimeiroAcesso extends Usuario{
    //Atributos
    private LocalDate primeiroLogin;
    private int etapaCadastro;
    private String objetivo;

    //Construtores
    public PrimeiroAcesso() {}

    public PrimeiroAcesso(String nome,
                          int idade,
                          String interesse,
                          LocalDate dataCadastro,
                          LocalDate primeiroLogin,
                          int etapaCadastro,
                          String objetivo) {

        super(nome, idade, interesse, dataCadastro);

        this.primeiroLogin = primeiroLogin;
        this.etapaCadastro = etapaCadastro;
        this.objetivo = objetivo;
    }

    //Getters e Setters

    public LocalDate getPrimeiroLogin() {
        return primeiroLogin;
    }

    public void setPrimeiroLogin(LocalDate primeiroLogin) {
        this.primeiroLogin = primeiroLogin;
    }

    public int getEtapaCadastro() {
        return etapaCadastro;
    }

    public void setEtapaCadastro(int etapaCadastro) {
        this.etapaCadastro = etapaCadastro;
    }

    public String getObjetivo() {
        return objetivo;
    }

    public void setObjetivo(String objetivo) {
        this.objetivo = objetivo;
    }

    //Métodos

    public void iniciarCadastro(){
        etapaCadastro++;
    }

    public int mostrarEtapa(){
        return etapaCadastro;
    }

}
