import React from 'react';
import { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import TechStack from './pages/TechStack.tsx';
import FAQPage from './pages/FAQ.tsx';
import TeamTech from './pages/TeamTech.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';
import ServiceIntro from './pages/ServiceIntro.tsx';
import NotFound from './pages/NotFound.tsx';
import VideoCall from './pages/features/VideoCall.tsx';
import Chat from './pages/features/Chat.tsx';
import VoiceCall from './pages/features/VoiceCall.tsx';
import AIFeedback from './pages/features/AIFeedback.tsx';
import Features from './pages/Features.tsx';
import Tech from './pages/Tech.tsx';
import TechPost from './pages/TechPost.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from './pages/Privacy.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import ScrollToTop from './components/common/ScrollToTop.tsx';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more" element={<ServiceIntro />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/team" element={<TeamTech />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/features/video-call" element={<VideoCall />} />
            <Route path="/features/chat" element={<Chat />} />
            <Route path="/features/voice-call" element={<VoiceCall />} />
            <Route path="/features/ai-feedback" element={<AIFeedback />} />
            <Route path="/features" element={<Features />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/tech/:postId" element={<TechPost />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
};

export default App;