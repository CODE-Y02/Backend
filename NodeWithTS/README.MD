# NODEJS WITH TYPESCRIPT

## Why do we need to install types/node? What does it do?

> TS by default uses JS not NodeJS , or React or Anything Like that

> To use Node js syntax and tell TS compiler that we are using it for Node js application

> It enable us to use require or import node js packages and write backend code in TS

---

    modules inside @types doesnot have complete translation of its corresponding js package ,
    It just contains instruction to check whether current TS can be translated into JS code

---

---

## Why do we need to install types/express? What does it do?

> for same reason like @types/node , TS don't know that we are using express and what its syntax

> It's npm package that enable us to use express in TS files

---

---

## What is the need for changing moduleresolution to es6?

> first its set to node

> to use modern import export syntax of JS that we use mostly on client side

---

---

## Import keyword is very similar to require keyword. What do you think?

> its basically same thing both use to import expoetrd stuff from modules;

> by default every file in JS is module , TS is nothing but JS

---

---

## How to use import keyword?

    // import var name from "module name"

    ex->

    import express from "express";

---

---

## How does import { Router } from 'express'. work. What does { } this do?

> import { Router } from 'express' , will just import Router

> { } is destructuring

        explain :->
        let user = { name: "xyz" , roll: 57 } ;

        now if we just want name of user
            syntax: -
                const { name } = user

> module is just a object

---

---

## What do you mean by interface?Why do we have to create it for todos type?

> interface is pure TS feature it doesnot exist in Js

> interface helps TS during compilation but do not add any thing to JS code

> interface is basically used to create our own data types or models

> we use it for creating todos because todos is [] and it may contain any data type , but with TS we are forced to write better code

> Therefore we careate interface called Todo and define its structure

> Then we tell TS that bro this todos is collection of Todo types of element

            interface Todo {
                id: string;
                text: string;
            }

            let todos: Todo[] = [];

            // todo: datatype[] = [];

---

---

## What are named exports and default exports?

> named export

    lets say in file xyz

    const abc = ()=> {
        console.log("I am named export ")
    }

    export abc ;     // named export

    __________________________________

    how to import named export ? -->

    import { abc } from "xyz" ;

    --> name of import must be same as in file or module

    i.e  we cannot write xyz or ABC insted abc during import

> default export

    lets say in file xyz

    const abc = ()=> {
        console.log("I am named export ")
    }

    export default abc ;     // default export

    __________________________________

    how to import default export ? -->

    import ABC from "xyz" ;

    --> name of import may be different from file or module

    i.e  we CAN write xyz or ABC insted abc during import

> we can have multiple named export but single default export per module or file

>

---

---

## What is type casting

> Type casting is type conversion

> If TS has infered any variable value as any but we know its value then we can set its value

---

---

## What is the need of RequestBody and RequestParams?

> TS dont know whats inside params or body of request .

> To define structure of body or request we uses type feature to crate user defined datatypes by combining deffere data types.

> This hust creates strucrure of of body and params and whats inside it .
