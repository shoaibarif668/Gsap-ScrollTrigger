gsap.registerPlugin(ScrollTrigger);

//---------------------------------------------------------------------------------------------------------------//
// gsap.to(".box3",{
//     scrollTrigger:{
//         trigger:".box3",
//         markers:true, //marker for the scroll
//         start:"top center",//-->top,center,bottom,also pixels and percentage values //At what point does the animation starts ..first value means the top of the div & the second value means the center of the viewport
//         //end:"+=300", //Distance between start and end is 300px
//         end:()=>"+="+
//         document.querySelector(".box3").offsetWidth, 
//         toggleActions:"restart pause reverse pause" //-> (play, pause, resume, restart, reverse, complete, reset)
//     },
//     x:600,
//     rotation:360,
//     duration:3
// });

//---------------------------------------------------------------------------------------------------------------//

// gsap.to(".box2",{
//     scrollTrigger:{
//         trigger:".box1",
//         start:"top center",
//         scrub:true, //Duration of animation with respect to scroll
//         pin:".box2",   //Element pinned during animation with respect to the scroll, true means the trigger value is pinned, you can set any value
//         endTrigger:".box3", 
//         end:"bottom 80px", 
//         markers:true, //marker for the scroll
//         toggleActions:"restart pause reverse pause"
//     },
//     x:600,
//     rotation:360,
//     duration:3
// });

//---------------------------------------------------------------------------------------------------------------//

// let tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:".box1",
//         start:"top center",
//         scrub:3, //Duration of animation with respect to scroll
//         endTrigger:".box3", 
//         end:"bottom 80px", 
//         markers:true, //marker for the scroll
//         toggleActions:"restart pause reverse pause"
//     },
// });
// tl.to(".box3",{
//     x:600,
//     rotation:360,
//     duration:3 
// })
// .to(".box3",{
//    backgroundColor: "red",
//    rotation:360,
//    duration:1
// })
// .to(".box3",{
//     x:0,
//     duration:3 
// });

//-----------------------------------Independent Scroll Trigger----------------------------------------------------//

// let tl = gsap.timeline();
// tl.from(".box1",{xPercent:-100})
// .from(".box2",{xPercent:100})
// .from(".box3",{yPercent:-100})
// scrollTrigger.create({
//     animation:tl, //assigning value to the timeline
//     trigger:".box1",
//     start:"top center",
//     scrub:3, //Duration of animation with respect to scroll
//     endTrigger:".box3", 
//     end:"bottom 80px", 
//     markers:true, //marker for the scroll
//     toggleActions:"restart pause reverse pause"
// });

//------------------------------CallBacks------------------------------------------------//

    // ScrollTrigger.defaults({                                //By default value of all the scrolltriggers on the site
    //     toggleActions:"restart pause reverse pause"
    // });
    ScrollTrigger.create({
        trigger:".box3",
        start:"top center",  
        end:"top 100px", 
        //horizontal:true,     
        //scroller:".active",
        // onEnter:()=>console.log("enter"),
        // onLeave:()=>console.log("leave"),
        // onEnterBack:()=>console.log("enter back"),
        // onLeaveBack:()=>console.log("All the way back"),
        //onUpdate:(self)=>console.log("update",self.progress.toFixed(3)), //Distance between start of scroll animation to end ,,,3 means the total number of fractional part 
        //onToggle:(self)=>console.log("toggle",self.isActive),
        id:"scroll-id-1",
        toggleClass:"active",
        markers:true
});