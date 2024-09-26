import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import EmailVerification from './EmailVerification'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-up/email" element={<EmailVerification />} /> {/* 이메일 인증 페이지 경로 */}
    </Routes>
  </Router>
);