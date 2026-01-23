//Problem 1: Sum of Digits at Even Positions in an Array
import java.util.*;
class Main{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in); // Getting input from user we need the get a object for scanner class
        System.out.println("Enter the Size of the Array:");
        int size = sc.nextInt();
        int [] arr = new int[size];
        System.out.println("Enter the Elements for Array:");
        for(int i=0;i<size;i++){
            arr[i]=sc.nextInt();
        }
        int result=0;
        for(int i=0;i<arr.length;i++){ //first iterate the value using for loop 
            if(i % 2 == 0){ // here we check the index is even or not, if index is even get into the block
                result = result+arr[i]; //inside the add the value to the array
            }
        }
        System.out.println("Sum of the Even Position Digit: "+result);//After calculate the result here we print the output
        
    }
}