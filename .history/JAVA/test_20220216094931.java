package JAVA;
import java.util.Random;
import java.util.Scanner;

public class test{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double a = 0;
        for(int i = 1; i<10;i++){
            // a = Math.random();
            // a *= 10 + 1;
            // int b = (int) a;
            Random rand = new Random();
            int b = rand.nextInt(10)+1;
            System.out.println(b);
        }

    }
}