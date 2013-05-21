function XTweenMode()
{
    this.name = "XTweenMode"
    this.error_callback;

    this.instanc;

    this.ele;
    this.params;
    this.duration;
    this.type = XTweenMotionType.TIME;

    this.doneCallback;
    this.tickCallback;

    this.timeout;
    this.interval;

    this.delay = 0;
    this.core_interval = 10;
    this.motion_type = XTweenMotionType.TIME;

    this.temp = {};
}

XTweenMode.getInstance = 
    function($ele, $params, $duration, $type, $doneCallback, $extParams, $p){
        var mtype = XTweenMotionType.TIME;
        if( $extParams && $extParams.motion_type ) mtype = $extParams.motion_type;

        var model = new (window[ mtype ])($ele, $params, $duration, $type, $doneCallback, $extParams, $p);

        return model;
    };

XTweenMode.prototype =
{
    init:
        function(){
            var p = this;
            if( p.extParams ) for( var k in p.extParams ) p[k] = p.extParams[k];

            p.ele = id_f( p.ele );
            p.duration = parseFloat( p.duration ) ||  0;
            p.delay = ( parseFloat( p.delay ) || 0 ) * 1000;

            p.ele.TWEEN_INS = p.ele.TWEEN_INS || [];
            p.ele.TWEEN_INS.push( p.instance );
            if( !p.ele.TWEEN_ID ) p.ele.TWEEN_ID = XTween.INS_COUNT++;
            XTween.TWEEN_INS_ELE[ p.ele.TWEEN_ID ] = p.ele;
            
            return p;
        }

    , invoke: 
        function( $attr, $callback ){
        }

    , init_data:
        function(){
        }

    , maxValue: 
        function(){
            var ls = [];
            if( !this.data ) this.init_data();
            for( var k in this.data ){
                ls.push( this.data[k].begin );
                ls.push( this.data[k].end );
            }
            return Math.max.apply(null, ls);
        }

};

