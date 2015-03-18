﻿kmdjs.config({
    name: "AlloyRenderingEngine",
    baseUrl: "../src",
    classes: [
        { name: "ARE.Bitmap", url: "are/display" },
        { name: "ARE.CircleShape", url: "are/display" },
        { name: "ARE.Container", url: "are/display" },
        { name: "ARE.DisplayObject", url: "are/display" },
        { name: "ARE.DomElement", url: "are/display" },
        { name: "ARE.Particle", url: "are/display" },
        { name: "ARE.ParticleSystem", url: "are/display" },
        { name: "ARE.RectAdjust", url: "are/display" },
        { name: "ARE.RectShape", url: "are/display" },
        { name: "ARE.Shape", url: "are/display" },
        { name: "ARE.Sprite", url: "are/display" },
        { name: "ARE.Stage", url: "are/display" },
        { name: "ARE.Txt", url: "are/display" },
        { name: "ARE.CanvasRenderer", url: "are/renderer" },
        { name: "ARE.WebGLRenderer", url: "are/renderer" },
        { name: "ARE.Dom", url: "are/util" },
        { name: "ARE.FPS", url: "are/util" },
        { name: "ARE.GLMatrix", url: "are/util" },
        { name: "ARE.Keyboard", url: "are/util" },
        { name: "ARE.Loader", url: "are/util" },
        { name: "ARE.Matrix2D", url: "are/util" },
        { name: "ARE.Matrix3D", url: "are/util" },
        { name: "ARE.Observable", url: "are/util" },
        { name: "ARE.RAF", url: "are/util" },
        { name: "ARE.Transform", url: "are/util" },
        { name: "ARE.TWEEN", url: "are/util" },
        { name: "ARE.UID", url: "are/util" },
        { name: "ARE.Util", url: "are/util" },
        { name: "ARE.Vector2", url: "are/util" },
        { name: "ARE.To", url: "are/util" },
    ]
});

define("Main", ["ARE"], {
    ctor: function () {
        var ld = new Loader(), bmp;
        var stage = new Stage("#ourCanvas", localStorage.webgl == "1");
        ld.loadRes([
            { id: "atLogo", src: "../asset/img/atLogo.png" }
        ]);
        ld.complete(function () {
            var bmp = new Bitmap(ld.get("atLogo"));
            bmp.originX = 0.5;
            bmp.originY = 0.5;
            bmp.scaleX = bmp.scaleY = 0.5;
            bmp.rotation = 0;
            bmp.x = stage.width / 2;
            bmp.y = -100;

            stage.add(bmp);

            To.get(bmp)
               .to()
               .y(240, 2000, To.elasticInOut)
               .rotation(240, 2000, To.elasticInOut)
               .end(function () {
                   //console.log(" task one has completed!")
               })
               .wait(500)
               .to()
               .rotation(0, 1400, To.elasticInOut)
               .end(function () {
                   //console.log(" task two has completed!")
               })
               .wait(500)
               .to()
               .scaleX(1, 1400, To.elasticInOut)
               .scaleY(1, 1400, To.elasticInOut)
               .end(function () {
                   //console.log(" task three has completed!")
               })
               .start();
        });

    }
})
