import java.util.Random;
import java.util.Scanner;


//6. Crie um jogo em que o programa escolhe um número entre 1 e 50, e o/a usuário/a
//deve adivinhar. O programa informa apenas se o palpite está certo ou
//errado. O jogo termina quando o número é adivinhado.

public class AdivinhaNumero {
    public static void main(String[] args) {
        Random random = new Random();
        int numeroSecreto = random.nextInt(50) + 1;
        Scanner scanner = new Scanner(System.in);
        int palpite;

        System.out.println("Tente adivinhar o número entre 1 e 50!");

        do {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();

            if (palpite == numeroSecreto) {
                System.out.println("Parabéns! Você acertou!");
            } else {
                System.out.println("Errado! Tente novamente.");
            }
        } while (palpite != numeroSecreto);

        scanner.close();
    }
}
