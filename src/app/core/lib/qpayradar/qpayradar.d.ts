declare module MQpayRadar {
  export interface Hash {
    new(): Hash
  }
  export interface Main {
    hash(): void;
  }
}

declare var QpayRadar: MQpayRadar.Main;