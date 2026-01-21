import java.util.*;
class Main{
    public static void main(String [] agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size:");
        int size = sc.nextInt();
        for(int i=0;i<size;i++){
            for(int j=0;j<size-(i*1);j++){
                System.out.print(" ");
            }
            for(int k=0;k<=i;k++){
                System.out.print("* ");
            }
            
            System.out.println();
            
        }
    }
}