var date = new Date();

var renderCalendar = () => {
  date.setDate(1);

  var monthDays = document.querySelector(".days");

  var lastDay = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
  ).getDate();

  var prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  var firstDayIndex = date.getDay();

  var lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  var nextDays = 7 - lastDayIndex - 1;

  var months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ]

  document.querySelector('.content h1').innerHTML = months[date.getMonth()];
  document.querySelector('.content p').innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x>0;x--){
    days += `<li class="previous-day">${prevLastDay - x + 1}</li>`
  }

  for (let i = 1; i <= lastDay; i++){
    if(i===new Date().getDate() && date.getMonth() === new Date().getMonth()){
      days += `<li class="today">${i}</li>`
    } else {
      days += `<li class="">${i}</li>`
    }
  }

  for(let j = 1; j <= nextDays; j++){
    days += `<li class="next-days">${j}</li>`
    monthDays.innerHTML = days;
  }
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
})

renderCalendar();


// Add a "checked" symbol when clicking on a list item
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
