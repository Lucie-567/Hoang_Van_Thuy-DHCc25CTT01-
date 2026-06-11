// HIỂN THỊ MENU ĐANG CHỌN
const menuItems = document.querySelectorAll(".menu-nav a");

menuItems.forEach(function(item) {           // ✅ sửa ) → {
    item.addEventListener("click", function() {
        menuItems.forEach(function(link) {
            link.classList.remove("active");
        });
        this.classList.add("active");
    });
});

// HIỂN THỊ THÔNG TIN TÁC PHẨM
const info = document.getElementById("info");

document.querySelector('a[href="#starry-night"]').addEventListener("click", function() {
    info.innerHTML = "🌟 Đêm Đầy Sao - Vẽ năm 1889";
});

document.querySelector('a[href="#irises"]').addEventListener("click", function() {
    info.innerHTML = "🌼 Bình hoa diên vĩ trên nền vàng - Vẽ năm 1890";
});

document.querySelector('a[href="#cafe-terrace"]').addEventListener("click", function() {
    info.innerHTML = "☕ Quán cà phê đêm - Vẽ năm 1888";
});

// ĐỔI MÀU NỀN
document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    this.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
});