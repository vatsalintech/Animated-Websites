function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function navbarAnimation() {
    gsap.to("#navp1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#navp2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
}

function cursor(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y ,
        })
    })

    document.querySelectorAll(".child")
    .forEach(function(elem){
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                scale: 1.5,
                transform: 'translate(-50%, -50%)'
            })
        })
        
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                scale: 0,
                transform: 'translate(-50%, -50%)'
            })
        })
    })
}

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from("#page1 #videocntr",{
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        duration: 0.9
    })
}

function videoAnimation(){
    var videocon = document.querySelector("#videocntr");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter",function(){   
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave",function(){ 
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove",function(dets){ 
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 50,
        })
    })
}


locomotiveAnimation();
navbarAnimation();
cursor();
loadingAnimation();
videoAnimation();