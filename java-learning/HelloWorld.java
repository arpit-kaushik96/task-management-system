public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
        System.out.println("This is your first Java program!");
        
        // Let's also demonstrate some basic concepts
        String name = "Java Learner";
        int age = 2024; // Java was released in 1995, so it's 29 years old!
        
        System.out.println("Hello, " + name + "!");
        System.out.println("Java is " + age + " years old and still going strong!");
        
        // Simple calculation
        int result = 10 + 5;
        System.out.println("10 + 5 = " + result);
        
        // Using a method
        printMessage("You're doing great!");
    }
    
    // A simple method
    public static void printMessage(String message) {
        System.out.println("Message: " + message);
    }
} 