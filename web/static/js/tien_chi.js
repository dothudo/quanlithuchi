//đánh dấu các mục đã hoàn thành
var list = document.querySelector('ul');//tìm phần tử đầu tiên trên trang có thẻ 'ul'
list.addEventListener('click', function(ev)//gán sự kiện 'click' cho phần tử list,"ev" trong hàm này đại diện cho sự kiện được kích hoạt.
{
    if (ev.target.tagName === 'LI') {//phần tử đc nhấn có thẻ là "LI", mã sẽ được thực thi
    //classList là một thuộc tính của phần tử HTML cho phép thêm, xóa hoặc kiểm tra sự tồn tại
    //sẽ kiểm tra xem phần tử đang có lớp checked hay không
    //checked dụng để xác định trạng thái của phần tử đó là được chọn hay không.
        ev.target.classList.toggle('checked');
}
}, false);// false, sự kiện chỉ được kích hoạt trên phần tử được chọn
