$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show"); 
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings : [ "IIT'ian","Dancer","Designer","Software engineer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings : ["Software engineer", "IIT'ian","Dancer","Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        // status.classList.add('success');
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        // status.classList.add('error');
      });
    }
    form.addEventListener("submit", handleSubmit)

});

