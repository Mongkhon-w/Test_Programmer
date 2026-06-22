# Programmer Exam Assessment 

---

## 🚀 1. การติดตั้งและเข้าใช้งาน Web Application (ข้อ 1-3)
แอปพลิเคชันนี้ถูกพัฒนาด้วย **Next.js (React)** 

### ความต้องการของระบบ (Prerequisites)
- [Node.js](https://nodejs.org/) (แนะนำเวอร์ชัน 18.x ขึ้นไป)
- npm (ถูกติดตั้งมาพร้อมกับ Node.js)

### ขั้นตอนการติดตั้งและรันโปรเจกต์
1. เปิด Terminal หรือ Command Prompt แล้วเข้าไปที่โฟลเดอร์ `web-app`:
   ```bash
   cd web-app
   ```
2. ติดตั้ง Dependencies ทั้งหมดที่จำเป็น:
   ```bash
   npm install
   ```
3. รันเซิร์ฟเวอร์จำลอง (Development Server):
   ```bash
   npm run dev
   ```
4. เปิด Web Browser และเข้าไปที่ URL:
   👉 **http://localhost:3000**


---

## 🗄️ 2. การตรวจสอบส่วนอื่นๆ ของข้อสอบ

นอกจาก Web Application แล้ว คำตอบข้ออื่นๆ ถูกจัดเตรียมไว้ตามโฟลเดอร์ดังนี้:

* **Database (ข้อ 4-5):** 
  เข้าไปที่โฟลเดอร์ `database` จะพบไฟล์ `init.sql` สามารถนำไปรันใน MySQL Workbench เพื่อสร้างตารางและดูผลลัพธ์คำสั่ง Query ได้ทันที
* **System Design (ข้อ 6):** 
  เข้าไปที่โฟลเดอร์ `system-design` 
  - `system_design.md` -> ประกอบด้วย Flowchart และ ER Diagram
  - `register_ui.html` -> หน้าจอจำลอง UI การสมัครสมาชิก (สามารถดับเบิ้ลคลิกเปิดดูผ่าน Browser ได้เลย)
* **Programming Logic (ข้อ 7-8):** 
  เข้าไปที่โฟลเดอร์ `programming`
  - `q7_water_tank.js` -> คำนวณปริมาณน้ำในถัง
  - `q8_inverted_pyramid.js` -> วาดรูปปิรามิดกลับด้าน
  *(รันผ่าน Terminal ด้วยคำสั่ง `node <ชื่อไฟล์>`)*

