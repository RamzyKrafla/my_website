# Ramzy Rafla - Personal Website

This is a personal portfolio website built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

## 🚀 Getting Started Locally

To run the website on your computer:

1.  **Install dependencies** (only needed once):
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 How to Update the Website

### 1. Make Changes
-   **Content**: Edit `src/data/portfolio.ts` to update your bio, experience, projects, or skills.
-   **Design**: Edit components in `src/components/` or styles in `src/app/globals.css`.

### 2. Verify Locally
Always check your changes locally by running `npm run dev` before deploying.

### 3. Deploy Changes
Deployment is **automatic**. You just need to push your changes to GitHub.

Run these commands in your terminal:

```bash
# 1. Stage all your changes
git add .

# 2. Commit your changes with a message describing what you did
git commit -m "Update about me section" 

# 3. Push to GitHub
git push origin main
```

## 🔄 How Deployment Works

This repository uses **GitHub Actions** to automatically build and deploy your site.

1.  When you run `git push`, GitHub detects the new code.
2.  It triggers the workflow defined in `.github/workflows/nextjs.yml`.
3.  This workflow:
    -   Installs dependencies.
    -   Builds the static website (`npm run build`).
    -   Uploads the result to GitHub Pages.

**You do not need to run `npm run build` locally or commit the `out/` folder.**

### Checking Deployment Status
1.  Go to the **Actions** tab in your GitHub repository.
2.  You will see a workflow run listed (e.g., "Deploy Next.js site to Pages").
    -   🟡 **Yellow**: Building/Deploying.
    -   ✅ **Green**: Deployed successfully.
    -   ❌ **Red**: Something went wrong (click to see details).
