import {Person} from "./person";
import {User} from "./user";

let person = new Person('suveti', 'george', 24);
console.log(person);
console.log(person.toString());
person.delayedLog();

let user = new User('marius', 'cristea', 30, 'secret');
console.log(user);
console.log(user.toString());
