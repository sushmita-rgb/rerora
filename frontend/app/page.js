'use client';

import React, { useState } from 'react';
import { HeaderBar } from '../components/HeaderBar';
import { Hero } from '../components/Hero';
import { InteractiveQuizTeaser } from '../components/InteractiveQuizTeaser';
import { InteractiveQuizModal } from '../components/InteractiveQuizModal';
import { AboutRorera } from '../components/AboutRorera';
import { SchoolOutreach } from '../components/SchoolOutreach';
import { HowItWorks } from '../components/HowItWorks';
import { FuturePaths, EXPLORATION_PATHS } from '../components/FuturePaths';
import { ResourceBlog } from '../components/ResourceBlog';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

import { PathModal } from '../components/PathModal';
import { ArticleModal } from '../components/ArticleModal';
import { ContactModal } from '../components/ContactModal';
import { TermsPrivacyModal } from '../components/TermsPrivacyModal';

export default function HomePage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedPathId, setSelectedPathId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [contactModalType, setContactModalType] = useState(null); // 'workshop' | 'general'
  const [legalModalType, setLegalModalType] = useState(null); // 'terms' | 'privacy'

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPathById = (pathId) => {
    const pathObj = EXPLORATION_PATHS.find((p) => p.id === pathId) || EXPLORATION_PATHS[0];
    setSelectedPathId(pathObj);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container">
        <HeaderBar />
        <Hero onStartQuiz={() => setIsQuizOpen(true)} />
      </div>

      <main style={{ flexGrow: 1 }}>
        <InteractiveQuizTeaser onOpenQuiz={() => setIsQuizOpen(true)} />

        <AboutRorera />

        <SchoolOutreach
          onRequestWorkshop={() => setContactModalType('workshop')}
        />

        <HowItWorks />

        <FuturePaths
          onSelectPath={handleSelectPathById}
        />

        <ResourceBlog
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        <FinalCTA
          onStartQuiz={() => setIsQuizOpen(true)}
          onExploreTech={() => scrollToSection('paths')}
        />
      </main>

      <Footer
        onOpenContact={(type) => setContactModalType(type)}
        onOpenLegal={(type) => setLegalModalType(type)}
        onScrollToSection={scrollToSection}
      />

      {/* Interactive Centered Quiz Modal */}
      <InteractiveQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onExplorePath={handleSelectPathById}
      />

      {/* Exploration Path Details Modal */}
      {selectedPathId && (
        <PathModal
          path={selectedPathId}
          onClose={() => setSelectedPathId(null)}
        />
      )}

      {/* Blog Article Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {/* Contact / Workshop Modal */}
      {contactModalType && (
        <ContactModal
          type={contactModalType}
          onClose={() => setContactModalType(null)}
        />
      )}

      {/* Legal Terms & Privacy Modal */}
      {legalModalType && (
        <TermsPrivacyModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
