document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            const menuList = document.querySelector('.menulist');
            if (menuList) {
                menuList.classList.toggle('show');
            }
        });
    }
});