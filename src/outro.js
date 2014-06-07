
if (L.auto) {
	L.current = new L();
};

if ( typeof define === "function" && define.amd ) {
		define( "L", [], function() {
			return L;
		});
	}

	return (window.L = L);
}));

