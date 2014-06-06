
(function( window, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		
		module.exports = function( w ) {
			w = w || window;
			if ( !w.document ) {
				throw new Error("Loaded requires a window with a document");
			}
			return factory( w );
		};
	} else {
		factory( window );
	}

// Pass this, window may not be defined yet
}(this, function( window ) {

	