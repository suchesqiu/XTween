;void function(){
    function TweenAlg(){

    }

    //t: current time, b: beginning value, c: change In value, d: duration
    TweenAlg.prototype.linear = 
        function (t, b, c, d) {
            return(((c * t) / d) + b);
        };

    TweenAlg.prototype.easeInQuad = 
        function (t, b, c, d) {
            return(((c * ((t = t / d))) * t) + b);
        };

    TweenAlg.prototype.easeOutQuad = 
        function (t, b, c, d) {
            return((((-c) * ((t = t / d))) * (t - 2)) + b);
        };

    TweenAlg.prototype.easeInOutQuad =
        function (t, b, c, d) {
            if (((t = t / (d / 2))) < 1) {
                return((((c / 2) * t) * t) + b);
            }
            return((((-c) / 2) * (((--t) * (t - 2)) - 1)) + b);
        };

    TweenAlg.prototype.easeInCubic =
        function (t, b, c, d) {
            return((((c * ((t = t / d))) * t) * t) + b);
        };

    TweenAlg.prototype.easeOutCubic =
        function (t, b, c, d) {
            return((c * (((((t = (t / d) - 1)) * t) * t) + 1)) + b);
        };

    TweenAlg.prototype.easeInOutCubic =
        function (t, b, c, d) {
            if (((t = t / (d / 2))) < 1) {
                return(((((c / 2) * t) * t) * t) + b);
            }
            return(((c / 2) * (((((t = t - 2)) * t) * t) + 2)) + b);
        };

    TweenAlg.prototype.easeInQuart =
        function (t, b, c, d) {
            return(((((c * ((t = t / d))) * t) * t) * t) + b);
        };

    TweenAlg.prototype.easeOutQuart =
        function (t, b, c, d) {
            return(((-c) * ((((((t = (t / d) - 1)) * t) * t) * t) - 1)) + b);
        };

    TweenAlg.prototype.easeInOutQuart =
        function (t, b, c, d) {
            if (((t = t / (d / 2))) < 1) {
                return((((((c / 2) * t) * t) * t) * t) + b);
            }
            return((((-c) / 2) * ((((((t = t - 2)) * t) * t) * t) - 2)) + b);
        };

    TweenAlg.prototype.easeInQuint =
        function (t, b, c, d) {
            return((((((c * ((t = t / d))) * t) * t) * t) * t) + b);
        };

    TweenAlg.prototype.easeOutQuint =
        function (t, b, c, d) {
            return((c * (((((((t = (t / d) - 1)) * t) * t) * t) * t) + 1)) + b);
        };

    TweenAlg.prototype.easeInOutQuint =
        function (t, b, c, d) {
            if (((t = t / (d / 2))) < 1) {
                return(((((((c / 2) * t) * t) * t) * t) * t) + b);
            }
            return(((c / 2) * (((((((t = t - 2)) * t) * t) * t) * t) + 2)) + b);
        };

    TweenAlg.prototype.easeInSine =
        function (t, b, c, d) {
            return((((-c) * Math.cos((t / d) * (Math.PI/2))) + c) + b);
        };

    TweenAlg.prototype.easeOutSine =
        function (t, b, c, d) {
            return((c * Math.sin((t / d) * (Math.PI/2))) + b);
        };

    TweenAlg.prototype.easeInOutSine =
        function (t, b, c, d) {
            return((((-c) / 2) * (Math.cos((Math.PI * t) / d) - 1)) + b);
        };

    TweenAlg.prototype.easeInExpo =
        function (t, b, c, d) {
            return(((t == 0) ? (b) : ((c * Math.pow(2, 10 * ((t / d) - 1))) + b)));
        };

    TweenAlg.prototype.easeOutExpo =
        function (t, b, c, d) {
            return(((t == d) ? (b + c) : ((c * ((-Math.pow(2, (-10 * t) / d)) + 1)) + b)));
        };

    TweenAlg.prototype.easeInOutExpo =
        function (t, b, c, d) {
            if (t == 0) {
                return(b);
            }
            if (t == d) {
                return(b + c);
            }
            if (((t = t / (d / 2))) < 1) {
                return(((c / 2) * Math.pow(2, 10 * (t - 1))) + b);
            }
            return(((c / 2) * ((-Math.pow(2, -10 * (--t))) + 2)) + b);
        };

    TweenAlg.prototype.easeInCirc =
        function (t, b, c, d) {
            return(((-c) * (Math.sqrt(1 - (((t = t / d)) * t)) - 1)) + b);
        };

    TweenAlg.prototype.easeOutCirc =
        function (t, b, c, d) {
            return((c * Math.sqrt(1 - (((t = (t / d) - 1)) * t))) + b);
        };

    TweenAlg.prototype.easeInOutCirc =
        function (t, b, c, d) {
            if (((t = t / (d / 2))) < 1) {
                return((((-c) / 2) * (Math.sqrt(1 - (t * t)) - 1)) + b);
            }
            return(((c / 2) * (Math.sqrt(1 - (((t = t - 2)) * t)) + 1)) + b);
        };

    TweenAlg.prototype.easeInElastic =
        function (t, b, c, d, a, p) {
            if( p == undefined ) p = 0;
            if( a == undefined ) a = c;

            if (t == 0) {
                return(b);
            }
            if (((t = t / d)) == 1) {
                return(b + c);
            }
            if (!p) {
                p = d * 0.3;
            }
            if (a < Math.abs(c)) {
                a = c;
                var s = (p / 4);
            } else {
                var s = ((p / (Math.PI*2)) * Math.asin(c / a));
            }
            return((-((a * Math.pow(2, 10 * ((t = t - 1)))) * Math.sin((((t * d) - s) * (Math.PI*2)) / p))) + b);
        };

    TweenAlg.prototype.easeOutElastic =
        function (t, b, c, d, a, p) {
            if( p == undefined ) p = 0;
            if( a == undefined ) a = c;

            if (t == 0) {
                return(b);
            }
            if (((t = t / d)) == 1) {
                return(b + c);
            }
            if (!p) {
                p = d * 0.3;
            }
            if (a < Math.abs(c)) {
                a = c;
                var s = (p / 4);
            } else {
                var s = ((p / (Math.PI*2)) * Math.asin(c / a));
            }
            return((((a * Math.pow(2, -10 * t)) * Math.sin((((t * d) - s) * (Math.PI*2)) / p)) + c) + b);
        };

    TweenAlg.prototype.easeInOutElastic =
        function (t, b, c, d, a, p) {
            if( p == undefined ) p = 0;
            if( a == undefined ) a = c;

            if (t == 0) {
                return(b);
            }
            if (((t = t / (d / 2))) == 2) {
                return(b + c);
            }
            if (!p) {
                p = d * 0.45;
            }
            if (a < Math.abs(c)) {
                a = c;
                var s = (p / 4);
            } else {
                var s = ((p / (Math.PI*2)) * Math.asin(c / a));
            }
            if (t < 1) {
                return((-0.5 * ((a * Math.pow(2, 10 * ((t = t - 1)))) * Math.sin((((t * d) - s) * (Math.PI*2)) / p))) + b);
            }
            return(((((a * Math.pow(2, -10 * ((t = t - 1)))) * Math.sin((((t * d) - s) * (Math.PI*2)) / p)) * 0.5) + c) + b);
        };

    TweenAlg.prototype.easeInBack =
        function (t, b, c, d, s) {
            if (s == undefined) s = 1;
            return c*(t/=d)*t*((s+1)*t - s) + b;        
        };

    TweenAlg.prototype.easeOutBack =
        function (t, b, c, d, s) {
            if (s == undefined) {
                s = 1.70158;
            }
            return((c * (((((t = (t / d) - 1)) * t) * (((s + 1) * t) + s)) + 1)) + b);
        };

    TweenAlg.prototype.easeInOutBack =
        function (t, b, c, d, s) {
            if (s == undefined) {
                s = 1.70158;
            }
            if (((t = t / (d / 2))) < 1) {
                return(((c / 2) * ((t * t) * (((((s = s * 1.525)) + 1) * t) - s))) + b);
            }
            return(((c / 2) * (((((t = t - 2)) * t) * (((((s = s * 1.525)) + 1) * t) + s)) + 2)) + b);
        };

    TweenAlg.prototype.easeInBounce =
        function (t, b, c, d) {
            return((c - this.easeOutBounce(d - t, 0, c, d)) + b);
        };

    TweenAlg.prototype.easeOutBounce =
        function (t, b, c, d) {
            if (((t = t / d)) < 1/2.75) {
                return((c * ((7.5625 * t) * t)) + b);
            } else if (t < 2/2.75) {
                return((c * (((7.5625 * ((t = t - 1.5/2.75))) * t) + 0.75)) + b);
            } else if (t < 2.5/2.75) {
                return((c * (((7.5625 * ((t = t - 2.5/2.75))) * t) + 0.9375)) + b);
            } else {
                return((c * (((7.5625 * ((t = t - 2.625/2.75))) * t) + 0.984375)) + b);
            }
        };

    TweenAlg.prototype.easeInOutBounce =
        function (t, b, c, d) {
            if (t < (d / 2)) {
                return((this.easeInBounce(t * 2, 0, c, d) * 0.5) + b);
            }
            return(((this.easeOutBounce((t * 2) - d, 0, c, d) * 0.5) + (c * 0.5)) + b);
        };

    window.TweenAlg = new TweenAlg();
}();

/**
 * 用途
 * @className   XTween
 * @author      x@btbtd.org
 * @version     2013-05-08
 */ 
void function()
{    
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
            XTween.log.apply( null, arguments );
        };

    XTween.debug = true;

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


    window.XTween = XTween;

}( window.TweenAlg );



if( !window.console ) window.console = { log:function(){
    var r = [];
    for( var i = 0, j = arguments.length; i < j; i++ ) r.push( arguments[i] );
    window.status = r.join(' ');
}};

/**
 * 从对象ID取得DOM对象
 * suches@btbtd.org    2013-05-08
 */         
function id_f($id)
{
    return typeof $id==="string"?document.getElementById($id):$id;
}

function tween_style_f( $ele, $attr, $attr_val ){
    var r = '';

    if( $ele ){
        if( $attr && typeof $attr_val != 'undefined' ){
            switch( $attr ){
                case 'opacity': opacity_f( $ele, $attr_val ); break;
                default: $ele.style[ $attr ] = parseInt( $attr_val, 10 ) + 'px'; break;
            }
        }else if( $attr ){
            switch( $attr.toLowerCase() ){
                case 'left': r = parseFloat( $ele.offsetLeft || $ele.style.left || 0 ); break;
                case 'top': r = parseFloat( $ele.offsetTop || $ele.style.top || 0 ); break;
                case 'width': r = parseFloat( $ele.offsetWidth|| $ele.style.width || 0 ); break;
                case 'height': r = parseFloat( $ele.offsetHeight|| $ele.style.height|| 0 ); break;
                case 'opacity': r = opacity_f( $ele ); break;

                default: r = parseFloat( $ele.style[ $attr ] || 0 ); break;
            }
        }
    }

    return r;
}
/**
 * 设置或获取 标签透明度值
 * suches@btbtd.org     2013-05-08
 */
function opacity_f(e_, opacity_i){
    if( typeof opacity_i != 'undefined' ){
        e_.style.opacity = opacity_i/100;
        e_.style.filter = 'alpha(opacity=' + opacity_i + ')';
    }else{
        if( e_.filters && typeof e_.filters.alpha != 'undefined' ) opacity_i = e_.filters.alpha.opacity || 0;
        else opacity_i = (e_.style.opacity||0) * 100;
        opacity_i = parseFloat( opacity_i ) || 0;
    }
    return opacity_i;
}
/**
 * 取某个元素的座标和大小
 * x@btbtd.org      2008-9-9       
 */ 
function ele_pos_f($ele, $detectRelative)
{
    var a = [], t = 0, l = 0
        , w = $ele.offsetWidth, h = $ele.offsetHeight; 

    while( $ele )
    { 
        if( $detectRelative && style_f( $ele, 'position' ) == 'relative' ) { break; }
        t += $ele.offsetTop; l += $ele.offsetLeft;                
        $ele = $ele.offsetParent;
    }     
    return {top:t, left:l, width:w, height:h};
}
/**
 * 取DOM对象的运行时样式
 * x@btbtd.org  2012/7/13
 */ 
function style_f( $ele, $style)
{
    var r = '';
    if( !!window.ActiveXObject ){ r = $ele.currentStyle[$style]; }
    else{ r = getComputedStyle($ele)[$style]; }
    return r;
}



function XTweenElementPosition( $ele ){
    this.ele = $ele;
    this.offset = ele_pos_f( this.ele, true );

    this.temp = {};

    //XTween.log( 'offset: ', Object.stringify( this.offset ) );
}

XTweenElementPosition.prototype = {
    'motionPosition': 
        function( $dataArg, $attr ){
            var p = this, r = { 'isRev': false, 'attr': $attr };

            if( typeof $dataArg == 'string' ){
                $dataArg = parseFloat( $dataArg );
            }

            if( typeof $dataArg != 'object' && isNaN( $dataArg ) ){
                $dataArg = 0;
            }

            if( typeof $dataArg == 'number' ){
                r.begin = tween_style_f( this.ele, $attr );
                r.end = $dataArg;
            }

            if( typeof $dataArg == 'object' ){
                r.begin = parseFloat( $dataArg.begin );
                if( isNaN( r.begin ) ) r.begin = tween_style_f( this.ele, $attr );
                r.end = parseFloat( $dataArg.end );
            }

            if( r.end < 0 ){
                switch( $attr ){
                    case 'width':{
                                    p.temp.left = p.offset.left + p.offset.width;
                                    r.end -= this.offset.width;
                                     break;
                                 }
                                 
                    case 'height':{
                                    p.temp.top = p.offset.top+ p.offset.height;
                                    r.end -= this.offset.height;
                                     break;
                                 }
                }
            }

            //XTween.log( Object.stringify( r ) );
            
            return r;
        }

    , fixNegative:
        function( $val, $attr ){
            var p = this;

            if( $val < 0 ){
                $val = Math.ceil( Math.abs( $val ) );

                switch( $attr ){
                    case 'width':{
                                    var l = p.temp.left - $val; 
                                    tween_style_f( p.ele, 'left', l );
                                    break;
                                 }
                                 
                    case 'height':{
                                    var l = p.temp.top - $val; 
                                    tween_style_f( p.ele, 'top', l );
                                    break;
                                 }
                }
            }
            return $val;
        }
};



window.XTweenMotionType = {
    TIME: 'XTweenTimeModel', VALUE: 'XTweenValueModel'
}



;void function(){

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

    window.XTweenMode = XTweenMode;
}()

;void function( $tween ){
    function XTweenTimeModel($ele, $params, $duration, $type, $doneCallback, $extParams, $p){
        this.constructor = arguments.callee;

        this.name = 'XTweenTimeModel';
        this.ele = $ele;
        this.params = $params;
        this.duration = $duration || 1;
        this.type = $type || 'linear';
        this.doneCallback = $doneCallback;
        this.extParams = $extParams;
        this.instance = $p;

        this.parent = this.constructor.prototype;
    }
    XTweenTimeModel.prototype = new XTweenMode();

    XTweenTimeModel.prototype.invoke = 
        function( $callback ){
            var p = this, data = this.init_data(), done = false;

            var beginTime = new Date().getTime();
            var endTime = beginTime + p.duration * 1000;

            p.interval = 
                setInterval(
                    function(){
                        var tmp = new Date().getTime();

                        if( tmp >= endTime ){
                            tmp = endTime;
                            done = true;
                        }

                        tmp = (tmp - beginTime ) / 1000;

                        for( var attr in data ){
                            var item = data[attr];
                            var cur_val = $tween[ p.type ]( tmp, item.begin, item.end, p.duration );

                            if( item.isRev ) cur_val = item.end - cur_val;
                            var final_val = cur_val += item.plus_val;

                            final_val = p.position_alg.fixNegative( final_val, attr );

                            XTween.log( attr, tmp, cur_val, final_val );
                            if( $callback ) $callback( attr, final_val, cur_val );
                        }


                        if( done ) clearInterval( p.interval );

                    }, p.core_interval
                );
        };

    XTweenTimeModel.prototype.init_data = 
        function(){
            var p = this, data = p.data = {};

            p.position_alg = new XTweenElementPosition( p.ele );

            for( var attr in p.params ){

                data[attr] = p.position_alg.motionPosition( p.params[ attr ], attr );
                if( data[attr].begin === data[attr].end ){ delete data[attr]; continue; }

                if( data[attr].begin > data[attr].end ){
                    var tmp = data[attr].begin;
                        data[attr].begin = data[attr].end;
                        data[attr].end = tmp;
                        data[attr].isRev = true;
                }

                data[attr].plus_val = data[attr].begin;
                data[attr].end = data[attr].end - data[attr].begin;
                data[attr].begin = 0;

            }

            return this.data;
        };


    window.XTweenTimeModel = XTweenTimeModel;

}( window.TweenAlg );


;void function( $tween ){
    function XTweenValueModel($ele, $params, $duration, $type, $doneCallback, $extParams, $p){
        this.constructor = arguments.callee;

        this.ele = $ele;
        this.params = $params;
        this.duration = $duration || 1;
        this.type = $type || 'linear';
        this.doneCallback = $doneCallback;
        this.extParams = $extParams;
        this.instance = $p;

        this.parent = this.constructor.prototype;
    }
    XTweenValueModel.prototype = new XTweenMode();

    XTweenValueModel.prototype.invoke = 
        function( $callback ){
            var p = this, data = this.init_data(), done = false;

            var max = p.maxValue();

            var beginTime = 0;
            var steps = max / p.duration;
            var count = 1;

            p.interval = 
                setInterval(
                    function(){

                        if( count >= steps ){
                            count = steps;
                            done = true;
                        }

                        for( var attr in data ){
                            var item = data[attr];
                            var cur_val = $tween[ p.type ]( count, item.begin, item.end, steps );

                            if( item.isRev ) cur_val = item.end - cur_val;
                            var final_val = cur_val += item.plus_val;

                            final_val = p.position_alg.fixNegative( final_val, attr );

                            XTween.log( attr, count, cur_val, final_val );

                            if( $callback ) $callback( attr, final_val, cur_val);
                        }

                        count++;

                        if( done ) clearInterval( p.interval );

                    }, p.core_interval
                );

        };

    XTweenValueModel.prototype.init_data = 
        function(){
            var p = this, data = this.data = {};

            p.position_alg = new XTweenElementPosition( p.ele );

            for( var attr in p.params ){

                data[attr] = p.position_alg.motionPosition( p.params[ attr ], attr );
                if( data[attr].begin === data[attr].end ){ delete data[attr]; continue; }

                if( data[attr].begin > data[attr].end ){
                    var tmp = data[attr].begin;
                        data[attr].begin = data[attr].end;
                        data[attr].end = tmp;
                        data[attr].isRev = true;
                }

                data[attr].plus_val = data[attr].begin;
                data[attr].end = data[attr].end - data[attr].begin;
                data[attr].begin = 0;
            }

            return this.data;
        };


    window.XTweenValueModel = XTweenValueModel;

}( window.TweenAlg );


;void function(){
    function XTweenView( $model ){
        this.model = $model;
    }

    XTweenView.prototype = 
    {
        init:
            function()
            {
                return this;
            }

        , invoke:
            function(){
                var p = this;
                p.model.invoke(
                    function( $attr, $val ){
                        tween_style_f( p.model.ele, $attr, $val );
                    }
                );
            }

        , error:
            function( $msg )
            {
                if(this.model.error_callback) this.model.error_callback( $msg );
                else alert( $msg );            
            }
    };

    window.XTweenView = XTweenView;
}();
