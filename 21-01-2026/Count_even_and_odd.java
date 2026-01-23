//Count Even and Odd Digits in an Array
import java.util.*;
class Main
{
	public static void main(String[] args) {
	    Scanner sc = new Scanner(System.in); // Getting input from user we need the get a object for scanner class
        System.out.println("Enter the Size of the Array:");
        int size = sc.nextInt();
        int [] arr = new int[size];
        System.out.println("Enter the Elements for Array:");
        for(int i=0;i<size;i++){
            arr[i]=sc.nextInt();
        }
        int even_result=0;
        int odd_result=0;
        for(int i=0;i<arr.length;i++){ //first iterate the value using for loop 
            if(arr[i] % 2 == 0){ // here we check the index is EVEN, if index is even get into the block
                even_result++; //inside we increment the even_result
            }
            else if(arr[i] % 2 != 0){// here we check the index is ODD, if index is even get into the block
                odd_result++;//inside we increment the odd_result
            }
        }
        System.out.println("Count of Even Count: "+even_result);//After calculate the result here we print the output
        System.out.println("Count of Odd Count: "+odd_result);//After calculate the result here we print the output
        
	}
}