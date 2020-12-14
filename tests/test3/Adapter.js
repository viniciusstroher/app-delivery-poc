var EletronicCallDoctorAdpter = /** @class */ (function () {
    function EletronicCallDoctorAdpter() {
    }
    EletronicCallDoctorAdpter.prototype.callDoctor = function () {
        console.log('EletronicCallDoctorAdpter->callDoctor');
    };
    return EletronicCallDoctorAdpter;
}());
var SmokeCallDoctorAdpter = /** @class */ (function () {
    function SmokeCallDoctorAdpter() {
    }
    SmokeCallDoctorAdpter.prototype.callDoctor = function () {
        console.log('SmokeCallDoctorAdpter->callDoctor');
    };
    return SmokeCallDoctorAdpter;
}());
var ClientAdpter = /** @class */ (function () {
    function ClientAdpter() {
        this.object1 = new SmokeCallDoctorAdpter();
        this.object2 = new EletronicCallDoctorAdpter();
    }
    ClientAdpter.prototype.callDoctor1 = function () {
        this.object1.callDoctor();
    };
    ClientAdpter.prototype.callDoctor2 = function () {
        this.object2.callDoctor();
    };
    return ClientAdpter;
}());
//strategy ou adapter?
//  tsc Adapter.ts && ts-node Adapter.js
var ca = new ClientAdpter();
ca.callDoctor1();
ca.callDoctor2();
