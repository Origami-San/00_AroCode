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
})();
