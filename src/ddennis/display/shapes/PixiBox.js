/**
 * ...
 * @author  ddennis.dk aka meresukker.dk aka fantastisk.dk
 */

define(['pixi' ], function(PIXI ){

//---------------------------------------------------------------------------------------
    PixiBox.prototype = Object.create( PIXI.Graphics.prototype );
    PixiBox.prototype.constructor = PixiBox;
//---------------------------------------------------------------------------------------

    function PixiBox(width, height, color ){
        // call super constructor
        PIXI.Graphics.call (this );
        this.width  = width  || 50;
        this.height = height || 50;
        this.color  = color  || 0xFF0000;
        this.redraw (this.width, this.height , this.color)
    }

    PixiBox.prototype.redraw = function (width, height) {        
        this.clear();
        this.beginFill(this.color, 1);
        this.drawRect(0,0,this.width, this.height)

    };

    return PixiBox;

});