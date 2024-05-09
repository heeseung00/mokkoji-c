window.addEventListener("load", function () {
  // top 버튼
  const goTopImg = document.getElementById("go-top-btn-img");

  // 이미지를 클릭했을 때 페이지의 맨 위로 스크롤하는 이벤트 핸들러
  goTopImg.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 스크롤 이벤트 핸들러
  window.addEventListener("scroll", function () {
    // 현재 스크롤 위치를 가져옵니다.
    var scrollY = window.scrollY || window.pageYOffset;
    // 현재 창의 높이를 가져옵니다.
    var windowHeight = window.innerHeight;
    // 스크롤이 맨 위에 위치하고 현재 창의 높이가 0이 아니라면
    if (scrollY !== 0 && windowHeight !== 0) {
      // 이미지를 보이도록 설정합니다.
      goTopImg.style.display = "block";
    } else {
      // 그렇지 않으면 이미지를 숨깁니다.
      goTopImg.style.display = "none";
    }
  });

  // =============================================
  // // go top 버튼
  // goTopImg.addEventListener("click", function () {
  //   toggleImages();
  // });
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY === 0) {
  //     goDownImg.remove(); // 스크롤 높이가 0일 때 "go_bottom.png" 이미지를 제거합니다.
  //     goTopImg.src = "images/topbt/go_top.png"; // 이미지를 다시 "go_top.png"로 변경합니다.
  //   } else {
  //     if (!document.contains(goDownImg)) {
  //       // "go_bottom.png" 이미지가 존재하지 않는 경우, 다시 추가합니다.
  //       document.querySelector(".top-button a").appendChild(goDownImg);
  //     }
  //   }
  // });
  // function toggleImages() {
  //   goTopImg.src = "images/topbt/go_bottom.png"; // 이미지를 "go_bottom.png"로 변경합니다.
  // }
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
  // 대구 아이콘에 active 클래스 추가
  var daeguPinCont = document.querySelector(".map-pin-cont.daegu");
  daeguPinCont.classList.add("active");
  // 지역 아이콘 클릭 시 해당 지역 이름이 뜨고 핀 색 변경
  var pins = document.querySelectorAll(".map-pin-cont");
  pins.forEach(function (pin) {
    pin.addEventListener("click", function () {
      var isActive = this.classList.contains("active");
      pins.forEach(function (otherPin) {
        otherPin.classList.remove("active");
      });
      if (!isActive) {
        this.classList.add("active");
      }
    });
    pin.addEventListener("mouseleave", function () {
      var isActive = this.classList.contains("active");
      if (!isActive) {
        this.classList.remove("active");
      }
    });
  });
  // ==================================================================
  // 각 지역 핀 클릭 시 해당 지역 컨텐츠만 보이도록 설정
  var pins = document.querySelectorAll(".map-pin-cont");
  pins.forEach(function (pin) {
    pin.addEventListener("click", function () {
      // 현재 클릭한 지역의 이름을 가져옴
      var region = this.classList[1]; // 예: "daegu"
      // 모든 지역 컨텐츠를 숨김
      var allContents = document.querySelectorAll(".market-contents");
      allContents.forEach(function (content) {
        content.style.display = "none";
      });
      // 현재 클릭한 지역의 컨텐츠를 보이도록 함
      var targetContent = document.getElementById(region);
      targetContent.style.display = "block";
      // 현재 클릭한 지역 핀에만 active 클래스 추가
      pins.forEach(function (otherPin) {
        otherPin.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  // ==================================================================
  // 대구 핀 클릭 시 대구 배경 나오게 하기
  const mapPinDaegu = document.querySelector(".daegu");
  const daeguContent = document.getElementById("daegu");
  mapPinDaegu.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_daegu.png")';
  });
  // 부산 핀 클릭 시 부산 배경 나오게 하기
  const mapPinBusan = document.querySelector(".busan");
  const busanContent = document.getElementById("busan");
  mapPinBusan.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_busan.png")';
    busanContent.style.display = "block";
  });
  // 충북 핀 클릭 시 충북 배경 나오게 하기
  const mapPinChungbuk = document.querySelector(".chungbuk");
  mapPinChungbuk.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_chungbuk.png")';
  });
  // 충남 핀 클릭 시 충님 배경 나오게 하기
  const mapPinChungnam = document.querySelector(".chungnam");
  mapPinChungnam.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_chungnam.png")';
  });
  // 대전 핀 클릭 시 대전 배경 나오게 하기
  const mapPinDaejeon = document.querySelector(".daejeon");
  mapPinDaejeon.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_daejeon.png")';
  });
  // 강원 핀 클릭 시 강원 배경 나오게 하기
  const mapPinGangwon = document.querySelector(".gangwon");
  mapPinGangwon.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_gangwon.png")';
  });
  // 광주 핀 클릭 시 광주 배경 나오게 하기
  const mapPinGwangju = document.querySelector(".gwangju");
  mapPinGwangju.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_gwangju.png")';
  });
  // 경북 핀 클릭 시 경북 배경 나오게 하기
  const mapPinGyeongbuk = document.querySelector(".gyeongbuk");
  mapPinGyeongbuk.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_gyeongbuk.png")';
  });
  // 경기 핀 클릭 시 경기 배경 나오게 하기
  const mapPinGyeonggi = document.querySelector(".gyeonggi");
  mapPinGyeonggi.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_gyeonggi.png")';
  });
  // 경남 핀 클릭 시 경남 배경 나오게 하기
  const mapPinGyeongnam = document.querySelector(".gyeongnam");
  mapPinGyeongnam.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_gyeongnam.png")';
  });
  // 인천 핀 클릭 시 인천 배경 나오게 하기
  const mapPinIncheon = document.querySelector(".incheon");
  mapPinIncheon.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_incheon.png")';
  });
  // 제주 핀 클릭 시 제주 배경 나오게 하기
  const mapPinJeju = document.querySelector(".jeju");
  mapPinJeju.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_jeju.png")';
  });
  // 전북 핀 클릭 시 전북 배경 나오게 하기
  const mapPinJeonbuk = document.querySelector(".jeonbuk");
  mapPinJeonbuk.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_jeonbuk.png")';
  });
  // 전남 핀 클릭 시 전남 배경 나오게 하기
  const mapPinJeonnam = document.querySelector(".jeonnam");
  mapPinJeonnam.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_jeonnam.png")';
  });
  // 세종 핀 클릭 시 세종 배경 나오게 하기
  const mapPinSejong = document.querySelector(".sejong");
  mapPinSejong.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_sejong.png")';
  });
  // 서울 핀 클릭 시 서울 배경 나오게 하기
  const mapPinSeoul = document.querySelector(".seoul");
  mapPinSeoul.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_seoul.png")';
  });
  // 울산 핀 클릭 시 울산 배경 나오게 하기
  const mapPinUlsan = document.querySelector(".ulsan");
  mapPinUlsan.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/4marketinfo/main_map_ulsan.png")';
  });
  // =====================================================================
  // =====================================================================
  // 전국 시장 소개 스와이프
  var swLocalName = new Swiper(".sw-local-name", {
    slidesPerView: 2,
    spaceBetween: 10,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1000px 이하일 때
      940: {
        slidesPerView: 12,
        spaceBetween: 10,
      },
      870: {
        slidesPerView: 11,
        spaceBetween: 10,
      },
      // 530px 이하일 때
      810: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      745: {
        slidesPerView: 9,
        spaceBetween: 10,
      },
      670: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      590: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      520: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      370: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      300: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".next-local-name",
      prevEl: ".prev-local-name",
    },
  });
  // =====================================================================
  // 서울 버튼 요소를 선택합니다.
  const seoulButton = document.querySelector(".seoul2");
  // 서울 버튼에 선택된 스타일을 적용합니다.
  seoulButton.classList.add("selected");
  const seoulButtonName = seoulButton.querySelector(".local-bt-name");
  // 서울 버튼의 배경색을 변경합니다.
  seoulButtonName.style.backgroundColor = "#ff9364"; // 원하는 배경색으로 변경
  seoulButtonName.style.color = "#fff"; // 원하는 텍스트 색상으로 변경
  seoulButtonName.style.border = "none";
  // 필요에 따라 다른 스타일도 변경합니다.
  // 이전에 선택된 버튼의 스타일을 초기화하고 selected 클래스를 제거하는 함수
  function resetPreviousButton() {
    const previousSelectedButton = document.querySelector(".local-cont.selected");
    if (previousSelectedButton) {
      previousSelectedButton.classList.remove("selected");
      const previousButtonName = previousSelectedButton.querySelector(".local-bt-name");
      // 이전에 선택된 버튼의 배경색을 원래 스타일로 변경
      previousButtonName.style.backgroundColor = "#fff"; // 이전에 설정한 배경색으로 변경
      previousButtonName.style.color = "#bababa"; // 이전에 설정한 텍스트 색상으로 변경
      previousButtonName.style.border = "1px solid #bababa"; // 이전에 설정한 텍스트 색상으로 변경
      // 필요에 따라 다른 스타일도 초기화합니다.
    }
  }
  // 각 지역 버튼 요소를 가져옵니다.
  const localButtons = document.querySelectorAll(".local-cont");
  // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
  localButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 이전에 선택된 버튼의 selected 클래스를 제거하고 스타일을 초기화합니다.
      resetPreviousButton();
      // 현재 클릭된 버튼에 selected 클래스를 추가합니다.
      this.classList.add("selected");
      const currentButtonName = this.querySelector(".local-bt-name");
      // 현재 클릭된 버튼의 배경색을 변경합니다.
      currentButtonName.style.backgroundColor = "#ff9364"; // 원하는 배경색으로 변경
      currentButtonName.style.color = "#fff"; // 원하는 텍스트 색상으로 변경
      currentButtonName.style.border = "none";
      // 필요에 따라 다른 스타일도 변경합니다.
    });
  });
  // 서울
  const seoulBt = document.querySelector(".seoul2");
  const seoulCon = document.getElementById("seoul2");
  seoulCon.style.display = "block"; // 서울 시장 정보 기본 표시
  seoulBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(seoulCon);
  });
  // 인천
  const incheonBt = document.querySelector(".incheon2");
  const incheonCon = document.getElementById("incheon2");
  incheonBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(incheonCon);
  });
  // 대전
  const daejeonBt = document.querySelector(".daejeon2");
  const daejeonCon = document.getElementById("daejeon2");
  daejeonBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(daejeonCon);
  });
  // 대구
  const daeguBt = document.querySelector(".daegu2");
  const daeguCon = document.getElementById("daegu2");
  daeguBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(daeguCon);
  });
  // 경기
  const gyeonggiBt = document.querySelector(".gyeonggi2");
  const gyeonggiCon = document.getElementById("gyeonggi2");
  gyeonggiBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gyeonggiCon);
  });
  // 부산
  const busanBt = document.querySelector(".busan2");
  const busanCon = document.getElementById("busan2");
  busanBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(busanCon);
  });
  // 울산
  const ulsanBt = document.querySelector(".ulsan2");
  const ulsanCon = document.getElementById("ulsan2");
  ulsanBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(ulsanCon);
  });
  // 광주
  const gwangjuBt = document.querySelector(".gwangju2");
  const gwangjuCon = document.getElementById("gwangju2");
  gwangjuBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gwangjuCon);
  });
  // 강원
  const gangwonBt = document.querySelector(".gangwon2");
  const gangwonCon = document.getElementById("gangwon2");
  gangwonBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gangwonCon);
  });
  // 충북
  const chungbukBt = document.querySelector(".chungbuk2");
  const chungbukCon = document.getElementById("chungbuk2");
  chungbukBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(chungbukCon);
  });
  // 충남
  const chungnamBt = document.querySelector(".chungnam2");
  const chungnamCon = document.getElementById("chungnam2");
  chungnamBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(chungnamCon);
  });
  // 경북
  const gyeongbukBt = document.querySelector(".gyeongbuk2");
  const gyeongbukCon = document.getElementById("gyeongbuk2");
  gyeongbukBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gyeongbukCon);
  });
  // 경남
  const gyeongnamBt = document.querySelector(".gyeongnam2");
  const gyeongnamCon = document.getElementById("gyeongnam2");
  gyeongnamBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(gyeongnamCon);
  });
  // 전북
  const jeonbukBt = document.querySelector(".jeonbuk2");
  const jeonbukCon = document.getElementById("jeonbuk2");
  jeonbukBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(jeonbukCon);
  });
  // 전남
  const jeonnamBt = document.querySelector(".jeonnam2");
  const jeonnamCon = document.getElementById("jeonnam2");
  jeonnamBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(jeonnamCon);
  });
  // 제주
  const jejuBt = document.querySelector(".jeju2");
  const jejuCon = document.getElementById("jeju2");
  jejuBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(jejuCon);
  });
  // 세종
  const sejongBt = document.querySelector(".sejong2");
  const sejongCon = document.getElementById("sejong2");
  sejongBt.addEventListener("click", function () {
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    showMarketContent(sejongCon);
  });
  // 모든 시장 정보를 숨기는 함수
  function hideAllMarketContents() {
    const marketContents = document.querySelectorAll(".market-contents2");
    marketContents.forEach((content) => {
      content.style.display = "none";
    });
  }
  // 시장 정보를 보여주는 함수
  function showMarketContent(content) {
    // 모든 시장 정보를 숨깁니다.
    hideAllMarketContents();
    // 클릭된 버튼에 해당하는 시장 정보를 보여줍니다.
    content.style.display = "block";
  }
  // =====================================================================
  // 시장 소개 스와이퍼
  // 대구
  var swdaegu = new Swiper(".sw-daegus", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 부산
  var swbusan = new Swiper(".sw-busans", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 충북
  var swchungbuk = new Swiper(".sw-chungbuks", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 충남
  var swchungnam = new Swiper(".sw-chungnams", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 대전
  var swdaejeon = new Swiper(".sw-daejeons", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 강원
  var swgangwon = new Swiper(".sw-gangwons", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 광주
  var swgwangju = new Swiper(".sw-gwangjus", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 경북
  var swgyeongbuk = new Swiper(".sw-gyeongbuks", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 경기
  var swgyeonggi = new Swiper(".sw-gyeonggis", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 경남
  var swgyeongnam = new Swiper(".sw-gyeongnams", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 인천
  var swincheon = new Swiper(".sw-incheons", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 제주
  var swjeju = new Swiper(".sw-jejus", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 전북
  var swjeonbuk = new Swiper(".sw-jeonbuks", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 전남
  var swjeonnam = new Swiper(".sw-jeonnams", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 세종
  var swsejong = new Swiper(".sw-sejongs", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 서울
  var swseoul = new Swiper(".sw-seouls", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // 울산
  var swulsan = new Swiper(".sw-ulsans", {
    slidesPerView: 1, // 슬라이드 개수 설정
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-marketInfo",
      clickable: true,
    },
  });
  // =====================================================================
  // =================================================================
  // 추천 맛집 스와이프
  var swbest = new Swiper(".sw-best", {
    slidesPerView: 1,
    spaceBetween: 15,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1660: 이하일 때
      1601: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      // 1430: 이하일 때
      1371: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      // 1240 이하일 때
      1131: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      // 1000 이하일 때
      901: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      // 760 이하일 때
      // 651: {
      //   slidesPerView: 2,
      //   spaceBetween: 10,
      // },
      641: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".next-best",
      prevEl: ".prev-best",
    },
  });
  // 지역 축제스와이프
  var swfestival = new Swiper(".sw-festival", {
    slidesPerView: 1,
    spaceBetween: 15,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1660: 이하일 때
      1601: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      // 1430: 이하일 때
      1371: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      // 1240 이하일 때
      1131: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      // 1000 이하일 때
      841: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      // 760 이하일 때
      // 651: {
      //   slidesPerView: 2,
      //   spaceBetween: 10,
      // },
      631: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".next-festival",
      prevEl: ".prev-festival",
    },
  });
  // =================================================================
});
$(function () {
  $("#section-nav a").click(function (e) {
    // "지역별"과 "게시판" 링크를 클릭했을 때는 이벤트를 무시
    if ($(this).attr("href") === "region-sub.html" || $(this).attr("href") === "notice-board.html") {
      return;
    }
    e.preventDefault();
    var targetSection = $(this).attr("href");
    var targetPosition = $(targetSection).offset().top - 150; // 현재 위치에서 100px 아래쪽으로 이동
    $("html, body").animate(
      {
        scrollTop: targetPosition,
      },
      10
    );
  });
});
// footer와 관련된 jQuery 코드
// $(function () {
//   var $w = $(window),
//     footerHei = $(".footer.inner").outerHeight(),
//     $gotopbt = $(".top-button");
//   $w.on("scroll", function () {
//     var sT = $w.scrollTop();
//     var val = $(document).height() - $w.height() - footerHei;
//     if (sT >= val) $gotopbt.addClass("on");
//     else $gotopbt.removeClass("on");
//   });
// });
