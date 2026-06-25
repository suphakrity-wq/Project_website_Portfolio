// js/page-project.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  if (!container) return; // ป้องกัน Error ถ้าหาพื้นที่แสดงผลไม่เจอ
  
  let htmlOutput = "";
  
  // วนลูปสร้างกล่องผลงานทีละอัน
  myProjects.forEach(project => {
    htmlOutput += `
      <div class="project-card">
        <img src="${project.thumbnail}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x225?text=Preview'">
        <h3 style="margin-bottom:8px;">${project.title}</h3>
        <p class="text-primary" style="font-size:0.9rem;">${project.category}</p>
        
        <a href="project-detail.html?id=${project.id}" class="view-btn">View Details →</a>
      </div>
    `;
  });
  
  // นำ HTML ที่สร้างเสร็จแล้วไปยัดใส่ในหน้าเว็บ
  container.innerHTML = htmlOutput;
});