import java.util.Scanner;


//1. Escreva um programa que peça dois números e um operador (+, -, *, /).
// Realize a operação indicada e exiba o resultado.

public class Calculadora {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        double num1 = leitor.nextDouble();

        System.out.print("Digite o operador (+, -, *, /): ");
        char operador = leitor.next().charAt(0);

        System.out.print("Digite o segundo número: ");
        double num2 = leitor.nextDouble();

        double resultado = 0;
        boolean operacaoValida = true;

        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    resultado = num1 / num2;
                } else {
                    System.out.println("Erro: Divisão por zero não permitida.");
                    operacaoValida = false;
                }
                break;
            default:
                System.out.println("Operador inválido.");
                operacaoValida = false;
        }

        if (operacaoValida) {
            System.out.println("Resultado: " + resultado);
        }
    }
}
