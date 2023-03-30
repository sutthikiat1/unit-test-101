//Type Assertions คือการ กำหนดให้ typescript เชื่อใจว่า ตัวแปรนั้นๆเป็น type นั้นจริงๆ โดยการใส่ as เ
let number: unknown;
number = 20;

// ไม่สามารถใช้ ฟั่งชั่น toFixed ได้เพราะตัวแปรไม่ใช่ number แต่หากให้ typescript เชื่อใจว่า ข้อมูลของเรานั้นถูกต้องจริงๆ สามารถใช้ Type Assertions เพื่อบอก typescript ให้เชื่อว่าเป็น type นั้นจริงๆได้
// number.toFixed(2)

// (number as number).toFixed(2) // แปลงเป็น Type Assertions โดยการใส่ as
// (<number>number).toFixed(2) // แปลงเป็น Type Assertions โดยการใส่ as
