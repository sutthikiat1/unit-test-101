//Literal Types
//หากประกาศตัวแปรเป็น const จะถูก infer เป็น literalType
const str3 = "hi3"; //เพราะเป็นค่าคงที่ จึงถูกระบุไว้ชัดเจนว่าค่าคืออะไร แต่หาก type เป็น string มีโอกาสเปลี่ยนแปลงได้ในอนาคตต

//String Literal
function permission(role: "Staff" | "Admin" | "SuperAdmin") {} //ระบุค่าชัดเจนว่า paramerter ที่รับค่านั้น จะต้องมีค่าเป็นอะไร
let role = "Admin"; // ให้เปลี่ยนตัวแปรเป็น const เพราะ const คือค่าคงที่หรือเป็นชนิด Literal Types
permission(role); // error เพราะชนิดข้อมูลเป็น string ไม่ใช่ Literal Types ในอนาคต string อาจจะเปลี่ยนแปลงค่าได้ จึงเกิด Error
