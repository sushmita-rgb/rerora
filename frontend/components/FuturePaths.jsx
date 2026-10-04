'use client';

import React from 'react';

export const EXPLORATION_PATHS = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: '🌐',
    shortDesc: 'Build websites and web applications that people interact with globally every single day.',
    duration: 'Beginner Friendly',
    tools: ['HTML/CSS', 'JavaScript', 'React', 'Figma'],
    overview: 'Web development is the art of building software that runs in a web browser. From interactive online tools to portfolio sites, web dev is one of the most accessible and creative entry points into tech.',
    roadmap: [
      { step: '1. Fundamentals', detail: 'Learn HTML structure, CSS styling, and web layouts.' },
      { step: '2. Interactivity', detail: 'Master JavaScript logic, DOM manipulation, and dynamic events.' },
      { step: '3. Modern Frameworks', detail: 'Explore React and Next.js to build fast, scalable applications.' },
      { step: '4. First Project', detail: 'Build a personal portfolio, a task app, or a school club website.' }
    ]
  },
  {
    id: 'android-dev',
    title: 'Android Development',
    icon: '📱',
    shortDesc: 'Create mobile applications that live in billions of pockets around the world.',
    duration: 'Beginner Friendly',
    tools: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Firebase'],
    overview: 'Mobile apps power modern daily life. Android development lets you build tools, utility apps, or social experiences that leverage device sensors, cameras, and touch screens.',
    roadmap: [
      { step: '1. Kotlin Basics', detail: 'Learn Kotlin syntax, control flows, and object-oriented concepts.' },
      { step: '2. App Layouts', detail: 'Design UI screens with Jetpack Compose.' },
      { step: '3. Data & State', detail: 'Fetch data from APIs and save user settings.' },
      { step: '4. First Project', detail: 'Build a habit tracker, a flashlight app, or a quiz game.' }
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    icon: '🎮',
    shortDesc: 'Combine art, logic, physics, and storytelling to create interactive playable games.',
    duration: 'Creative Path',
    tools: ['Godot Engine', 'C# / GDScript', 'Blender', 'Pixel Logic'],
    overview: 'Game development is where technology meets interactive storytelling. You learn physics simulations, graphics rendering, audio triggers, and player mechanics.',
    roadmap: [
      { step: '1. Game Engines', detail: 'Get familiar with Godot Engine and scene nodes.' },
      { step: '2. Mechanics', detail: 'Script character movement, collisions, and scoring systems.' },
      { step: '3. Polish & Art', detail: 'Add sound effects, animations, and particle effects.' },
      { step: '4. First Project', detail: 'Create a 2D platformer or an arcade puzzle game.' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔐',
    shortDesc: 'Understand network security, cryptography, digital defenses, and how to keep systems safe.',
    duration: 'Problem Solving Focus',
    tools: ['Linux', 'Networking', 'Python', 'Wireshark'],
    overview: 'Cybersecurity is all about protecting digital infrastructure. You learn how networks communicate, how vulnerabilities occur, and how ethical hackers secure software.',
    roadmap: [
      { step: '1. Network Basics', detail: 'Understand IP addresses, HTTP headers, ports, and DNS.' },
      { step: '2. Linux Terminal', detail: 'Master command line navigation, shell scripting, and permissions.' },
      { step: '3. Defense Fundamentals', detail: 'Learn encryption, hashing, authentication, and vulnerability scans.' },
      { step: '4. First Project', detail: 'Set up a virtual lab and solve basic Capture-The-Flag (CTF) challenges.' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    icon: '🤖',
    shortDesc: 'Teach computers to recognize patterns, process natural language, and make smart predictions.',
    duration: 'Emerging Field',
    tools: ['Python', 'Scikit-Learn', 'PyTorch', 'Jupyter'],
    overview: 'Artificial Intelligence focuses on building algorithms that learn from data. Beginners can get started by building smart classifiers, chatbots, or vision predictors using Python.',
    roadmap: [
      { step: '1. Python Foundations', detail: 'Master Python data structures, functions, and libraries.' },
      { step: '2. Data Exploration', detail: 'Work with datasets using Pandas and Matplotlib.' },
      { step: '3. Machine Learning', detail: 'Train basic decision tree and classification models.' },
      { step: '4. First Project', detail: 'Build a spam text detector or an image classifier.' }
    ]
  }
];

export function FuturePaths({ onSelectPath }) {
  return (
    <section className="section-wrapper" id="paths">
      <div className="container">
        <div className="section-header">
          <span className="tagline">Exploration Paths</span>
          <h2 className="section-title">There is more than one way into tech.</h2>
          <p className="section-desc">
            You don't need to learn everything at once. Pick an exploration path to see what it's like and what you can build.
          </p>
        </div>

        <div className="cards-grid-3">
          {EXPLORATION_PATHS.map((path) => (
            <div
              key={path.id}
              className="path-card"
              onClick={() => onSelectPath(path.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectPath(path.id);
              }}
            >
              <div>
                <span className="path-icon">{path.icon}</span>
                <h3 className="path-title">{path.title}</h3>
                <p className="path-desc">{path.shortDesc}</p>
              </div>

              <div className="path-link">
                <span>Explore Roadmap</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
