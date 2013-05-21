
function format_f(str_){var len_ = arguments.length, re_ = null, arg_o = arguments;switch(len_){case 0: return "";case 1: return str_;}for(var i=1, j=0; i<len_; i++, j++){re_ = new RegExp(["\\{", j, "(\\:[a-zA-Z]|)}"].join(""), "g");str_ = str_.replace(re_,function($0, $1){var result_a = [arg_o[i]];switch($1){case ":C":case ":c":result_a.unshift('￥');break;}return result_a.join('');});}return str_;}
/**
 * 获取鼠标座标，值相对于给定element的位置
 */
function mouse_relative_pos_f( $ele, $evt ){
    var pos_obj = ele_pos_f( $ele ), r = {};
    r.left = mouseX( $evt ) - pos_obj.left;
    r.top = mouseY( $evt ) - pos_obj.top;
    return r;
}

/**
 * 获取鼠标位于屏幕X轴绝对位置
 * x@btbtd.org  2012-3-1 
 */ 
function mouseX($evt) 
{
    $evt = $evt || window.event;
    if ($evt.pageX) return $evt.pageX;
    else if ($evt.clientX)
        return $evt.clientX 
                + (document.documentElement.scrollLeft 
                ? document.documentElement.scrollLeft 
                : document.body.scrollLeft);
    else return null;
}
/**
 * 获取鼠标位于屏幕Y轴绝对位置
 * x@btbtd.org  2012-3-1 
 */ 
function mouseY($evt) {
    $evt = $evt || window.event;
    if ($evt.pageY) return $evt.pageY;
    else if ($evt.clientY)
        return $evt.clientY 
                + (document.documentElement.scrollTop 
                ? document.documentElement.scrollTop 
                : document.body.scrollTop);
    else return null;
}
/**
 * 获取或设置 radio 的选中项
 * suches@btbtd.org 2013-05-10
 */
function radio_checked_f( $arg, $val, $box ){
    var ls, r, $box = $box || document;
    if( typeof $arg == 'string' ) ls = $box.getElementsByName( $arg );
    else if( $arg && $arg.length ) ls = $arg;

    for( var i = 0, j = ls.length; i < j; i++ ){
        if( $val == undefined ){ if( ls[i].checked ) { r = ls[i]; break; } }
        else{ if( ls[i].value == $val ){ ls[i].checked = true; r = ls[i]; break; } }
    }

    return r;
}

function get_type_value_f(){
    var chval = W('input[name=motion_type]:checked').val();
    var val = W( 'dd[value_type='+chval+'] input' ).val(); 

    return val;
}

function get_attrs( $ls ){
    if( !($ls && $ls.length) ){
        $ls = W('dl.attr_list > dd');
    }

    var r = {};

    $ls.forEach( function( $e ){
        var p = W($e);
        if( !p.query( 'input[type=checkbox]:checked' ).length ) return;

        var attr = p.query('input[type=checkbox]').val();
        var begin = parseInt( p.query('input[name=begin]').val(), 10 );
        var end = parseInt( p.query('input[name=end]').val(), 10 ) || 0;

        if(isNaN( begin ) ){
            r[attr] = end;
        }else{
            r[attr] = { 'begin': begin, 'end': end };
        }
    });

    return r;
}

function refine_attr( $attr_obj, $attr, $val ){
    if( $attr in $attr_obj ) {
        if( typeof $attr_obj[$attr] != 'object' ){
            $attr_obj[$attr]  = { 'begin': 'auto' }
        }
        $attr_obj[$attr].end = $val;
    }
}
