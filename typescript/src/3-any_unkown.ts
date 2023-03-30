//ชนิด any และ unknown
//ชนิดข้อมูล any และ unknown คือ ทั้ง 2 ชนิดข้อมูลคือ สามารถเป็นค่าอะไรก็ได้ ไม่ได้เจาะจง แต่การใช้ any จะไม่มีการตรวจสอบจาก typescript แต่หากใช้ unknown จะมีการตรวจสอบข้อมูลจาก typescript

function fixed(num: number) {
  return num.toFixed(2);
}
let flot: unknown = 8.291119; //สามารถใช้ unknown แทน any ได้เพราะทำงานเหมือน แต่ต่างกันการตรงวิธีเช็คชนิดของข้อมูล
flot = false;
console.log(fixed(flot)); //error เพราะไม่สามารถ unknown ไม่ทราบชนิดข้อมูลที่แท้จริง เพราะฟั่งชั่นระบุไว้ชัดเจนว่าเป็น number
