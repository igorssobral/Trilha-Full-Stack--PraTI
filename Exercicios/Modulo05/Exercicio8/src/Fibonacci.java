import java.util.Scanner;

//3. Implemente um programa que calcule e exiba os primeiros n números da sequência de Fibonacci.
// n deve ser fornecido pelo/a usuário/a.


public class Fibonacci {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.print("Digite o número n: ");
        int n = leitor.nextInt();

        int a = 0, b = 1;

        System.out.println("Sequência de Fibonacci até " + n + " termos:");
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int temp = a;
            a = b;
            b = temp + b;
        }
    }
}
