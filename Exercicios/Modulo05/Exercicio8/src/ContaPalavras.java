import java.util.Scanner;

//7. Escreva um programa que leia uma frase e conte o número de palavras nela.
// Considere que as palavras estão separadas por espaços em branco.

public class ContaPalavras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();

        int numeroDePalavras = contarPalavras(frase);

        System.out.println("Número de palavras na frase: " + numeroDePalavras);

        scanner.close();
    }

    public static int contarPalavras(String frase) {
        if (frase == null || frase.trim().isEmpty()) {
            return 0;
        }

        String[] palavras = frase.trim().split("\\s+");
        return palavras.length;
    }
}
