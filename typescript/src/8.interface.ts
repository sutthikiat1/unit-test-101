//ในภาษา typescript เรามีสิ่งหนึ่งที่เรียกกว่า interface คือการรวมความสัมพันธุ์ของ field ต่างๆ หรือเปรียบเสมือน object
let person: IPerson = {
  name: "Boss",
  age: 28,
  gender: "male",
};

interface IPerson {
  name: string;
  age: number;
  gender: string;
}

//extend interface // interface นั้นสามารถ extend ได้
interface IAddress {
  address: string;
}

interface ICorporate extends IPerson, IAddress {
  job: string;
}

const myPerson: ICorporate = {
  name: "Boss",
  age: 20,
  gender: "male",
  address: "Chanthaburi",
  job: "Dev",
};
