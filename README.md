# เว็บไซต์ยุทโธปกรณ์ทางทหาร

เว็บไซต์นี้รวบรวมข้อมูลยุทโธปกรณ์ของแต่ละประเทศ พร้อมรายละเอียดกองทัพต่าง ๆ เช่น ชื่อรุ่น จำนวน ผู้ผลิต และราคาโดยประมาณ มีโหมด **สว่าง/มืด** และปุ่ม Home/Back ใช้งานง่าย

---

## **โครงสร้างไฟล์**

### โฟลเดอร์หลัก

---

/ (root folder)
├─ index.html       - หน้าเลือกประเทศ + กองทัพ
├─ home.html        - หน้าอธิบายเว็บ + กฎสงครามสหประชาชาติ
├─ style.css        - CSS หลัก ใช้ทุกหน้า
├─ Thailand/
│   ├─ thai_army.html
│   ├─ thai_navy.html
│   ├─ thai_airforce.html
│   ├─ thai_special.html
├─ USA/
│   ├─ usa_army.html
│   ├─ usa_navy.html
│   ├─ usa_airforce.html
│   ├─ usa_special.html
├─ China/
│   ├─ china_army.html
│   ├─ china_navy.html
│   ├─ china_airforce.html
│   ├─ china_special.html
├─ Russia/
│   ├─ russia_army.html
│   ├─ russia_navy.html
│   ├─ russia_airforce.html
│   ├─ russia_special.html
├─ UK/
│   ├─ uk_army.html
│   ├─ uk_navy.html
│   ├─ uk_airforce.html
│   ├─ uk_special.html
├─ Germany/
│   ├─ germany_army.html
│   ├─ germany_navy.html
│   ├─ germany_airforce.html
│   ├─ germany_special.html
├─ France/
    ├─ france_army.html
    ├─ france_navy.html
    ├─ france_airforce.html
    ├─ france_special.html

---

## **คุณสมบัติหลัก**
- หน้า **index.html** เลือกประเทศและกองทัพ  
- แยก **กองทัพ 4 หน่วย** ต่อประเทศ: กองทัพบก, กองทัพเรือ, กองทัพอากาศ, หน่วยรบพิเศษ  
- Dark/Light Mode บันทึกสถานะด้วย `localStorage`  
- CSS เดียวกันทั้งหมด ใช้สีฟ้าอ่อนและสีขาวในโหมดสว่าง, ม่วงและน้ำเงินเข้มในโหมดมืด  
- Responsive รองรับทุกอุปกรณ์  
- ปุ่ม Home/Back ใช้งานง่าย  

---

## **ผู้จัดทำ**
MaiddressCodeX
