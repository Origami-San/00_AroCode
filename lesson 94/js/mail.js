(function () {
  // Burger Menu

  const openBtn = document.querySelector(".burger-icon");
  const body = document.querySelector(".body");
  const nav = document.querySelector(".nav__list");

  openBtn.addEventListener("click", () => {
    body.classList.toggle("body--opened-menu");
  });

  nav.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("nav__link") && document.documentElement.clientWidth <= 900) {
      body.classList.remove("body--opened-menu");
    }
  });

  // Modal Window

  const openModalBtn = document.querySelector(".team__gift-btn");
  const modalWindow = document.querySelector(".modal");

  // Modal Window / Оптимизируем повторяющиеся строки открытия и закрытия, создаем переменные

  const openModals = () => {
    modalWindow.classList.add("modal--open");
    body.classList.add("body--fixed");
  };

  const closeModals = () => {
    modalWindow.classList.remove("modal--open");
    body.classList.remove("body--fixed");
  };

  // Modal Window / Оптимизированный код открытия и сбрасываем дефолтное поведение

  openModalBtn.addEventListener("click", (event) => {
    openModals();
    event.preventDefault();
  });

  // Modal Window / Оптимизированный код закрытия если event.target = true и click на modal или modal__close-btn то закрываем модальное окно

  modalWindow.addEventListener("click", (event) => {
    if (event.target && (event.target.classList.contains("modal") || event.target.classList.contains("modal__close-btn"))) {
      closeModals();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modalWindow.classList.contains("modal--open")) {
      closeModals();
    }
  });

  // Tab button/

  const programItem = document.querySelector(".program__item"); // Записываем основной контейнер для основного тега ul таба в переменную

  // Вешаем слушатель событий на клик. Для отслеживания, по какому элементу кликнули. Задаем стандартное имя стрелочной функции e=event
  programItem.addEventListener("click", (e) => {
    // Проверяем, есть ли у элемента по которому был клик, родитель с нужным классом
    const activeItem = e.target.closest(".program__button");

    // Если родителя с нужным классом НЕТ содержит, прекращаем выполнение функции
    if (!activeItem) return;

    // Если родителя с нужным классом ЕСТЬ то отменяем дефолтное поведение элемента, по которому был клик
    e.preventDefault();
    // Задаем переменную для отслеживания содержимого в переменной href элемента по которому был клик
    const tabID = activeItem.getAttribute("href");
    // Навешиваем класс show на тот таб, по которому был клик. Т.е. константа выводит содержимое переменной href по которой мы кликнули
    const tabContent = document.querySelector(tabID);
    // Задаем переменную .tab--active для их дальнейшего использования
    const tabActive = document.querySelector(".tab--active");
    // Задаем переменную .button--active для их дальнейшего использования
    const btnActive = document.querySelector(".button--active");

    // Если на элементе, по которому был клик уже есть класса button--active, прекращаем выполнение функции (избавляемся от ненужной работы скрипта)
    if (activeItem.classList.contains("button--active")) return;

    // Изначально удаляем в document у всех вкладок модификатор tab--active
    tabActive.classList.remove("tab--active");
    // Добавляем табу с нужным ID, tab--active
    tabContent.classList.add("tab--active");
    // Изначально удаляем в document у всех кнопок модификатор button--active
    btnActive.classList.remove("button--active");
    // Добавляем кнопке по которой был клик класс tab--active
    activeItem.classList.add("button--active");
  });

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
})();
