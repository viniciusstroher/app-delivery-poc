interface IComponent{
    execute(param:string):void
}

class ConcreteComponent implements IComponent{
    constructor() { }

    execute(param:string){
        console.log('ConcreteComponent->execute - ', param);
    }
}

class FluidConcreteComponent implements IComponent{
    constructor() { }

    execute(param:string){
        console.log('FluidConcreteComponent->execute - ', param);
    }
}

class ExecuteDecorator implements IComponent{
    wrapee:IComponent;
    
    constructor(wrapee:IComponent) {
        this.wrapee = wrapee;
    }

    execute(param:string){
        //executa o wrappee (envolvido)
        //adicionar mais logica antes de chamr o execute para adicionar funcoes a principal
        this.wrapee.execute(`ExecuteDecorator->execute ${param} - `);
    }
}

class HardExecuteDecorator extends ExecuteDecorator{
    wrapee:IComponent;
    
    constructor(wrapee:IComponent) {
        super(wrapee);
    }

    execute(param:string){
        super.execute(`HardExecuteDecorator->execute ${param} - `);
    }
}
// tsc DecoratorTest.ts && ts-node DecoratorTest.js
const a:IComponent = new ConcreteComponent();
a.execute("blah");

const b:IComponent = new ExecuteDecorator(a);
b.execute("blah");

const c:IComponent = new HardExecuteDecorator(b);
c.execute("blah");

const d:IComponent = new FluidConcreteComponent();
d.execute("blah");

const e:IComponent = new HardExecuteDecorator(d);
e.execute("blah");