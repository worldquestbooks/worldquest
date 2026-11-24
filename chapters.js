/* =====================================================================
   CHAPTER LIST — this is the only part you need to edit.
   วิธีปล่อยตอนใหม่ (How to release a new chapter):
     1. อัปโหลดภาพไว้ใน images/chXX/ ตั้งชื่อ 01.png, 02.png, 03.png ...
     2. ในตอนนั้น เปลี่ยน ready: false  เป็น  ready: true
        และเปลี่ยน pages: 0  เป็นจำนวนภาพ
     3. กด Commit changes  รอ 1-2 นาที เว็บจะอัปเดตเอง
   ระวัง: อย่าลบเครื่องหมาย  "  ,  {  }  [  ]
   ===================================================================== */
window.CHAPTERS = [
  {
    id: "ch01",
    title: "The Mysterious Book",
    subtitle: "Cooper opens Ah Gong's journal…",
    pages: 10,
    ready: true,
    ext: "png",
    puzzles: {
      // page number inside this chapter : puzzle settings
      8: {
        question: "Which postcard matches the clue?",
        options: ["A", "B", "C"],
        answer: "B",
        wrong: "Not quite! Think again — look for doors with no walls.",
        right: "You got it! Turn the page to see where it leads…"
      }
    }
  },
  { id: "ch02", title: "Kyoto, Japan",   subtitle: "Coming soon", pages: 0, ready: false },
  { id: "ch03", title: "Singapore",      subtitle: "Coming soon", pages: 0, ready: false },
  { id: "ch04", title: "Lucerne",        subtitle: "Coming soon", pages: 0, ready: false },
  { id: "ch05", title: "The Swiss Alps", subtitle: "Coming soon", pages: 0, ready: false }
];
/* ===================================================================== */
