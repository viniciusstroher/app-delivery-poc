var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.execute = function (param) {
        console.log('ConcreteComponent->execute - ', param);
    };
    return ConcreteComponent;
}());
var FluidConcreteComponent = /** @class */ (function () {
    function FluidConcreteComponent() {
    }
    FluidConcreteComponent.prototype.execute = function (param) {
        console.log('FluidConcreteComponent->execute - ', param);
    };
    return FluidConcreteComponent;
}());
var ExecuteDecorator = /** @class */ (function () {
    function ExecuteDecorator(wrapee) {
        this.wrapee = wrapee;
    }
    ExecuteDecorator.prototype.execute = function (param) {
        //executa o wrappee (envolvido)
        //adicionar mais logica antes de chamr o execute para adicionar funcoes a principal
        this.wrapee.execute("ExecuteDecorator->execute " + param + " - ");
    };
    return ExecuteDecorator;
}());
var HardExecuteDecorator = /** @class */ (function (_super) {
    __extends(HardExecuteDecorator, _super);
    function HardExecuteDecorator(wrapee) {
        return _super.call(this, wrapee) || this;
    }
    HardExecuteDecorator.prototype.execute = function (param) {
        _super.prototype.execute.call(this, "HardExecuteDecorator->execute " + param + " - ");
    };
    return HardExecuteDecorator;
}(ExecuteDecorator));
// tsc DecoratorTest.ts && ts-node DecoratorTest.js
var a = new ConcreteComponent();
a.execute("blah");
var b = new ExecuteDecorator(a);
b.execute("blah");
var c = new HardExecuteDecorator(b);
c.execute("blah");
var d = new FluidConcreteComponent();
d.execute("blah");
var e = new HardExecuteDecorator(d);
e.execute("blah");
