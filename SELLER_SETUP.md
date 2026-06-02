# Iron Standard Fitness Seller Setup

The website uses a free Tally quiz and direct Gumroad checkout links.

## Quiz Lead Capture

The website embeds the **Iron Standard 60-Second Fitness Quiz** through Tally. Quiz
submissions appear in the Tally dashboard and include:

- Email address for quiz follow-up
- Fitness goal
- Current training experience
- Realistic training days per week
- Available equipment
- Biggest obstacle
- Preferred starting point
- Optional marketing-email consent
- Required acknowledgement that the quiz provides general educational information, not
  medical advice

Keep the optional marketing-consent response with each lead. Do not add quiz respondents
to promotional email campaigns unless they opted in.

## Buyer Email Capture

Gumroad identifies customers by the email address they enter during checkout. After a
purchase, the buyer receives a receipt with access to the digital product. Gumroad also
adds customer details to the Sales dashboard.

Use buyer emails for product delivery and purchase support. Treat promotional marketing
as a separate consent decision.

Official reference:
[How Gumroad purchases work](https://gumroad.com/help/article/282-how-do-purchases-work-for-my-customers)
and [Gumroad Sales dashboard](https://gumroad.com/help/article/268-customer-dashboard).

## Private Product Files

The paid files are intentionally outside this public repository:

```text
C:\Users\alvar\Documents\Codex\2026-06-01\iron-standard-private-products\outputs
```

Each matching PDF has been uploaded to Gumroad:

| Product | Upload file | Price | Live checkout |
|---|---|---:|---|
| 30-Day Iron Reset | `iron-standard-30-day-reset.pdf` | `$19` | [Open product](https://alvarez486.gumroad.com/l/30-day-iron-reset) |
| 8-Week Iron Standard Transformation | `iron-standard-8-week-transformation.pdf` | `$49` | [Open product](https://alvarez486.gumroad.com/l/iron-standard-transformation) |
| Complete Transformation Toolkit | `iron-standard-complete-transformation-toolkit.pdf` | `$15` | [Open product](https://alvarez486.gumroad.com/l/transformation-toolkit) |
| Iron Training Club | `iron-standard-training-club-starter-pack.pdf` | `$12/month` | [Open product](https://alvarez486.gumroad.com/l/iron-training-club) |

## Connect Gumroad to the Website

The four checkout URLs are configured in `STORE_CONFIG` in `script.js`. To add another
offer later:

1. Create and publish the new Gumroad product.
2. Copy its public product URL.
3. Add the URL to `STORE_CONFIG`.
4. Add a matching product button with a `data-product` key.
5. Commit and push the update.
