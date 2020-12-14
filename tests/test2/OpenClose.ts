interface ISomeBeheavior{
    pick():void
}

class A implements ISomeBeheavior{
    constructor() { }

    pick(){
        console.log('A->pick');
    }
}

class B implements ISomeBeheavior{
    constructor() { }

    pick(){
        console.log('B->pick');
    }
}


class Client{
    object:ISomeBeheavior
    constructor(object:ISomeBeheavior){
        this.object = object;
    }

    pick(){
        this.object.pick();
    }
    //ou
    pickByInterface(object:ISomeBeheavior){
        object.pick();
    }
}
//strategy ou adapter?

// tsc OpenClose.ts && ts-node OpenClose.js
const aClass:ISomeBeheavior = new A();
aClass.pick();

const bClass:ISomeBeheavior = new B();
bClass.pick();

const clientClass:ISomeBeheavior = new Client(bClass);
console.log("Client class b")
clientClass.pick()

//não precisa implementar na client
const client2Class:ISomeBeheavior = new Client(aClass);
console.log("Client class a")
client2Class.pick()