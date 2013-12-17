/**
 * ...
 * @author  ddennis.dk aka meresukker.dk aka fantastisk.dk
 */
 
define(['pixi' ], function(PIXI ){

//Copy over prototype --------------------------------------------------------------------------------------
    PixiCircle.prototype = Object.create( PIXI.Graphics.prototype );
    PixiCircle.prototype.constructor = PixiCircle;
//---------------------------------------------------------------------------------------

    var radius
    function PixiCircle(radius,color ){
        // Call prototype on super()
        PIXI.Graphics.call (this );

        this.radius = radius	|| 50
        this.color  = color		|| 0xFF0000
        this.beginFill(this.color, 1);
        this.drawCircle(0,0, this.radius)
    }



    PixiCircle.prototype.redraw = function (radius, color) {
        this.clear ()
		this.beginFill(this.color, 1);
        this.drawCircle(0,0, this.radius)
    };

    return PixiCircle


});