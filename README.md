# prime_frontend

## Contact form setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send inquiries without a server.

1. Create an EmailJS service and email template.
2. In `js/app.js`, replace the three `YOUR_EMAILJS_*` values in `EMAILJS_CONFIG` with your EmailJS public key, service ID, and template ID.
3. Configure the EmailJS template to use the form fields `name`, `email`, and `message`. Set the template's recipient email to the address that should receive inquiries.
4. Add your deployed site domain to EmailJS's allowed origins.

The EmailJS public key is intended for browser use. Keep private API keys out of this static site.
