# 📎 SaveLinks

> 유튜브, 인스타그램, 틱톡 등 다양한 플랫폼의 숏폼 콘텐츠를 즉시 저장하고, 한 페이지에서 모아서 시청할 수 있는 크롬 확장 기반의 웹 애플리케이션입니다.

**Vite + TypeScript + TailwindCSS**를 기반으로 개발되었습니다.

크롬 확장 프로그램과 연동되어, 보는 즉시 저장 → 사이트로 이동 → 즉시 재생까지 가능합니다!

### [🔗 크롬 확장 링크](https://chromewebstore.google.com/detail/savelinks/gdgcdhnflcajojpdjicgnbkkchoaaenh)



<br>
<br>

# 🔨 주요 기능

- 🎞️ **숏폼 콘텐츠 저장**  
  유튜브, 인스타그램, 틱톡에서 본 영상을 **크롬 확장으로 즉시 저장**할 수 있어요.

- 🧩 **크롬 확장 프로그램 연동**  
  확장 아이콘을 클릭하면 **저장 페이지로 즉시 이동**할 수 있어요.

- 🗂️ **한 페이지에서 모아보기**  
  플랫폼 구분 없이 저장한 숏폼 콘텐츠를 한 곳에서 볼 수 있어요.

- ▶️ **페이지 내 즉시 재생**  
  영상들을 이동 없이, 한 페이지에서 연속으로 바로 재생할 수 있어요.

- ☁️ **구글 계정 연동**  
  구글 계정으로 크롬 로그인하면 **다른 PC에서도 동일하게 연동**돼요.

- 🤖 **AI 채팅 기능**  
  좌측 하단 채팅창을 통해 **저장된 링크에 대해 질문하거나 추천**을 받을 수 있어요.

- 📝 **일반 링크 저장** _(회원가입 시)_  
  일반 링크를 저장하여 개인 정보 공간처럼 활용할 수 있어요. 모바일 간 연동도 가능해져요

<br>
<br>

# 🛠️ 기술 스택

| 기술                 | 설명                            |
| -------------------- | ------------------------------- |
| ⚛️ React             | UI 구성 라이브러리              |
| 🟦 TypeScript        | 정적 타입을 제공하는 JavaScript |
| ⚡ Vite              | 빠른 빌드 및 개발 서버          |
| 🎨 Tailwind CSS      | 유틸리티 퍼스트 CSS 프레임워크  |
| 🧩 Chrome Extension  | 숏폼 저장 기능 확장             |
| 🤖 Geminu Open API   | AI 챗봇 기능 제공              |
| 🧹 ESLint / Prettier | 코드 스타일 및 린트 툴          |

<br>
<br>

# 📂 폴더 구조

```bash
src/
├── api/           # 서버 통신 함수 모음 (axios, cookie 관련)
├── components/    # 재사용 가능한 컴포넌트 (Folder, layout, Memo, Link 및 공통컴포넌트)
├── extension/     # 크롬 확장 기능 관련 코드 (popup 파일, content.js 등)
├── pages/         # 라우트별 주요 페이지 컴포넌트 (홈, 로그인, 회원가입, links 등)
├── styles/        # 전역 스타일 및 Tailwind 설정 관련 파일
├── type/          # 전역 타입 정의 (interface, type 등)
├── utils/         # 공통 유틸 함수 모음 (날짜 변경, URL 로직 등)
├── zod/           # Zod 기반의 입력 유효성 검증 스키마
├── App.tsx        # 앱 루트 컴포넌트 (라우터 포함)
├── App.css        # App 전용 스타일 파일
├── index.css      # 전체 앱에 적용되는 글로벌 스타일
├── main.tsx       # 진입점 파일 (ReactDOM, Provider 설정 등)
└── vite-env.d.ts  # Vite 환경 설정 타입 정의 파일
```

# 🎥 시연영상

## 익스텐션 기능
- 익스텐션 설치

https://github.com/user-attachments/assets/b9b2ff68-ab37-40cf-a879-c9103a173ee2

- 숏츠 저장

https://github.com/user-attachments/assets/ab700d70-0118-4e25-8e24-037706d42738

- 저장소에서 여러 영상 확인 및 재생

https://github.com/user-attachments/assets/6abb2cc1-d703-4137-b4af-f69f9f068140

- 숏츠 확대 / 삭제

https://github.com/user-attachments/assets/64e360a6-a96e-4e90-b831-01ddf7eae914


## 로그인 기능

- URL로 링크 추가 / 폴더별 관리 / 즐겨찾기 기능 제공

https://github.com/user-attachments/assets/26c4fe5f-6c46-435b-b4a3-5564e8bcf1d4

- 링크 검색 / 수정 / 삭제

https://github.com/user-attachments/assets/0ac1ae07-a442-4fb0-b848-26993581fdc5

- Gemini 검색 기능 / 활용

https://github.com/user-attachments/assets/887d499a-e857-450a-a60a-293375194cc7


