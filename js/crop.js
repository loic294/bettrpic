
//$( "#theimg" ).draggable({cursor: "move", grid: [ 20,20 ] });



function drawCroppedImage(image, canvas, crop_x, crop_y, crop_width, crop_height) {
    // trim the canvas	
    canvas.width = crop_width;
    canvas.height = crop_height;
	
	console.log(crop_width, crop_height);
    
    // draw the image with offset
    var ctx = document.getElementById('canvas').getContext('2d');
	
	var img = new Image();   // Create new img element
	img.src = image; // Set source path
    ctx.drawImage(img, crop_x,crop_y,crop_width,crop_height, 0,0,crop_width,crop_height);
	
    $('#theimg').show();
	$('canvas').hide();
    
    // output the base64 of the cropped image
    document.getElementById('output').innerHTML = canvas.toDataURL('image/jpeg') + "<br/><a href='" + canvas.toDataURL('image/jpeg') + "'>Download</a>";
	$('#download').html('<a id="downloadlink" href="' + canvas.toDataURL('image/jpeg') + '" download="cropped_img.jpg"></a');
	
	
	
	$('#theimg').attr('src', canvas.toDataURL('image/jpeg') );
	
	console.log(img, canvas, crop_x, crop_y, crop_width, crop_height);

	document.querySelector('#downloadlink').click();
}


$('#crop').click(function (){
	
	/*
	
	var width = $('#theimg').width;
	var height = $('#theimg').height;
	var max_height = 100;
	var max_width= 100;
	*/
	
	var scale = parseFloat($('#theimg').attr('scale'));
	
	var imgWidth = $('#theimgcontainer').width()  * scale;
	var imgHeight = $('#theimgcontainer').height()   * scale;

	var imgWidthFull = $('#theimgfull').width();
	var imgHeightFull = $('#theimgfull').height();

	var proportionX = (imgWidthFull / imgWidth );
	var proportionY = (imgHeightFull / imgHeight );
	
	console.log(proportionX, proportionY);
	
	var image = $('#theimg').attr('src');
	
	
	
	var crop_y = Math.abs($('#theimg').offset().top) * proportionX;
	var crop_x = Math.abs($('#theimg').offset().left) * proportionX;
	
	//var firstCrop_width = ($('#theimg').height() * scale) - imgWidth;
	//var firstcrop_height = ($('#theimg').width() * scale) - imgHeight;
	
	var crop_width = $('#theimg').width() * proportionX - 4;
	var crop_height = $('#theimg').height() * proportionX - 4;

	console.log(crop_y,crop_x);

	console.log(image, document.getElementById('canvas'), crop_x,crop_y,crop_width,crop_height);
	
	drawCroppedImage(image, document.getElementById('canvas'), crop_x,crop_y,crop_width,crop_height);
	
	$('#theimg').transition({ scale: 1}, 0);
	$('#theimg').css({'top':0, 'left':0});
	$('#theimg').attr('scale', '1');
	$('#theimgcontainer').scrollTop(0);
	
});

$('#bigger').click(function(){
	var scale = parseFloat($('#theimg').attr('scale'));
	var upScale = scale +=0.1;
	
	$('#theimg').transition({ scale: '+=0.1'}, 500);
	$('#theimg').attr('scale', upScale);
	var top = $('#theimg').offset().top;
	var left = $('#theimg').offset().left;
	console.log(top,left);
});


$('#smaller').click(function(){
	$('#theimg').transition({ scale: '-=0.1'}, 500);
	var top = $('#theimg').offset().top;
	var left = $('#theimg').offset().left;
	console.log(top,left);
});
