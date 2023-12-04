
/* Khởi tạo biến buyBtns và dùng querySelectorAll 
để select tới tất cả các nút */ 
const buyBtns = document.querySelectorAll('.js-buy-ticket')

/* Khởi tạo biến modal và dùng querySelector để select tới modal */
const modal = document.querySelector('.js-modal')

/* Khởi tạo biến modalContainer và dùng querySelector để
select tới các thành phần nằm trong modal */
const modalContainer = document.querySelector('.js-modal-container')

/* Khởi tạo biến modalClose và dùng querySelector
để select tới nút close */
const modalClose = document.querySelector('.js-modal-close')


// Hàm để hiển thị modal ticket (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

// Hàm để ẩn modal ticket (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Lặp qua từng thẻ btn
for(const buyBtn of buyBtns) {
    // Lắng nghe hành vi click vào button 
    buyBtn.addEventListener('click', showBuyTickets)
}

// Lắng nghe hành vi click vào nút close
modalClose.addEventListener('click', hideBuyTickets)

// Lắng nghe hành vi click vào modal
modal.addEventListener('click', hideBuyTickets)

/* Lắng nghe hành vi click vào từng thành phần con của modal 
và truyền vào tham số event để dừng sự kiện nổi bọt */
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})
