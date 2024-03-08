document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    gsap.to(".circle", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1,
    });
  
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY,
    });
  });

const gridNumber = 12,
boxes = document.getElementById('boxes')
boxes.style.cssText = `
  grid-template-columns: repeat(${gridNumber},1fr);
  grid-template-rows: repeat(${gridNumber},1fr);
`

for (let i = 0; i < gridNumber * gridNumber; i++) {
    const li = document.createElement('li')
    boxes.appendChild(li)
    li.addEventListener('click',() => {
        animation(i)
    })
}

function animation(index) {
    gsap.to('.boxes li',2,{
        scale: .6,
        opacity: .3,
        rotationX: 180,
    })
    .repeat(1)
    .yoyo(true)
}

$.scrollify({
    section : ".action",
    scrollbars:"false",
    easing: "swing", 
    scrollSpeed: 350, 
    
    before:function(i,panels) {
    var ref = panels[i].attr("data-section-name");
    $(".pagination .active").removeClass("active");
    $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
    var pagination = "<ul class=\"pagination\">";
    var activeClass = "";
    $(".action").each(function(i) {
    activeClass = "";
    if(i===$.scrollify.currentIndex()) {
    activeClass = "active";
    }
    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
    });
    pagination += "</ul>";
    
    $("#box1").append(pagination);
    $(".pagination a").on("click",$.scrollify.move);
    }
    
    });

    const btn_hover = 
    gsap.timeline({
       paused: true
    })
      .to(".btn",{
      background:"#c471ed",
            })
      .to(".txt",{
      yPercent:-100,
            },"<");
    
    $("#hover_trigger").hover(
      function(){
        btn_hover.play();
      },
      function(){
        btn_hover.reverse();
      }
    );