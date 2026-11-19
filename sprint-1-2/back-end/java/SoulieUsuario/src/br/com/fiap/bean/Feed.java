package br.com.fiap.bean;

public class Feed extends  Usuario{
    //Atributos
    private String postagem;
    private int curtidas;
    private int comentarios;
    private String categoria;

    //Construtores

    public Feed(){}

    //Métodos

    public void criarPostagem(String texto){
        postagem = texto;
    }

    public void curtirPostagem(){
        curtidas++;
    }

    public void comentarPostagem(){
        comentarios++;
    }

    //Getters

    public String getPostagem() {
        return postagem;
    }

    public int getCurtidas() {
        return curtidas;
    }

    public int getComentarios() {
        return comentarios;
    }
}
