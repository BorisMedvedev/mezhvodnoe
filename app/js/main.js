document.addEventListener("DOMContentLoaded", function () {

  function navigation() {
    const anchors = document.querySelectorAll(
      ".nav__link, .hero__link, .accordion-list__inner-link, .logo, .inner-link"
    );

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href");
        console.log(blockID);

        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function tabsContent() {
    let tabsBtn = document.querySelectorAll(".accordion-list__inner-btn");
    let tabsItem = document.querySelectorAll(".catalog__author-information");

    tabsBtn.forEach(function (el) {
      el.addEventListener("click", function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
          btn.classList.remove("accordion-list__inner-btn--active");
          e.currentTarget.classList.add("accordion-list__inner-btn--active");

          tabsItem.forEach(function (el) {
            el.classList.remove("catalog__author-information--active");
            document
              .querySelector(`[data-target='${path}']`)
              .classList.add("catalog__author-information--active");
          });
        });
      });
    });
  }

  function modalPopup() {
    const openBtn = document.querySelector(".exit-btn");
    const modal = document.querySelector(".modal-popup");
    const closeBtn = document.querySelector(".close-btn");
    openBtn.addEventListener("click", () => {
      modal.showModal();
    });
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  function aboutSwiper() {
    const swiper = new Swiper(".about-swiper", {
      slidesPerView: 3,
      spaceBetween: 45,
      loop: true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  }

  function gallerySwiper() {
    const swiper = new Swiper(".gallery-swiper", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".gallery-swiper-button-next",
        prevEl: ".gallery-swiper-button-prev",
      },
    });
  }

  function burGer() {
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
    });
  }
  burGer();
  gallerySwiper();
  aboutSwiper();
  navigation();
  tabsContent();
  modalPopup();


});
