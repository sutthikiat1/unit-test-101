//declare Array
const arrnum1: number[] = [1, 2, 3]; //แสดงบอกว่านี่คือ ตัวแปร array ที่มี type เป็น number
const arrnum2: unknown[] = [1, "boss", false]; // แสดงบอกว่านี่คือ ตัวแปร array ที่มี type เป็น unkown
const arrnum3: Array<number> = [4, 5, 6]; // การระบุ type array อีกรูปแบบ

const arrnum4: readonly number[] = [1, 2, 3, 4]; // การใส่ readonly จะไม่สามารถแก้ไขค่าได้ อ่านได้อย่างเดียว

arrnum4[0] = 2; // ติด readonly จะไม่สามารถแก้ไขค่าได้ อ่านได้อย่างเดียว
