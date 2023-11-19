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
    const scrollStep = -window.scrollY / (scrollDuration / 30);

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

