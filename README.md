# D.H. Tag & Time Website

This repository now contains the D.H. Tag & Time starter website. It is a fast static site built with plain HTML, CSS, and JavaScript so it is easy to edit and simple to host with GitHub Pages.

## What the site does

- Sends handmade goods buyers to Etsy.
- Clearly separates handmade laser goods from watches and watch accessories.
- Features metal scratch art as the lead handmade product.
- Lists custom watch dials as Coming Soon.
- Uses message buttons for custom orders and watch questions.
- Uses a cleaner, more serious D.H. Tag & Time logo direction.
- Keeps the brand clean modern, but still North Jersey proud.

## Files

- `index.html` - Main website content and structure.
- `styles.css` - Colors, layout, mobile design, and visual styling.
- `script.js` - Menu behavior, scroll effects, product rendering, and email message form.
- `site-config.js` - The easiest file to edit first.
- `assets/logo-mark.svg` - Starter logo mark.
- `assets/favicon.svg` - Browser icon.
- `assets/social-card.svg` - Social sharing preview.
- `robots.txt` and `sitemap.xml` - Basic search engine files.

## Edit this first

Open `site-config.js` and replace these placeholders:

```js
etsyUrl: 'https://www.etsy.com/shop/YOUR_SHOP_NAME',
messageUrl: 'mailto:hello@example.com?subject=Custom%20D.H.%20Tag%20%26%20Time%20Order',
watchMessageUrl: 'mailto:hello@example.com?subject=Watch%20Inventory%20Question',
instagramUrl: '#',
facebookUrl: '#',
```

Good options for `messageUrl` include an email address, SMS link, Etsy custom-order link, Instagram profile, or Facebook Messenger link.

## Product edits

Most product text is controlled in `site-config.js`:

- `featuredHandmade` controls metal scratch art, pet keepsakes, and metal business cards.
- `watchGoods` controls available watches, watch accessories, and custom watch dials.

Keep handmade Etsy goods and watches separate so buyers understand the difference immediately.

## Add product photos

1. Upload product photos into the `assets` folder.
2. In `index.html`, replace a placeholder art block like this:

```html
<div class='product-art art-metal'></div>
```

with this:

```html
<img class='product-photo' src='assets/my-product-photo.jpg' alt='Custom metal scratch art with pet name'>
```

Then add this to `styles.css`:

```css
.product-photo {
  width: 100%;
  height: 166px;
  object-fit: cover;
  border-radius: 22px;
  margin-bottom: 20px;
}
```

## GitHub Pages

To publish the site:

1. Open the repository on GitHub.
2. Go to Settings, then Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait a few minutes.

The default GitHub Pages URL should be:

```text
https://danielalvarez2nd-byte.github.io/iron-standard-fitness/
```

You can rename the repository later if you want the URL to say `dh-tag-time` instead of `iron-standard-fitness`.

## Recommended next upgrades

- Replace placeholders with real product photos.
- Add your real Etsy shop URL.
- Replace the email placeholder with your preferred message path.
- Add a dedicated watch inventory page if the watch side grows.
- Create a final logo suite with horizontal, square, and icon-only versions.