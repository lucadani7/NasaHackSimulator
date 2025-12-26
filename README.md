# 🚀 NasaHackSimulator

**NasaHackSimulator** is a **fictional hacking simulator** built with **Next.js, React, and TypeScript**.  
It is a **client-side, interactive terminal app** for fun, portfolio, and UI demonstration purposes — **no real hacking is involved**.  

---

## ⚠ Disclaimer

This is a **fictional simulator**.  
No real systems, networks, or organizations are accessed.  
It is intended for **educational and UI/UX demonstration purposes only**.

---

## 🎮 Features

- **Interactive terminal** with typing animation  
- **Cursor blinking** `▮` for cinematic effect  
- **Progress bar** synchronized with hacking simulation  
- **Fake hacking simulation** (0% → 100%) with warnings  
- **Commands**:  
  - `help` → shows a cinematic help menu  
  - `status` → shows current rank and system status  
  - `clear` → clears the terminal  
  - `start_attack_simulation` → triggers hacking simulation  
  - `solve_ctf` → optional CTF puzzles (with rank-up system)  
  - `sudo make me a hacker`, `hack_the_planet`, `coffee` → Easter eggs  
- **Dashboard view** after successful hacking  
- **Sound effects** for typing and alerts (client-side only)  
- **CTF challenges & rank system** (optional extension)  
- **ASCII art intro**  

---

## 🛠 Tech Stack

- **Next.js (App Router)**  
- **React + TypeScript**  
- **CSS / global styles** (cyberpunk terminal look)  
- **Client-side sound effects** (`type.mp3`, `alert.mp3`)  
- **No backend** (everything runs in the browser)  

---

---

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/lucadani7/NasaHackSimulator.git
cd NasaHackSimulator
```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your favorite browser at `http://localhost:3000`.

---

## 🎨 UX / Gameplay Notes
  - Terminal lines appear letter by letter for cinematic effect.
- Progress bar grows in sync with hacking simulation.
- Sound effects only play after user interaction (click / keypress) to comply with browser policies.
- Dashboard shows fake satellites, power levels, and mission status.
- Easter eggs add humor and engagement.

---

## 📈 Extensions / Future Ideas
- Additional CTF puzzles with achievements
- Fake file system commands (ls, cd, cat)
- Visual glitch effects for warnings
- Night mode / cyberpunk theme toggle
- Deploy to Vercel for live demo

---

## 📄 License

This project is licensed under the Apache-2.0 License.
