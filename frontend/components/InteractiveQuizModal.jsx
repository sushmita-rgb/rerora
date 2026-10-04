'use client';

import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What sounds most exciting to try out?",
    options: [
      { id: 'web', icon: '🌐', text: 'Creating a website people can visit', reaction: 'Ooh, you like building things. You should definitely try this.' },
      { id: 'app', icon: '📱', text: 'Building an app for phones', reaction: 'Software that lives in people’s pockets. Super practical!' },
      { id: 'game', icon: '🎮', text: 'Making an interactive video game', reaction: 'Okay, creativity + technology. You might enjoy this one.' },
      { id: 'security', icon: '🔐', text: 'Understanding how hackers and security work', reaction: 'You like figuring out what happens behind the scenes. Interesting.' },
      { id: 'ai', icon: '🤖', text: 'Teaching computers to make smart decisions', reaction: 'You might enjoy experimenting with intelligent systems.' },
      { id: 'explorer', icon: '🤔', text: "I'm not sure yet", reaction: "That's completely fine. You're here to explore." },
    ]
  },
  {
    id: 2,
    question: "What would you rather spend an afternoon doing?",
    options: [
      { id: 'web', icon: '🎨', text: 'Designing a visual interface', reaction: 'Visual design + code is a superpower.' },
      { id: 'security', icon: '🧩', text: 'Solving a difficult puzzle or mystery', reaction: 'Puzzles and problem solving are core to tech security!' },
      { id: 'app', icon: '🛠️', text: 'Building something from scratch', reaction: 'Starting from a blank canvas is super satisfying.' },
      { id: 'explorer', icon: '🔍', text: 'Understanding how things work inside', reaction: 'Curiosity is the best starting point for any beginner.' },
      { id: 'web', icon: '💡', text: 'Creating a tool people can actually use', reaction: 'Turning an idea into a useful tool is awesome.' },
      { id: 'explorer', icon: '🧪', text: 'Experimenting and trying random ideas', reaction: 'Experimentation is how the best developers start!' },
    ]
  },
  {
    id: 3,
    question: "Which statement feels most like you?",
    options: [
      { id: 'web', icon: '✨', text: '“I like creating things.”', reaction: 'Creators thrive in web and software development!' },
      { id: 'ai', icon: '🧠', text: '“I like solving complex problems.”', reaction: 'Problem solvers are a natural fit for AI and data logic.' },
      { id: 'security', icon: '⚙️', text: '“I like understanding how things break.”', reaction: 'An analytical mindset is key for cybersecurity.' },
      { id: 'explorer', icon: '🔬', text: '“I like experimenting with new ideas.”', reaction: 'Exploration will open up so many doors for you.' },
      { id: 'game', icon: '🕹️', text: '“I like games and interactive stories.”', reaction: 'Interactive worlds are waiting for your touch!' },
      { id: 'explorer', icon: '❓', text: '“I don’t know yet.”', reaction: "That's completely fine. You're here to explore." },
    ]
  },
  {
    id: 4,
    question: "How much experience do you have in tech right now?",
    options: [
      { id: 'explorer', icon: '🌱', text: 'Zero experience — complete beginner', reaction: 'Welcome! Rorera was built specifically for beginners like you.' },
      { id: 'explorer', icon: '🌿', text: 'A little bit of curiosity', reaction: 'A spark of curiosity is all you need to start.' },
      { id: 'web', icon: '💻', text: "I've tried a tiny bit of coding before", reaction: 'Awesome! Having tried coding gives you a great head start.' },
      { id: 'app', icon: '🛠️', text: 'I already build small projects', reaction: 'Nice! Exploring different fields will expand your skill set.' },
      { id: 'explorer', icon: '🧭', text: "I'm not sure", reaction: 'No worries at all! Let’s figure it out together.' },
    ]
  },
  {
    id: 5,
    question: "What would be cool to build someday?",
    options: [
      { id: 'web', icon: '🌐', text: 'Websites and web tools', reaction: 'Web applications connect people everywhere.' },
      { id: 'app', icon: '📱', text: 'Mobile phone apps', reaction: 'Mobile development is endlessly rewarding.' },
      { id: 'game', icon: '🎮', text: 'Playable 2D or 3D games', reaction: 'Making games is one of the most creative tech fields.' },
      { id: 'security', icon: '🔐', text: 'Security scanners & defense tools', reaction: 'Cybersecurity keeps the digital world safe.' },
      { id: 'ai', icon: '🤖', text: 'AI-powered smart tools', reaction: 'AI is shaping the future of technology.' },
      { id: 'explorer', icon: '🧭', text: "I haven't decided yet", reaction: "That's completely fine. You're here to explore." },
    ]
  }
];

const RESULT_DETAILS = {
  web: {
    title: 'WEB DEVELOPMENT',
    badge: 'Web Development',
    icon: '🌐',
    desc: 'You seem to enjoy creating things and turning ideas into something people can actually use in their browser.',
    pathId: 'web-dev'
  },
  app: {
    title: 'MOBILE DEVELOPMENT',
    badge: 'Mobile App Development',
    icon: '📱',
    desc: 'You seem to enjoy building software that lives in people’s hands and solves everyday problems on mobile devices.',
    pathId: 'android-dev'
  },
  game: {
    title: 'GAME DEVELOPMENT',
    badge: 'Game Development',
    icon: '🎮',
    desc: 'You seem to love interactive experiences, combining creativity, logic, and storytelling to bring games to life.',
    pathId: 'game-dev'
  },
  security: {
    title: 'CYBERSECURITY',
    badge: 'Cybersecurity',
    icon: '🔐',
    desc: 'You seem fascinated by understanding how systems work under the hood, solving puzzles, and keeping software secure.',
    pathId: 'cybersecurity'
  },
  ai: {
    title: 'AI & MACHINE LEARNING',
    badge: 'AI & Machine Learning',
    icon: '🤖',
    desc: 'You seem to enjoy teaching computers to solve complex problems, analyze data, and build intelligent systems.',
    pathId: 'ai-ml'
  },
  explorer: {
    title: 'TECHNOLOGY EXPLORER',
    badge: 'Tech Exploration',
    icon: '🧭',
    desc: 'You have a broad curiosity across multiple fields! You don’t have to pick one right away — exploring is the best path.',
    pathId: 'web-dev'
  }
};

export function InteractiveQuizModal({ isOpen, onClose, onExplorePath }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [activeReaction, setActiveReaction] = useState(null);
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const totalQuestions = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (option) => {
    const updatedAnswers = { ...answers, [currentStep]: option.id };
    setAnswers(updatedAnswers);
    setActiveReaction(option.reaction);
  };

  const handleContinueNext = () => {
    setActiveReaction(null);
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateFinalResult();
    }
  };

  const calculateFinalResult = () => {
    const scores = { web: 0, app: 0, game: 0, security: 0, ai: 0, explorer: 0 };
    Object.values(answers).forEach((ansId) => {
      if (scores[ansId] !== undefined) {
        scores[ansId] += 1;
      }
    });

    let topPath = 'explorer';
    let maxScore = -1;
    Object.entries(scores).forEach(([key, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topPath = key;
      }
    });

    setResult(RESULT_DETAILS[topPath] || RESULT_DETAILS['web']);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setActiveReaction(null);
    setResult(null);
  };

  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100);

  return (
    <div className="quiz-modal-backdrop" onClick={onClose}>
      <div className="quiz-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Quiz">
          ✕
        </button>

        {!result ? (
          <>
            {!activeReaction ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span className="brand-tag" style={{ background: 'var(--bg-pink-tint)', borderColor: 'var(--border-pink)' }}>
                    Question 0{currentStep + 1} of 0{totalQuestions}
                  </span>
                  <div className="quiz-progress-bar-bg" style={{ width: '100px' }}>
                    <div className="quiz-progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.45rem', marginBottom: '22px', color: 'var(--text-main)', lineHeight: 1.3 }}>
                  {question.question}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {question.options.map((opt, idx) => (
                    <button
                      key={idx}
                      className="quiz-modal-option"
                      onClick={() => handleSelectOption(opt)}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{opt.icon}</span>
                      <span style={{ fontWeight: 600, flexGrow: 1, textAlign: 'left' }}>{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '16px 8px', animation: 'fadeIn 0.25s ease-out' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>💬</div>
                
                <div style={{
                  background: 'var(--bg-pink-tint)',
                  border: '1px solid var(--border-pink)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px 24px',
                  marginBottom: '24px'
                }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-pink-dark)', lineHeight: 1.5, margin: 0 }}>
                    “{activeReaction}”
                  </p>
                </div>

                <button className="btn btn-pink" onClick={handleContinueNext} style={{ width: '100%' }}>
                  {currentStep === totalQuestions - 1 ? 'See My Result →' : 'Next Question →'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.3s ease-out' }}>
            <p style={{ fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-light)', marginBottom: '10px' }}>
              Your curiosity leans toward…
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--bg-pink-tint)',
              border: '1px solid var(--border-pink)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{result.icon}</span>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent-pink-dark)', letterSpacing: '-0.02em' }}>
                {result.title}
              </span>
            </div>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              “{result.desc}”
            </p>

            <p style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '28px' }}>
              You should definitely try exploring this field.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                className="btn btn-pink"
                onClick={() => {
                  onClose();
                  onExplorePath(result.pathId);
                }}
              >
                Explore this path →
              </button>

              <button className="btn btn-ghost" onClick={handleReset}>
                ↺ Retake quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
