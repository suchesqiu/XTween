
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


