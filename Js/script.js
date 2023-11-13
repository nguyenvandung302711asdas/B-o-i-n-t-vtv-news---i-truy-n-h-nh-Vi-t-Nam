// nút chuyển trang lên đầu
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
} // hiển thị ra nút

function scrollToTop() {
    const scrollDuration = 1000; // Thời gian để cuộn lên (1 giây)
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
// tìm kiếm 

function toggleSearch() {
    var searchBox = document.getElementById("search-box");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    }
}

function performSearch() {
    // Thực hiện tìm kiếm ở đây
    alert("Đã tìm kiếm: " + document.querySelector("#search-box input").value);
}


// menudown
function toggleMenu(icon) {
    const menu = document.getElementById('dropdown-menu');
    const userIcon = document.getElementById('user-icon');
    const menuIcon = document.getElementById('menu-icon');

    if (icon === 'user') {
        menu.classList.remove('active');
        userIcon.classList.add('active');
        menuIcon.classList.remove('active');
    } else if (icon === 'menu') {
        menu.classList.toggle('active');
        userIcon.classList.remove('active');
        menuIcon.classList.add('active');
    }
}