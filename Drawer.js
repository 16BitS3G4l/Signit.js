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

        canvas.addEventListener("mousedown", function(MouseEvent) {
            window.drawer_drawing = true;
            window.drawer_ctx.moveTo(MouseEvent.clientX, MouseEvent.clientY);
            window.drawer_ctx.beginPath();
            e.preventDefault();
        });

        canvas.addEventListener("touchend", function(TouchEvent) {
            window.drawer_ctx.stroke();
            window.drawer_drawing = false;
            TouchEvent.preventDefault();
        });

        canvas.addEventListener("mouseup", function(MouseEvent) {
            window.drawer_ctx.stroke();
            window.drawer_drawing = false;
        });

        canvas.addEventListener("mouseleave", function(MouseEvent) {
            window.drawer_drawing = false;
        });

        canvas.addEventListener("touchmove", function(TouchEvent) {
            
            if(window.drawer_drawing) {
                window.drawer_ctx.lineTo(TouchEvent.touches[0].clientX, TouchEvent.touches[0].clientY);
                window.drawer_ctx.stroke();
            }
        });

        canvas.addEventListener("mousemove", function(MouseEvent) {
            if(window.drawer_drawing) {
                window.drawer_ctx.lineTo(MouseEvent.clientX, MouseEvent.clientY);
                window.drawer_ctx.stroke();
            }
        });
        
    }
}