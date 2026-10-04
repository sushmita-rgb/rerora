'use client';

import React from 'react';

export const BLOG_ARTICLES = [
  {
    id: 'how-websites-work',
    category: 'Tech Explained',
    title: 'What actually happens when you open a website?',
    excerpt: 'From typing a domain name to pixels rendering on your screen — a breakdown of DNS, servers, and browsers with zero complicated jargon.',
    readTime: '4 min read',
    date: 'Exploration Guide',
    content: `Have you ever wondered what happens in the few milliseconds between pressing "Enter" on a website address and seeing the page load?

### 1. The Domain Request (DNS)
When you type a URL like \`rorera.org\`, your browser doesn't know where that server lives yet. It contacts a digital phonebook called DNS (Domain Name System) to translate the name into an IP address (like \`192.0.2.1\`).

### 2. Fetching the Files
Once your browser knows the IP address, it sends an HTTP request to the web server asking for the website files. The server sends back three main building blocks:
- **HTML**: The skeleton of the page (headings, text, buttons).
- **CSS**: The styling system (colors, fonts, layout, spacing).
- **JavaScript**: The brain of the page (interactivity, animations, forms).

### 3. Rendering Pixels
Your browser reads these files and draws them on your screen line by line.

**Key takeaway:** Web development is simply creating these files and deciding how they respond when users click or type!`
  },
  {
    id: 'web-vs-app-dev',
    category: 'Path Comparison',
    title: 'Web Development vs App Development',
    excerpt: 'Key differences between building for the browser vs building native mobile apps, and how to figure out which path matches your style.',
    readTime: '5 min read',
    date: 'Career Guide',
    content: `When beginners start exploring technology, two of the most popular starting points are **Web Development** and **Mobile App Development**. Both let you build amazing things, but they feel quite different!

### Web Development
- **Where it runs:** Any browser (Chrome, Safari, Firefox) on laptop, tablet, or phone.
- **Languages:** HTML, CSS, JavaScript.
- **Why beginners love it:** Instant feedback! You can write a few lines of HTML and see it right in your browser immediately.
- **Best if you like:** Visual design, quick project sharing, and flexible tools.

### Mobile App Development
- **Where it runs:** Smartphones & tablets (iOS or Android).
- **Languages:** Swift (for iPhone) or Kotlin/Java (for Android).
- **Why beginners love it:** Apps can use device features like the camera, GPS, motion sensors, and push notifications.
- **Best if you like:** Building tools people carry everywhere and native phone interactions.

**The verdict:** Neither is "better" — pick whichever idea excites you more today!`
  },
  {
    id: 'python-possibilities',
    category: 'Beginner Guide',
    title: 'What can you build with Python?',
    excerpt: 'Why Python is one of the friendliest first programming languages for beginners, from automation scripts to games and AI models.',
    readTime: '3 min read',
    date: 'Starter Guide',
    content: `If you ask ten developers what programming language a complete beginner should learn first, at least eight will say **Python**.

### Why is Python so popular?
Python was designed to read almost like plain English. You don't have to write complex syntax just to print a message or add numbers together.

### What can you actually build with it?
1. **Automated Scripts:** Write code that organizes your files, downloads weather reports, or sends automated reminders.
2. **Text & Discord Bots:** Build interactive bots that answer questions or play text-based games in Discord.
3. **Data Analysis:** Analyze sports statistics, gaming trends, or Spotify playlists.
4. **AI & Smart Models:** Python is the primary language used by modern Artificial Intelligence engineers!

**Summary:** Python gives you immediate leverage with very little setup time.`
  }
];

export function ResourceBlog({ onSelectArticle }) {
  return (
    <section className="section-wrapper" id="resources">
      <div className="container">
        <div className="section-header">
          <span className="tagline">Resource Library</span>
          <h2 className="section-title">Curious about tech?</h2>
          <p className="section-desc">
            Short, simple guides written specifically for beginners exploring technology for the first time.
          </p>
        </div>

        <div className="cards-grid-3">
          {BLOG_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="article-card"
              onClick={() => onSelectArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectArticle(article);
              }}
            >
              <span className="article-category">{article.category}</span>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              
              <div className="article-meta">
                <span>{article.readTime}</span>
                <span style={{ color: 'var(--accent-pink-strong)', fontWeight: 700 }}>Read Guide →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
