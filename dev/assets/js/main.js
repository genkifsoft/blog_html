$(document).ready( ()=>{
    // this will get the full URL at the address bar
    var url = window.location.href; 
    // passes on every "a" tag 
    $("#c-gnav a").each(function() {
        if(url == (this.href)) {
            $(this).closest("li").addClass("is_active");
        }
    });
    
    // slider
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("c-slider__banner");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
})