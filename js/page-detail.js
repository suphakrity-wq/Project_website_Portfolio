// js/page-detail.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. อ่านค่า ID จาก URL (เช่น .../project-detail.html?id=business-sim-game)
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  // 2. ไปค้นหาโปรเจกต์ในฐานข้อมูลที่มี ID ตรงกัน
  const project = myProjects.find(p => p.id === projectId);

  // 3. ถ้าเจอข้อมูล ให้นำไปแสดงผล
  if (project) {
    document.getElementById("detail-title").textContent = project.title;
    document.getElementById("detail-category").textContent = project.category;
    document.getElementById("detail-content").innerHTML = project.content;
    
    // จัดการรูปภาพ
    const img = document.getElementById("detail-image");
    img.src = project.contentImage;
    img.onerror = () => { img.src = 'https://via.placeholder.com/1200x600?text=Project+Cover'; }; // รูปสำรองถ้าหาไฟล์ไม่เจอ
  
  } else {
    // 4. ถ้าไม่เจอ (เช่น พิมพ์ URL ผิด) ให้ขึ้นข้อความแจ้งเตือน
    document.getElementById("detail-title").textContent = "Project Not Found";
    document.getElementById("detail-category").textContent = "ไม่พบโปรเจกต์ที่คุณค้นหา";
  }
});