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
                        var cur_val = XTweenAlg[ p.type ]( tmp, item.begin, item.end, p.duration );

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

