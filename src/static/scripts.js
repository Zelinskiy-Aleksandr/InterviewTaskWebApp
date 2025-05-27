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

 function getHomeContent(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/home_content');
    xhr.send();
 //   document.getElementsByTagName('main')[0].innerHTML = progressBar;
    xhr.onload = function() {
          if (xhr.status == 200) {
                    document.getElementsByTagName('main')[0].innerHTML = xhr.response;
            }
       };
 }

 function getNetworkContent(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/network_task');
    xhr.send();
 //   document.getElementsByTagName('main')[0].innerHTML = progressBar;
    xhr.onload = function() {
          if (xhr.status == 200) {
                    document.getElementsByTagName('main')[0].innerHTML = xhr.response;
            }
       };
 }

  function getFeeTaskContent(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/fee_task');
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
