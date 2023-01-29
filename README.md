# Discusss about advance data structure and OOps concept , design pattern and algorithm

# JavaScript Design Patterns

* will discus about following patterns 
    * Module Pattern
    * Model View Controller Pattern
    * Creational Design Pattern
    * Structural Design Pattern
    * Behavior Design Pattern


# Abstract Factory Pattern
* Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. 

# Builder Pattern
* allowes you to create complex objects step by step 
* the pattern allows you to produce different types and representations of an object using the same construction code

# Factory Method Pattern
* Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
used in application where the application manage and manintain collection of different object but at same time have many different types of object

# Prototype Pattern
* Prototype Pattern refers to creating duplicate object while keeping performance in mind. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
* This pattern involves implementing a prototype interface which tells to create a clone of the current object. This pattern is used when creation of object directly is costly. For example, an object is to be created after a costly database operation. We can cache the object, returns its clone on next request and update the database as and when needed thus reducing database calls.

# Singleton Pattern
* The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.
* system where we need to ensure that only one instance of a class is created.
*  - when we need to have a global access point to an object from a well-known access point.
* - when we need to have a limited number of instances of a class.

# Adapter Pattern
* Adapter Pattern works as a bridge between two incompatible interfaces. This type of design pattern comes under structural pattern as this pattern combines the capability of two independent interfaces.
* This pattern involves a single class which is responsible to join functionalities of independent or incompatible interfaces. A real life example could be a case of card reader which acts as an adapter between memory card and a laptop. You plugin the memory card into card reader and card reader into the laptop so that memory card can be read via laptop.
* make existing classes work with others without modifying their source code.

#  IIFE (Immediately Invoked Function Expression)
* IIFE is a JavaScript function that runs as soon as it is defined.
* IIFE is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
    * The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
    * The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


# Bridge Pattern

* Bridge is used when we need to decouple an abstraction from its implementation so that the two can vary independently. This type of design pattern comes under structural pattern as this pattern decouples implementation class and abstract class by providing a bridge structure between them.
* This pattern involves an interface which acts as a bridge which makes the functionality of concrete classes independent from interface implementer classes. Both types of classes can be altered structurally without affecting each other.

# Composite Pattern
* Composite pattern is used where we need to treat a group of objects in similar way as a single object. Composite pattern composes objects in term of a tree structure to represent part as well as whole hierarchy. This type of design pattern comes under structural pattern as this pattern creates a tree structure of group of objects.
* This pattern creates a class that contains group of its own objects. This class provides ways to modify its group of same objects.

# Decorator Pattern
* Decorator pattern allows a user to add new functionality to an existing object without altering its structure. This type of design pattern comes under structural pattern as this pattern acts as a wrapper to existing class.
* This pattern creates a decorator class which wraps the original class and provides additional functionality keeping class methods signature intact.

# Facade Pattern
* Facade pattern hides the complexities of the system and provides an interface to the client using which the client can access the system. This type of design pattern comes under structural pattern as this pattern adds an interface to existing system to hide its complexities. 

# Flyweight Pattern
* Flyweight pattern is primarily used to reduce the number of objects created and to decrease memory footprint and increase performance. This type of design pattern comes under structural pattern as this pattern provides ways to decrease object count thus improving the object structure of application.

# Proxy Pattern
* Proxy pattern is used when we want to provide controlled access to original object. Proxy pattern is used to provide a substitute or placeholder for another object to control access to it. 

# Chain of Responsibility Pattern
* allow to create a chain of objects that will receive a request and process it , each object in the chain will decide either to process the request or to pass it to the next object in the chain

# Command Pattern
* is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
* used in application where we need to issue requests to objects without knowing anything about the operation being requested or the receiver of the request

# Interpreter Pattern
* allow to create a language that can be used to interpret a set of instructions
* used in applications that need to interpret a set of instructions
* example of interpreter pattern is a compiler that takes a set of instructions and converts them into machine code

# Iterator Pattern
* is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

# Mediator Pattern
* is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

# Memento Pattern
* is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.
* used in application where we need to save the state of an object so that we can restore it later

# Observer Pattern
* is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
* used in application where we need to notify multiple objects about any changes in the state of an object

# State Pattern
* is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
* used in application where we need to change the behavior of an object based on its state

# Strategy Pattern
* allow to create a family of algorithms , encapsulate each one , and make them interchangeable , strategy lets the algorithm vary independently from clients that use it 
* used in application where we need to select an algorithm at runtime

# Template Method Pattern
* allow to create a template that can be used to create a set of instructions
* provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps

# Visitor Pattern
*  allow to create a new operation without changing the classes of the elements on which it operates

# MVC Pattern
* is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development.

