function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./male0001.png
  ./male0003.png
  ./male0006.png
  ./male0009.png
  ./male0012.png
  ./male0015.png
  ./male0018.png
  ./male0021.png
  ./male0024.png
  ./male0027.png
  ./male0030.png
  ./male0033.png
  ./male0036.png
  ./male0039.png
  ./male0042.png
  ./male0045.png
  ./male0048.png
  ./male0051.png
  ./male0054.png
  ./male0057.png
  ./male0060.png
  ./male0063.png
  ./male0066.png
  ./male0069.png
  ./male0072.png
  ./male0075.png
  ./male0078.png
  ./male0081.png
  ./male0084.png
  ./male0087.png
  ./male0090.png
  ./male0093.png
  ./male0096.png
  ./male0099.png
  ./male0102.png
  ./male0105.png
  ./male0108.png
  ./male0111.png
  ./male0114.png
  ./male0117.png
  ./male0120.png
  ./male0123.png
  ./male0126.png
  ./male0129.png
  ./male0132.png
  ./male0135.png
  ./male0138.png
  ./male0141.png
  ./male0144.png
  ./male0147.png
  ./male0150.png
  ./male0153.png
  ./male0156.png
  ./male0159.png
  ./male0162.png
  ./male0165.png
  ./male0168.png
  ./male0171.png
  ./male0174.png
  ./male0177.png
  ./male0180.png
  ./male0183.png
  ./male0186.png
  ./male0189.png
  ./male0192.png
  ./male0195.png
  ./male0198.png
  ./male0201.png
  ./male0204.png
  ./male0207.png
  ./male0210.png
  ./male0213.png
  ./male0216.png
  ./male0219.png
  ./male0222.png
  ./male0225.png
  ./male0228.png
  ./male0231.png
  ./male0234.png
  ./male0237.png
  ./male0240.png
  ./male0243.png
  ./male0246.png
  ./male0249.png
  ./male0252.png
  ./male0255.png
  ./male0258.png
  ./male0261.png
  ./male0264.png
  ./male0267.png
  ./male0270.png
  ./male0273.png
  ./male0276.png
  ./male0279.png
  ./male0282.png
  ./male0285.png
  ./male0288.png
  ./male0291.png
  ./male0294.png
  ./male0297.png
  ./male0300.png
  
 `;
  return data.split("\n")[index];
}

const frameCount = 102;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})


