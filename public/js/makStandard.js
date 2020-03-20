$(document).ready(function()	{


	// Set the current menu item
	setMenu();

});

function setMenu( )  
{

	$('.navOption').removeClass('currentNav');

	if ( window.location.pathname == "/ourWork" ){ $('#workOption').addClass('currentNav'); }
	if ( window.location.pathname == "/products" ){ $('#productOption').addClass('currentNav'); }
	if ( window.location.pathname == "/services" ){ $('#servicesOption').addClass('currentNav'); }
	if ( window.location.pathname == "/aboutUs" ){ $('#aboutOption').addClass('currentNav'); }
	if ( window.location.pathname == "/contact" ){ $('#contactOption').addClass('currentNav'); }

}
