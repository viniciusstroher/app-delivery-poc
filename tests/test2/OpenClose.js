var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.pick = function () {
        console.log('A->pick');
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.pick = function () {
        console.log('B->pick');
    };
    return B;
}());
var Client = /** @class */ (function () {
    function Client(object) {
        this.object = object;
    }
    Client.prototype.pick = function () {
        this.object.pick();
    };
    return Client;
}());
// tsc OpenClose.ts && ts-node OpenClose.js
var aClass = new A();
aClass.pick();
var bClass = new B();
bClass.pick();
var clientClass = new Client(bClass);
console.log("Client class b");
clientClass.pick();
var client2Class = new Client(aClass);
console.log("Client class a");
client2Class.pick();
