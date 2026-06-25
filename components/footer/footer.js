// This file is intentionally left blank as the footer does not require specific JavaScript.
function initHeader() {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-menu');
  
  if(btn && nav) {
    btn.addEventListener('click', () => {
      // สลับคลาส 'open' เพื่อแสดงหรือซ่อนเมนู
      nav.classList.toggle('open');
    });

    // ปิดเมนูอัตโนมัติเมื่อกดลิงก์ในหน้าจอมือถือ
    const mobileLinks = nav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }
}