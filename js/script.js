const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height

document.querySelectorAll('.nav li a').forEach(elem=>elem.addEventListener('click', e => {
    e.preventDefault()
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
}))

gsap.registerPlugin(ScrollTrigger);

const bgToAnimate = [{selector: '.up', position: -450},
    { selector: '.down', position: -10},
    {selector: '.up2', position: 0},
    { selector: '.down2', position: 250}]

bgToAnimate.forEach(el => gsap.to(el.selector, {
    y: el.position,
    duration: 1,
    scrollTrigger: {
        trigger: '.work',
        start: 10,
        end: 'top 0%',
        scrub: .3,
        toggleActions: "restart none none none"
    }
}));

// function mainAnimation() {
//     window.addEventListener('scroll', animateMainBG);
//
//     var
//         containerHeight = Math.round(document.querySelector('.header').getBoundingClientRect().height)
//             - Math.round(document.querySelector('nav').getBoundingClientRect().height),
//         scrollOffset,
//         scrollPercent,
//         toScroll = [
//             {
//                 obj: document.querySelector('.up'),
//                 direction: 'up',
//                 start: -250,
//                 end: -350
//             },
//             {
//                 obj: document.querySelector('.up2'),
//                 direction: 'up',
//                 start: 0,
//                 end: -150
//             },
//             {
//                 obj: document.querySelector('.down'),
//                 direction: 'down',
//                 start: -110,
//                 end: 160
//             },
//             {
//                 obj: document.querySelector('.down2'),
//                 direction: 'down',
//                 start: 150,
//                 end: 250
//             },
//         ];
//
//     function animateMainBG(e) {
//         scrollOffset = window.scrollTop || window.pageYOffset;
//         scrollPercent = (scrollOffset / containerHeight || 0) * 100;
//
//         toScroll.forEach(function(v){
//             scrollElem(v);
//         });
//     }
//
//     function scrollElem(param){
//         var startPosition = param.start,
//             endPosition = param.end,
//             direction = param.direction,
//             currentPosition;
//
//         currentPosition = Math.round(startPosition + (((endPosition - startPosition) / 100) * scrollPercent));
//
//         if(direction === 'up'){
//             if(currentPosition < endPosition){
//                 param.obj.style.transform = 'translateY('+endPosition+'px)';
//                 return false;
//             }
//         }else{
//             if(currentPosition > endPosition){
//                 param.obj.style.transform = 'translateY('+endPosition+'px)';
//                 return false;
//             }
//         }
//
//         param.obj.style.transform = 'translateY('+currentPosition+'px)';
//     }
// }
//
// document.addEventListener('DOMContentLoaded', mainAnimation);

window.onload = typingEffect;

function typingEffect() {
    let intervalId;

    function pendingStart() {
        document.querySelector('.title').innerHTML = `Global software development firm with <span class="violet">100% <span class="text">reliability </span></span><span class="cursor"></span>rate`
        intervalId = setInterval(deleteWords,60)
    }

    let timerId = setTimeout(pendingStart, 1200);

    const deleteWords = () => {
        clearTimeout(timerId);
        let text = document.querySelector('.text').innerHTML;
        document.querySelector('.cursor').innerHTML = '|';
        document.querySelector('.text').innerHTML = text.slice(0, -1);
        if (text.length === 0) {
            clearInterval(intervalId)
            startType()
        }
    }
}

const startType = () => {
    const rever = () => masterTl.timeScale(4);
    const start = () => masterTl.timeScale(1)
    let masterTl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 3});
    let tl = gsap.timeline();
    tl.to(".text", {duration: 2, delay: 0, ease: "none" ,text: 'reliability', onComplete: () => rever(), onStart: () => start() });
    masterTl.add(tl);
}

gsap.to('.nav:first-of-type', {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.header',
    }
});

gsap.to('.sticky', {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.header .wrapper',
        start: "bottom 20%",
        end: 'bottom 20%',
        toggleActions: "play none none reverse"
    }
});


const elementsToAnimate = [
    {selector: '.work .h-primary', trigger: '.work', position: 'top 70%', effect: 'back'},
    {selector: '.work .paragraph', trigger: '.work .paragraph', position: 'top 100%', effect: 'circ'},
    {selector: '.rewards .h-primary', trigger: '.rewards', position: 'top 70%', effect: 'back'},
    {selector: '.rewards .paragraph', trigger: '.rewards', position: 'top 60%', effect: 'circ'},
    {selector: '.capabilities .h-primary', trigger: '.capabilities', position: 'top 70%', effect: 'back'},
    {selector: '.capabilities .paragraph', trigger: '.capabilities', position: 'top 60%', effect: 'circ'},
    {selector: '.approach .h-primary', trigger: '.approach', position: 'top 70%', effect: 'back'},
    {selector: '.approach .paragraph', trigger: '.approach', position: 'top 60%', effect: 'circ'},
    {selector: '.reviews .h-primary', trigger: '.reviews', position: 'top 70%', effect: 'back'},
    {selector: '.reviews .paragraph', trigger: '.reviews', position: 'top 60%', effect: 'circ'},
    {selector: '.contact-us .h-primary', trigger: '.contact-us', position: 'top 70%', effect: 'back'},
    {selector: '.contact-us .paragraph', trigger: '.contact-us', position: 'top 60%', effect: 'circ'},
]

elementsToAnimate.forEach(el => gsap.to(el.selector, {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: el.effect,
    repeat: 0,
    scrollTrigger: {
        // markers: true,
        trigger: el.trigger,
        start: el.position,
        end: 'top -50%',
        toggleActions: "restart reverse play reverse",
    }
}));

const workCardsToAnimate = [
    {selector: '.work-card:nth-child(1)', trigger: '.work', position: 'top 30%', effect: 'expo'},
    {selector: '.work-card:nth-child(2)', trigger: '.work', position: 'top 30%', effect: 'expo'},
    {selector: '.work-card:nth-child(3)', trigger: '.work-card:nth-child(1)', position: 'top 10%', effect: 'expo'},
    {selector: '.work-card:nth-child(4)', trigger: '.work-card:nth-child(2)', position: 'top 10%', effect: 'expo'},
]

workCardsToAnimate.forEach(el => gsap.to(el.selector, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: el.effect,
    repeat: 0,
    scrollTrigger: {
        trigger: el.trigger,
        start: el.position,
        end: 'top -100%',
        toggleActions: "restart reverse play reverse",
    }
}));

const rewardsCardsToAnimate = [
    {selector: '.progress .row:nth-child(1)', trigger: '.rewards', position: 'top 30%', effect: 'back'},
    {selector: '.progress .row:nth-child(2)', trigger: '.rewards', position: 'top 10%', effect: 'back'},
]

rewardsCardsToAnimate.forEach(el => gsap.to(el.selector, {
    x: 0,
    opacity: 1,
    duration: 0.6,
    ease: el.effect,
    repeat: 0,
    scrollTrigger: {
        // markers: true,
        trigger: el.trigger,
        start: el.position,
        end: 'bottom 50%',
        toggleActions: "restart reverse play reverse",
    }
}));



function mosaicAnimation(opacity) {
    const capCards = document.querySelectorAll(".cap-card");
    const timeObj = {};
    for(let i=0; i<capCards.length; i++){
        timeObj[i] = setTimeout( ()=>actionCard(i, timeObj, opacity),i * 150)
    }
    const actionCard = (num, timeObj, opacity) => {
        capCards[num].style.opacity = opacity;
        clearTimeout(timeObj[num]);
    }
}

gsap.to('.capabilities', {
    onStart: () => mosaicAnimation(1),
    scrollTrigger: {
        // markers: true,
        trigger: '.capabilities',
        start: 'top 10%',
        end: 'bottom 50%',
        toggleActions: "restart none restart none",
    }
})

gsap.to('.capabilities .card-container', {
    onStart: () => mosaicAnimation(0),
    scrollTrigger: {
        trigger: '.capabilities .card-container',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: "play restart play restart",
    }
})


document.querySelectorAll('.approach .line').forEach(el=>{
    const dur = Math.random() * 5 + 1;

    el.style.width = 0;

    gsap.to(el, {
        width: '100%',
        duration: dur,
        scrollTrigger: {
            // markers: true,
            trigger: '.approach',
            start: 'top 10%',
            end: 'bottom 30%',
            // scrub: true,
            toggleActions: "restart reverse restart reverse"
        }
    });
})

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});


document.querySelectorAll('.progress-card').forEach(el => el.addEventListener('click', ev => {
    window.location.href = el.querySelector('.title a').href;
}))


gsap.to('.form', {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        // markers: true,
        trigger: '.contact-us',
        start: 'top 10%',
        end: 'bottom 30%',
        // scrub: true,
        toggleActions: "restart reverse restart reverse"
    }
});
