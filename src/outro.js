if ( typeof define === "function" && define.amd ) {
		define( "L", [], function() {
			return L;
		});
	}

	return (window.L = L);
}));
