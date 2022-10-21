const navBar = document.querySelector('nav');
const navMenuListItems = document.querySelectorAll('.nav-menu li');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        if (!navBar.classList.contains('shadow'))
            navBar.classList.add('shadow');
    }
    else {
        navBar.classList.remove('shadow');
    }
})

function ToogleContent(btnToggle, content) {
    $(content).slideToggle();

    const btn = document.querySelector(btnToggle);

    if (btn.classList.contains('active'))
        btn.classList.remove('active')
    else
        btn.classList.add('active')
}

function NavBtnGoToSection(btnIndex) {


    navMenuListItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index == btnIndex)
            item.classList.add('active')
    })
}