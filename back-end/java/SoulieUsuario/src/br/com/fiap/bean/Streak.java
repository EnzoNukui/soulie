package br.com.fiap.bean;

import java.time.LocalDate;

public class Streak extends Usuario {
    //Atributos

    private int diasSeguidos;
    private int recorde;
    private LocalDate ultimaEntrada;

    //Construtores

    public Streak() {
    }

    //Métodos

    public void registrarEntrada() {

        diasSeguidos++;

    }

    public void atualizarRecorde() {

        if (diasSeguidos > recorde) {

            recorde = diasSeguidos;

        }

    }

    public int mostrarDias() {

        return diasSeguidos;

    }
}