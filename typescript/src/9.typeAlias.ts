// type Alias คือ การรวมกลุ่มของ type คล้ายๆ interface
type Person = {
  name: string;
  age: number;
  gender: string;
};

//extend interface // interface นั้นสามารถ extend ได้
type Address = {
  address: string;
};

type Corporate = Person &
  Address & {
    job: string;
  };

const myPerson2: Corporate = {
  name: "Boss",
  age: 20,
  gender: "male",
  address: "Chanthaburi",
  job: "Dev",
};

//Excess Property Checks คือการตรวจสอบว่า มีส่วนเกินอะไรนอกจากที่ type ระบุบ้าง
// const myPerson2: Corporate = {
//     name: "Boss",
//     age: 20,
//     gender: "male",
//     address: "Chanthaburi",
//     job: "Dev",
//     nickname : "Boss" // Nickname error เพราะไม่มีการระบุ type ไว้
// };
