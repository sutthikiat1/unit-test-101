//primative data have 7 type
//1.string
//2.number
//3.bigInt
//4.boolean
//5.null
//6.undefined
//7.symbol

//declare primative data type
//string
let str: string = "hi";
//number
let num: number = 10;
//boolen
let bool: boolean = false;

//infer type
//บางทีเราไม่จำเป็นต้องระบุ type ก็ได้ แต่ตัว typescript จะรู้เองว่า ตัแปวรนั้นเป็นอะไร เพราะ typescript ทำการอนุมาน หรือ infer
let str2 = "hi2";
let num2 = 20;

//declare function
function say(): string {
  // หากไม่มีการ return ค่าจะ error เพราะกำหนดชนิดข้อมูล return ของฟั่งชั่น string และ หากไม่มีการ retrun ชนิดข้อมูลของฟั่งชั่นจะเป็น void
  return "Hello World";
}
