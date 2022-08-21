window.addEventListener("load", function(){
    document.querySelector(".page-loader").classList.add("fade-out")
    setTimeout(function(){
        document.querySelector(".page-loader").style.display ="none";
    },6000)
     AOS.init();
})

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

document.addEventListener("click", function(e) {
    if(e.target.closest(".nav-item")) {
        toggleNav();
    }
});

window.addEventListener("scroll", function () {
    if (this.scrollY > 60) {
        document.querySelector(".header").classList.add("sticky")
    }
    else {
        document.querySelector(".header").classList.remove("sticky")
    }
    
})

const menuTabs = document.querySelector(".menu-tabs")
menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target")
        menuTabs.querySelector(".active").classList.remove("active")
        e.target.classList.add("active")
        const menuSection = document.querySelector(".menu-section")
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active")
        menuSection.querySelector(target).classList.add("active")
        AOS.init();
    }
})

   $(document).ready(function () {
     function loadData() {
       $.ajax({
         url: "select-data.php",
         type: "POST",
         success: function (data) {
           $("#content").html(data);
         },
       });
     }

     loadData();

     $("#btn").on("click", function (e) {
       e.preventDefault();
       var name = $("#name").val();
       var msg = $("#msg").val();

       $.ajax({
         url: "insert-data.php",
         type: "POST",
         data: { name: name, msg: msg },
         success: function (data) {
           if (data == 1) {
             loadData();
             alert("Comment Submitted Successfully.");
             $("#form").trigger("reset");
           } else {
             alert("Comment Can't Submit.");
           }
         },
       });
     });
   });