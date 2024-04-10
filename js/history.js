function savePageState() {
    // Lấy URL của trang hiện tại
    var currentPage = window.location.href;
    
    // Lưu URL vào Local Storage hoặc Session Storage
    localStorage.setItem('currentPage', currentPage);
    // hoặc sessionStorage.setItem('currentPage', currentPage);
}

// Khôi phục trạng thái trang khi trang được tải lại
function restorePageState() {
    // Lấy URL từ Local Storage hoặc Session Storage
    var savedPage = localStorage.getItem('currentPage');
    // hoặc var savedPage = sessionStorage.getItem('currentPage');

    // Kiểm tra xem có URL được lưu trữ không
    if (savedPage) {
        // Nếu có, chuyển hướng trình duyệt đến trang đã lưu
        window.location.href = savedPage;
    }
}