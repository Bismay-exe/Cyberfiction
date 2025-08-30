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
     ./assets/male0001.png
     ./assets/male0002.png
     ./assets/male0003.png
     ./assets/male0004.png
     ./assets/male0005.png
     ./assets/male0006.png
     ./assets/male0007.png
     ./assets/male0008.png
     ./assets/male0009.png
     ./assets/male0010.png
     ./assets/male0011.png
     ./assets/male0012.png
     ./assets/male0013.png
     ./assets/male0014.png
     ./assets/male0015.png
     ./assets/male0016.png
     ./assets/male0017.png
     ./assets/male0018.png
     ./assets/male0019.png
     ./assets/male0020.png
     ./assets/male0021.png
     ./assets/male0022.png
     ./assets/male0023.png
     ./assets/male0024.png
     ./assets/male0025.png
     ./assets/male0026.png
     ./assets/male0027.png
     ./assets/male0028.png
     ./assets/male0029.png
     ./assets/male0030.png
     ./assets/male0031.png
     ./assets/male0032.png
     ./assets/male0033.png
     ./assets/male0034.png
     ./assets/male0035.png
     ./assets/male0036.png
     ./assets/male0037.png
     ./assets/male0038.png
     ./assets/male0039.png
     ./assets/male0040.png
     ./assets/male0041.png
     ./assets/male0042.png
     ./assets/male0043.png
     ./assets/male0044.png
     ./assets/male0045.png
     ./assets/male0046.png
     ./assets/male0047.png
     ./assets/male0048.png
     ./assets/male0049.png
     ./assets/male0050.png
     ./assets/male0051.png
     ./assets/male0052.png
     ./assets/male0053.png
     ./assets/male0054.png
     ./assets/male0055.png
     ./assets/male0056.png
     ./assets/male0057.png
     ./assets/male0058.png
     ./assets/male0059.png
     ./assets/male0060.png
     ./assets/male0061.png
     ./assets/male0062.png
     ./assets/male0063.png
     ./assets/male0064.png
     ./assets/male0065.png
     ./assets/male0066.png
     ./assets/male0067.png
     ./assets/male0068.png
     ./assets/male0069.png
     ./assets/male0070.png
     ./assets/male0071.png
     ./assets/male0072.png
     ./assets/male0073.png
     ./assets/male0074.png
     ./assets/male0075.png
     ./assets/male0076.png
     ./assets/male0077.png
     ./assets/male0078.png
     ./assets/male0079.png
     ./assets/male0080.png
     ./assets/male0081.png
     ./assets/male0082.png
     ./assets/male0083.png
     ./assets/male0084.png
     ./assets/male0085.png
     ./assets/male0086.png
     ./assets/male0087.png
     ./assets/male0088.png
     ./assets/male0089.png
     ./assets/male0090.png
     ./assets/male0091.png
     ./assets/male0092.png
     ./assets/male0093.png
     ./assets/male0094.png
     ./assets/male0095.png
     ./assets/male0096.png
     ./assets/male0097.png
     ./assets/male0098.png
     ./assets/male0099.png
     ./assets/male0100.png
     ./assets/male0101.png
     ./assets/male0102.png
     ./assets/male0103.png
     ./assets/male0104.png
     ./assets/male0105.png
     ./assets/male0106.png
     ./assets/male0107.png
     ./assets/male0108.png
     ./assets/male0109.png
     ./assets/male0110.png
     ./assets/male0111.png
     ./assets/male0112.png
     ./assets/male0113.png
     ./assets/male0114.png
     ./assets/male0115.png
     ./assets/male0116.png
     ./assets/male0117.png
     ./assets/male0118.png
     ./assets/male0119.png
     ./assets/male0120.png
     ./assets/male0121.png
     ./assets/male0122.png
     ./assets/male0123.png
     ./assets/male0124.png
     ./assets/male0125.png
     ./assets/male0126.png
     ./assets/male0127.png
     ./assets/male0128.png
     ./assets/male0129.png
     ./assets/male0130.png
     ./assets/male0131.png
     ./assets/male0132.png
     ./assets/male0133.png
     ./assets/male0134.png
     ./assets/male0135.png
     ./assets/male0136.png
     ./assets/male0137.png
     ./assets/male0138.png
     ./assets/male0139.png
     ./assets/male0140.png
     ./assets/male0141.png
     ./assets/male0142.png
     ./assets/male0143.png
     ./assets/male0144.png
     ./assets/male0145.png
     ./assets/male0146.png
     ./assets/male0147.png
     ./assets/male0148.png
     ./assets/male0149.png
     ./assets/male0150.png
     ./assets/male0151.png
     ./assets/male0152.png
     ./assets/male0153.png
     ./assets/male0154.png
     ./assets/male0155.png
     ./assets/male0156.png
     ./assets/male0157.png
     ./assets/male0158.png
     ./assets/male0159.png
     ./assets/male0160.png
     ./assets/male0161.png
     ./assets/male0162.png
     ./assets/male0163.png
     ./assets/male0164.png
     ./assets/male0165.png
     ./assets/male0166.png
     ./assets/male0167.png
     ./assets/male0168.png
     ./assets/male0169.png
     ./assets/male0170.png
     ./assets/male0171.png
     ./assets/male0172.png
     ./assets/male0173.png
     ./assets/male0174.png
     ./assets/male0175.png
     ./assets/male0176.png
     ./assets/male0177.png
     ./assets/male0178.png
     ./assets/male0179.png
     ./assets/male0180.png
     ./assets/male0181.png
     ./assets/male0182.png
     ./assets/male0183.png
     ./assets/male0184.png
     ./assets/male0185.png
     ./assets/male0186.png
     ./assets/male0187.png
     ./assets/male0188.png
     ./assets/male0189.png
     ./assets/male0190.png
     ./assets/male0191.png
     ./assets/male0192.png
     ./assets/male0193.png
     ./assets/male0194.png
     ./assets/male0195.png
     ./assets/male0196.png
     ./assets/male0197.png
     ./assets/male0198.png
     ./assets/male0199.png
     ./assets/male0200.png
     ./assets/male0201.png
     ./assets/male0202.png
     ./assets/male0203.png
     ./assets/male0204.png
     ./assets/male0205.png
     ./assets/male0206.png
     ./assets/male0207.png
     ./assets/male0208.png
     ./assets/male0209.png
     ./assets/male0210.png
     ./assets/male0211.png
     ./assets/male0212.png
     ./assets/male0213.png
     ./assets/male0214.png
     ./assets/male0215.png
     ./assets/male0216.png
     ./assets/male0217.png
     ./assets/male0218.png
     ./assets/male0219.png
     ./assets/male0220.png
     ./assets/male0221.png
     ./assets/male0222.png
     ./assets/male0223.png
     ./assets/male0224.png
     ./assets/male0225.png
     ./assets/male0226.png
     ./assets/male0227.png
     ./assets/male0228.png
     ./assets/male0229.png
     ./assets/male0230.png
     ./assets/male0231.png
     ./assets/male0232.png
     ./assets/male0233.png
     ./assets/male0234.png
     ./assets/male0235.png
     ./assets/male0236.png
     ./assets/male0237.png
     ./assets/male0238.png
     ./assets/male0239.png
     ./assets/male0240.png
     ./assets/male0241.png
     ./assets/male0242.png
     ./assets/male0243.png
     ./assets/male0244.png
     ./assets/male0245.png
     ./assets/male0246.png
     ./assets/male0247.png
     ./assets/male0248.png
     ./assets/male0249.png
     ./assets/male0250.png
     ./assets/male0251.png
     ./assets/male0252.png
     ./assets/male0253.png
     ./assets/male0254.png
     ./assets/male0255.png
     ./assets/male0256.png
     ./assets/male0257.png
     ./assets/male0258.png
     ./assets/male0259.png
     ./assets/male0260.png
     ./assets/male0261.png
     ./assets/male0262.png
     ./assets/male0263.png
     ./assets/male0264.png
     ./assets/male0265.png
     ./assets/male0266.png
     ./assets/male0267.png
     ./assets/male0268.png
     ./assets/male0269.png
     ./assets/male0270.png
     ./assets/male0271.png
     ./assets/male0272.png
     ./assets/male0273.png
     ./assets/male0274.png
     ./assets/male0275.png
     ./assets/male0276.png
     ./assets/male0277.png
     ./assets/male0278.png
     ./assets/male0279.png
     ./assets/male0280.png
     ./assets/male0281.png
     ./assets/male0282.png
     ./assets/male0283.png
     ./assets/male0284.png
     ./assets/male0285.png
     ./assets/male0286.png
     ./assets/male0287.png
     ./assets/male0288.png
     ./assets/male0289.png
     ./assets/male0290.png
     ./assets/male0291.png
     ./assets/male0292.png
     ./assets/male0293.png
     ./assets/male0294.png
     ./assets/male0295.png
     ./assets/male0296.png
     ./assets/male0297.png
     ./assets/male0298.png
     ./assets/male0299.png
     ./assets/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

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