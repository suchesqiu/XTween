var compressor = require('node-minify');
var fs = require('fs');

var list=[], source="src";
var output_path = 'pub/xtween.js';
var output_compress_path = 'pub/xtween.min.js';

recursive_compress( source, list, fs );

//XTween.log( list.join( "\n\n" ) );

fs.writeFileSync( output_path, list.join("\n") ); 
new compressor.minify({
    type: 'yui-js',
    fileIn: output_path,
    fileOut: output_compress_path,
    callback: function(err){
        XTween.log('compress: ' + err);
    }
});


function recursive_compress( $sourceRoot, $list, $fs ){

    if( $fs.existsSync( $sourceRoot ) ){
        //XTween.log('source exists');
    }else{
        /*XTween.log('source no exists');
        XTween.log( $sourceRoot );*/
        return;
    }

    var fl = $fs.readdirSync( $sourceRoot );

    for( var i = 0, j = fl.length; i < j; i++ ){
        var cspath = [$sourceRoot, fl[i]].join('/');

        var fstat = $fs.statSync( cspath )  

        if( fstat.isDirectory() ){
            /*XTween.log('directory');*/
        }else if( fstat.isFile ){
            /*XTween.log('file');*/
        }
        /*XTween.log( i + ': ' + cspath );
        XTween.log( i + ': ' + copath );
        XTween.log("");*/

        if( fstat.isDirectory() ){
            recursive_compress( cspath, $list, $fs );
        }else if( fstat.isFile() ){
            if( /\.js$/i.test( cspath ) ){
                $list.push( $fs.readFileSync( cspath ) );
            }
        }

    }


}

