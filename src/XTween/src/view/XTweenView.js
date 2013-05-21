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

