$(document).ready(function()    {



    // Initial variables for selections
    var designType = "slatWall";					// The item currently being designed in the studio window




        $('#designType').change(function()    
        {	
        	var designType = $( "#designType" ).val();
            console.log('The value is '+designType);
        });


});



function transferEmp(postData)  {
    $.ajax({
        url: url,
        type: 'POST',
        data: postData,
        success: function(msg){
               //alert(msg);
        }
    });

}