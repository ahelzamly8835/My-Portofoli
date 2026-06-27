tailwind.config = {
  theme: {
    extend: {
      colors: {
        "dark-main": "#111",
        "dark-secondary": "#171717",
        "text-light": "#E4E6EB",
        "text-muted": "#B0B3B8",
      },
    },
  },
};

const customCursor = document.querySelector('.custom_cursor');

let mouseX = 0, mouseY = 0; // موقع الماوس الحقيقي
let posX = 0, posY = 0;     // موقع العنصر

// تحديث إحداثيات الماوس عند الحركة
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// دالة لتحريك العنصر بشكل سلس
function animate() {
    // نحرك العنصر بشكل تدريجي نحو الماوس
    posX += (mouseX - posX) * 0.08; // 0.05 = سرعة التأخير
    posY += (mouseY - posY) * 0.08;

    customCursor.style.left = `${posX}px`;
    customCursor.style.top = `${posY}px`;

    requestAnimationFrame(animate); // استمرارية الحركة
}

// بدء الحركة
animate();



document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".about-me");

  function checkPosition() {
    const rect = element.getBoundingClientRect();
    const elementMiddle = rect.top + rect.height  * 0.8;
    const screenMiddle = window.innerHeight  * 0.9;

    if(elementMiddle < screenMiddle) {  // يظهر لما نص العنصر يصل لنص الشاشة
      element.classList.add("show-about-me");
      window.removeEventListener("scroll", checkPosition); // يظهر مرة واحدة
    }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition(); // يفحص أول مرة لو العنصر ظاهر من البداية
});









document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".about-h2");

  function checkPosition() {
    const rect = element.getBoundingClientRect();
    const elementMiddle = rect.top + rect.height * 0.2; // منتصف العنصر
    const screenTrigger = window.innerHeight * 0.9;      // نقطة ظهور قبل نص الشاشة

    if(elementMiddle < screenTrigger) {
      element.classList.add("show-about-h2");
      window.removeEventListener("scroll", checkPosition); // يظهر مرة واحدة
    }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition(); // يفحص أول مرة لو العنصر ظاهر من البداية
});




let currentScroll = 0;
let targetScroll = 0;

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
});

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.5; // 0.1 = سرعة التأخير
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

requestAnimationFrame(smoothScroll);







const elements = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));