class Drawer {

    drawing = false;
    ctx = undefined;

    constructor(canvas) {
        window.drawer_ctx = canvas.getContext("2d");
        this.ctx = drawer_ctx;


        canvas.addEventListener("touchstart", function(TouchEvent) {
            window.drawer_drawing = true;
            window.drawer_ctx.moveTo(TouchEvent.touches[0].clientX, TouchEvent.touches[0].clientY);
            window.drawer_ctx.beginPath();
            TouchEvent.preventDefault();
        });

        canvas.addEventListener("mousedown", function(e) {
            console.log("Mousedown: " + e);
            window.drawer_drawing = true;
            window.drawer_ctx.moveTo(e.clientX, e.clientY);
            window.drawer_ctx.beginPath();
            e.preventDefault();
        });

        canvas.addEventListener("touchend", function(TouchEvent) {
            window.drawer_ctx.stroke();
            window.drawer_drawing = false;
            TouchEvent.preventDefault();
        });

        canvas.addEventListener("mouseup", function(mouseEvt) {
            console.log("Mouseup: " + mouseEvt);
            window.drawer_ctx.stroke();
            window.drawer_drawing = false;
        });

        canvas.addEventListener("mouseleave", function(mouseEvt) {
            console.log("Mouse leave: " + mouseEvt);
            window.drawer_drawing = false;
        });

        canvas.addEventListener("touchmove", function(TouchEvent) {
            
            if(window.drawer_drawing) {
                window.drawer_ctx.lineTo(TouchEvent.touches[0].clientX, TouchEvent.touches[0].clientY);
                window.drawer_ctx.stroke();
            }
        });

        canvas.addEventListener("mousemove", function(mouseEvt) {
            console.log("Mouse move: " + mouseEvt);
            if(window.drawer_drawing) {
                window.drawer_ctx.lineTo(mouseEvt.clientX, mouseEvt.clientY);
                window.drawer_ctx.stroke();
            }
        });
        
    }
}