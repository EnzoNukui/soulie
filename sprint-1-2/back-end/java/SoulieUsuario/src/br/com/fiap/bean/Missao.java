package br.com.fiap.bean;

import java.time.LocalDate;

public class Missao {
    //Atributos
    private String nomeMissao;
    private float recompensa;
    private LocalDate prazo;

    //Construtores

    public Missao(){}

    public Missao(String nomeMissao,
                  float recompensa,
                  LocalDate prazo){

        this.nomeMissao = nomeMissao;
        this.recompensa = recompensa;
        this.prazo = prazo;
    }

    //Getters

    public String getNomeMissao() {
        return nomeMissao;
    }

    //Métodos

    public float mostrarPremio(){

        return recompensa;

    }
}
