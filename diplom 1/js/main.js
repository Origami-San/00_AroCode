(function () {
  // Находим все селекторы .calculation__item на странице
  const calculationItem = document.querySelectorAll(".calculation__item");

  // Перебираем полученный NodeList из селекторов .calculation__item с применением стрелочную callback функции itemClick на каждом элементе
  calculationItem.forEach((itemClick) => {
    // Отслеживаем событие click и выполняем действие, которым является стрелочная функцию с аргументом e (event)
    itemClick.addEventListener("click", (e) => {
      // Если на кнопке, по которой был клик уже есть класс calculation__item--active то прекращаем выполнение функции
      if (itemClick.classList.contains("calculation__item--active")) return;
      // Отменяем стандартное поведение для кнопок
      e.preventDefault();
      // Перебираем полученный NodeList из селекторов с применением стрелочной callback функции itemClick на каждом элементе
      calculationItem.forEach((itemClick) => {
        // Убираем у всех itemClick селектор calculation__item--active
        itemClick.classList.remove("calculation__item--active");
      });
      // Добавляем на кнопке, по которой был клик селектор calculation__item--active
      itemClick.classList.add("calculation__item--active");

      // Присваиваем переменные внутри функции
      // Присваиваем переменную для содержимого атрибута href у кнопки по которой был клик
      const tabID = e.target.closest(".calculation__item").getAttribute("href");
      // Присваиваем переменную в которой находим ID селектора который совпадает в атрибута href кнопки
      const tabContent = document.querySelector(tabID);
      // Присваиваем переменную для поиске первой найденной .calculation__desc-item--active
      const tabActive = document.querySelector(".calculation__desc-item--active");

      // Предварительно удаляем первый найденный .calculation__desc-item--active
      tabActive.classList.remove("calculation__desc-item--active");
      // Добавляем модификатор .calculation__desc-item--active табу с нужным ID селектора который совпадает в атрибута href кнопки
      tabContent.classList.add("calculation__desc-item--active");
    });
  });

  // calculationItem.forEach((itemClick) => {
  // itemClick.addEventListener("click", (e) => {});
  // });

  // calculationItem.forEach(function (itemClick) {
  // itemClick.addEventListener("click", function (e) {});
  // });

  // dotClick.addEventListener("click", function (e) {
  //   // Останавливаем передачу события
  //   e.stopPropagation(); // Ссылаемся родителя элемента находим блок .info-hint и удаляем/добавляем ему класс none
  //   this.parentNode.querySelector(".info-hint").classList.toggle("none");
  // });
  // console.log(this.parentNode);
  // console.log(e.type);
  // calculationItem.forEach((itemClick)
  // calculationItem.forEach(function (e)

  // splideSlide.forEach((slideActive) => {
  // if (slideActive.classList.contains("is-active")) return;
  // if (slideActive.classList.contains("is-active")) {
  //   console.log("Активно");
  // console.log(this.classList.contains("is-active"));
  // });

  // if (slideActive.classList.contains("is-active")) return;

  // splideSlide.forEach((slideActive) => {
  //   if (slideActive.classList.contains("is-active")) return;
  // slideClick.addEventListener("mouseover", (e) => {
  //   const activeItem = e.target.closest(".splide__main-slide");
  //   if (!activeItem) return;
  // e.stopPropagation;
  // console.log(e.target.src);
  // console.log(slideClick);
  // });
  // });

  // Swiper Sliders
  const swiper = new Swiper(".sliders__items", {
    // Optional parameters
    // direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    // freeMode: true,

    // If we need pagination
    pagination: {
      el: ".sliders__pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: "#slidersNext",
      prevEl: "#slidersPrev",
    },
  });

  // Sliders-installation
  new Swiper(".installation__swiper", {
    // loop: true,
    slidesPerView: 1.14, // Количество слайдов на странице
    spaceBetween: 20, // Расстояние между слайдами
    // centeredSlides: true,
    roundLengths: true,

    navigation: {
      nextEl: ".installation-button-next",
      prevEl: ".installation-button-prev",
    },

    breakpoints: {
      430: {
        slidesPerView: 2.14,
        spaceBetween: 10,
      },

      700: {
        slidesPerView: 3.14,
        spaceBetween: 10,
        grid: {
          fill: "row",
          rows: 2,
        },
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        grid: {
          fill: "row",
          rows: 2,
        },
      },
    },
  });

  // Swiper Slider One
  const mySliderOne = new Splide("#workExampleOne", {
    perPage: 1,
    gap: "20px",
    pagination: false,
    rewind: true,
    type: "fade",
  }).mount();

  const thumbnailOne = new Splide("#workExampleOneThumbnail", {
    fixedWidth: 100,
    fixedHeight: 100,
    // gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
  }).mount();

  mySliderOne.sync(thumbnailOne);

  // Swiper Slider Two
  const mySliderTwo = new Splide("#workExampleTwo", {
    perPage: 1,
    gap: "20px",
    pagination: false,
    rewind: true,
    type: "fade",
  }).mount();

  const thumbnailTwo = new Splide("#workExampleTwoThumbnail", {
    fixedWidth: 100,
    fixedHeight: 100,
    // gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
  }).mount();

  mySliderTwo.sync(thumbnailTwo);

  // Swiper Slider Three
  const mySliderThree = new Splide("#workExampleThree", {
    perPage: 1,
    gap: "20px",
    pagination: false,
    rewind: true,
    type: "fade",
  }).mount();

  const thumbnailThree = new Splide("#workExampleThreeThumbnail", {
    fixedWidth: 100,
    fixedHeight: 100,
    // gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
  }).mount();

  mySliderThree.sync(thumbnailThree);

  // Accordion

  const accordionLists = document.querySelectorAll(".accordion"); // Записываем основной контейнер для основного тега ul аккордеона в переменную

  // Запускаем цикл forEach для переменной accordionLists. Задаем имя accordion стрелочной функции
  accordionLists.forEach((accordion) => {
    // Вешаем слушатель событий на клик. Для отслеживания, по какому элементу кликнули. Задаем стандартное имя стрелочной функции e=event
    accordion.addEventListener("click", (e) => {
      // Задаем переменную для отслеживания клика по общему блоку ul аккордеона
      const accordionList = e.currentTarget;
      // Задаем переменную для поиска модификатора открытой вкладке аккордиона именно в том окне accordionList, в котором был клик
      const accordionOpenItem = accordionList.querySelector(".accordion__list--opened");
      // Задаем переменную для поиска модификатора открытого контента
      const accordionOpenContent = accordionList.querySelector(".accordion__list--opened .accordion-list__content");
      // Задаем переменную для отслеживания клика по основной кнопке аккордеона
      const accordionControl = e.target.closest(".accordion__list-btn");

      // Если клик НЕ по кнопке .accordion__list-btn, то не выполняем код
      if (!accordionControl) return;
      // Отменяем дефолтное поведение для ссылок при клике
      e.preventDefault();
      // Задаем переменную для родителя кнопки .accordion__list-btn которым является accordion__list. Т.е. при клике на кнопку, выбирается родитель кнопки
      const accordionItem = accordionControl.parentElement;
      // Задаем переменную для следующего элемента после .accordion__list-btn которым является accordion-list__content. Т.е. при клике на кнопку, выбирается следующий элемент после кнопки
      const accordionContent = accordionControl.nextElementSibling;

      // Проверяем, если существует accordionOpenItem и accordionItem не равно accordionOpenItem то удаляем accordion__list--opened с accordion__list и max-height=none у accordion-list__content который находится внутри .accordion__list--opened
      if (accordionOpenItem && accordionItem != accordionOpenItem) {
        accordionOpenItem.classList.remove("accordion__list--opened");
        accordionOpenContent.style.maxHeight = null;
      }
      // При клике на кнопки .accordion__list-btn навешиваем на .accordion__list модификатор
      accordionItem.classList.toggle("accordion__list--opened");

      // Проверяем, если на .accordion__list есть модификатор, то добавляем accordion-list__content параметр maxHeight (max-height: ;)
      if (accordionItem.classList.contains("accordion__list--opened")) {
        // Вместо точного параметра добавляем для .accordion__list-btn метод scrollHeight и узнаем внутреннюю высоту элемента + px для применения с стилях
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        // Если модификатора нет, то добавляем убираем значение с max-height
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // Accordion Mobile Nav

  // == Переменные ==
  const accordionBtnMobileNav = document.querySelector(".nav-list__item-accordion");
  // == Выполнение ==
  accordionBtnMobileNav.addEventListener("click", (e) => {
    const accordionMobileNavContent = accordionBtnMobileNav.nextElementSibling;
    accordionMobileNavContent.classList.toggle("nav-list__accordion--open");
    accordionBtnMobileNav.classList.toggle("nav-list__item-accordion--open");
    if (accordionMobileNavContent.classList.contains("nav-list__accordion--open")) {
      accordionMobileNavContent.style.maxHeight = accordionMobileNavContent.scrollHeight + "px";
    } else {
      accordionMobileNavContent.style.maxHeight = null;
    }
  });

  // Burger Menu

  // == Переменные ==
  const btnBurger = document.querySelector(".mobile__nav");
  const headerNavMobile = document.querySelector(".header__nav-mobile");
  const navListLink = document.querySelectorAll(".nav-list__link");

  // == Выполнение ==
  btnBurger.addEventListener("click", (e) => {
    btnBurger.classList.toggle("mobile__nav--open");
    headerNavMobile.classList.toggle("header__nav-mobile--open");
  });

  navListLink.forEach((navLinkCleck) => {
    navLinkCleck.addEventListener("click", (e) => {
      btnBurger.classList.remove("mobile__nav--open");
      headerNavMobile.classList.remove("header__nav-mobile--open");
    });
  });

  // Tel Menu
  const btnTel = document.querySelector(".mobile__contacts-btn");
  const navListItem = document.querySelector(".nav-list__item-accordion");
  const navListAccordion = document.querySelector(".nav-list__accordion");

  btnTel.addEventListener("click", (e) => {
    btnBurger.classList.add("mobile__nav--open");
    headerNavMobile.classList.add("header__nav-mobile--open");
    navListAccordion.classList.add("nav-list__accordion--open");
    navListItem.classList.add("nav-list__item-accordion--open");
    navListAccordion.style.maxHeight = navListAccordion.scrollHeight + "px";
  });

  // Yandex Maps
  ymaps.ready(init);

  function init() {
    // Создание карты
    const myMap = new ymaps.Map("map", {
      // Координаты центра (широта , долгота)
      center: [60.07077315901003, 30.28292168477833],
      // Уровень масштабирования (0 до 19)
      zoom: 17,
    });
    // Создание метки
    const myPlacemark = new ymaps.Placemark(
      // Координаты метки
      [60.070862915171865, 30.286806934358587],
      // Параметры Ballon
      {
        // balloonContent: `
        // <div class="balloon">
        //   <div class="balloon__adress">Адрес</div>
        //   <div class="balloon__contacts">
        //     <a href="tel:+78120000000">_7 812 000 00 00</a>
        //   </div>
        // </div>
        // `,
      },
      // Параметры метки
      {
        iconLayout: "default#image",
        iconImageHref: "./img/icons/map/marker.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [-16, -30],
      }
    );

    myMap.controls.remove("geolocationControl"); // удаляем геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
    myMap.controls.add("zoomControl", { position: { right: "10px", top: "237px" } }); // добавляем контрол зуммирования в нужном месте
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
    myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    // Размещаем метку на карте
    myMap.geoObjects.add(myPlacemark);
    // Открываем Ballon по умолчанию
    // myPlacemark.balloon.open();
  }

  // Form Validation

  // Находим селектор .contact__form на странице
  const form = document.querySelector(".contact__form");
  // Находим селектор .checkbox__errors на странице
  const checkboxErrors = document.querySelector(".checkbox__errors");

  // Переменная отслеживания валидации
  let isValidate = false;

  // Создаем регулярные выражения для валидации форм
  const regExpName = /^[a-zа-яё]{3,}$/i; // Только буквы, min 3, регистр неважен

  // Отправка формы
  const submit = () => {
    alert("Данные отправлены");
  };

  // Переменная с элементами валидации
  const validateElem = (elem) => {
    // Проверяем значение поля с именем пользователя на соответствие регулярным выражениям
    if (elem.name == "userName") {
      if (!regExpName.test(elem.value) && elem.value != "") {
        elem.nextElementSibling.textContent = "Введите корректное Имя";
        if (elem.value.length < 3) {
          elem.nextElementSibling.textContent = "Не менее 3-х символов";
        }
        isValidate = false;
      } else {
        elem.nextElementSibling.textContent = "";
        isValidate = true;
      }
    }

    if (elem.name == "userTel") {
      if (elem.value.includes("_")) {
        elem.nextElementSibling.textContent = "Введите корректный номер";
        isValidate = false;
      } else {
        elem.nextElementSibling.textContent = "";
        isValidate = true;
      }
    }
  };

  // == Проверка на заполнение input и соответствие регулярным выражениям  ==

  for (let elem of form.elements) {
    // Оставляем только нужные элементы формы (только поля ввода).
    // Задаем условие если у элемента формы нет (!) чекбокса с классом contact__checkbox и (&&) элемент не является (!=) кнопкой button то продолжаем.
    // Для .tagName свойства пишутся в верхнем регистре
    if (!elem.classList.contains("field") && elem.tagName != "BUTTON") {
      // Вешаем обработчик события на каждый элемент формы для события blur
      elem.addEventListener("blur", () => {
        validateElem(elem);
      });
    }
  }

  // == Проверка на заполнение input и textarea с выводом ошибки  ==

  // Вешаем обработчик события submit на форму
  form.addEventListener("submit", (e) => {
    // Отменяем перезагрузку при нажатии на кнопку "Отправить"
    e.preventDefault();
    // У формы есть элементы .elements. Перебираем все элементы формы методом for of
    for (let elem of form.elements) {
      // Оставляем только нужные элементы формы (только поля ввода).
      // Задаем условие если у элемента формы нет (!) чекбокса с классом contact__checkbox и (&&) элемент не является (!=) кнопкой button то продолжаем.
      // Для .tagName свойства пишутся в верхнем регистре
      if (!elem.classList.contains("contact__checkbox") && elem.tagName != "BUTTON") {
        // Фильтруем только элементы значение value в которых пустое ""
        if (elem.value == "") {
          // Если поле не заполнено то добавляем следующему соседнему элементу (nextElementSibling) после input текстовое содержимое (textContent)
          elem.nextElementSibling.textContent = "Поле не заполнено";
          isValidate = false;
        } else {
          // Если поле заполнено то добавляем следующему соседнему элементу (nextElementSibling) после input текстовое содержимое (textContent)
          elem.nextElementSibling.textContent = "";
          isValidate = true;
        }
      }
    }

    // == Проверка на согласие передачи персональных даннымх  ==
    if (isValidate) {
      // Если у класса .contact__checkbox установлено checked то ...
      if (form.querySelector(".contact__checkbox").checked) {
        // Отправляем форму
        submit();
        // Чистим форму
        form.reset();
        // Если нет то ...
      } else {
        // Выводим сообщение
        checkboxErrors.textContent = "Подтвердите согласие";
      }
    }
  });

  // Input Mask Tel
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(inputs);

  // Modal Window
  const btnModal = document.querySelectorAll(".btn-open-modal");
  const modal = document.querySelector(".modal");
  const modalWindows = document.querySelectorAll(".modal__window");
  const fixBlocks = document.querySelectorAll(".fix-block");
  const body = document.body;

  const disableScroll = function () {
    const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

    fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });

    body.style.paddingRight = paddingOffset;
    document.body.classList.add("body--opened-modal");
  };

  const enableScroll = function () {
    body.style.paddingRight = "0px";

    fixBlocks.forEach((el) => {
      el.style.paddingRight = "0px";
    });

    document.body.classList.remove("body--opened-modal");
  };

  btnModal.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const path = e.currentTarget.getAttribute("data-path");

      modalWindows.forEach((el) => {
        el.classList.remove("modal__window--visible");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("modal__window--visible");
      modal.classList.add("modal--open");
      disableScroll();
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      e.target &&
      (e.target.classList.contains("modal") || e.target.classList.contains("modal__close") || e.target.classList.contains("modal__close-btn"))
    ) {
      modal.classList.remove("modal--open");
      enableScroll();
    }
  });

  // const fslightboxOpen = document.querySelector(".fslightbox-open");
  // const fsSlide = document.querySelectorAll(".fs__slide");
  // const fsWindow = document.querySelectorAll(".fslightbox-absoluted");
  // const fsBtnClose = document.querySelectorAll(".fslightbox-toolbar-button");

  // fsSlide.forEach((e) => {
  //   e.addEventListener("click", (e) => {
  //     if (document.documentElement.classList.contains("fslightbox-open")) {
  //       console.log("ДА");
  //     }
  //     if (e.target.classList.contains("fslightbox-absoluted")) {
  //       console.log("000");
  //     }
  //   });
  // });

  // Отслеживаем клик
  // document.addEventListener("click", function (e) {
  //   console.log(e.target);
  // });
})();
