import java.util.Arrays;
import java.util.Scanner;

//5. Escreva um programa que receba duas palavras e determine se elas são
// anagramas (se possuem as mesmas letras, mas em ordem diferente).
// Exemplo: "amor" e "roma".

public class Anagrama {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine();

        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine();

        if (saoAnagramas(palavra1, palavra2)) {
            System.out.println("As palavras são anagramas.");
        } else {
            System.out.println("As palavras não são anagramas.");
        }

        scanner.close();
    }

    public static boolean saoAnagramas(String palavra1, String palavra2) {
        char[] arr1 = palavra1.toLowerCase().toCharArray();
        char[] arr2 = palavra2.toLowerCase().toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        return Arrays.equals(arr1, arr2);
    }
}
