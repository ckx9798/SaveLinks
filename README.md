# 📎 SaveLinks

링크를 간편하게 저장하고, 폴더로 정리하며, 즐겨찾기와 메모까지 함께 관리할 수 있는 React 기반 웹 애플리케이션입니다. ✨  
**Vite + TypeScript + TailwindCSS**를 기반으로 개발되었습니다

## 🌟 주요 기능

- 🔗 **링크 저장**  
  자주 사용하는 웹사이트나 자료 링크를 쉽게 추가하고 한눈에 볼 수 있어요.

- 📁 **폴더별 정리**  
  폴더를 만들어 링크를 카테고리별로 깔끔하게 정리할 수 있어요.

- ⭐ **즐겨찾기 표시**  
  중요한 링크는 즐겨찾기로 설정해 빠르게 접근할 수 있어요.

- 📝 **간단한 메모 기능**  
  간단한 메모를 작성하고 관리할 수 있어요.

## 🛠️ 기술 스택

|                      |                                 |
| -------------------- | ------------------------------- |
| ⚛️ React             | UI 구성 라이브러리              |
| 🟦 TypeScript        | 정적 타입을 제공하는 JavaScript |
| ⚡ Vite              | 빠른 빌드 및 개발 서버          |
| 🎨 Tailwind CSS      | 유틸리티 퍼스트 CSS 프레임워크  |
| 🧹 ESLint / Prettier | 코드 스타일 및 린트 툴          |
| 🎈 React Query       | 캐싱 및 데이터 페칭             |
|                      |                                 |

## 📂 폴더 구조

src/ <br>
├── api/ # 서버 요청 관련 함수 (axios 인스턴스, fetch 함수) <br>
├── components/ # 재사용 가능한 UI 컴포넌트 (버튼, 카드 등) <br>
├── pages/ # 라우트별 페이지 컴포넌트 <br>
├── styles/ # 전역 및 공통 스타일 (Tailwind, CSS 등) <br>
├── type/ # 전역 타입 정의 (interface, type 등) <br>
├── utils/ # 공통 유틸 함수 모음 <br>
├── zod/ # Zod 기반의 입력 유효성 검증 스키마 <br>
├── App.tsx # 애플리케이션 루트 컴포넌트 <br>
├── main.tsx # 진입점 파일 (ReactDOM.createRoot 등) <br>
├── App.css # App.tsx에 적용되는 스타일 <br>
├── index.css # 전체 프로젝트에 적용되는 전역 스타일 <br>
└── vite-env.d.ts # Vite 환경 설정 관련 타입 정의 <br>
