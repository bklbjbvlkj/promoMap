function showMap() {
    // إخفاء قائمة المنتجات وعرض صورة الخريطة
    document.getElementById("productsContainer").style.display = "none";
    document.getElementById("mapImageContainer").style.display = "block";
}

function hideMap() {
    // إخفاء صورة الخريطة وإظهار قائمة المنتجات
    document.getElementById("mapImageContainer").style.display = "none";
    document.getElementById("productsContainer").style.display = "grid";
}
