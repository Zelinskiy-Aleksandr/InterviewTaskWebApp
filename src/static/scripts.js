let progressBar = '<div class="demo-container">' +
                  '  <div class="progress-bar">' +
                  '    <div class="progress-bar-value"></div>' +
                  '  </div>' +
                  '</div>';


  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('#sideMenu >.nav-item, #dropdownMenu >.nav-item');

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
      });
    });
  });

function onChangeGoodsQuantity(price, quantity, amountElement) {
       amountElement.innerHTML = price*quantity;
}

function getPrice() {
       let pricesNodes = Array.from(document.getElementsByName('amount'));
       pricesNodes.pop();
       const totalAmountInput = document.getElementsByName('totalPrice')[0];
       const discountInput = document.getElementsByName('priceWithDiscount')[0];
       const pricesArray = pricesNodes.map(item => {return Number(item.innerHTML)});
       totalPrice = pricesArray.reduce((a, b) => a + b, 0);
       totalAmountInput.value = totalPrice;
       if (totalPrice <= 250){
            discountInput.value = totalPrice*0.9;
       }
       else{
            discountInput.value = totalPrice*0.8;
       }

}


function getContentRequest(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
 //   document.getElementsByTagName('main')[0].innerHTML = progressBar;
    xhr.onload = function() {
          if (xhr.status == 200) {
                    document.getElementsByTagName('main')[0].innerHTML = xhr.response;
            }
       };
}

  function sendNetworkContentFormData(){
    let xhr = new XMLHttpRequest();
    let formData = new FormData(document.forms.network_task);
    xhr.open('POST', '/network_task');
    xhr.send(formData);
 //   document.getElementsByTagName('main')[0].innerHTML = progressBar;
    xhr.onload = function() {
          if (xhr.status == 200) {
                    document.getElementsByTagName('main')[0].innerHTML = xhr.response;
            }
       };

 }

function sendFeeTaskFormData(){
    let xhr = new XMLHttpRequest();
    let formData = new FormData(document.forms.fee_task);
    xhr.open('POST', '/fee_task');
    xhr.send(formData);
 //   document.getElementsByTagName('main')[0].innerHTML = progressBar;
    xhr.onload = function() {
          if (xhr.status == 200) {
                    document.getElementsByTagName('main')[0].innerHTML = xhr.response;
            }
       };

 }
