var category_section = document.getElementsByClassName("category-card");
window.onscroll = function () {
  if (scrollY > 2500) {
      {
          category_section[0].style.animation = "fadeInUp 1.5 forword";
          category_section[1].style.animation = "fadeInUp 1.5 0.4 forword";
          category_section[2].style.animation = "fadeInUp 1.5 0.8 forword";
          category_section[3].style.animation = "fadeInUp 1.5 1.2 forword";     
    }
  }
};
