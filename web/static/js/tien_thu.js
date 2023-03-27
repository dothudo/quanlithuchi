let list = document.querySelectorAll('.check li');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = document.getElementById('container');
            itemNew.innerHTML += '<form action="{% url "web:tien_thu" %}"><h2>Tiền Thu</h2><div class="input-form"><span>Thời gian</span><input type="datetime-local" name=""></div><div class="input-form"><span>Ghi Chú</span><input type="text" name=""></div><div class="input-form"><span>Số tiền</span><input type="text" name=""></div><div class="input-form"><a><input type="submit" value="Nhập khoản tiền thu"></a></div></form>';
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.noi-dung li');
            listCart.forEach(cart =>{
              if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                checkIsset = true;
                cart.classList.add('danger');
                setTimeout(function(){
                  cart.classList.remove('danger');
                },1000)
              }
            })
            if(checkIsset == false){
              document.querySelector('.listnoi-dung').appendChild(itemNew);
            }
          }
    })
})