import React, { useEffect, useState } from 'react';

const EmailVerification = () => {
  const [verificationMessage, setVerificationMessage] = useState('인증 요청이 처리되고 있습니다...');

  useEffect(() => {
    // URL에서 토큰 추출
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    console.log('토큰:', token); // 토큰 출력

    if (token) {
      // 서버에 인증 요청 보내기 (GET 요청)
      fetch(`http://localhost:3000/auth/sign-up/email-verification?token=${token}`)
        .then(response => {
          console.log('응답 상태:', response.status); // 응답 상태 출력
          if (response.ok) {
            alert('인증되었습니다!');
            setVerificationMessage('인증이 완료되었습니다!'); // 메시지 업데이트
          } else {
            alert('인증에 실패했습니다.');
            setVerificationMessage('인증에 실패했습니다. 다시 시도해주세요.'); // 메시지 업데이트
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('오류가 발생했습니다.');
          setVerificationMessage('오류가 발생했습니다. 나중에 다시 시도해주세요.'); // 메시지 업데이트
        });
    } else {
      alert('토큰이 없습니다.');
      setVerificationMessage('유효하지 않은 요청입니다.'); // 메시지 업데이트
    }
  }, []);

  return (
    <div>
      <h1>이메일 인증 페이지</h1>
      <p>{verificationMessage}</p> {/* 상태에 따라 메시지 표시 */}
    </div>
  );
};

export default EmailVerification;