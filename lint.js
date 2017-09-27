function checkHTMLFile(filename) {
    fs.readFile( filename, 'utf8', function( err, html ) {
        if ( err )
            throw err;

        html5Lint( html, function( err, results ) {
            results.messages.forEach( function( msg ) {
                var type = msg.type, // error or warning
                    message = msg.message;

                console.log( "HTML5 Lint [%s]: %s", type, message );
            });
        });
    });
}

const fs = require( 'fs' ),
    html5Lint = require( 'html5-lint' );

checkHTMLFile('index.html');
checkHTMLFile('pages/projects.html');
checkHTMLFile('pages/finditory.html');
checkHTMLFile('pages/follow.html');
checkHTMLFile('pages/gluon.html');
checkHTMLFile('pages/pers_tourist.html');
checkHTMLFile('pages/wheel.html');

