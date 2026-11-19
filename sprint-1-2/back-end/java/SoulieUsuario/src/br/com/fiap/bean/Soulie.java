package br.com.fiap.bean;

public class Soulie implements Experiencia{
    private String nomeAvatar;
    private String humor;
    private String fraseAtual;
    private int mensagensEnviadas;
    private float nivelConexao;

    public Soulie(){}

    public Soulie(String nomeAvatar, String humor) {
        this.nomeAvatar = nomeAvatar;
        this.humor = humor;
    }

    public String getNomeAvatar() {
        return nomeAvatar;
    }

    public void setNomeAvatar(String nomeAvatar) {
        this.nomeAvatar = nomeAvatar;
    }

    public String getHumor() {
        return humor;
    }

    public void setHumor(String humor) {
        this.humor = humor;
    }

    public String getFraseAtual() {
        return fraseAtual;
    }

    public void setFraseAtual(String fraseAtual) {
        this.fraseAtual = fraseAtual;
    }

    public int getMensagensEnviadas() {
        return mensagensEnviadas;
    }

    public void setMensagensEnviadas(int mensagensEnviadas) {
        this.mensagensEnviadas = mensagensEnviadas;
    }

    public float getNivelConexao() {
        return nivelConexao;
    }

    public void setNivelConexao(float nivelConexao) {
        this.nivelConexao = nivelConexao;
    }

    public void enviarMensagem(String mensagem){

        fraseAtual = mensagem;

        mensagensEnviadas++;

    }

    public void incentivarUsuario(String nome){

        fraseAtual="Olá "+nome+
                " vamos movimentar a SoulUp!";

    }

    public String mostrarFrase(){

        return fraseAtual;

    }

    @Override
    public float calcularEngajamento() {

        return mensagensEnviadas*1.5f;

    }

    @Override
    public void gerarInteracao() {

        mensagensEnviadas++;

    }
}
