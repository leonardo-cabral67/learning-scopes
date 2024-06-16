# Scopes: Dynamic X Lexical 

## Dynamic scope
Variables can be accessed from all execution stack, this type of scope is strongly deprecated because harm encapsulation and make easily to make mistakes.

## Lexical scope
In this kind of scope, what matters is the lexical structure of the scope. If a structure is nested in another structure, the inner one can access the variables of the outer. This is the most used in modern programming languages.

## Clojures
Clojure is a tool present in many languages that allows a inner function (nested in a outer function) access local varables from the outer function. 
