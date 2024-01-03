(() => {
  // Sidebar
  const sidebarBtn = document.querySelectorAll(".sidebar__button");
  // Content
  const contentPage = document.querySelectorAll(".content__block");
  const tasksBlock = document.getElementById("tasksBlock");
  const diplomBlock = document.getElementById("diplomBlock");
  const updateBlock = document.getElementById("updateBlock");

  // Отслеживаем клик на каждой кнопке с классом .sidebar__button
  sidebarBtn.forEach((btnClick) => {
    // Навешиваем слушатель события click на btnClick
    btnClick.addEventListener("click", function (e) {
      // Убираем модификатор active со всех sidebarBtn
      sidebarBtn.forEach((tabClick) => {
        tabClick.classList.remove("active");
      });
      // Добавляем модификатор active к активному sidebarBtn
      this.classList.add("active");
      // Навешиваем класс hidden на contentPage в зависимости от нажатого sidebarBtn
      contentPage.forEach((page) => {
        if (this.id === "tasks") {
          page.classList.add("hidden") & tasksBlock.classList.remove("hidden");
        } else if (this.id === "diplom") {
          page.classList.add("hidden") & diplomBlock.classList.remove("hidden");
        } else if (this.id === "update") {
          page.classList.add("hidden") & updateBlock.classList.remove("hidden");
        }
      });
    });
  });

  // Accordion
  const accordionLists = document.querySelectorAll(".accordion"); // Записываем основной контейнер для основного тега ul аккордеона в переменную

  // Отслеживаем клик на каждой кнопке с классом .accordion
  accordionLists.forEach((accordion) => {
    // Навешиваем слушатель события click на accordion
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
