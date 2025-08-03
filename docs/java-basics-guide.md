# Java Basics Guide for Beginners

## Table of Contents
1. [What is Java?](#what-is-java)
2. [Setting Up Your Environment](#setting-up-your-environment)
3. [Your First Java Program](#your-first-java-program)
4. [Basic Syntax](#basic-syntax)
5. [Variables and Data Types](#variables-and-data-types)
6. [Operators](#operators)
7. [Control Flow](#control-flow)
8. [Arrays](#arrays)
9. [Methods](#methods)
10. [Classes and Objects](#classes-and-objects)
11. [Practice Exercises](#practice-exercises)

## What is Java?

Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in 1995. It's known for:

- **Platform Independence**: "Write once, run anywhere" - Java code runs on any device with a Java Virtual Machine (JVM)
- **Object-Oriented**: Everything in Java is an object
- **Strongly Typed**: Variables must be declared with their data type
- **Automatic Memory Management**: Garbage collection handles memory cleanup
- **Rich Standard Library**: Extensive built-in classes and methods

## Setting Up Your Environment

### Prerequisites
1. **Install Java Development Kit (JDK)**
   - Download from Oracle's website or use OpenJDK
   - Minimum version: JDK 8 or higher (JDK 17+ recommended)

2. **Install an IDE (Integrated Development Environment)**
   - **IntelliJ IDEA** (recommended for beginners)
   - **Eclipse**
   - **VS Code** with Java extensions
   - **NetBeans**

### Verify Installation
Open terminal/command prompt and run:
```bash
java -version
javac -version
```

## Your First Java Program

Let's start with the classic "Hello, World!" program:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Understanding the Code:
- `public class HelloWorld`: Declares a public class named HelloWorld
- `public static void main(String[] args)`: The main method - entry point of the program
- `System.out.println()`: Prints text to the console

### How to Run:
1. Save the file as `HelloWorld.java` (filename must match class name)
2. Compile: `javac HelloWorld.java`
3. Run: `java HelloWorld`

## Basic Syntax

### Key Rules:
1. **Case Sensitive**: `Hello` and `hello` are different
2. **Semicolons**: Every statement ends with `;`
3. **Curly Braces**: Code blocks are enclosed in `{}`
4. **File Naming**: Java file name must match the public class name

### Comments:
```java
// Single line comment

/*
 * Multi-line comment
 * Can span multiple lines
 */

/**
 * Documentation comment (Javadoc)
 * Used for generating documentation
 */
```

## Variables and Data Types

### Primitive Data Types:

| Type | Size | Range | Example |
|------|------|-------|---------|
| `byte` | 8 bits | -128 to 127 | `byte age = 25;` |
| `short` | 16 bits | -32,768 to 32,767 | `short year = 2024;` |
| `int` | 32 bits | -2^31 to 2^31-1 | `int count = 1000;` |
| `long` | 64 bits | -2^63 to 2^63-1 | `long population = 8000000000L;` |
| `float` | 32 bits | 3.4e-038 to 3.4e+038 | `float price = 19.99f;` |
| `double` | 64 bits | 1.7e-308 to 1.7e+308 | `double pi = 3.14159;` |
| `boolean` | 1 bit | true/false | `boolean isActive = true;` |
| `char` | 16 bits | Unicode characters | `char grade = 'A';` |

### Variable Declaration:
```java
// Declaration
int number;

// Declaration and initialization
int number = 10;

// Multiple variables of same type
int x = 1, y = 2, z = 3;

// Using var (Java 10+)
var message = "Hello"; // Type is inferred
```

### Reference Data Types:
```java
// String (most commonly used)
String name = "John Doe";

// Arrays
int[] numbers = {1, 2, 3, 4, 5};

// Custom classes
Person person = new Person();
```

## Operators

### Arithmetic Operators:
```java
int a = 10, b = 3;

int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3
int remainder = a % b;  // 1

// Increment/Decrement
int x = 5;
x++; // x = 6 (post-increment)
++x; // x = 7 (pre-increment)
x--; // x = 6 (post-decrement)
--x; // x = 5 (pre-decrement)
```

### Assignment Operators:
```java
int x = 10;
x += 5;  // x = x + 5 (15)
x -= 3;  // x = x - 3 (12)
x *= 2;  // x = x * 2 (24)
x /= 4;  // x = x / 4 (6)
x %= 4;  // x = x % 4 (2)
```

### Comparison Operators:
```java
int a = 5, b = 10;

boolean equal = (a == b);        // false
boolean notEqual = (a != b);     // true
boolean lessThan = (a < b);      // true
boolean greaterThan = (a > b);   // false
boolean lessEqual = (a <= b);    // true
boolean greaterEqual = (a >= b); // false
```

### Logical Operators:
```java
boolean x = true, y = false;

boolean and = x && y;  // false (logical AND)
boolean or = x || y;   // true (logical OR)
boolean not = !x;      // false (logical NOT)
```

## Control Flow

### If Statements:
```java
int age = 18;

if (age >= 18) {
    System.out.println("You are an adult");
} else if (age >= 13) {
    System.out.println("You are a teenager");
} else {
    System.out.println("You are a child");
}
```

### Switch Statement:
```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}
```

### Loops:

#### For Loop:
```java
// Traditional for loop
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}

// Enhanced for loop (for arrays/collections)
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println(number);
}
```

#### While Loop:
```java
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}
```

#### Do-While Loop:
```java
int count = 0;
do {
    System.out.println("Count: " + count);
    count++;
} while (count < 5);
```

## Arrays

### Creating Arrays:
```java
// Method 1: Declare and initialize
int[] numbers = {1, 2, 3, 4, 5};

// Method 2: Declare size first
int[] scores = new int[5];
scores[0] = 85;
scores[1] = 92;
scores[2] = 78;
scores[3] = 95;
scores[4] = 88;

// Method 3: Declare and initialize with size
int[] grades = new int[]{90, 85, 92, 78, 95};
```

### Array Operations:
```java
int[] numbers = {1, 2, 3, 4, 5};

// Accessing elements
int first = numbers[0];  // 1
int last = numbers[numbers.length - 1];  // 5

// Length of array
int length = numbers.length;  // 5

// Iterating through array
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Enhanced for loop
for (int number : numbers) {
    System.out.println(number);
}
```

### Multi-dimensional Arrays:
```java
// 2D array
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
int element = matrix[1][2];  // 6

// Iterating through 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
```

## Methods

### Method Declaration:
```java
public class Calculator {
    // Method with no parameters and no return value
    public void sayHello() {
        System.out.println("Hello!");
    }
    
    // Method with parameters and return value
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method with multiple parameters
    public double calculateArea(double length, double width) {
        return length * width;
    }
    
    // Method with default parameter (using method overloading)
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public int multiply(int a, int b, int c) {
        return a * b * c;
    }
}
```

### Method Overloading:
```java
public class MathUtils {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

### Recursion:
```java
public class Factorial {
    public static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}
```

## Classes and Objects

### Basic Class Structure:
```java
public class Person {
    // Instance variables (attributes)
    private String name;
    private int age;
    private String email;
    
    // Constructor
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    // Default constructor
    public Person() {
        this.name = "Unknown";
        this.age = 0;
        this.email = "";
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getEmail() {
        return email;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    // Method
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
    
    // toString method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}
```

### Creating and Using Objects:
```java
public class Main {
    public static void main(String[] args) {
        // Creating objects
        Person person1 = new Person("John Doe", 25, "john@email.com");
        Person person2 = new Person(); // Uses default constructor
        
        // Using methods
        person1.introduce();
        person2.setName("Jane Smith");
        person2.setAge(30);
        person2.introduce();
        
        // Using getters
        System.out.println("Person 1's name: " + person1.getName());
        
        // Using toString
        System.out.println(person1);
    }
}
```

### Inheritance:
```java
// Parent class
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void makeSound() {
        System.out.println("Some animal sound");
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}
```

## Practice Exercises

### Exercise 1: Basic Calculator
Create a simple calculator that can perform basic arithmetic operations.

### Exercise 2: Number Guessing Game
Create a game where the computer generates a random number and the user tries to guess it.

### Exercise 3: Student Grade Calculator
Create a program that calculates the average grade for a student based on multiple test scores.

### Exercise 4: Simple Bank Account
Create a BankAccount class with methods to deposit, withdraw, and check balance.

### Exercise 5: Temperature Converter
Create a program that converts temperatures between Celsius and Fahrenheit.

## Next Steps

After mastering these basics, you can explore:

1. **Advanced OOP Concepts**: Polymorphism, Abstraction, Interfaces
2. **Collections Framework**: Lists, Sets, Maps
3. **Exception Handling**: Try-catch blocks, custom exceptions
4. **File I/O**: Reading and writing files
5. **Threading**: Multithreading and concurrency
6. **Java 8+ Features**: Lambda expressions, Streams, Optional
7. **Design Patterns**: Common software design patterns
8. **Testing**: Unit testing with JUnit
9. **Build Tools**: Maven, Gradle
10. **Frameworks**: Spring Boot, Hibernate

## Tips for Learning Java

1. **Practice Daily**: Code something every day, even if it's just a small program
2. **Read Code**: Look at existing Java code to understand different approaches
3. **Use an IDE**: IDEs provide helpful features like auto-completion and error detection
4. **Debug**: Learn to use debugging tools to understand how your code executes
5. **Join Communities**: Participate in Java forums and communities
6. **Build Projects**: Apply your knowledge by building real projects
7. **Read Documentation**: Java has excellent documentation - use it!

Remember: Programming is a skill that improves with practice. Don't get discouraged if you don't understand everything immediately. Keep coding, keep learning, and you'll get better with time! 