import {UuidGenerator} from "@infra/utils/UuidGenerator"
console.log("S")
const uuidGenerator = new UuidGenerator();
const uuid:string = uuidGenerator.generate();
console.log(uuid)

console.log('started....')