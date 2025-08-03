# Java Object-Oriented Programming (OOP) Complete Guide

## Table of Contents
1. [What is OOP?](#what-is-oop)
2. [Classes and Objects](#classes-and-objects)
3. [The Four Pillars of OOP](#the-four-pillars-of-oop)
   - [Encapsulation](#encapsulation)
   - [Inheritance](#inheritance)
   - [Polymorphism](#polymorphism)
   - [Abstraction](#abstraction)
4. [Advanced OOP Concepts](#advanced-oop-concepts)
5. [Design Patterns](#design-patterns)
6. [Best Practices](#best-practices)

## What is OOP?

Object-Oriented Programming is a programming paradigm that:
- **Organizes code into objects** that contain data and behavior
- **Models real-world entities** as software objects
- **Promotes code reusability** and maintainability
- **Provides a clear structure** for complex programs

### Real-World Analogy
Think of a **Car**:
- **Data (Attributes)**: brand, model, color, engine, fuel level
- **Behavior (Methods)**: start(), stop(), accelerate(), brake(), refuel()

## Classes and Objects

### Class vs Object

**Class** = Blueprint/Template
**Object** = Instance created from the class

```java
// Class (Blueprint)
public class Car {
    // Attributes (Data)
    private String brand;
    private String model;
    private String color;
    private double fuelLevel;
    private boolean isRunning;
    
    // Constructor
    public Car(String brand, String model, String color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.fuelLevel = 100.0;
        this.isRunning = false;
    }
    
    // Methods (Behavior)
    public void start() {
        if (fuelLevel > 0) {
            isRunning = true;
            System.out.println(brand + " " + model + " started!");
        } else {
            System.out.println("No fuel! Cannot start.");
        }
    }
    
    public void stop() {
        isRunning = false;
        System.out.println(brand + " " + model + " stopped.");
    }
    
    public void accelerate() {
        if (isRunning) {
            System.out.println(brand + " " + model + " is accelerating!");
        } else {
            System.out.println("Car is not running!");
        }
    }
    
    public void refuel(double amount) {
        fuelLevel = Math.min(100.0, fuelLevel + amount);
        System.out.println("Refueled. Current fuel level: " + fuelLevel + "%");
    }
    
    // Getters
    public String getBrand() { return brand; }
    public String getModel() { return model; }
    public String getColor() { return color; }
    public double getFuelLevel() { return fuelLevel; }
    public boolean isRunning() { return isRunning; }
}

// Creating Objects (Instances)
public class Main {
    public static void main(String[] args) {
        // Creating objects from the Car class
        Car myCar = new Car("Toyota", "Camry", "Blue");
        Car friendCar = new Car("Honda", "Civic", "Red");
        
        // Using object methods
        myCar.start();
        myCar.accelerate();
        myCar.stop();
        
        friendCar.start();
        friendCar.refuel(20.0);
    }
}
```

## The Four Pillars of OOP

### 1. Encapsulation

**Encapsulation** bundles data and methods that operate on that data within a single unit (class) and hides the internal state from outside access.

#### Key Concepts:
- **Data Hiding**: Private fields, public methods
- **Controlled Access**: Getters and setters
- **Information Hiding**: Implementation details are hidden

```java
public class BankAccount {
    // Private data (hidden from outside)
    private String accountNumber;
    private double balance;
    private String accountHolder;
    
    // Constructor
    public BankAccount(String accountHolder, String accountNumber, double initialBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    // Public methods (controlled access)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Invalid amount or insufficient funds!");
        }
    }
    
    // Getters (read-only access)
    public double getBalance() {
        return balance;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // No setter for balance - prevents direct modification
}

// Usage
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("John Doe", "123456789", 1000.0);
        
        account.deposit(500.0);
        account.withdraw(200.0);
        
        System.out.println("Balance: $" + account.getBalance());
        
        // account.balance = 1000000.0; // ❌ Won't work - balance is private
    }
}
```

#### Benefits of Encapsulation:
1. **Data Protection**: Prevents unauthorized access
2. **Flexibility**: Can change internal implementation without affecting external code
3. **Maintainability**: Easier to maintain and debug
4. **Reusability**: Classes can be reused in different contexts

### 2. Inheritance

**Inheritance** allows a class to inherit properties and methods from another class, promoting code reuse and establishing a relationship between classes.

#### Types of Inheritance:

##### Single Inheritance
```java
// Parent class (Superclass)
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void makeSound() {
        System.out.println(name + " makes a sound");
    }
}

// Child class (Subclass)
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
    
    public String getBreed() {
        return breed;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal("Generic Animal", 5);
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        
        animal.makeSound(); // "Generic Animal makes a sound"
        dog.makeSound();    // "Buddy barks: Woof! Woof!"
        
        dog.eat();          // Inherited from Animal
        dog.sleep();        // Inherited from Animal
        dog.fetch();        // Dog's own method
    }
}
```

##### Multi-level Inheritance
```java
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

public class Mammal extends Animal {
    protected boolean hasFur;
    
    public Mammal(String name, boolean hasFur) {
        super(name);
        this.hasFur = hasFur;
    }
    
    public void giveBirth() {
        System.out.println(name + " gives birth to live young");
    }
}

public class Dog extends Mammal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name, true); // Dogs have fur
        this.breed = breed;
    }
    
    public void bark() {
        System.out.println(name + " barks!");
    }
}
```

##### Hierarchical Inheritance
```java
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    public void bark() {
        System.out.println(name + " barks!");
    }
}

public class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }
    
    public void meow() {
        System.out.println(name + " meows!");
    }
}
```

#### Inheritance Keywords:

##### `super` Keyword
```java
public class Vehicle {
    protected String brand;
    protected String model;
    
    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    public void start() {
        System.out.println(brand + " " + model + " is starting");
    }
}

public class Car extends Vehicle {
    private int numDoors;
    
    public Car(String brand, String model, int numDoors) {
        super(brand, model); // Call parent constructor
        this.numDoors = numDoors;
    }
    
    @Override
    public void start() {
        super.start(); // Call parent method
        System.out.println("Car has " + numDoors + " doors");
    }
}
```

##### `final` Keyword
```java
public class Parent {
    public final void doSomething() {
        System.out.println("This cannot be overridden");
    }
}

public class Child extends Parent {
    // ❌ This won't compile - can't override final method
    // @Override
    // public void doSomething() {
    //     System.out.println("Trying to override");
    // }
}

// Final class cannot be inherited
public final class UtilityClass {
    public static void helper() {
        System.out.println("Helper method");
    }
}

// ❌ This won't compile - can't extend final class
// public class ExtendedUtility extends UtilityClass { }
```

### 3. Polymorphism

**Polymorphism** allows objects to be treated as instances of their parent class while maintaining their own unique behavior.

#### Types of Polymorphism:

##### Compile-time Polymorphism (Method Overloading)
```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}

// Usage
Calculator calc = new Calculator();
int result1 = calc.add(5, 3);           // Calls first method
double result2 = calc.add(5.5, 3.2);    // Calls second method
int result3 = calc.add(5, 3, 2);        // Calls third method
String result4 = calc.add("Hello ", "World"); // Calls fourth method
```

##### Runtime Polymorphism (Method Overriding)
```java
public class Animal {
    public void makeSound() {
        System.out.println("Some animal sound");
    }
    
    public void move() {
        System.out.println("Animal is moving");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println("Dog is running");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow! Meow!");
    }
    
    @Override
    public void move() {
        System.out.println("Cat is walking gracefully");
    }
}

public class Bird extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Tweet! Tweet!");
    }
    
    @Override
    public void move() {
        System.out.println("Bird is flying");
    }
}

// Usage - Polymorphism in action
public class Main {
    public static void main(String[] args) {
        Animal[] animals = {
            new Dog(),
            new Cat(),
            new Bird(),
            new Animal()
        };
        
        // Same method call, different behaviors
        for (Animal animal : animals) {
            animal.makeSound(); // Polymorphic behavior
            animal.move();      // Polymorphic behavior
            System.out.println();
        }
    }
}
```

#### Polymorphism with Interfaces
```java
public interface Shape {
    double calculateArea();
    double calculatePerimeter();
    void display();
}

public class Circle implements Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void display() {
        System.out.println("Circle - Radius: " + radius);
    }
}

public class Rectangle implements Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
    
    @Override
    public void display() {
        System.out.println("Rectangle - Length: " + length + ", Width: " + width);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5.0),
            new Rectangle(4.0, 6.0),
            new Circle(3.0)
        };
        
        for (Shape shape : shapes) {
            shape.display();
            System.out.println("Area: " + shape.calculateArea());
            System.out.println("Perimeter: " + shape.calculatePerimeter());
            System.out.println();
        }
    }
}
```

### 4. Abstraction

**Abstraction** hides complex implementation details and shows only the necessary features of an object.

#### Abstract Classes
```java
public abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract void startEngine();
    
    // Abstract method
    public abstract void stopEngine();
    
    // Concrete method - has implementation
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
    
    // Concrete method
    public void honk() {
        System.out.println("Honk! Honk!");
    }
}

public class Car extends Vehicle {
    private int numDoors;
    
    public Car(String brand, String model, int year, int numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }
    
    @Override
    public void startEngine() {
        System.out.println(brand + " " + model + " car engine started with key");
    }
    
    @Override
    public void stopEngine() {
        System.out.println(brand + " " + model + " car engine stopped");
    }
    
    public void openTrunk() {
        System.out.println("Car trunk opened");
    }
}

public class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    public Motorcycle(String brand, String model, int year, boolean hasSidecar) {
        super(brand, model, year);
        this.hasSidecar = hasSidecar;
    }
    
    @Override
    public void startEngine() {
        System.out.println(brand + " " + model + " motorcycle engine started with kick");
    }
    
    @Override
    public void stopEngine() {
        System.out.println(brand + " " + model + " motorcycle engine stopped");
    }
    
    public void wheelie() {
        System.out.println("Motorcycle doing a wheelie!");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        // Vehicle vehicle = new Vehicle(); // ❌ Can't instantiate abstract class
        
        Vehicle car = new Car("Toyota", "Camry", 2023, 4);
        Vehicle motorcycle = new Motorcycle("Honda", "CBR", 2023, false);
        
        car.displayInfo();
        car.startEngine();
        car.stopEngine();
        car.honk();
        
        System.out.println();
        
        motorcycle.displayInfo();
        motorcycle.startEngine();
        motorcycle.stopEngine();
        motorcycle.honk();
    }
}
```

#### Interfaces
```java
public interface Payable {
    double calculatePay();
    void processPayment();
}

public interface Workable {
    void work();
    void takeBreak();
}

public interface Manageable {
    void assignTask(String task);
    void reviewPerformance();
}

// Class can implement multiple interfaces
public class Employee implements Payable, Workable, Manageable {
    private String name;
    private double hourlyRate;
    private int hoursWorked;
    
    public Employee(String name, double hourlyRate) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = 0;
    }
    
    @Override
    public double calculatePay() {
        return hourlyRate * hoursWorked;
    }
    
    @Override
    public void processPayment() {
        double pay = calculatePay();
        System.out.println(name + " received payment of $" + pay);
        hoursWorked = 0; // Reset hours after payment
    }
    
    @Override
    public void work() {
        hoursWorked += 8;
        System.out.println(name + " worked for 8 hours");
    }
    
    @Override
    public void takeBreak() {
        System.out.println(name + " is taking a break");
    }
    
    @Override
    public void assignTask(String task) {
        System.out.println("Task assigned to " + name + ": " + task);
    }
    
    @Override
    public void reviewPerformance() {
        System.out.println("Reviewing " + name + "'s performance");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Employee employee = new Employee("John Doe", 25.0);
        
        // Using Payable interface
        employee.work();
        employee.work();
        System.out.println("Pay: $" + employee.calculatePay());
        employee.processPayment();
        
        // Using Workable interface
        employee.takeBreak();
        
        // Using Manageable interface
        employee.assignTask("Complete project report");
        employee.reviewPerformance();
    }
}
```

## Advanced OOP Concepts

### Composition vs Inheritance

#### Composition (Has-A Relationship)
```java
public class Engine {
    private String type;
    private int horsepower;
    
    public Engine(String type, int horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }
    
    public void start() {
        System.out.println("Engine started");
    }
    
    public void stop() {
        System.out.println("Engine stopped");
    }
}

public class Car {
    private String brand;
    private String model;
    private Engine engine; // Composition - Car has an Engine
    
    public Car(String brand, String model, String engineType, int horsepower) {
        this.brand = brand;
        this.model = model;
        this.engine = new Engine(engineType, horsepower);
    }
    
    public void start() {
        System.out.println(brand + " " + model + " starting...");
        engine.start();
    }
    
    public void stop() {
        System.out.println(brand + " " + model + " stopping...");
        engine.stop();
    }
}
```

#### Inheritance (Is-A Relationship)
```java
public class Vehicle {
    protected String brand;
    protected String model;
    
    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    public void start() {
        System.out.println("Vehicle starting");
    }
}

public class Car extends Vehicle { // Inheritance - Car is a Vehicle
    private int numDoors;
    
    public Car(String brand, String model, int numDoors) {
        super(brand, model);
        this.numDoors = numDoors;
    }
    
    @Override
    public void start() {
        System.out.println("Car starting");
    }
}
```

### Method Overriding Rules
```java
public class Parent {
    public void method1() { }
    protected void method2() { }
    private void method3() { }
    public final void method4() { }
    public static void method5() { }
}

public class Child extends Parent {
    @Override
    public void method1() { } // ✅ Valid - same access modifier
    
    @Override
    public void method2() { } // ✅ Valid - public is less restrictive than protected
    
    // @Override
    // private void method3() { } // ❌ Invalid - can't override private method
    
    // @Override
    // public void method4() { } // ❌ Invalid - can't override final method
    
    // @Override
    // public static void method5() { } // ❌ Invalid - can't override static method
}
```

## Design Patterns

### Singleton Pattern
```java
public class DatabaseConnection {
    private static DatabaseConnection instance;
    private String connectionString;
    
    private DatabaseConnection() {
        connectionString = "jdbc:mysql://localhost:3306/mydb";
    }
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
    
    public void connect() {
        System.out.println("Connected to database: " + connectionString);
    }
    
    public void disconnect() {
        System.out.println("Disconnected from database");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        DatabaseConnection db1 = DatabaseConnection.getInstance();
        DatabaseConnection db2 = DatabaseConnection.getInstance();
        
        System.out.println(db1 == db2); // true - same instance
        
        db1.connect();
        db2.disconnect();
    }
}
```

### Factory Pattern
```java
public interface Animal {
    void makeSound();
}

public class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

public class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class AnimalFactory {
    public static Animal createAnimal(String type) {
        switch (type.toLowerCase()) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            default:
                throw new IllegalArgumentException("Unknown animal type: " + type);
        }
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Animal dog = AnimalFactory.createAnimal("dog");
        Animal cat = AnimalFactory.createAnimal("cat");
        
        dog.makeSound(); // Woof!
        cat.makeSound(); // Meow!
    }
}
```

## Best Practices

### 1. Favor Composition Over Inheritance
```java
// ❌ Bad - Inheritance for behavior
public class Car extends Engine {
    // Car inherits from Engine - doesn't make sense
}

// ✅ Good - Composition for behavior
public class Car {
    private Engine engine; // Car has an Engine
    // Better design
}
```

### 2. Use Interfaces for Multiple Inheritance
```java
public interface Flyable {
    void fly();
}

public interface Swimmable {
    void swim();
}

public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}
```

### 3. Keep Classes Focused (Single Responsibility)
```java
// ❌ Bad - Multiple responsibilities
public class UserManager {
    public void createUser() { }
    public void deleteUser() { }
    public void sendEmail() { } // Should be in EmailService
    public void saveToDatabase() { } // Should be in DatabaseService
}

// ✅ Good - Single responsibility
public class UserManager {
    public void createUser() { }
    public void deleteUser() { }
}

public class EmailService {
    public void sendEmail() { }
}

public class DatabaseService {
    public void saveToDatabase() { }
}
```

### 4. Use Access Modifiers Appropriately
```java
public class BankAccount {
    private double balance; // Private - internal state
    protected String accountType; // Protected - accessible to subclasses
    public String accountNumber; // Public - accessible to everyone
    String bankName; // Package-private - accessible within package
}
```

## Summary

OOP provides a powerful way to organize and structure code:

1. **Encapsulation**: Protect data and provide controlled access
2. **Inheritance**: Reuse code and establish relationships
3. **Polymorphism**: Same interface, different implementations
4. **Abstraction**: Hide complexity and show only necessary features

Mastering these concepts will make you a better Java programmer and help you write more maintainable, reusable, and organized code! 