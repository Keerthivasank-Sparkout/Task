import java.util.*;
class Main{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Table Number:");
        int table = sc.nextInt();
        System.out.println("Enter the Limit to table:");
        int limit=sc.nextInt();
        for(int i=1;i<=limit;i++){
            System.out.println(i+"x"+table+"="+(table*i));
        }
        
    }
}