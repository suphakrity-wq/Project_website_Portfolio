// js/global.js

// ฟังก์ชันสำหรับโหลดไฟล์ HTML ย่อย (Components)
async function loadComponent(elementId, filePath, callback) {
  try {
    const el = document.getElementById(elementId);
    if (!el) return; // ถ้าหน้านั้นไม่มีกล่องให้ใส่ ก็ข้ามไป
    
    const response = await fetch(filePath);
    if (!response.ok) return;
    
    el.innerHTML = await response.text();
    
    // ถ้ามีสคริปต์เฉพาะของ Component นั้น ให้รันหลังจากใส่ HTML เสร็จ
    if (callback) callback();
    
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// โหลด Header และ Footer ทันทีที่โครงสร้างหน้าเว็บพร้อม
document.addEventListener("DOMContentLoaded", () => {
  // ดึง Header และเรียกฟังก์ชันเมนูมือถือ
  loadComponent('header-placeholder', 'components/header/header.html', () => {
    if (typeof initHeader === 'function') initHeader();
  });
  
  // ดึง Footer
  loadComponent('footer-placeholder', 'components/footer/footer.html');
});