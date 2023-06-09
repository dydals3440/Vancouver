# 🛒 Vancouver 프로젝트

실제 쇼핑 관련 사이트의 기능들을 구현하고자 노력한 프로젝트입니다.

---

## 🛒 Vancouver 앱 실행 방법

### 실행 방법

`yarn start`를 통해 프로젝트를 시작할 수 있습니다.

### 🛒 Vancouver 사용해보기

아래의 링크에서 실제 작동되는 App을 확인할 수 있습니다.

<!-- 추후 배포 링크 추가 예정입니다. -->

[🛒 Vancouver 사용해보기](https://effulgent-youtiao-b6a85c.netlify.app/)

---

# 프로젝트 파일 구조

```js
📦src
 ┣ 📂assets
 ┃ ┣ 📜hero-bcg-2.jpeg
 ┃ ┣ 📜hero-bcg.jpeg
 ┃ ┣ 📜logo.svg
 ┃ ┗ 📜logo2.svg
 ┣ 📂components
 ┃ ┣ 📜AddToCart.jsx
 ┃ ┣ 📜AmountButtons.jsx
 ┃ ┣ 📜CarContent.jsx
 ┃ ┣ 📜CartButtons.jsx
 ┃ ┣ 📜CartColumns.jsx
 ┃ ┣ 📜CartItem.jsx
 ┃ ┣ 📜CartTotals.jsx
 ┃ ┣ 📜Contact.jsx
 ┃ ┣ 📜Error.jsx
 ┃ ┣ 📜FeaturedProducts.jsx
 ┃ ┣ 📜Filters.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜GridView.jsx
 ┃ ┣ 📜Hero.jsx
 ┃ ┣ 📜ListView.jsx
 ┃ ┣ 📜Loading.jsx
 ┃ ┣ 📜Navbar.jsx
 ┃ ┣ 📜PageHero.jsx
 ┃ ┣ 📜Product.jsx
 ┃ ┣ 📜ProductImages.jsx
 ┃ ┣ 📜ProductList.jsx
 ┃ ┣ 📜Services.jsx
 ┃ ┣ 📜Sidebar.jsx
 ┃ ┣ 📜Sort.jsx
 ┃ ┣ 📜Stars.jsx
 ┃ ┣ 📜StripeCheckout.jsx
 ┃ ┗ 📜index.jsx
 ┣ 📂context
 ┃ ┣ 📜cart_context.js
 ┃ ┣ 📜filter_context.js
 ┃ ┣ 📜products_context.js
 ┃ ┗ 📜user_context.js
 ┣ 📂pages
 ┃ ┣ 📜AboutPage.jsx
 ┃ ┣ 📜CartPage.jsx
 ┃ ┣ 📜CheckoutPage.jsx
 ┃ ┣ 📜ErrorPage.jsx
 ┃ ┣ 📜HomePage.jsx
 ┃ ┣ 📜PrivateRoute.jsx
 ┃ ┣ 📜ProductsPage.jsx
 ┃ ┣ 📜SingleProductPage.jsx
 ┃ ┗ 📜index.jsx
 ┣ 📂reducers
 ┃ ┣ 📜cart_reducer.js
 ┃ ┣ 📜filter_reducer.js
 ┃ ┗ 📜products_reducer.js
 ┣ 📂utils
 ┃ ┣ 📜constants.js
 ┃ ┗ 📜helpers.js
 ┣ 📜App.js
 ┣ 📜actions.js
 ┣ 📜index.css
 ┗ 📜index.js
```

---

### Commit Message Convention

`feat`: 기능 추가, 삭제, 변경

`fix`: 버그 수정

`docs`: 문서 추가, 삭제, 변경 - 코드 수정없음

`style`: 코드 형식, 정렬, 주석 등의 변경
(세미콜론 추가 같은 코드 수정이 있으나, 기능에 변동 X)

`refactor`: 코드 리펙토링 (변수명, JS -> TS)

`test`: 테스트 코드 추가, 삭제, 변경 등

`chore`: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경

---

### 🛒 ShoppingMall 앱 핵심 기능

- [x] `Products` 클릭 시, 전체 상품 보기 기능
- [x] `결제하기` 클릭 or 링크로 이동시 로그인 하지 않은 사용자는 Home으로, 로그인 한 사용자는 장바구니 기능 이용 가능! `protectedRoute` 구현, 실제로 로그인하지 않았으면 UI상으로 볼 수 없게 구현
- [x] `Auth0`를 활용하여 다양한 소셜 로그인 기능 구현
- [x] `장바구니 기능` 장바구니 클릭시, 실제 장바구니에 담은 제품을 확인 가능, 색상이 다른 제품일 경우에도 구분하여 표기 됨.
- [x] `제품 별 사이즈` 옵션 기능 추가!
- [x] `상품 총액, 배송비, 총가격`등 제품별 가격에 맞춰서 유동적으로 계산해주는 기능. 장바구니에서 수량 올릴시 실시간으로 변경이 가능하고, 장바구니에 있는 상품 삭제도 가능
- [x] 이전에 추가해놓은 장바구니 상품을 `localstorage`를 통해 나중에도 확인 가능.
- [x] `reducer`, `context`를 활용하여, 비즈니스 로직 구분 및, 기능 구현, 상태 관리
- [x] 다중 필터 구현, 카테고리 별 분류, 회사명 별 분류, 색상 별 분류, 가격 별 분류, 배송비 여부에 따른 필터링, 금액에 따른 필터링, 필터 전체 초기화 기능등, 여러가지 로직에 따른 분류
- [x] 이름 오름/내림 차순 정렬, 가격 순 정렬 구현.
- [x] 제품 `Grid`뷰, `List`뷰 선택해서 이용자가 원하는 상태로 보는 것이 가능
- [ ] 추후 `netlify` 배포 예정
- [ ] 결제 기능 추가예정

---

### 🛒 Vancouverl기능 실행 영상!

![앱 사용영상](./src/images/playShoppingMall.gif)

---

### Trouble Shooting 🛠️

`🛒 ShoppingMall` 프로젝트를 진행하면서 발생한 `버그 수정`, `문제 해결`, 기능 구현시 `어려웠던 점 정리`, `성능 개선`, `작업 효율 향상` 들에 관해 정리한 기록입니다.

[프로젝트를 진행시 배운점들 정리](https://www.notion.so/ShoppingMall-7f5937aef13c4c1abf9985edda88554a?pvs=4)

---

### 느낀점...!

1. 페이지 관리법
2. reducer의 활용법
3. 여러 쇼핑몰의 기능들 구현

여러 유용한 기능들을 배웠다. 디자인 상으로는 크게 신경안쓰고, 성능 개선 및 기능 구현을 중점으로 학습하였다. 이 지식들을 활용하여, 조금 더 디자인에 신경 쓴 쇼핑몰 앱을 만들어볼 것이다.

---

### 버그 발생시 ☎️

연락 부탁드립니다. 더욱 좋은 코드 리팩토링 방향성이 있어도 연락 주시면 감사하겠습니다!
<dydals3440@gmail.com>
