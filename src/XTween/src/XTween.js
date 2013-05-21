/**
 * 用途
 * @className   XTween
 * @author      x@btbtd.org
 * @version     2013-05-08
 */ 
function XTween( $ele, $params, $duration, $type, $doneCallback, $extParams )
{
    this.model = XTweenMode.getInstance( $ele, $params, $duration, $type, $doneCallback, $extParams, this ).init();
    this.view = new XTweenView( this.model ).init();
}

XTween.TWEEN_INS_ELE = {};
XTween.INS_COUNT = 1;

XTween.add =
    function( $ele, $params, $duration, $type, $doneCallback, $extParams )
    {
        return new XTween( $ele, $params, $duration, $type, $doneCallback, $extParams ).init();
    };

XTween.log = 
    function(){
        if( !XTween.debug ) return;
        window.console && console.log( [].slice.apply( arguments ).join(', ') );
    };

XTween.debug = false;

XTween.prototype =
{
    init:
        function()
        {
            var p = this;

            p.model.timeout = 
                setTimeout(
                    function(){
                        if( ! p.model.params ) return;
                        p.invoke();
                    }, p.model.delay
                ); 

            return this;
        }

    , invoke: 
        function(){
            var p = this;
            p.view.invoke();
        }

    , clean: 
        function(){
            var p = this;
            clearTimeout( p.model.timeout );

            clearInterval( p.model.interval );
        }
}


XTween.clean =
    function( $ele ){
        if( $ele.TWEEN_INS && $ele.TWEEN_INS.length ){

            for( var i = 0; i < $ele.TWEEN_INS.length; i++ ){
                $ele.TWEEN_INS[i].clean();
            }
            
            $ele.TWEEN_INS = [];
        }
    };

XTween.cleanAll =
    function( $ele ){

    };
