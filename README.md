<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>해성인력 - 건설 전문 인력사무소</title>
  <style>
    body { font-family: 'Noto Sans KR', sans-serif; margin: 0; padding: 0; line-height: 1.6; }
    header { background: #0d47a1; color: white; padding: 1.5rem; text-align: center; }
    nav { background: #1565c0; text-align: center; padding: 0.5rem; }
    nav a { color: white; margin: 0 1rem; text-decoration: none; }
    section { padding: 2rem; }
    footer { background: #e3f2fd; text-align: center; padding: 1rem; font-size: 0.9rem; }
    .button { display: inline-block; background: #1976d2; color: white; padding: 0.75rem 1.5rem; border-radius: 5px; text-decoration: none; margin-top: 1rem; }
    form { margin-top: 1rem; max-width: 500px; }
    label { display: block; margin-bottom: 0.5rem; font-weight: bold; }
    input, textarea { width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #ccc; border-radius: 4px; }
  </style>
</head>
<body>
  <header>
    <h1>해성인력</h1>
    <p>건설 전문 인력사무소 - 기공·조공 모집</p>
  </header>
  <nav>
    <a href="#intro">소개</a>
    <a href="#apply">구직신청</a>
    <a href="#contact">연락처</a>
  </nav>
  <section id="intro">
    <h2>회사 소개</h2>
    <p>해성인력은 충남 당진을 기반으로 한 건설 전문 인력사무소입니다. 철근공, 형틀공, 잡부 등 다양한 건설 인력을 모집하여 현장에 신속하게 파견하고 있습니다. 정확한 매칭과 책임감 있는 관리로 신뢰를 드립니다.</p>
    <p>기공, 조공 구직자와 현장 담당자 모두 편하게 연락주세요.</p>
    <a class="button" href="tel:010-7537-5154">전화 문의하기</a>
  </section>

  <section id="contact">
    <h2>연락처 및 위치</h2>
    <p><strong>주소:</strong> 충남 당진시 서부로 85-16<br>
       <strong>전화:</strong> 010-7537-5154<br>
       <strong>카카오톡 채널:</strong> <a href="http://pf.kakao.com/_uxbQGn">바로가기</a><br>
       <strong>블로그:</strong> <a href="https://blog.naver.com/tolkshow">https://blog.naver.com/tolkshow</a></p>
    <p>
      <a href="https://map.naver.com/p/search/충남%20당진시%20서부로%2085-16" target="_blank" style="font-weight: bold; color: #0068c3;">
        ▶ 네이버 지도에서 위치 보기
      </a>
    </p>
  </section>

  <section id="apply">
    <h2>구직 신청</h2>
    <form action="https://formsubmit.co/tolkshow57@gmail.com" method="POST">
      <label for="name">이름</label>
      <input type="text" id="name" name="name" required>

      <label for="phone">연락처</label>
      <input type="tel" id="phone" name="phone" required>

      <label for="job">희망 직종</label>
      <input type="text" id="job" name="job" placeholder="예: 철근조공, 형틀기공 등" required>

      <label for="message">기타 문의사항</label>
      <textarea id="message" name="message" rows="4"></textarea>

      <button class="button" type="submit">지원하기</button>
    </form>
    <p style="font-size: 0.9rem; color: gray;">* 위 신청서 작성 시 이메일로 정보가 전송됩니다.</p>
  </section>

  <footer>
    &copy; 2025 해성인력. All rights reserved.
  </footer>
</body>
</html>
