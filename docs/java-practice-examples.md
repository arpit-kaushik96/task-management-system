# Java Practice Examples for Beginners

## Example 1: Hello World Program

Create a file named `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
    }
}
```

**To run:**
1. Save the file as `HelloWorld.java`
2. Open terminal/command prompt
3. Navigate to the file directory
4. Compile: `javac HelloWorld.java`
5. Run: `java HelloWorld`

## Example 2: Simple Calculator

Create a file named `Calculator.java`:

```java
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Simple Calculator");
        System.out.println("----------------");
        
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        System.out.println("\nChoose operation:");
        System.out.println("1. Addition (+)");
        System.out.println("2. Subtraction (-)");
        System.out.println("3. Multiplication (*)");
        System.out.println("4. Division (/)");
        
        System.out.print("Enter your choice (1-4): ");
        int choice = scanner.nextInt();
        
        double result = 0;
        String operation = "";
        
        switch (choice) {
            case 1:
                result = num1 + num2;
                operation = "Addition";
                break;
            case 2:
                result = num1 - num2;
                operation = "Subtraction";
                break;
            case 3:
                result = num1 * num2;
                operation = "Multiplication";
                break;
            case 4:
                if (num2 != 0) {
                    result = num1 / num2;
                    operation = "Division";
                } else {
                    System.out.println("Error: Cannot divide by zero!");
                    scanner.close();
                    return;
                }
                break;
            default:
                System.out.println("Invalid choice!");
                scanner.close();
                return;
        }
        
        System.out.printf("\n%s: %.2f %s %.2f = %.2f\n", 
                         operation, num1, getOperator(choice), num2, result);
        
        scanner.close();
    }
    
    private static String getOperator(int choice) {
        switch (choice) {
            case 1: return "+";
            case 2: return "-";
            case 3: return "*";
            case 4: return "/";
            default: return "";
        }
    }
}
```

## Example 3: Number Guessing Game

Create a file named `NumberGuessingGame.java`:

```java
import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        // Generate a random number between 1 and 100
        int secretNumber = random.nextInt(100) + 1;
        int attempts = 0;
        int maxAttempts = 10;
        
        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I'm thinking of a number between 1 and 100.");
        System.out.println("You have " + maxAttempts + " attempts to guess it.");
        
        while (attempts < maxAttempts) {
            System.out.print("\nEnter your guess: ");
            
            // Check if input is valid
            if (!scanner.hasNextInt()) {
                System.out.println("Please enter a valid number!");
                scanner.next(); // Clear invalid input
                continue;
            }
            
            int guess = scanner.nextInt();
            attempts++;
            
            if (guess < 1 || guess > 100) {
                System.out.println("Please enter a number between 1 and 100!");
                continue;
            }
            
            if (guess == secretNumber) {
                System.out.println("Congratulations! You guessed it in " + attempts + " attempts!");
                break;
            } else if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
                System.out.println("Attempts remaining: " + (maxAttempts - attempts));
            } else {
                System.out.println("Too high! Try again.");
                System.out.println("Attempts remaining: " + (maxAttempts - attempts));
            }
        }
        
        if (attempts >= maxAttempts) {
            System.out.println("\nGame Over! The number was: " + secretNumber);
        }
        
        scanner.close();
    }
}
```

## Example 4: Student Grade Calculator

Create a file named `GradeCalculator.java`:

```java
import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Student Grade Calculator");
        System.out.println("=======================");
        
        System.out.print("Enter student name: ");
        String studentName = scanner.nextLine();
        
        System.out.print("Enter number of subjects: ");
        int numSubjects = scanner.nextInt();
        
        if (numSubjects <= 0) {
            System.out.println("Invalid number of subjects!");
            scanner.close();
            return;
        }
        
        double totalMarks = 0;
        double maxMarks = numSubjects * 100; // Assuming each subject has 100 marks
        
        System.out.println("\nEnter marks for each subject (out of 100):");
        
        for (int i = 1; i <= numSubjects; i++) {
            System.out.print("Subject " + i + " marks: ");
            
            if (!scanner.hasNextDouble()) {
                System.out.println("Please enter a valid number!");
                scanner.next();
                i--; // Retry this subject
                continue;
            }
            
            double marks = scanner.nextDouble();
            
            if (marks < 0 || marks > 100) {
                System.out.println("Marks should be between 0 and 100!");
                i--; // Retry this subject
                continue;
            }
            
            totalMarks += marks;
        }
        
        double percentage = (totalMarks / maxMarks) * 100;
        String grade = calculateGrade(percentage);
        
        System.out.println("\n=== Results ===");
        System.out.println("Student Name: " + studentName);
        System.out.println("Total Marks: " + totalMarks + "/" + maxMarks);
        System.out.printf("Percentage: %.2f%%\n", percentage);
        System.out.println("Grade: " + grade);
        
        scanner.close();
    }
    
    private static String calculateGrade(double percentage) {
        if (percentage >= 90) {
            return "A+";
        } else if (percentage >= 80) {
            return "A";
        } else if (percentage >= 70) {
            return "B";
        } else if (percentage >= 60) {
            return "C";
        } else if (percentage >= 50) {
            return "D";
        } else {
            return "F";
        }
    }
}
```

## Example 5: Simple Bank Account

Create a file named `BankAccount.java`:

```java
import java.util.Scanner;

public class BankAccount {
    private String accountHolder;
    private double balance;
    private String accountNumber;
    
    public BankAccount(String accountHolder, String accountNumber, double initialBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New balance: $" + balance);
        } else {
            System.out.println("Invalid amount for deposit!");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("New balance: $" + balance);
        } else if (amount > balance) {
            System.out.println("Insufficient funds!");
        } else {
            System.out.println("Invalid amount for withdrawal!");
        }
    }
    
    public void checkBalance() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Current Balance: $" + balance);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Simple Bank Account System");
        System.out.println("=========================");
        
        System.out.print("Enter account holder name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter account number: ");
        String accountNumber = scanner.nextLine();
        
        System.out.print("Enter initial balance: $");
        double initialBalance = scanner.nextDouble();
        
        BankAccount account = new BankAccount(name, accountNumber, initialBalance);
        
        while (true) {
            System.out.println("\nChoose an option:");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");
            
            System.out.print("Enter your choice (1-4): ");
            int choice = scanner.nextInt();
            
            switch (choice) {
                case 1:
                    account.checkBalance();
                    break;
                case 2:
                    System.out.print("Enter amount to deposit: $");
                    double depositAmount = scanner.nextDouble();
                    account.deposit(depositAmount);
                    break;
                case 3:
                    System.out.print("Enter amount to withdraw: $");
                    double withdrawAmount = scanner.nextDouble();
                    account.withdraw(withdrawAmount);
                    break;
                case 4:
                    System.out.println("Thank you for using our banking system!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}
```

## Example 6: Temperature Converter

Create a file named `TemperatureConverter.java`:

```java
import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Temperature Converter");
        System.out.println("====================");
        
        while (true) {
            System.out.println("\nChoose conversion:");
            System.out.println("1. Celsius to Fahrenheit");
            System.out.println("2. Fahrenheit to Celsius");
            System.out.println("3. Celsius to Kelvin");
            System.out.println("4. Kelvin to Celsius");
            System.out.println("5. Exit");
            
            System.out.print("Enter your choice (1-5): ");
            int choice = scanner.nextInt();
            
            if (choice == 5) {
                System.out.println("Goodbye!");
                break;
            }
            
            if (choice < 1 || choice > 4) {
                System.out.println("Invalid choice! Please try again.");
                continue;
            }
            
            System.out.print("Enter temperature: ");
            double temperature = scanner.nextDouble();
            
            double converted = 0;
            String fromUnit = "";
            String toUnit = "";
            
            switch (choice) {
                case 1:
                    converted = celsiusToFahrenheit(temperature);
                    fromUnit = "Celsius";
                    toUnit = "Fahrenheit";
                    break;
                case 2:
                    converted = fahrenheitToCelsius(temperature);
                    fromUnit = "Fahrenheit";
                    toUnit = "Celsius";
                    break;
                case 3:
                    converted = celsiusToKelvin(temperature);
                    fromUnit = "Celsius";
                    toUnit = "Kelvin";
                    break;
                case 4:
                    converted = kelvinToCelsius(temperature);
                    fromUnit = "Kelvin";
                    toUnit = "Celsius";
                    break;
            }
            
            System.out.printf("%.2f° %s = %.2f° %s\n", 
                            temperature, fromUnit, converted, toUnit);
        }
        
        scanner.close();
    }
    
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }
    
    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
    
    public static double celsiusToKelvin(double celsius) {
        return celsius + 273.15;
    }
    
    public static double kelvinToCelsius(double kelvin) {
        return kelvin - 273.15;
    }
}
```

## Example 7: Array Operations

Create a file named `ArrayOperations.java`:

```java
import java.util.Arrays;
import java.util.Scanner;

public class ArrayOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Array Operations Demo");
        System.out.println("====================");
        
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();
        
        if (size <= 0) {
            System.out.println("Invalid array size!");
            scanner.close();
            return;
        }
        
        int[] numbers = new int[size];
        
        // Input array elements
        System.out.println("Enter " + size + " numbers:");
        for (int i = 0; i < size; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
        }
        
        // Display original array
        System.out.println("\nOriginal array: " + Arrays.toString(numbers));
        
        // Find maximum and minimum
        int max = findMax(numbers);
        int min = findMin(numbers);
        System.out.println("Maximum value: " + max);
        System.out.println("Minimum value: " + min);
        
        // Calculate sum and average
        int sum = calculateSum(numbers);
        double average = (double) sum / size;
        System.out.println("Sum: " + sum);
        System.out.printf("Average: %.2f\n", average);
        
        // Sort array
        int[] sortedArray = Arrays.copyOf(numbers, numbers.length);
        Arrays.sort(sortedArray);
        System.out.println("Sorted array: " + Arrays.toString(sortedArray));
        
        // Search for a number
        System.out.print("\nEnter a number to search: ");
        int searchNumber = scanner.nextInt();
        int index = linearSearch(numbers, searchNumber);
        
        if (index != -1) {
            System.out.println(searchNumber + " found at index " + index);
        } else {
            System.out.println(searchNumber + " not found in the array");
        }
        
        // Reverse array
        int[] reversedArray = reverseArray(numbers);
        System.out.println("Reversed array: " + Arrays.toString(reversedArray));
        
        scanner.close();
    }
    
    public static int findMax(int[] arr) {
        if (arr.length == 0) return Integer.MIN_VALUE;
        
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    public static int findMin(int[] arr) {
        if (arr.length == 0) return Integer.MAX_VALUE;
        
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
    
    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
    
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
    
    public static int[] reverseArray(int[] arr) {
        int[] reversed = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            reversed[i] = arr[arr.length - 1 - i];
        }
        return reversed;
    }
}
```

## How to Run These Examples

1. **Create the file**: Copy the code into a new file with the exact name shown (e.g., `HelloWorld.java`)
2. **Save the file**: Make sure the file extension is `.java`
3. **Open terminal/command prompt**: Navigate to the directory containing your file
4. **Compile**: Run `javac Filename.java` (e.g., `javac HelloWorld.java`)
5. **Run**: Run `java Filename` (e.g., `java HelloWorld`)

## Tips for Practice

1. **Start with HelloWorld**: Make sure you can compile and run the basic program
2. **Modify the examples**: Try changing values, adding new features, or combining concepts
3. **Debug errors**: Don't worry if you get errors - they're part of learning!
4. **Experiment**: Try different inputs and see what happens
5. **Add comments**: Practice adding comments to explain your code
6. **Break things**: Intentionally introduce errors to understand how Java handles them

## Common Compilation Errors and Solutions

- **"javac is not recognized"**: Java is not installed or not in PATH
- **"Cannot find symbol"**: Check spelling and make sure variables are declared
- **"Missing semicolon"**: Add `;` at the end of statements
- **"Public class must be in its own file"**: File name must match class name exactly

Keep practicing with these examples, and you'll build a solid foundation in Java programming! 