// Hàm chuyển trang đơn giản và hiệu quả
function showPage(pageId) {
    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Hiển thị trang được chọn
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Cập nhật trạng thái active trong navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Thêm hiệu ứng cho các bài viết
window.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});