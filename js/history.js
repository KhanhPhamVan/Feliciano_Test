function savePageState() {
    // Lấy URL của trang hiện tại
    var currentPage = window.location.href;
    
    // Lưu URL vào Local Storage hoặc Session Storage
    localStorage.setItem('currentPage', currentPage);
    // hoặc sessionStorage.setItem('currentPage', currentPage);

    
}

// Khôi phục trạng thái trang khi trang được tải lại
function restorePageState() {
    savePageState();
    // Lấy URL từ Local Storage hoặc Session Storage
    var savedPage = localStorage.getItem('currentPage');
    // hoặc var savedPage = sessionStorage.getItem('currentPage');

    // Kiểm tra xem có URL được lưu trữ không
    if (savedPage) {
        // Nếu có, chuyển hướng trình duyệt đến trang đã lưu
        window.location.href = savedPage;
        localStorage.removeItem('count');
    }
}
// Kiểm tra xem trang đã được reload sau khi tải HTML hay không
window.addEventListener('beforeunload', function(event) {
    console.log(1);
});


// function savePage() {
//     var htmlContent = document.documentElement.outerHTML;
//     localStorage.setItem('savedPage', htmlContent);
//     alert("Trang đã được lưu lại!");
//   }

//   // Kiểm tra xem có dữ liệu đã lưu trong Local Storage không
//   window.onload = function() {
//     var savedPage = localStorage.getItem('savedPage');
//     if(savedPage) {
//       document.documentElement.outerHTML = savedPage;
//     }
//   }

