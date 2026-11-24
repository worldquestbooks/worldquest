/* =====================================================================
   CHAPTER LIST — this is the only part you need to edit.
   วิธีปล่อยตอนใหม่ (How to release a new chapter):
     1. อัปโหลดภาพไว้ใน images/chXX/ ตั้งชื่อ 01.png, 02.png ... 20.png
     2. ในตอนนั้น เปลี่ยน ready: false  เป็น  ready: true
        และเปลี่ยน pages: 0  เป็นจำนวนภาพ (ปกติ 20)
     3. ถ้าตอนนั้นมีหน้าปริศนา ใส่ puzzles ตามตัวอย่างด้านล่าง
     4. กด Commit changes  รอ 1-2 นาที เว็บจะอัปเดตเอง
   ระวัง: อย่าลบเครื่องหมาย  "  ,  {  }  [  ]
   ===================================================================== */
window.CHAPTERS = [
  {
    id: "ch01", num: 1,
    title: "The Mysterious Book",
    subtitle: "Cooper's birthday gift from Ah Gong…",
    pages: 20,
    ready: true,
    ext: "png",
    puzzles: {
      18: {
        question: "Which postcard matches the clue?",
        options: ["A", "B", "C"],
        answer: "B",
        wrong: "Not quite! Think again — look for doors with no walls.",
        right: "You got it! Turn the page to see where it leads…"
      }
    }
  },

  {
    id: "ch02", num: 2,
    title: "Kyoto, Japan",
    subtitle: "Follow the red gates…",
    pages: 0,
    ready: false,
    ext: "png",
    puzzles: {
      // ตัวอย่าง: หน้าที่ 17 เป็นปริศนา เฉลยคือ B (ลบ // หน้าบรรทัดออกเมื่อใช้จริง)
      // 17: {
      //   question: "Which one matches the clue?",
      //   options: ["A", "B", "C"],
      //   answer: "B",
      //   wrong: "Not quite! Think again.",
      //   right: "You got it! Turn the page…"
      // }
    }
  },

  { id: "ch03", num: 3, title: "Singapore",      pages: 0, ready: false },
  { id: "ch04", num: 4, title: "Lucerne",        pages: 0, ready: false },
  { id: "ch05", num: 5, title: "The Swiss Alps", pages: 0, ready: false },
  { id: "ch06", num: 6, title: "Istanbul",       pages: 0, ready: false },
  { id: "ch07", num: 7, title: "Australia",      pages: 0, ready: false },
  { id: "ch08", num: 8, title: "A U.S. National Park", pages: 0, ready: false },
  { id: "ch09", num: 9, title: "Machu Picchu",   pages: 0, ready: false },
  { id: "ch10", num: 10, title: "Home to Thailand", pages: 0, ready: false }
];
