# 요구사항

### 1. 이메일 인증 요청 화면
- 사용자가 이메일 인증 요청을 보내는 화면은 /sign-up/email 경로에서 렌더링됨.
<details><summary>회원가입 후 이메일 인증 요청 화면</summary>

![image](https://github.com/user-attachments/assets/c5eeceeb-5372-42c2-ac35-d8064801ccb4)

</details>
<br>

### 2. 이메일 확인 및 링크 클릭
- 사용자가 인증 이메일을 확인하기 위해 새 창이나 탭을 열게 됨.
- 해당 이메일에서 인증 요청 링크를 클릭함.
<br>

### 3. 프론트엔드 URL 이동
- 클릭한 링크는 프론트엔드 애플리케이션의 특정 URL로 이동함.
- 이 URL은 /sign-up/email?token=${token}임.
이때, token은 서버에서 발송된 이메일의 링크에 포함된 값임.
<br>

### 4. URLSearchParams로 token 추출
- EmailVerification 컴포넌트에서는 URLSearchParams를 사용하여 URL의 쿼리 파라미터에서 token을 추출함.
```
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
```
<br>

### 5. GET 요청 보내기
- 추출한 token이 있는 경우, /auth/sign-up/email-verification?token=${token}으로 GET 요청을  보냄.
<br>

#### 6. 요청 처리 및 리다이렉션
- 서버의 응답을 확인함.
  - <b>성공한 경우</b>:
    - 사용자에게 알림 전송 : "인증되었습니다!"
    - 사용자를 메인 페이지로 리다이렉션함.
  - <b>실패한 경우</b>:
    - 사용자에게 오류 메시지 전송 : "인증에 실패했습니다.

----
# 시연 GIF
완벽하게 요구사항에 맞지는 않으나, 대략 이런 느낌임.
<br>
<br>
![ezgif-3-1e145b0546](https://github.com/user-attachments/assets/eee2539a-e061-4093-ab6c-f00d9e3192ac)
