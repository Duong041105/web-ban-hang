document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    // Xử lý sự kiện khi người dùng nhấn nút Đăng Nhập
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Lấy thông tin đăng nhập
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Kiểm tra thông tin đăng nhập với tài khoản và mật khẩu cố định
        const fixedUsername = 'admin';
        const fixedPassword = 'admin123';

        if (username === fixedUsername && password === fixedPassword) {
            alert('Đăng nhập thành công!');
            window.location.href = 'banhang.html'; // Chuyển hướng đến trang bán hàng
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    });
});
