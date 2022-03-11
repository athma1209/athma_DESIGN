
/** navbar  **/
$(document).ready(function () {
    
    $.ajax({url: 'header.html', success: function (data) {
        $('#header').html(data);

                const togglebtn = document.querySelector('.navbar_tooglebtn');
                const menu = document.querySelector('.navbar_menu');
                const icons = document.querySelector('.navbar_icons');

                togglebtn. addEventListener('click', () => {
                menu.classList.toggle('active');
                icons.classList.toggle('active');
        });


        }
    });

    
    $.ajax({url: 'footer.html', success: function (data) {
        $('#footer').html(data); } });



});



