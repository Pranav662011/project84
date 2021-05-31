canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;
car1_x=100;
car1_y=100;
car1_image="car1 (1).png";
car1_width=100;
car1_height=90;
car_x=100;
car_y=100;
car_image="car1.png";
background_image="racing.jpg";



window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        up();
        console.log("up");

    }

    if(keypressed=="40"){
        down();
        console.log("down");
        
    }

    if(keypressed=="37"){
        left();
        console.log("left");
        
    }

    if(keypressed=="39"){
        right();
        console.log("right");


        if(keypress=="65")
        a();
        console.log("right");


        if(keypress=="66")
        b();
        console.log("left");



        if(keypress=="67")
        c();
        console.log("top");

        if(keypress=="68")
        d();
        console.log("down");


    }
}