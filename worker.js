// Listen for messages from the main thread
self.addEventListener("message", function(event) {
    var canvas = event.data.canvas;
    var Sudo = event.data.Sudo;
    var Init = event.data.Init;
    var Draw = event.data.Draw;
    let ctx = canvas.getContext("2d");
    var sudowidth = 425;    
    var sudoheight = 425;

    canvas.style.width = sudowidth + "px";
    canvas.style.height = sudoheight + "px";
    canvas.width = sudowidth *  window.devicePixelRatio;
    canvas.height = sudoheight * window.devicePixelRatio;

    let sudo = new Sudo(canvas.width, canvas.height, canvas);
    Init.call(sudo, seleLevel.value);
    btnUseBuffer_Click();
    Draw.call(sudo);
});