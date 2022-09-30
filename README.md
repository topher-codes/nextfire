This is a [Next.js](https://nextjs.org/) project that I am working on combined with [Firebase](https://firebase.google.com). The goal of this project is to make a beautiful frontend using the [ReactJS](https://reactjs.org) library to post articles using the Markdown (.md) format. Users will be able to create posts, comment, and heart other peoples posts. I'm using both SSR and ISR to render the content on the server.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Features

- User account authentication using firebase auth (users will log in with their google account)
- Articles can be written using .md format
- Users can comment on posts
- Users can heart posts and save them

## Roadmap

- Search feature to look up admin posts (CryptoBlakat)
- "Hot Coins" lookup
- "Stale Coins" lookup
