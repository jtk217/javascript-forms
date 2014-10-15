"use strict";

var person = {
    name: 'felix',
    sayHello: function() {
        console.log('Hello ' + this.name);
    }
};

console.log(person.name);

person.name = 'Jacob';
person.coolnessFactor = 100;
person.reportCoolness = function () {
    if (this.coolnessFactor > 50) {
        console.log('very cool!');
    }
    else {
        console.log('total nerd!');
    }
}
person.sayHello();
person.reportCoolness();