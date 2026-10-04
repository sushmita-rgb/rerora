'use client';

import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What sounds more exciting to you?",
    options: [
      { id: 'web', icon: '🌐', text: 'Creating a website' },
      { id: 'app', icon: '📱', text: 'Building an app' },
      { id: 'game', icon: '🎮', text: 'Making a game' },
      { id: 'security', icon: '🔐', text: 'Understanding how hackers and security work' },
      { id: 'ai', icon: '🤖', text: 'Teaching computers to do interesting things' },
      { id: 'explorer', icon: '🤔', text: "I'm not sure yet" },
    ]
  },
  {
    id: 2,
    question: "What would you rather spend an afternoon doing?",
    options: [
      { id: 'web', icon: '🎨', text: 'Designing something visual' },
      { id: 'security', icon: '🧩', text: 'Solving a difficult puzzle or problem' },
      { id: 'app', icon: '🛠️', text: 'Building something from scratch' },
      { id: 'explorer', icon: '🔍', text: 'Understanding how things work behind the scenes' },
      { id: 'web', icon: '💡', text: 'Creating something people can use every day' },
      { id: 'explorer', icon: '🧪', text: 'Experimenting and trying random things' },
    ]
  },
  {
    id: 3,
    question: "Which sounds most like you?",
    options: [
      { id: 'web', icon: '✨', text: '“I like creating things.”' },
      { id: 'ai', icon: '🧠', text: '“I like solving problems.”' },
      { id: 'security', icon: '⚙️', text: '“I like understanding how things work.”' },
      { id: 'explorer', icon: '🔬', text: '“I like experimenting.”' },
      { id: 'game', icon: '🕹️', text: '“I like games and interactive experiences.”' },
      { id: 'explorer', icon: '❓', text: '“I don’t know yet.”' },
    ]
  },
  {
    id: 4,
    question: "How much do you know about technology right now?",
    options: [
      { id: 'beginner', icon: '🌱', text: 'Almost nothing' },
      { id: 'little', icon: '🌿', text: 'A little bit' },
      { id: 'tried', icon: '💻', text: "I've tried coding before" },
      { id: 'builder', icon: '🛠️', text: 'I already build small things' },
      { id: 'unsure', icon: '🧭', text: "I'm not sure" },
    ]
  },
  {
    id: 5,
    question: "What would you like to build someday?",
    options: [
      { id: 'web', icon: '🌐', text: 'Websites & Web Apps' },
      { id: 'app', icon: '📱', text: 'Mobile Apps (iOS / Android)' },
      { id: 'game', icon: '🎮', text: 'Video Games' },
      { id: 'security', icon: '🔐', text: 'Security & Protection Tools' },
      { id: 'ai', icon: '🤖', text: 'AI-Powered Smart Apps' },
      { id: 'explorer', icon: '🧭', text: "I haven't decided yet" },
    ]
  }
];

const PATH_RESULTS = {
  web: {
    id: 'web',
    title: '🌐 Web Development',
    badge: 'Web Development',
    icon: '🌐',
    description: 'You seem to enjoy creating things people can interact with visually and solving problems through web technology.',
    tags: ['Creating', 'Building', 'Problem Solving'],
    pathId: 'web-dev'
  },
  app: {
    id: 'app',
    title: '📱 Mobile Development',
    badge: 'Mobile Apps',
    icon: '📱',
    description: 'Your choices suggest you love tools that live on smartphones and creating software that helps people on the go.',
    tags: ['Mobile UX', 'App Logic', 'Creating'],
    pathId: 'android-dev'
  },
  game: {
    id: 'game',
    title: '🎮 Game Development',
    badge: 'Game Dev',
    icon: '🎮',
    description: 'Your curiosity points toward interactive experiences, mechanics, storytelling, and bringing imaginary worlds to life.',
    tags: ['Interactivity', 'Graphics', 'Game Physics'],
    pathId: 'game-dev'
  },
  security: {
    id: 'security',
    title: '🔐 Cybersecurity',
    badge: 'Cybersecurity',
    icon: '🔐',
    description: 'You seem fascinated by understanding how systems work under the hood, finding how things break, and keeping data safe.',
    tags: ['Deep Systems', 'Investigation', 'Protection'],
    pathId: 'cybersecurity'
  },
  ai: {
    id: 'ai',
    title: '🤖 AI & Machine Learning',
    badge: 'AI / Machine Learning',
    icon: '🤖',
    description: 'You enjoy teaching computers to solve complex problems, analyze patterns, and build intelligent features.',
    tags: ['Smart Logic', 'Pattern Recognition', 'Future Tech'],
    pathId: 'ai-ml'
  },
  explorer: {
    id: 'explorer',
    title: '🧭 Technology Explorer',
    badge: 'Tech Exploration',
    icon: '🧭',
    description: 'You have a broad curiosity across multiple fields! You don’t have to lock into a single path yet — exploring is the best way to start.',
    tags: ['Curiosity', 'Experimenting', 'Discovery'],
    pathId: 'web-dev'
  }
};

export function InteractiveQuiz({ containerRef, onSelectPath }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: optionId
    }));
  };

  const handleNext = () => {
    if (answers[currentStep] === undefined) return;

    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    const scores = { web: 0, app: 0, game: 0, security: 0, ai: 0, explorer: 0 };

    Object.values(answers).forEach((ansId) => {
      if (scores[ansId] !== undefined) {
        scores[ansId] += 1;
      }
    });

    let topPath = 'explorer';
    let maxScore = -1;

    Object.entries(scores).forEach(([pathKey, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topPath = pathKey;
      }
    });

    // If score is 0 or tie with explorer, fall back to explorer or top selected
    setResult(PATH_RESULTS[topPath] || PATH_RESULTS['web']);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100);

  return (
    <div className="container" ref={containerRef} id="quiz-section">
      {!result ? (
        <div className="quiz-container">
          <div className="quiz-header">
            <span className="quiz-counter">
              0{currentStep + 1} / 0{totalQuestions}
            </span>

            <div className="quiz-progress-bar-bg" title={`${progressPercent}% completed`}>
              <div 
                className="quiz-progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <h2 className="quiz-question-title">{question.question}</h2>

          <div className="quiz-options-grid">
            {question.options.map((opt, idx) => {
              const isSelected = answers[currentStep] === opt.id;
              return (
                <div
                  key={idx}
                  className={`quiz-option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(opt.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleSelectOption(opt.id);
                  }}
                >
                  <div className="quiz-option-icon">{opt.icon}</div>
                  <span className="quiz-option-text">{opt.text}</span>
                </div>
              );
            })}
          </div>

          <div className="quiz-footer">
            <button
              className="btn btn-ghost"
              onClick={handlePrev}
              disabled={currentStep === 0}
              style={{ opacity: currentStep === 0 ? 0.3 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
            >
              ← Back
            </button>

            <button
              className="btn btn-pink"
              onClick={handleNext}
              disabled={answers[currentStep] === undefined}
              style={{
                opacity: answers[currentStep] === undefined ? 0.5 : 1,
                cursor: answers[currentStep] === undefined ? 'not-allowed' : 'pointer'
              }}
            >
              {currentStep === totalQuestions - 1 ? 'See My Curiosity Result →' : 'Next Question →'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result-card">
          <p className="result-pretitle">Your curiosity leans toward...</p>

          <div className="result-main-badge">
            <span className="result-badge-icon">{result.icon}</span>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--accent-pink-dark)' }}>
              {result.badge}
            </span>
          </div>

          <h2 className="result-title">{result.title}</h2>

          <p className="result-desc">{result.description}</p>

          <div>
            <p className="result-tags-title">Your curiosity tags</p>
            <div className="result-tags">
              {result.tags.map((tag, idx) => (
                <span key={idx} className="result-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="result-actions">
            <button
              className="btn btn-pink"
              onClick={() => onSelectPath(result.pathId)}
            >
              Explore {result.badge} Path →
            </button>

            <button className="btn btn-secondary" onClick={handleReset}>
              ↺ Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
