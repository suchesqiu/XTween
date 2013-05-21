
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

