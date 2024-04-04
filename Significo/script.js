(function() {const locomotiveScroll = new LocomotiveScroll();})();

function bodyColorChange(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}

function navAnimation(){
    const nav = document.querySelector(".header");
    const sections = document.querySelectorAll('.section');
    let lastScroll = 0;

    window.addEventListener('scroll', ()=>{
        const currScroll = window.scrollY;

        if(currScroll <= 0){
            nav.classList.remove("scroll-up");
        }
        
        if(currScroll > lastScroll && !nav.classList.contains("scroll-down")){
            nav.classList.remove("scroll-up");
            nav.classList.add("scroll-down"); 
        }
        
        if(currScroll < lastScroll && nav.classList.contains("scroll-down")){
            nav.classList.remove("scroll-down");
            nav.classList.add("scroll-up"); 
        }

        lastScroll = currScroll;
    })

    const sectionHeights = Array.from(sections).map(section => section.clientHeight);

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      let currentSectionIndex = 0;

      for (let i = 0; i < sectionHeights.length; i++) {
        if (scrollPosition >= sections[i].offsetTop && scrollPosition < sections[i].offsetTop + sectionHeights[i]) {
          currentSectionIndex = i;
          break;
        }
      }

      if (currentSectionIndex === 0 || currentSectionIndex === 1) {
        gsap.to(nav, { color: 'white' });
      } else {
        gsap.to(nav, { color: 'black' });
      }
    });
}

function homePageAnimation(){
    gsap.set(".slidesm", {
        scale: 5
    })
    
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    })
    
    tl.to(".videodiv", {
        '--clip': "0%",
        ease: Power2
    }, 'a')
    
    tl.to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'a')
    
    tl.to(".lft", {
        xPercent: -10,
        stagger: 0.03,
        ease: Power3
    }, 'b')
    
    tl.to(".rgt", {
        xPercent: 10,
        stagger: 0.03,
        ease: Power3
    }, 'b')
}

function cardsAnimation(){
    gsap.to(".card", {
        scrollTrigger: {
            trigger: ".cards",
            start: "top top",
            end: "bottom 90%",
            scrub: 1
        },
        backgroundColor: "black",
        duration: 5,
        color: "white",
        duration: 10,
        ease: Power1
    })
}

function cardSizeAnimation(){
    gsap.set(".card", {
        scale: 1
    })
    gsap.to(".card", {
        scrollTrigger: {
            trigger: ".cards",
            start: "top 80%",
            end: "bottom 90%",
            scrub: 1
        },
        scale: 1.1,
        ease: Power1
    })
}

function realPageanimation(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        xPercent: -310,
        ease: Power4
    })
}

function teamAnimation(){
    gsap.set(".bluelayer", {
        height: "0%"
    })

    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener("mousemove", function(dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1, 
                ease: Power4, 
                duration: .3,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
            });
        })

        el.addEventListener("mouseleave", function(dets) {
            gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: .3});
        })
        
        el.addEventListener("mousemove", function(dets) {
            gsap.to(this.querySelector(".bluelayer"), {
                height: "100%", 
                ease: Power2,
                duration: .3,
            });
        })

        el.addEventListener("mouseleave", function(dets) {
            gsap.to(this.querySelector(".bluelayer"), {height: "0%", ease: Power2, duration: .3});
        })
        
        el.addEventListener("mousemove", function(dets) {
            gsap.to(this.querySelector(".teamPost"), {
                color: "white", 
                ease: Power2,
                duration: .3,
            });
        })

        el.addEventListener("mouseleave", function(dets) {
            gsap.to(this.querySelector(".teamPost"), {color: "black", ease: Power2, duration: .3});
        })
    })
}

function paraAnimation1(){
    var clutter = "";

    document.querySelector(".textpara1")
    .textContent.split("")
    .forEach(function(e){
        if(e===" ") clutter += `<span>&nbsp</span>`;
        clutter += `<span>${e}</span>`;
    })

    document.querySelector(".textpara1").innerHTML = clutter;

    gsap.set(".textpara1 span", {opacity: .3});
    gsap.to(".textpara1 span", {
        scrollTrigger: {
            trigger: ".textrec1",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}

function paraAnimation2(){
    var clutter2 = "";

    document.querySelector(".textpara2")
    .textContent.split("")
    .forEach(function(e){
        if(e===" ") clutter2 += `<span>&nbsp</span>`;
        clutter2 += `<span>${e}</span>`;
    })

    document.querySelector(".textpara2").innerHTML = clutter2;

    gsap.set(".textpara2 span", {opacity: .3});
    gsap.to(".textpara2 span", {
        scrollTrigger: {
            trigger: ".textrec2",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}

function capsuleAnimations(){
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsule",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y:0,
        ease: Power4
    })
}

function btnAnimation(){
    var clutter = "";

    document.querySelector(".btntext")
    .textContent.split("")
    .forEach(function(e){
        if(e===" ") clutter += `<span>&nbsp</span>`;
        clutter += `<span>${e}</span>`;
    })

    document.querySelector(".btntext").innerHTML = clutter;

    gsap.set(".btn", {scale: 1});

    document.querySelectorAll(".btn")
    .forEach(function(el){
        el.addEventListener("mouseover", function(dets) {
            gsap.to(".btn", {
                fontWeight: "bold",
                scale: 1.05,
                backgroundColor: "#dc3e26",
                color: "#edcd44",
                stagger: .03,
                ease: Power2
            })
        })
        
        el.addEventListener("mouseleave", function(dets) {
            gsap.to(".btn", {
                fontWeight: "inherit",
                backgroundColor: "inherit",
                color: "inherit",
                scale: 1,
                stagger: .03,
                ease: Power2
            })
        })
    })
    
    document.querySelectorAll(".btn")
    .forEach(function(el){
        el.addEventListener("mouseover", function(dets) {
            gsap.to(".btnarrow", {
                rotate: "45deg",
                stagger: .03,
                ease: Power2
            })
        })
        
        el.addEventListener("mouseleave", function(dets) {
            gsap.to(".btnarrow", {
                rotate: "0deg",
                stagger: .03,
                ease: Power2
            })
        })
    })

    
    
}


bodyColorChange();
navAnimation();
homePageAnimation();
cardsAnimation();
cardSizeAnimation();
realPageanimation();
teamAnimation();
paraAnimation1();
paraAnimation2();
capsuleAnimations();
btnAnimation();


