import java.util.Scanner;

//2.Crie um programa que leia uma palavra e verifique se ela é um palíndromo
// (se pode ser lida da mesma forma de trás para frente). Ignore
//diferenças entre maiúsculas e minúsculas.

public class Palindromo {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.print("Digite uma palavra: ");
        String palavra = leitor.nextLine().toLowerCase();

        String palavraInvertida = new StringBuilder(palavra).reverse().toString();

        if (palavra.equals(palavraInvertida)) {
            System.out.println("A palavra é um palíndromo.");
        } else {
            System.out.println("A palavra não é um palíndromo.");
        }
    }
}
