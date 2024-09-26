import React from 'react';

const App = () => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>회원가입 후 이메일 인증이 필요합니다.</p>
      <a href="/sign-up/email">이메일 인증하기</a> {/* 링크 추가 */}
    </div>
  );
};

export default App;