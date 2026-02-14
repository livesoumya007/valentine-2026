---
description: How to deploy the Valentine website via Vercel (free)
---

## Prerequisites
- A GitHub account (sign up free at github.com)
- Git installed on your machine

## Step 1: Initialize Git & Push to GitHub

// turbo
1. Open a terminal in the valentine project folder and run:
```
git init
```

// turbo
2. Create a `.gitignore` (if not already present) — Next.js usually creates one:
```
cat .gitignore
```

// turbo
3. Stage all files:
```
git add .
```

4. Commit:
```
git commit -m "Valentine's Day surprise 💜"
```

5. Go to [github.com/new](https://github.com/new) and create a **new repository**:
   - Name: `valentine` (or anything you like)
   - Set it to **Private** (so only you can see the code)
   - Do NOT initialize with README
   - Click **Create repository**

6. Copy the remote URL GitHub shows you, then run:
```
git remote add origin https://github.com/YOUR_USERNAME/valentine.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com) → Click **Sign Up** → Choose **Continue with GitHub**
2. Click **"Add New..."** → **Project**
3. Find your `valentine` repo in the list → Click **Import**
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy** 🚀
6. Wait ~60 seconds — Vercel will build and deploy
7. You'll get a URL like: `valentine-xxxxx.vercel.app`

## Step 3: Share the Link 💕

Copy the Vercel URL and send it to your girlfriend! When she opens it on her phone:
- The browser chrome will match your warm theme color
- WhatsApp/iMessage will show a beautiful preview card with "Will You Be My Valentine? 💜"
- All animations will run smoothly on mobile

## Optional: Custom Domain
If you want a custom domain (e.g., `forher.love`), you can add it in Vercel's project settings under **Domains**. Vercel provides free HTTPS.
