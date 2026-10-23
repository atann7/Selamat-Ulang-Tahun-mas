/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "mas Wanda",
  photo: "./img/mas wanda.jpg",       // Place your photo in the img/ folder
  music: "./Pamungkas -  I Love You But I'm Letting Go.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi again",
      subtitle: "aku yakin pasti hari ini kamu lagi happy banget",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun yaa..",
    },
    {
      type: "chatbox",
      message:
        "semoga kamu dikelilingi orang-orang yang baik dan selalu diberikan kesehatan! kurangi pod nya yah.. minum air putihnya juga yang cukup dan jangan keseringan makan/minum pakai tangan kiri lagi ya *soalnya aku udah gabisa ngingetin lagi :(",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "banyak hal yg aku pgn ceritain ke kamu, aku kangen banget sama kamu. jadi anggap aja hadiah kecil ini 'as my final act of love'.",
        "Jam tidur akhir-akhir ini berantakan, sebab tak terdengar lagi suara nafas kamu.",
        "rupanya, hal itu mengubah jadwal sejak satu bulan lalu.",
        "sial, berpengaruh sekali kamu di hidupku.",
        "so..",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "how can i unlove someone i've once dreamed of marrying.",
      author: "dari ku untuk kamu, mas wanda.",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "Semoga kamu happy di ulang tahun ke 36 ini ;) (btw ini foto hbd kamu yg ke 35 hihi) imysb",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "maafin aku kalau coding sederhana ini membuat km merasa ga nyaman. lirik lagu ini benar-benar nyata untuk kamu",
      replayText: "click, if you want to watch it again.",
    },
  ],
};
