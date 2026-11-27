/* =====================================================================
   CHAPTER LIST — this is the only part you need to edit.
   วิธีปล่อยตอนใหม่ (How to release a new chapter):
     1. อัปโหลดภาพไว้ใน images/chXX/ ตั้งชื่อ 01.png, 02.png, 03.png ...
     2. ในตอนนั้น เปลี่ยน ready: false  เป็น  ready: true
        และเปลี่ยน pages: 0  เป็นจำนวนภาพ
     3. ถ้าภาพเป็น .jpg ให้เปลี่ยน ext: "png" เป็น ext: "jpg"
     4. กด Commit changes  รอ 1-2 นาที เว็บจะอัปเดตเอง
   ระวัง: อย่าลบเครื่องหมาย  "  ,  {  }  [  ]
   ===================================================================== */
window.CHAPTERS = [
  {
    id: "ch01", num: 1,
    title: "The Mysterious Book",
    subtitle: "Cooper's birthday gift from Ah Gong…",
    pages: 22,
    ready: true,
    ext: "png",
    puzzles: {
      19: {
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
    subtitle: "Look back…",
    pages: 31,
    ready: true,
    ext: "png",
    puzzles: {
      27: {
        type: "match",
        question: "Match each word to its picture!",
        items: ["1", "2", "3"],
        options: ["A", "B", "C"],
        answer: { "1": "C", "2": "B", "3": "A" },
        wrong: "Stuck? Look back at Ah Gong's notes!",
        right: "Perfect match! 鳥居 = gate, 狐 = fox, 奉納 = offered."
      }
    }
  },

  {
    id: "ch03", num: 3,
    title: "Singapore",
    subtitle: "Plan B…",
    pages: 30,
    ready: true,
    ext: "png",
    puzzles: {
      23: {
        question: "Which stall matches the clue?",
        options: ["A", "B", "C", "D"],
        answer: "B",
        wrong: "Not quite! Check for ALL three: a lion, a fish and 72.",
        right: "You found it! Lion, fish and 72 — all three!"
      }
    }
  },

  {
    id: "ch04", num: 4,
    title: "Lucerne",
    subtitle: "The quiet lion…",
    pages: 36,
    ready: true,
    ext: "png",
    puzzles: {
      26: {
        question: "Ah Gong says: find 'the other one.' Which is it?",
        options: ["A", "B", "C"],
        answer: "B",
        wrong: "Not quite! Look at what's under the lion's paw — then find the OTHER one.",
        right: "Yes! The shield with the Swiss cross!"
      }
    }
  },

  {
    id: "ch05", num: 5,
    title: "The Swiss Alps",
    subtitle: "Never alone…",
    pages: 36,
    ready: true,
    ext: "png",
    puzzles: {
      29: {
        question: "Which path is right for a team in sneakers?",
        options: ["A", "B", "C"],
        answer: "A",
        wrong: "Not quite! Check Asawin's notebook — what does each color mean?",
        right: "Right! Yellow is the walking trail everyone can do."
      }
    }
  },
  {
    id: "ch06", num: 6,
    title: "Istanbul",
    subtitle: "Two sides…",
    pages: 36,
    ready: true,
    ext: "png",
    puzzles: {
      26: {
        question: "Which ferry takes you from Europe to Asia?",
        options: ["A", "B", "C"],
        answer: "B",
        wrong: "Not quite! Check the map — which pier is on the ASIA side?",
        right: "Yes! Eminönü to Kadıköy — Europe to Asia!"
      }
    }
  },
  {
    id: "ch07", num: 7,
    title: "Great Barrier Reef",
    subtitle: "Not yet…",
    pages: 36,
    ready: true,
    ext: "png",
    puzzles: {
      29: {
        question: "Which fish lives inside a home that stings?",
        options: ["A", "B", "C"],
        answer: "B",
        wrong: "Not quite! Look for a fish hiding in waving tentacles.",
        right: "Yes! The clownfish lives safely inside the anemone!"
      }
    }
  },
  {
    id: "ch08", num: 8,
    title: "Grand Canyon",
    subtitle: "Layers…",
    pages: 36,
    ready: true,
    ext: "png",
    puzzles: {
      26: {
        question: "Which rock layer is the oldest?",
        options: ["A", "B", "C"],
        answer: "C",
        wrong: "Not quite! Ah Gong says: the oldest story is always at the bottom.",
        right: "Right! The bottom layer is the oldest — almost 2 billion years old!"
      }
    }
  },
  { id: "ch09", num: 9,  title: "Machu Picchu",         pages: 0, ready: false },
  { id: "ch10", num: 10, title: "Home to Thailand",     pages: 0, ready: false }
];
