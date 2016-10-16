// Prototypal Inheritance

// John Resig and Douglas Crockford //

// JavaScript uses a unique form of object creation and inheritance called prototypal inheritance.
// The premise behind this method (as opposed to the classical class/object scheme that most
// programmers are familiar with) is that an object constructor can inherit methods from one
// other object, creating a prototype object from which all other new objects are built.
// 
// This entire process is facilitated by the prototype property (which exists as a property
// of every function, and since any function can be a constructor, it’s a property of them, too).
// 
// Prototypal inheritance is designed for single, not multiple, inheritance; however, there are
// ways that this can be worked around, which I’ll discuss in the next section.

// The part that makes this form of inheritance especially tricky to grasp is that prototypes
// do not inherit their properties from other prototypes or other constructors; they inherit them
// from physical objects. Listing 3-1 shows some examples of how exactly the prototype property
// is used for simple inheritance.

// Listing 3-1. Examples of Prototypal Inheritance
// Create the constructor for a Person object


function Person( name ) {
this.name = name;
}
// Add a new method to the Person object
Person.prototype.getName = function() {
return this.name;
};
// Create a new User object constructor
function User( name, password ) {
// Notice that this does not support graceful overloading/inheritance
// e.g. being able to call the super class constructor
this.name = name;
this.password = password;
};


// The User object inherits all of the Person object's methods
User.prototype = new Person();


// We add a method of our own to the User object
User.prototype.getPassword = function() {
return this.password;
};


// The most important line in the previous example is User.prototype = new Person();.
// Let’s look in depth at what exactly this means. User is a reference to the function constructor
// of the User object. new Person() creates a new Person object, using the Person constructor.
// 
// You set the result of this as the value of the User constructor’s prototype. This means that anytime
// you do new User(), the new User object will have all the methods that the Person object
// had when you did new Person().
// 
// With this particular technique in mind, let’s look at a number of different wrappers that
// developers have written to make the process of inheritance in JavaScript simpler.