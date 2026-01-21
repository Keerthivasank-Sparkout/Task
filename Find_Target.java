import java.util.*;
class Main{
    public static void main(String [] agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size of the Array:");
        int size = sc.nextInt();
        int [] arr = new int[size];
        for(int i=0;i<size;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println("Enter the Target to Find:");
        int target = sc.nextInt();
        for(int i=0;i<arr.length;i++){
            if( arr[i] == target){
                System.out.println("Given Integer is Present in Array And Position is: "+ i);
                return;
            }
            else{
                continue;
            }
        }
        System.out.println("Given Integer is Not Present in the Array");
        
    }
}