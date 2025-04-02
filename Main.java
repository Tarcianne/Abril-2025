package Abril;

import java.time.LocalDate;
import java.time.Period;

class Aluno {
    private String nome;
    private String curso;
    private LocalDate nascimento;
    private int aulasAssistidas;

    // Construtor
    public Aluno(String nome, String curso, LocalDate nascimento, int aulasAssistidas) {
        this.nome = nome;
        this.curso = curso;
        this.nascimento = nascimento;
        this.aulasAssistidas = aulasAssistidas;
    }

    // Método para saudação
    public void saudacao() {
        System.out.println("Olá! Eu sou " + nome + " e estou matriculado no curso " + curso + ". Seja bem-vindo!");
    }

    // Método para calcular a idade
    public int calcularIdade() {
        return Period.between(nascimento, LocalDate.now()).getYears();
    }

    // Método para retornar relação de aulas assistidas
    public String relacaoAulas() {
        return "Você assistiu " + aulasAssistidas + " aulas até agora!";
    }

    // Método para receber aula ministrada pelo professor
    public void receberAula(String aula) {
        System.out.println(nome + " recebeu aula: " + aula);
    }

    // Método Getter para nome
    public String getNome() {
        return nome;
    }
}

class Professor extends Aluno {
    private String formacao;
    private String area;

    // Construtor
    public Professor(String nome, String curso, LocalDate nascimento, int aulasAssistidas, String formacao, String area) {
        super(nome, curso, nascimento, aulasAssistidas); // Chamando o construtor da classe base
        this.formacao = formacao;
        this.area = area;
    }

    // Método para saudação (sobrescrito)
    @Override
    public void saudacao() {
        System.out.println("Olá! Eu sou o professor " + getNome() + ". Com formação em " + formacao +
                           ", atuo na área de " + area + ". Seja bem-vindo à aula!");
    }

    // Método para retornar aula ministrada
    public String ministraAula(String nomeAula) {
        return "O professor " + getNome() + " com formação em " + formacao +
               " e área de atuação em " + area + " vai ministrar a aula: " + nomeAula;
    }
}

public class Main {
    public static void main(String[] args) {
        // Criando um objeto Aluno
        Aluno aluno = new Aluno("João", "Java Básico", LocalDate.of(2000, 5, 10), 12);

        // Criando um objeto Professor
        Professor professor = new Professor("Carlos", "Java Avançado", LocalDate.of(1985, 3, 15), 5, "Computação", "Desenvolvimento de Software");

        // Saudação do aluno
        aluno.saudacao();

        // Verificando as aulas assistidas pelo aluno
        System.out.println(aluno.relacaoAulas());

        // Calculando a idade do aluno
        System.out.println("Idade do aluno: " + aluno.calcularIdade());

        // Saudação do professor
        professor.saudacao();

        // Professor ministrando uma aula
        String aula = professor.ministraAula("Herança em Java");

        // Aluno recebendo a aula ministrada pelo professor
        aluno.receberAula(aula);
    }
}


