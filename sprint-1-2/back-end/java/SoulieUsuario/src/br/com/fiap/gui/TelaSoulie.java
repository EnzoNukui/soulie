package br.com.fiap.gui;

import br.com.fiap.bean.*;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.time.LocalDate;

public class TelaSoulie extends JFrame implements ActionListener {

    //Componentes

    JLabel lblTitulo,lblImagem,lblPerfil;
    JLabel lblNome,lblIdade,lblInteresse,lblComunidade;

    JTextField txtNome,txtIdade;

    JComboBox<String> cbInteresse;
    JComboBox<String> cbComunidade;

    JButton btnEntrar;

    JTextArea areaResultado;

    public TelaSoulie(){

        //Janela

        setTitle("Soulie");

        setSize(700,750);

        setLayout(null);

        setLocationRelativeTo(null);

        setDefaultCloseOperation(EXIT_ON_CLOSE);


        //Cor fundo

        getContentPane().setBackground(

                new Color(
                        245,
                        240,
                        255
                )

        );


        //Título

        lblTitulo =
                new JLabel("SOULIE");

        lblTitulo.setFont(

                new Font(
                        "Arial",
                        Font.BOLD,
                        30
                )

        );


        lblTitulo.setForeground(

                new Color(
                        147,
                        112,
                        219
                )

        );


        lblTitulo.setBounds(
                280,
                20,
                200,
                40
        );


        //Imagem

        ImageIcon iconeOriginal =
                new ImageIcon(
                        getClass().getResource(
                                "./images/imagem_soulie.png"
                        )
                );

        Image imagemRedimensionada =
                iconeOriginal.getImage()
                        .getScaledInstance(
                                220,
                                220,
                                Image.SCALE_SMOOTH
                        );

        ImageIcon icone =
                new ImageIcon(
                        imagemRedimensionada
                );

        lblImagem =
                new JLabel(icone);

        lblImagem.setBounds(
                240,
                70,
                220,
                220
        );

        //Nome

        lblNome =
                new JLabel("Nome:");

        lblNome.setBounds(
                70,
                280,
                100,
                30
        );


        txtNome =
                new JTextField();

        txtNome.setBounds(
                180,
                280,
                220,
                30
        );


        //Idade

        lblIdade =
                new JLabel("Idade:");

        lblIdade.setBounds(
                70,
                330,
                100,
                30
        );


        txtIdade =
                new JTextField();

        txtIdade.setBounds(
                180,
                330,
                220,
                30
        );


        //Interesse

        lblInteresse =
                new JLabel(
                        "Interesse:"
                );

        lblInteresse.setBounds(
                70,
                380,
                100,
                30
        );


        cbInteresse =
                new JComboBox<>();

        cbInteresse.addItem(
                "Fitness"
        );

        cbInteresse.addItem(
                "Tecnologia"
        );

        cbInteresse.addItem(
                "Jogos"
        );


        cbInteresse.setBounds(
                180,
                380,
                220,
                30
        );


        //Comunidade

        lblComunidade =
                new JLabel(
                        "Comunidade:"
                );


        lblComunidade.setBounds(
                70,
                430,
                120,
                30
        );


        cbComunidade =
                new JComboBox<>();


        cbComunidade.addItem(
                "Fitness"
        );

        cbComunidade.addItem(
                "Tecnologia"
        );

        cbComunidade.addItem(
                "Jogos"
        );


        cbComunidade.setBounds(
                180,
                430,
                220,
                30
        );


        //Botão


        btnEntrar =
                new JButton(
                        "Entrar"
                );


        btnEntrar.setBounds(
                230,
                500,
                150,
                40
        );


        btnEntrar.setBackground(

                new Color(
                        186,
                        155,
                        255
                )

        );


        btnEntrar.setForeground(
                Color.WHITE
        );
        lblPerfil =
                new JLabel("PERFIL");

        lblPerfil.setFont(
                new Font(
                        "Arial",
                        Font.BOLD,
                        18
                )
        );

        lblPerfil.setForeground(
                new Color(
                        147,
                        112,
                        219
                )
        );

        lblPerfil.setHorizontalAlignment(
                SwingConstants.CENTER
        );

        lblPerfil.setBounds(
                275,
                535,
                150,
                30
        );

        //Área resultado


        areaResultado =
                new JTextArea();

        areaResultado.setBounds(
                70,
                565,
                550,
                120
        );

        areaResultado.setEditable(false);


        //Adicionar componentes


        add(lblTitulo);

        add(lblImagem);

        add(lblNome);
        add(txtNome);

        add(lblIdade);
        add(txtIdade);

        add(lblInteresse);
        add(cbInteresse);

        add(lblComunidade);
        add(cbComunidade);

        add(btnEntrar);
        add(lblPerfil);
        add(areaResultado);


        btnEntrar.addActionListener(
                this
        );


        setVisible(true);

    }



    @Override
    public void actionPerformed(ActionEvent e) {

        try{

            String nome =
                    txtNome.getText();


            int idade =
                    Integer.parseInt(
                            txtIdade.getText()
                    );


            String interesse =
                    cbInteresse
                            .getSelectedItem()
                            .toString();


            String comunidadeEscolhida =
                    cbComunidade
                            .getSelectedItem()
                            .toString();


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


            Soulie soulie =
                    new Soulie(
                            "Soulie",
                            "Animada"
                    );


            soulie.incentivarUsuario(
                    nome
            );


            Comunidade comunidade =
                    new Comunidade(

                            nome,
                            idade,
                            interesse,
                            LocalDate.now(),
                            comunidadeEscolhida,
                            500,
                            interesse,
                            "Comunidade Soulie"

                    );


            Missao missao =
                    new Missao(
                            "Primeira interação",
                            100,
                            LocalDate.now().plusDays(7)
                    );


            Notificacao notificacao =
                    new Notificacao(
                            "Nova missão",
                            "Faça sua primeira postagem",
                            LocalDate.now()
                    );


            areaResultado.setText(

                    soulie.mostrarFrase()

                            +"\n\nNome: "
                            +nome

                            +"\nIdade: "
                            +idade

                            +"\nInteresse: "
                            +interesse

                            +"\nComunidade: "
                            +comunidade.getNomeComunidade()

                            +"\nMissão: "
                            +missao.getNomeMissao()

                            +"\n\n"

                            +notificacao.exibir()

            );

        }

        catch(Exception erro){

            JOptionPane.showMessageDialog(

                    null,

                    erro.getMessage(),

                    "Erro",

                    JOptionPane.ERROR_MESSAGE

            );

        }

    }

}