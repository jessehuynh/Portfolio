const hello = 'World';
console.log(hello);

const app = []
const menuTab = $('.nav__container--header .nav__listItem')

app.bagels = () => {
    const pressed = [];
    const code = "bensbagels";
    // let frameCount = 0;

    const finishbagels = () => {
        let bagel = document.getElementById("bagel-container");
        bagel.className = "hide";
    }

    const trigger = () => {
        setTimeout(
            function () {
                finishbagels();
            }, 10000);
    }

    const startbagels = () => {
        let bagel = document.getElementById("bagel-container");
        bagel.className = "show";
        trigger();

    }

    window.addEventListener("keyup", function (e) {
        pressed.push(e.key);
        pressed.splice(-code.length - 1, pressed.length - code.length);

        if (pressed.join("").includes(code)) {
            startbagels();
        }
    });
}

app.styles = () => {
    // SMOOTH SCROLL 
    $('a').smoothScroll({
        offset: 5,
    });

    // SKILLS
    $('.nav__listItem i').on('mouseover', function(){
        $(this).toggleClass('colored');
    })
    $('.flickity').flickity({
        // prevNextButtons: false,
        wrapAround: true,
        pageDots: false

    })
 
}

// app.clickEvents = () => {
//     // HEADER NAV
//     $('.nav__listItem--cool h6').on('click', function () {
//         menuTab.toggle();
//         setTimeout(() => {
//             menuTab.hide('slow')
//         }, 15000)
//     })
//     $('.nav__listItem--contact').on('mouseover', function () {
//         $('.nav__container--sub').show('fast')

//     })
// }

app.init = function () {
    // app.clickEvents();
    app.styles();
    app.bagels();
}

$(function () {
    app.init();
    AOS.init();
});
