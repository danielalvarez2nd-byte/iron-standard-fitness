# Iron Standard Fitness Landing Page

A fast, mobile-first static landing page for Iron Standard Fitness. It uses plain HTML5,
CSS3, and a few lines of vanilla JavaScript. There are no paid dependencies, frameworks,
build tools, or backend services.

## Project Structure

```text
iron-standard-fitness/
|-- assets/
|   |-- hero-grid.svg
|   |-- iron-standard-logo.svg
|   |-- product-club.svg
|   |-- product-reset.svg
|   |-- product-toolkit.svg
|   `-- product-transformation.svg
|-- SELLER_SETUP.md
|-- index.html
|-- script.js
|-- styles.css
`-- README.md
```

## Customize the Site

1. Replace `assets/iron-standard-logo.svg` with your final logo. Keep the same filename or
   update the two image paths in `index.html`.
2. The free Tally quiz embed is configured in `index.html`. Quiz responses appear in the
   Tally dashboard.
3. The four published Gumroad product URLs are configured in `STORE_CONFIG` in
   `script.js`. Gumroad captures the buyer's checkout email and delivers the paid PDF.
4. If you add another product later, use the same `STORE_CONFIG` pattern. A product
   button remains disabled with a **Coming Soon** label until its matching URL exists.
5. Replace the placeholder testimonials with real quotes only after getting each client's
   permission.
6. Replace the example support email, social profile links, privacy policy link, and terms
   link in the footer.

## Deploy Free With GitHub Pages

### 1. Create a GitHub Repository

1. Sign in at [github.com](https://github.com).
2. Click **New repository**.
3. Name it `iron-standard-fitness`.
4. Keep the repository public so GitHub Pages hosting remains simple and free.
5. Click **Create repository**.

### 2. Push This Project to GitHub

Install [Git](https://git-scm.com/downloads) if it is not already available. Open a
terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Create Iron Standard Fitness landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/iron-standard-fitness.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. You can also upload the files through
the GitHub website if you prefer not to use Git.

### 3. Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings** and select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Click **Save**.
6. Wait a few minutes for the first deployment to finish.

Your site will be available over free HTTPS at:

```text
https://YOUR_USERNAME.github.io/iron-standard-fitness/
```

## Keep the Site Free

- Store public website images and icons inside this repository. Keep paid product files
  private and deliver them through Gumroad.
- Use GitHub Pages for hosting and HTTPS.
- Use Google Forms or Tally's free tier for the quiz instead of building a backend.
- Use Gumroad product links for checkout and digital delivery. Review Gumroad's current transaction pricing
  before selling products.
- Keep the Google Fonts links in `index.html`; Montserrat and Lato are free to use.

## Optional Enhancements

### Button Animation

The button hover transitions live in `.button`, `.button:hover`, and `.button:focus-visible`
inside `styles.css`. Adjust the `transform`, `box-shadow`, or timing values there to tune
the interaction.

### Google Analytics

Create a free Google Analytics 4 property, copy its Measurement ID, then uncomment the
Google Analytics snippet in the `<head>` of `index.html`. Replace `G-XXXXXXXXXX` with your
Measurement ID.

## Local Preview

Because the project is static, you can open `index.html` directly in a browser. You can
also use a simple local web server if you already have Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
