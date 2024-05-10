window.addEventListener("load", function () {
  // =========================================================================
  // 스크롤 다운 시 헤더 그림자 효과
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      header.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
    }
  });
  // 헤더 검색창 열고 닫기
  const searchOpen = document.getElementById("search-open");
  const search = document.getElementById("search");
  const searchClose = document.getElementById("closeBt");
  const searchInput = document.getElementById("searchInput");
  searchOpen.addEventListener("click", function () {
    search.style.display = "block";
  });
  searchClose.addEventListener("click", function () {
    search.style.display = "none";
    searchInput.value = ""; // input 내용 리셋
  });
  // =================================================================
  // var menuItems = document.querySelectorAll(".menu-list a");
  // menuItems.forEach(function (item) {
  //   item.addEventListener("click", function (event) {
  //     // href 속성 값 가져오기
  //     var href = this.getAttribute("href");
  //     // 만약 href 속성 값이 "#"로 시작하면, 스크롤 효과 적용
  //     if (href.startsWith("#")) {
  //       event.preventDefault(); // 기본 동작 방지
  //       // 대상 섹션의 id 가져오기
  //       var targetSectionId = href.substring(1);
  //       // 대상 섹션 요소 가져오기
  //       var targetSection = document.getElementById(targetSectionId);
  //       // 대상 섹션의 페이지 맨 위에서의 거리 계산
  //       var offsetTop = targetSection.offsetTop;
  //       // 부드러운 스크롤링 효과 적용
  //       window.scrollTo({
  //         top: offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // });
  // // 스크롤 이벤트를 사용하여 현재 보이는 섹션을 감지하고 해당 섹션의 메뉴에 클래스를 추가하여 CSS를 적용합니다.
  // window.addEventListener("scroll", function () {
  //   var sections = document.querySelectorAll("section");
  //   sections.forEach(function (section) {
  //     var bounding = section.getBoundingClientRect();
  //     if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
  //       var sectionId = section.getAttribute("id");
  //       var correspondingMenuItem = document.querySelector('.menu-list li a[href="#' + sectionId + '"]');
  //       // 해당 섹션에 대한 메뉴 아이템에 클래스를 추가합니다.
  //       menuItems.forEach(function (menuItem) {
  //         menuItem.parentElement.classList.remove("active");
  //       });
  //       correspondingMenuItem.parentElement.classList.add("active");
  //     }
  //   });
  //   // 방문후기 섹션에 대한 예외 처리 추가
  //   var visitReviewsSection = document.getElementById("visit-reviews");
  //   var visitReviewsMenuItem = document.querySelector('.menu-list li a[href="#visit-reviews"]');
  //   var visitReviewsBounding = visitReviewsSection.getBoundingClientRect();
  //   if (visitReviewsBounding.top >= 0 && visitReviewsBounding.bottom <= window.innerHeight) {
  //     // 방문후기 섹션에 해당하는 메뉴 아이템에 클래스를 추가합니다.
  //     menuItems.forEach(function (menuItem) {
  //       menuItem.parentElement.classList.remove("active");
  //     });
  //     visitReviewsMenuItem.parentElement.classList.add("active");
  //   }
  // });
  // =================================================================
  // 모바일 스크롤 다운 시 헤더 그림자 효과
  var mbheader = document.querySelector(".mb-header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      mbheader.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      mbheader.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
    }
  });
  // 모바일 450 스크롤 다운 시 헤더 그림자 효과
  var mbheader450 = document.querySelector(".mb-header-450");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      mbheader450.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      mbheader450.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
    }
  });
  // 모바일 햄버거 메뉴 열고 닫기
  const mbMenuOpen = document.getElementById("mb-menuBt");
  const mbMenuContents = document.getElementById("mbMenuContents");
  // const mbMenuClose = document.getElementById("mb-menu-xBt");
  const mbMenuClose = document.querySelector(".mb-menu-xBt");
  mbMenuOpen.addEventListener("click", function () {
    mbMenuContents.style.display = "block";
  });
  mbMenuClose.addEventListener("click", function () {
    mbMenuContents.style.display = "none";
  });
  // 모바일450 햄버거 메뉴 열고 닫기
  const mbMenuOpen450 = document.getElementById("mb-menuBt-450");
  const mbMenuContents450 = document.getElementById("mbMenuContents450");
  // const mbMenuClose = document.getElementById("mb-menu-xBt");
  const mbMenuClose450 = document.querySelector(".mb-menu-xBt-450");
  mbMenuOpen450.addEventListener("click", function () {
    mbMenuContents450.style.display = "block";
  });
  mbMenuClose450.addEventListener("click", function () {
    mbMenuContents450.style.display = "none";
  });
  // 모바일 헤더 검색창 열고 닫기
  const mbsearchOpen = document.querySelector(".mb-search-cont");
  const mbsearch = document.getElementById("mb-search");
  const mbsearchClose = document.getElementById("mb-closeBt");
  const mbSearchInput = document.getElementById("mbSearchInput");
  mbsearchOpen.addEventListener("click", function () {
    mbsearch.style.display = "block";
  });
  mbsearchClose.addEventListener("click", function () {
    mbsearch.style.display = "none";
    mbSearchInput.value = ""; // input 내용 리셋
  });
  // 모바일450 헤더 검색창 열고 닫기
  const searchOpen450 = document.querySelector(".mb-search-cont-450");
  const search450 = document.getElementById("mb-search-450");
  const searchClose450 = document.getElementById("mb-closeBt-450");
  const mbSearchInput450 = document.getElementById("mbSearchInput450");
  searchOpen450.addEventListener("click", function () {
    search450.style.display = "block";
  });
  searchClose450.addEventListener("click", function () {
    search450.style.display = "none";
    mbSearchInput450.value = ""; // input 내용 리셋
  });
  // =================================================================
  // 모든 .mb-search-cont 클래스를 가진 요소를 선택합니다.
  var mbSearchConts = document.querySelectorAll(".mb-search-cont");
  // 각 .mb-search-cont 클래스를 가진 요소에 대해 처리합니다.
  mbSearchConts.forEach(function (mbSearchCont) {
    // 현재 요소 내부에서 .search-text 클래스를 가진 입력 필드를 선택합니다.
    var searchInput = mbSearchCont.querySelector(".search-text");
    // 현재 요소 내부에서 .search-reset 클래스를 가진 리셋 버튼을 선택합니다.
    var resetButton = mbSearchCont.querySelector(".search-reset");
    // 입력 필드에 텍스트가 변경될 때마다 이벤트를 감지합니다.
    searchInput.addEventListener("input", function () {
      // 입력 필드에 값이 있는 경우 "Reset" 버튼을 표시합니다.
      if (searchInput.value.length > 0) {
        resetButton.style.opacity = "1"; // 보이도록 설정
      } else {
        // 입력 필드에 값이 없는 경우 "Reset" 버튼을 숨깁니다.
        resetButton.style.opacity = "0";
      }
    });
    // 리셋 버튼 클릭 시 입력 필드의 값 초기화
    resetButton.addEventListener("click", function () {
      searchInput.value = ""; // 입력 필드의 값 초기화
      resetButton.style.opacity = "0"; // 리셋 버튼 숨김
    });
  });
  // =================================================================
});
