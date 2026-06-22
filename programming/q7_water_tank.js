/**
 * ข้อ 7: ถังน้ำใบหนึ่งบรรจุ 5,832 ลิตร นำน้ำไปใช้ทุกวัน วันละ 1 ใน 3
 * ให้เขียนฟังก์ชัน y = Calculate(x) เพื่อหาปริมาณน้ำที่เหลือหลังผ่านไป x วัน
 */

function Calculate(x) {
    let water = 5832;
    for (let i = 1; i <= x; i++) {

        water = water - (water / 3);
    }
    return water;
}

console.log("ปริมาณน้ำเริ่มต้น: 5832 ลิตร");
console.log("ผ่านไป 1 วัน เหลือน้ำ:", Calculate(1), "ลิตร");
console.log("ผ่านไป 2 วัน เหลือน้ำ:", Calculate(2), "ลิตร");
console.log("ผ่านไป 3 วัน เหลือน้ำ:", Calculate(3), "ลิตร");
console.log("ผ่านไป 7 วัน เหลือน้ำ:", Calculate(7).toFixed(2), "ลิตร");
