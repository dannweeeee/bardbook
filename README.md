# Bardbook

**Bardbook** built using [Clerk](https://clerk.com/), [NextJS](https://nextjs.org/) and [Meta Graph API](https://developers.facebook.com/docs/graph-api/).

<img width="1440" alt="Screenshot 2023-12-10 at 10 52 52 PM" src="https://github.com/dannweeeee/bardbook/assets/42776950/e4c0fd6b-a98e-404a-8c19-666c9c893c09">

## Task

Create a NextJS application, using TypeScript. The web application should be able to signup/login via Facebook OAuth2 & publish posts on Facebook.

## Tools Used

- **Clerk**: For user authentication (Connection only through Facebook)
- **Meta Graph API**: For posts
- **Shadcn**: For minimalistic components

## Limitations

**Limitation:** To use Facebook User Login Authenticator, I had to create a Consumer App on the Meta Developer Platform. However, a Consumer App does not provide api methods to POST posts on Facebook. Meta Graph API calls can only be created via a Business App, and Business Apps takes 10 days to be approved (with proper app Privacy Policy and Terms & Conditions done)

**Solution:** I created a Consumer App on Meta Developer Platform to connect the Clerk Authenticator (user will have to grant permissions on Facebook to login to Bardbook). I then created a separate Business App that is connected to a [Bardbook Facebook Page](https://www.facebook.com/profile.php?id=61554628525650) to POST posts via the Meta Graph API.

## Installation

Clone the repository

```
git clone https://github.com/dannweeeee/bardbook.git
```

## Deployment

First install the dependencies with the following command:

```
npm install
```

Thereafter run the following command to run Bardbook locally:

```
npm run dev
```
