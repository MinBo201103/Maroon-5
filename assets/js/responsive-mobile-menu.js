// Sử dụng getElementById để lấy được hết id = header 
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Hàm đóng/mở mobile menu
mobileMenu.onclick = function() {
   var isClosed = header.clientHeight === headerHeight;
   if (isClosed) {
    header.style.height = 'auto'
   } else {
    header.style.height = null
   }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    console.log(menuItem);
    menuItem.onclick = function(event) {
        var isParentMenu = this.menuItem.nextElementSibling && this.menuItem.nextElementSibling.classList.contains('subnav'); 
        if (isParentMenu) {
            event.preventDefault(); 
        } else {
            header.style.height = null
        }
    }
}
