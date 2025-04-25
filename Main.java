package maio;

import java.time.LocalDate;
import java.time.Period;

// Classe base Aluno
class Aluno {
    private String nome;
    private String curso;
    private LocalDate nascimento;
    private int aulasAssistidas;

    // Construtor da classe Aluno
    public Aluno(String nome, String curso, LocalDate nascimento, int aulasAssistidas) {
        this.nome = nome;
        this.curso = curso;
        this.nascimento = nascimento;
        this.aulasAssistidas = aulasAssistidas;
    }

    // Método de saudação (vai ser sobrescrito na classe Professor)
    public void saudacao() {
        // Saudação informal, estilo aluno
        System.out.println("E aí! Eu sou " + nome + ", to fazendo o curso de " + curso + ". Bora estudar juntos!");
    }

    // Método que calcula idade com base na data de nascimento
    public int calcularIdade() {
        return Period.between(nascimento, LocalDate.now()).getYears();
    }

    // Método que retorna quantas aulas o aluno já assistiu
    public String relacaoAulas() {
        return "Você assistiu " + aulasAssistidas + " aulas até agora!";
    }

    // Método que simula o aluno recebendo uma aula
    public void receberAula(String aula) {
        System.out.println(nome + " recebeu aula: " + aula);
    }

    // Getter para acessar o nome do aluno (usado na classe Professor)
    public String getNome() {
        return nome;
    }
}

// Classe Professor que herda de Aluno
class Professor extends Aluno {
    private static final String curso = null;
        private String formacao;
        private String area;
    
        // Construtor da classe Professor
        public Professor(String nome, String curso, LocalDate nascimento, int aulasAssistidas, String formacao, String area) {
            // Chama o construtor da classe Aluno
            super(nome, curso, nascimento, aulasAssistidas);
            this.formacao = formacao;
            this.area = area;
        }
    
        // Sobrescreve o método saudacao() com um estilo mais formal
        @Override
        public void saudacao() {
            System.out.println("Bom dia. Sou o professor " + getNome() +
                               ", formado em " + formacao + " e especializado em " + area +
                               ". É um prazer recebê-los na aula de " + curso + ".");
    }

    // Método exclusivo do professor para ministrar aula
    public String ministraAula(String nomeAula) {
        return "O professor " + getNome() + " com formação em " + formacao +
               " e área de atuação em " + area + " vai ministrar a aula: " + nomeAula;
    }
}

// Classe principal onde tudo acontece
public class Main {
    public static void main(String[] args) {
        // Criando um objeto Aluno
        Aluno aluno = new Aluno("João", "Java Básico", LocalDate.of(2000, 5, 10), 12);

        // Criando um objeto Professor, mas com tipo Aluno (isso é polimorfismo!)
        Aluno professor = new Professor("Carlos", "Java Avançado", LocalDate.of(1985, 3, 15), 5, "Computação", "Desenvolvimento de Software");

        // Ambos usam o mesmo método saudacao(), mas o comportamento é diferente
        aluno.saudacao();       // Chama o método da classe Aluno
        professor.saudacao();   // Chama o método sobrescrito da classe Professor

        System.out.println(); // Linha em branco para separar visualmente

        // Exibe informações sobre o aluno
        System.out.println(aluno.relacaoAulas());
        System.out.println("Idade do aluno: " + aluno.calcularIdade());

        // Verifica se o objeto professor é realmente um Professor
        if (professor instanceof Professor) {
            // Faz um cast para acessar métodos exclusivos do professor
            Professor prof = (Professor) professor;

            // Professor ministra aula
            String aula = prof.ministraAula("Herança em Java");

            // Aluno recebe essa aula
            aluno.receberAula(aula);
        }
    }
}
