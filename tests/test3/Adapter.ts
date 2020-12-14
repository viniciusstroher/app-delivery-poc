interface ICallDoctor{
    callDoctor():void
}

interface IAdpterAdptee extends ICallDoctor{
    adptee:ICallDoctor;
}

class EletronicCallDoctorAdpter implements IAdpterAdptee{
    constructor() { }
    
    adptee:ICallDoctor
    
    callDoctor(){
        console.log('EletronicCallDoctorAdpter->callDoctor');
    }
}

class SmokeCallDoctorAdpter implements IAdpterAdptee{
    constructor() { }
    
    adptee:ICallDoctor
    
    callDoctor(){
        console.log('SmokeCallDoctorAdpter->callDoctor');
    }
}

class ClientAdpter{
    
    object1:IAdpterAdptee = new SmokeCallDoctorAdpter();
    object2:IAdpterAdptee = new EletronicCallDoctorAdpter();

    constructor(){ }

    callDoctor1(){
        this.object1.callDoctor();
    }

    callDoctor2(){
        this.object2.callDoctor();
    }
}
//strategy ou adapter?
//  tsc Adapter.ts && ts-node Adapter.js
const ca:ClientAdpter = new ClientAdpter();
ca.callDoctor1();
ca.callDoctor2();