import java.util.Scanner;

//4. Crie um programa que leia um número inteiro e exiba o número invertido. Exemplo: se o usuário digitar 1234,
// o programa deve exibir 4321.

public class InverterNumero {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.print("Digite um número inteiro: ");
        int numero = leitor.nextInt();

        int numeroInvertido = 0;
        while (numero != 0) {
            int digito = numero % 10;
            numeroInvertido = numeroInvertido * 10 + digito;
            numero /= 10;
        }

        System.out.println("Número invertido: " + numeroInvertido);
    }
}
