(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

     // contact
     document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let userName = document.getElementById("name").value;
        let phoneNumber = document.getElementById("phone").value;
        
        if(userName && phoneNumber) {
            // Send notification (Replace with actual backend API)
            fetch('send_notification.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: userName, phone: phoneNumber })
            }).then(response => {
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();
            }).catch(error => console.error('Error:', error));
        }
    });

      
    
        // When form is submitted
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
    
            // Get the name and phone values
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
    
            // Format the message for WhatsApp
            var message = `Hello, I would like to request a callback.\n\nName: ${name}\nPhone: ${phone}`;
    
            // Create the WhatsApp link with pre-filled message
            var whatsappLink = `https://wa.me/919573355396?text=${encodeURIComponent(message)}`;
    
            // Redirect to WhatsApp
            window.open(whatsappLink, '_blank');
    
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
        });


    