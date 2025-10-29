# 🌌 Brave Custom Tab – Dynamic Video New Tab Extension

A sleek, modern **Brave/Chrome new tab extension** with a dynamic video background, glassmorphism UI, and GSAP-powered animations.  
Users can **set their own video wallpaper**, **pin favorite websites**, and enjoy an **interactive, animated search experience** — all stored locally via the Chrome API.

---

## 🚀 Features

### 🎬 Custom Video Background
- Default calm background video provided  
- Users can **upload and set their own wallpaper video**  
- Saves automatically using `chrome.storage.local`  
- Subtle gradient overlay ensures readability over bright videos

### 🔍 Interactive Search Bar
- Smooth **GSAP animations** on focus and input  
- Expands dynamically and emits floating particles  
- Includes ripple effect on click and subtle glass glow  
- Redirects to **Brave Search / Google** when submitted

### 🧊 Pinned Top Sites
- Displays a grid of user-defined favorite sites  
- Auto-fetches favicons via Google’s favicon API  
- “+” button opens a modal to add custom sites  
- Persisted with `chrome.storage.local` for seamless reuse

### ✨ Direction-Aware Hover Effects
- Uses GSAP to detect cursor entry direction  
- Site icons move and animate with a depth-like parallax  
- Smooth text fade-in and overlay transitions

### 🛠️ Storage & Persistence
- Powered by `chrome.storage.local`  
- Saves video background, pinned sites, and preferences

---

## 🧩 Tech Stack

| Category | Tools Used |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Animations** | GSAP (GreenSock Animation Platform) |
| **Browser APIs** | Chrome Extension API (`chrome.storage.local`) |
| **Icons** | Google Favicon API |
| **UI Design** | Glassmorphism + Gradient Layers |

---

## 🧠 How It Works

1. **Video Background:**  
   Loads a default calm video. If the user uploads one, it’s saved and replaces the default.

2. **Pinned Sites:**  
   On startup, sites are fetched from `chrome.storage.local`.  
   Each site shows its favicon from Google dynamically.  
   The user can add new sites via a simple modal form.

3. **Search Bar:**  
   Expands and animates using GSAP.  
   On submit, redirects to Brave or Google search.  
   Includes particle and ripple animations for engagement.

4. **Storage Persistence:**  
   All user changes (sites, video, settings) are saved automatically and restored on next launch.

---


🧭 Installation Guide
🧩 Load as an Unpacked Extension

Download or clone this repo:

git clone https://github.com/<your-username>/BraveCustomTab.git


Open Chrome / Brave → chrome://extensions

Turn on Developer Mode

Click Load unpacked

Select the project folder

Open a new tab and enjoy your custom dashboard 🚀
