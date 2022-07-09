package JAVA;
import java.util.Random;
import java.util.Scanner;

public class test{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // double a = 0;
        // for(int i = 1; i<10;i++){
        //     // a = Math.random();
        //     // a *= 10 + 1;
        //     // int b = (int) a;
        //     // Random rand = new Random();
        //     // int b = rand.nextInt(10)+1;
        //     // System.out.println(b);
        // }
        int n;System.out.print("nhap n: "); 
        n = scan.nextInt();
        int[] arr = new int[n];
        for(int i = 0;i<n;i++){
            System.out.print("nhap a["+i+"]");
            arr[i] = scan.nextInt();
        }
         System.out.print("mang vua nhap: ");
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }   
        scan.close();
    }
}