function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Для плавной анимации
    });
}

// Отслеживаем прокрутку страницы, чтобы показать/скрыть кнопку
window.onscroll = function() {
    var button = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};