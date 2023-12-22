function locomotive() {
    gsap.registerPlugin(ScrollTrigger);  //ScrollTrigger를 통해 스크롤 애니메이션을 관리하기 위한 도구


    /* SMOOTH SCROLL */
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    //locoScroll객체를 생성, 스크롤 관련 동작을 제어하는데 사용됩니다.
    //el: document.querySelector("#main")
    // --> #main이라는 CSS선택자로 해당하는 HTML요소를 스크롤 컨테이너로 지정합니다,
    // #main영역이  LocomotiveScroll이 적용되는 범위이다.

    //smooth: true --> 부드러운 스크롤을 활성화 합니다.

    locoScroll.on("scroll", ScrollTrigger.update); 
    //LocomotiveScroll의 Scroll이벤트가 발생할때 마다 ScrollTrigger의 update 함수를 호출합니다,
    //이것은 스크롤 이벤트와 ScrollTrigger간의 연동을 설정합니다.

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ?
            locoScroll.scrollTo(value, 0, 0) :
            locoScroll.scroll.instance.scroll.y;
        },
        //ScrollTrigger의 scrollerProxy(스크롤에 대한 인터페이스 제어,조작)를 설정한다.
        //이 부분은 ScrollTrigger가 LocomotiveScroll와 함께 작동하도록 만듦


        getBoundingClientRect() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }; //뷰포트의 크기를 반환하는 getBoundingClientRect() 함수를 정의함
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    }); //pinType은 #main 요소의 스타일 속성 transform이 설정되어 있으면 transform으로,
        //그렇지 않으면 fixed로 설정함

        //"refresh" 이벤트를 감지하면 locoScroll.update() 함수를 호출하여 LocomotiveScroll을 업데이트합니다. 스크롤 컨테이너나 내용이 동적으로 변경될 때 사용됩니다.
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh(); //ScrollTrigger를 초기화하고 설정을 적용합니다.
}
locomotive();


///////////////////////////////////
function canvas(){
    const canvas = document.querySelector('#myCanvas');
    const context = canvas.getContext("2d"); //canvas사용의 !필수!

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize",()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    function files(index){
        var data = `./img/male0001.png
        ./img/male0002.png
        ./img/male0003.png
        ./img/male0004.png
        ./img/male0005.png
        ./img/male0006.png
        ./img/male0007.png
        ./img/male0008.png
        ./img/male0009.png
        ./img/male0010.png
        ./img/male0011.png
        ./img/male0012.png
        ./img/male0013.png
        ./img/male0014.png
        ./img/male0015.png
        ./img/male0016.png
        ./img/male0017.png
        ./img/male0018.png
        ./img/male0019.png
        ./img/male0020.png
        ./img/male0021.png
        ./img/male0022.png
        ./img/male0023.png
        ./img/male0024.png
        ./img/male0025.png
        ./img/male0026.png
        ./img/male0027.png
        ./img/male0028.png
        ./img/male0029.png
        ./img/male0030.png
        ./img/male0031.png
        ./img/male0032.png
        ./img/male0033.png
        ./img/male0034.png
        ./img/male0035.png
        ./img/male0036.png
        ./img/male0037.png
        ./img/male0038.png
        ./img/male0039.png
        ./img/male0040.png
        ./img/male0041.png
        ./img/male0042.png
        ./img/male0043.png
        ./img/male0044.png
        ./img/male0045.png
        ./img/male0046.png
        ./img/male0047.png
        ./img/male0048.png
        ./img/male0049.png
        ./img/male0050.png
        ./img/male0051.png
        ./img/male0052.png
        ./img/male0053.png
        ./img/male0054.png
        ./img/male0055.png
        ./img/male0056.png
        ./img/male0057.png
        ./img/male0058.png
        ./img/male0059.png
        ./img/male0060.png
        ./img/male0061.png
        ./img/male0062.png
        ./img/male0063.png
        ./img/male0064.png
        ./img/male0065.png
        ./img/male0066.png
        ./img/male0067.png
        ./img/male0068.png
        ./img/male0069.png
        ./img/male0070.png
        ./img/male0071.png
        ./img/male0072.png
        ./img/male0073.png
        ./img/male0074.png
        ./img/male0075.png
        ./img/male0076.png
        ./img/male0077.png
        ./img/male0078.png
        ./img/male0079.png
        ./img/male0080.png
        ./img/male0081.png
        ./img/male0082.png
        ./img/male0083.png
        ./img/male0084.png
        ./img/male0085.png
        ./img/male0086.png
        ./img/male0087.png
        ./img/male0088.png
        ./img/male0089.png
        ./img/male0090.png
        ./img/male0091.png
        ./img/male0092.png
        ./img/male0093.png
        ./img/male0094.png
        ./img/male0095.png
        ./img/male0096.png
        ./img/male0097.png
        ./img/male0098.png
        ./img/male0099.png
        ./img/male0100.png
        ./img/male0101.png
        ./img/male0102.png
        ./img/male0103.png
        ./img/male0104.png
        ./img/male0105.png
        ./img/male0106.png
        ./img/male0107.png
        ./img/male0108.png
        ./img/male0109.png
        ./img/male0110.png
        ./img/male0111.png
        ./img/male0112.png
        ./img/male0113.png
        ./img/male0114.png
        ./img/male0115.png
        ./img/male0116.png
        ./img/male0117.png
        ./img/male0118.png
        ./img/male0119.png
        ./img/male0120.png
        ./img/male0121.png
        ./img/male0122.png
        ./img/male0123.png
        ./img/male0124.png
        ./img/male0125.png
        ./img/male0126.png
        ./img/male0127.png
        ./img/male0128.png
        ./img/male0129.png
        ./img/male0130.png
        ./img/male0131.png
        ./img/male0132.png
        ./img/male0133.png
        ./img/male0134.png
        ./img/male0135.png
        ./img/male0136.png
        ./img/male0137.png
        ./img/male0138.png
        ./img/male0139.png
        ./img/male0140.png
        ./img/male0141.png
        ./img/male0142.png
        ./img/male0143.png
        ./img/male0144.png
        ./img/male0145.png
        ./img/male0146.png
        ./img/male0147.png
        ./img/male0148.png
        ./img/male0149.png
        ./img/male0150.png
        ./img/male0151.png
        ./img/male0152.png
        ./img/male0153.png
        ./img/male0154.png
        ./img/male0155.png
        ./img/male0156.png
        ./img/male0157.png
        ./img/male0158.png
        ./img/male0159.png
        ./img/male0160.png
        ./img/male0161.png
        ./img/male0162.png
        ./img/male0163.png
        ./img/male0164.png
        ./img/male0165.png
        ./img/male0166.png
        ./img/male0167.png
        ./img/male0168.png
        ./img/male0169.png
        ./img/male0170.png
        ./img/male0171.png
        ./img/male0172.png
        ./img/male0173.png
        ./img/male0174.png
        ./img/male0175.png
        ./img/male0176.png
        ./img/male0177.png
        ./img/male0178.png
        ./img/male0179.png
        ./img/male0180.png
        ./img/male0181.png
        ./img/male0182.png
        ./img/male0183.png
        ./img/male0184.png
        ./img/male0185.png
        ./img/male0186.png
        ./img/male0187.png
        ./img/male0188.png
        ./img/male0189.png
        ./img/male0190.png
        ./img/male0191.png
        ./img/male0192.png
        ./img/male0193.png
        ./img/male0194.png
        ./img/male0195.png
        ./img/male0196.png
        ./img/male0197.png
        ./img/male0198.png
        ./img/male0199.png
        ./img/male0200.png
        ./img/male0201.png
        ./img/male0202.png
        ./img/male0203.png
        ./img/male0204.png
        ./img/male0205.png
        ./img/male0206.png
        ./img/male0207.png
        ./img/male0208.png
        ./img/male0209.png
        ./img/male0210.png
        ./img/male0211.png
        ./img/male0212.png
        ./img/male0213.png
        ./img/male0214.png
        ./img/male0215.png
        ./img/male0216.png
        ./img/male0217.png
        ./img/male0218.png
        ./img/male0219.png
        ./img/male0220.png
        ./img/male0221.png
        ./img/male0222.png
        ./img/male0223.png
        ./img/male0224.png
        ./img/male0225.png
        ./img/male0226.png
        ./img/male0227.png
        ./img/male0228.png
        ./img/male0229.png
        ./img/male0230.png
        ./img/male0231.png
        ./img/male0232.png
        ./img/male0233.png
        ./img/male0234.png
        ./img/male0235.png
        ./img/male0236.png
        ./img/male0237.png
        ./img/male0238.png
        ./img/male0239.png
        ./img/male0240.png
        ./img/male0241.png
        ./img/male0242.png
        ./img/male0243.png
        ./img/male0244.png
        ./img/male0245.png
        ./img/male0246.png
        ./img/male0247.png
        ./img/male0248.png
        ./img/male0249.png
        ./img/male0250.png
        ./img/male0251.png
        ./img/male0252.png
        ./img/male0253.png
        ./img/male0254.png
        ./img/male0255.png
        ./img/male0256.png
        ./img/male0257.png
        ./img/male0258.png
        ./img/male0259.png
        ./img/male0260.png
        ./img/male0261.png
        ./img/male0262.png
        ./img/male0263.png
        ./img/male0264.png
        ./img/male0265.png
        ./img/male0266.png
        ./img/male0267.png
        ./img/male0268.png
        ./img/male0269.png
        ./img/male0270.png
        ./img/male0271.png
        ./img/male0272.png
        ./img/male0273.png
        ./img/male0274.png
        ./img/male0275.png
        ./img/male0276.png
        ./img/male0277.png
        ./img/male0278.png
        ./img/male0279.png
        ./img/male0280.png
        ./img/male0281.png
        ./img/male0282.png
        ./img/male0283.png
        ./img/male0284.png
        ./img/male0285.png
        ./img/male0286.png
        ./img/male0287.png
        ./img/male0288.png
        ./img/male0289.png
        ./img/male0290.png
        ./img/male0291.png
        ./img/male0292.png
        ./img/male0293.png
        ./img/male0294.png
        ./img/male0295.png
        ./img/male0296.png
        ./img/male0297.png
        ./img/male0298.png
        ./img/male0299.png
        ./img/male0300.png`;

        return data.split('\n')[index] //\n => 엔터를 기준으로 split 하는 약속된 기호
    }

const frameCount = 300; //이미지 전체 갯수
const images = [];
const imageSeq = {
    frame:0
}

for(let i = 0; i < frameCount; i++){
    const img = new Image(); //img태그 만들기
    img.src = files(i);
    images.push(img)
}
//console.log(images)

gsap.to(imageSeq,{
    frame: frameCount -1, //마지막 프레임의 인덱스번호
    snap: "frame", //"frame" 단위로 값을 맞추겠다는 의미
    ease: "none",
    scrollTrigger: {
        scrub: 0.15,
        trigger: '#page>canvas',
        start: "top top",
        end: "600% top", //캔버스 높이의 6배만큼 도착하면 끝나게 만들겠다.
        scroller:"#main",
    },
    onUpdate: render //gsa.to가 변할때마다 업데이트가 일어남
})
images[0].onload = render;
function render(){
    scaleImage(images[imageSeq.frame],context)
}

function scaleImage(img,ctx){
    let canvas = ctx.canvas;
    let hRatio = canvas.width/img.width;
    let vRatio = canvas.height/img.height;
    console.log(hRatio + "," + vRatio)

    //let ratio = Math.max(10, 20); //20 /가장 큰수를 찾음

    //이미지 500*500 가정할때
    //넓은 화면일때 화면의 넓이가 1000*600이라고 가정
    //[hRatio=> 1000/500 =2] [vRatio=> 600/500 = 1.2] => [ratio = 2]

    //이미지 500*500 가정할때
    //좁은 화면일때 화면의 넓이가 400 * 600이라고 가정
    //[hRatio=> 400/500 = 0.8] [vRatio=> 600/500 = 1.2] => [ratio = 1.2]


    let ratio = Math.max(hRatio,vRatio); //20 /가장 큰수를 찾음
    let centerShift_x = (canvas.width - img.width * ratio) / 2;
    let centerShift_y = (canvas.height - img.height * ratio) / 2;


    ctx.clearRect(0,0,canvas.width,canvas.height); //화면정리 ==> 하얀네모 도화지를 삭제
    //캔버스에 이미지를 표현할 때 drawImage(이미지, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
    //sx, sy, swidth, sheight => 소스자체
    //dx, dy, dwidth, dheight --> 소스가 만들어진 후 설정
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio )
}

// gsap.to("#page>canvas",{
//     scrollTrigger:{
//         trigger: "#page>canvas", //애니메이션이 시작될 요소
//         scroller:"#main", //스크롤이 발생하는 요소
//         pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
//         start: "top top", //애니메이션 시작
//         end: "600% top", //애니메이션 끝
//     }
// })


ScrollTrigger.create({
    trigger: "#page>canvas", //애니메이션이 시작될 요소
        scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
        start: "top top", //애니메이션 시작
        end: "600% top", //애니메이션 끝
})


} //canvas()
canvas();

gsap.to("#page1",{
    trigger: "#page", //애니메이션이 시작될 요소
        scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
        start: "top top", //애니메이션 시작
        end: "bottom top", //애니메이션 끝
        markers: true,
})


//javascript에서 img태그를 만드는 방법
// 1)
/* let imgEle = document.createElement('img');
imgEle.src = "이미지경로";
imgEle.alt = "이미지설명";

document.body.appendChild(imgEle); */

//2)
/* let imgEle = new Image(); //이미지태그 만들기
imgEle.src = "경로"
imgEle.alt = "설명"
console.log(imgEle) */



// gsap.to("#page>canvas",{
//     scrollTrigger:{
//         trigger: "#page>canvas", //애니메이션이 시작될 요소
//         scroller:"#main", //스크롤이 발생하는 요소
//         pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
//         start: "top top", //애니메이션 시작
//         end: "600% top", //애니메이션 끝
//     }
// })


// ScrollTrigger.create({
//     trigger: "#page>canvas", //애니메이션이 시작될 요소
//         scroller:"#main", //스크롤이 발생하는 요소
//         pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
//         start: "top top", //애니메이션 시작
//         end: "600% top", //애니메이션 끝
// })
