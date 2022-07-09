package JAVA;
import java.util.Scanner;
public class test{
    public static void main(String[] args) {
        int a = 6;
        int b = 2;
        a += b++;
        System.out.println(a+" "+b);
        Scanner scan = new Scanner(System.in);
        System.out.print("nhap ten: ");
        String name = scan.nextLine();
        System.out.println(name);
    }
}