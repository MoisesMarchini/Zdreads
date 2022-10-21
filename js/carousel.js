

function BeginCarousel() {

    let carousel = document.querySelector('.carousel');
    let list = document.querySelector('.carousel ul');
    let items = document.querySelectorAll('.carousel ul li');

    let controlLeft = document.querySelector('.carousel-control.left');
    let controlRight = document.querySelector('.carousel-control.right');

    let list2;
    let items2;
    let lastItemBgIndex = 0;

    const fastInterval = 5;
    const normalInterval = 50;

    let speed = 1;



    items.forEach((item) => {
        item.style.backgroundImage = 'url(https://source.unsplash.com/random/?Dread&' + lastItemBgIndex + ')';
        lastItemBgIndex++;
    })


    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;


    function clone() {
        list2 = list.cloneNode(true);
        items2 = list2.querySelectorAll('li');
        items2.forEach((item) => {
            item.style.backgroundImage = 'url(https://source.unsplash.com/random/?Dread&' + lastItemBgIndex + ')';
            lastItemBgIndex++;
        });
        carousel.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;
        if (width < Math.abs(x)) {
            x = width * speed;
        }
        list.style.left = `${x}px`;

    }

    function moveSecond() {
        x2 -= speed;
        if (list2.offsetWidth < Math.abs(x2)) {
            x2 = width * speed;
        }
        list2.style.left = `${x2}px`;

    }

    clone();

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        clearInterval(a);
        clearInterval(b);
        a = setInterval(moveFirst, normalInterval);
        b = setInterval(moveSecond, normalInterval);
    }

    function increaseSpeed(value) {
        clearInterval(a);
        clearInterval(b);
        speed = value;
        a = setInterval(moveFirst, fastInterval);
        b = setInterval(moveSecond, fastInterval);
    }


    let a = setInterval(moveFirst, normalInterval);
    let b = setInterval(moveSecond, normalInterval);

    carousel.addEventListener('mouseenter', hover);
    carousel.addEventListener('mouseleave', unhover);
    controlLeft.addEventListener('mouseenter', () => {
        increaseSpeed(-1)
    });
    controlRight.addEventListener('mouseenter', () => {
        increaseSpeed(1)
    });
    controlLeft.addEventListener('mouseleave', unhover);
    controlRight.addEventListener('mouseleave', unhover);
}

BeginCarousel();