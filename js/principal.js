$("body").swipe( {
	swipeRight:function (event, direction, distance, duration, fingerCount) {
		var rOpen = $('#gris').attr('etat') == 'open';
		var rClose = $('#gris').attr('etat') == 'close';
		var lOpen = $('#gridcontainer').attr('etat') == 'open';
		var lClose = $('#gridcontainer').attr('etat') == 'close';
		if ($('.leftbutton').attr('etat') == 'home') {
			if (rClose && lClose && $(window).width() < 960) {
				showLeft();
			} else if (rOpen && lClose) {
				hideRight();
			}
		} else if ($('.leftbutton').attr('etat') == 'tuto') {
			prev();
		}

		
	},
	swipeLeft:function (event, direction, distance, duration, fingerCount) {
		var rOpen = $('#gris').attr('etat') == 'open';
		var rClose = $('#gris').attr('etat') == 'close';
		var lOpen = $('#gridcontainer').attr('etat') == 'open';
		var lClose = $('#gridcontainer').attr('etat') == 'close';
		if ($('.leftbutton').attr('etat') == 'home') {
			if (rClose && lClose) {
				showRight();
			} else if (lOpen && rClose && $(window).width() < 960) {
				hideLeft();
			}
		} else if ($('.leftbutton').attr('etat') == 'tuto') {
			next();
		}
	},
	triggerOnTouchEnd:false,
	threshold:70
});






function showLeft() {
	$('#gridcontainer').attr('etat', 'open')
	$('#gridcontainer, #compose').transition( { x: '105%' }, 500);
}

function hideLeft() {
	$('#gridcontainer').attr('etat', 'close')
	$('#gridcontainer, #compose').transition( { x: 0 }, 500);
}

function showRight() {
	$('#gris').attr('etat', 'open')
	$('#gris, #compose').transition( { x: '-100%' }, 500);
}

function hideRight() {
	$('#gris').attr('etat', 'close')
	$('#gris, #compose').transition( { x: 0 }, 500);
}



$(document).on('click touchstart', '#compose, .leftbutton.home', function () {
if ($('.leftbutton').attr('etat') == 'home'  && $(window).width() < 960) {
	if ($('#gridcontainer').attr('etat') == 'close' && $('#gris').attr('etat') == 'close') {
		showLeft();	
	} else if ($('#gridcontainer').attr('etat') == 'open') {
		hideLeft();
	}
}
});

$(document).on('click touchstart', '.rightbutton.home', function () {
if ($('.rightbutton').attr('etat') == 'home' && $('.leftbutton').attr('etat') == 'home') {
	if ($('#gris').attr('etat') == 'close'  && $('#gridcontainer').attr('etat') == 'close') {
		showRight();
	} else if ($('#gris').attr('etat') == 'open') {
		hideRight();
	}
}
});








function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			var img =  'url(' +  e.target.result + ')';
			$('#theimg').css({'background-image' : img});
		};

		reader.readAsDataURL(input.files[0]);
	}
}




$(document).on('click touchstart', '.conseilOpen', function(){
	sceneCreate(0);
	$('.scenes[numberId=0]').addClass('selected');
	$('.leftbutton, .rightbutton').removeClass('home');	
	$('.leftbutton, .rightbutton').addClass('conseilr');	
	$('.leftbutton, .rightbutton').attr('etat','conseil');
	$('.scenedisplay').fadeIn();
	$('.inboxtext').html('<span class="small">Conseils:</span> ' + scenes[0].titre);
	
	if ($(window).width() >= 960) {
		$('.sceneselect').slideDown();
	} 
});


$(document).on('click touchstart', '.leftbutton', function (){
if ($('.leftbutton').attr('etat') == 'conseil' && $(window).width() < 960) {
	$('.sceneselect').slideToggle();
} 
});

$(document).on('click touchstart', '.rightbutton', function (){
if ($('.rightbutton').attr('etat') == 'conseil') {
	$('.leftbutton, .rightbutton').addClass('home');	
	$('.leftbutton, .rightbutton').removeClass('conseilr');	
	$('.leftbutton, .rightbutton').attr('etat','home');
	$('.scenedisplay').fadeOut();
	$('.inboxtext').html(lang.AppName);
	$('.sceneselect').slideUp();
}
});


$(document).on('click touchstart', '.scenes', function (){
	
	$('.scenes').removeClass('selected');

    $(this).addClass('selected');
	
	var i = $(this).attr('numberId');
	console.log('number id ',i);
	sceneCreate(i);
	if ($(window).width() < 960) {
		$('.sceneselect').slideToggle();
	} 
	
	$('.scenedisplay').scrollTop(0);

	$('.inboxtext').html('<span class="small">' + lang.conseils + '</span> ' + scenes[i].titre);
});

function sceneCreate(i) {
	
$('.scenedisplay').html("<div class='scene' id='sceneSection_" + i + "'>" +
	"<div class='scene-section' >" +  
		"<h3>" + lang.mode + "</h3>" +
		"<div class='scene-triange-top'></div>" +
		"<div class='scene-triange-bottom'></div>" +
		scenes[i].modeAuto + "<br><br>" +
	"</div>" + 
	"<div class='scene-section' >" +  
		"<h3>" + lang.rM + "</h3>" +
		"<div class='scene-triange-top'></div>" +
		"<div class='scene-triange-bottom'></div>" +
		"<strong>" + lang.iso + "</strong>" + scenes[i].iso + "<br><br>" +
		"<strong>" + lang.vdo + "</strong>" + scenes[i].shutter + "<br><br>" +
		"<strong>" + lang.ouverture  + "</strong>" + scenes[i].apeture + "<br><br>" +
		"<strong>" + lang.explication + "</strong><br>" + scenes[i].explication + "<br>" +
	"</div>" +
	"<div class='scene-section'>" + 
		"<h3>" + lang.equip + "</h3>" +
		"<div class='scene-triange-top'></div>" +
		"<div class='scene-triange-bottom'></div>" +
		scenes[i].equipement +
	"</div>" +
	"<div class='scene-section'>" + 
		"<h3>" + lang.tips + "</h3>" +
		"<div class='scene-triange-top'></div>" +
		"<div class='scene-triange-bottom'></div>" +
		scenes[i].conseils +
	"</div>" +
"</div>");	
}


$(document).ready(function() {
if (localStorage)	{
	if (localStorage.getItem('tutoId2') > 0) {			
			var id = parseInt(localStorage.getItem('tutoId2'));
			var newId = localStorage.getItem('tutoId2');
	} else {
			window.localStorage.setItem('tutoId2','0');
			var newId = localStorage.getItem('tutoId2');
			var id = parseInt(localStorage.getItem('tutoId2')) -1;
			console.log('new localstorage');	
	}
}

	console.log('first id check', id);
	
	if (newId == null) {
		console.log('undefined comfirmed');	
		newId = 0;
		id = 0;
	}
	
	grisLoad(newId);
	
	setTimeout(function() { nextPage(id); },0);
	setTimeout(function() { newPageload(); },0);
	
	
});





$(document).on('click touchstart', "#tutonav", function () {
	$('#tutomenu').transition({y: 175});
});

$(document).on('click touchstart', "#actionlist", function () {
	$('#tutomenu').transition({y: 0});
});

$(document).on('click touchstart', ".leftbutton", function () {
if ($('.leftbutton').attr('etat') == 'tuto') {
	for (var i=0; i<38; i++) {
		if (tutos[i].sectionType == "Title") { ''
		} else {
			var html = $('#tutolist').html();
			var tutoClass = '#tutolist_' + i;
			$('#tutolist').html(html + 
			'<div id="tutolist_' + i + '" class="tutolist-item" number="' + i + '">' +  
				'<a href="#"><div class="tuto" number="' + i + '">' +
            		'<div class="titre">' + tutos[i].sstitre  + '</div>' +
                	'<div class="phrase">' + tutos[i].titre + '</div>' +
           		'</a></div>' + 
			'</div>' );
		}
		
	}
	
	$('#tutolist').addClass('show');
}
});

$(document).on('click touchstart', ".tuto", function(){

	console.log('click');
	
	var id = $(this).attr('number') - 1;
	
	$('#tutolist').removeClass('show');
	nextPageunload();
	
	setTimeout(function() { nextPage(id); },1000);
	setTimeout(function() { newPageload(); },1000);
});

 

$(document).on('click touchstart', ".start", function () {
	$('#tutoframe').css({'display':'block'});
	$('.leftbutton, .rightbutton').removeClass('home');	
	$('.leftbutton, .rightbutton').addClass('conseilr');	
	$('.leftbutton, .rightbutton').attr('etat','tuto');
	$('.inboxtext').html('<span class="tutoS">Tutoriels</span>');
	
	setTimeout(function() { $('#tutoframe').transition({opacity: '1'}, 1000); },200);
});

$(document).on('click touchstart', ".rightbutton", function () {
if ($('.leftbutton').attr('etat') == 'tuto') {
	$('#tutoframe').transition({opacity: '0'}, 1600);
	$('.inboxtext').html(lang.AppName);
	$('.leftbutton, .rightbutton').attr('etat', 'home');
	$('.leftbutton, .rightbutton').removeClass('conseilr');	
	$('.leftbutton, .rightbutton').addClass('home');
	setTimeout(function() { 
		$('#tutoframe').hide(); 
		if ($(window).width() < 960) {
			$('.tutolist-item').remove(); 
		}
		$('#tutolist').css({'display':'none'});
	},1800);
}
});

$(document).on('click touchstart', '.nextBtn', function () {
	if ($(this).attr('i') == 37) {
		if ($('.leftbutton').attr('etat') == 'tuto') {
			$('#tutoframe').transition({opacity: '0'}, 1600);
			$('.inboxtext').html(lang.AppName);
			$('.leftbutton, .rightbutton').attr('etat', 'home');
			$('.leftbutton, .rightbutton').removeClass('conseilr');	
			$('.leftbutton, .rightbutton').addClass('home');
			setTimeout(function() { $('#tutoframe').hide(); $('.tutolist-item').remove(); $('#tutolist').css({'display':'none'});},1800);
		}
	} else {
		next();
	}
});

function prev() {
	var id = parseInt($('.nextBtn').attr('i')) -2;
	setTimeout(function() { nextPageunload(); },0);
	setTimeout(function() { nextPage(id); },1200);
	setTimeout(function() { newPageload(); },1400);
}

function next() {
	var id = $('.nextBtn').attr('i');
	
	console.log('first id check', id);
	
	setTimeout(function() { nextPageunload(); },0);
	setTimeout(function() { nextPage(id); },1200);
	setTimeout(function() { newPageload(); },1400);
}

function nextPageunload() {
	$('.tutocontent').transition({y: '-60px', opacity: '0'}, 1200);
	$('#maintitle').transition({x: '-60px', opacity: '0'}, 1200);
	$('.nextBtn').transition({y: '60px', opacity: '0'}, 1200);
}


function nextPage(id) {
	var newId =  parseInt(id) + 1;
	
	if (localStorage) {
		localStorage.setItem('tutoId2', id);
	}
	
	console.log('new page id', id);
	
	if (tutos[newId].sectionType == "Title") {
		if ($('.leftbutton').attr('etat') == 'tuto') {
			$('.inboxtext').html('<span class="tutoS">Nouvelle section</span>');
		}
		$('.alexandre').addClass('hide');
		
		$('.tutocontent').html(
			'<div class="bigtitle">' +
				tutos[newId].titre +
			'</div>'
		);
		$('.next').attr('i', newId);
		
		if (id == 0) {
			$('.nextBtn').html(lang.commencer);
		} else if (newId == 37) {
			$('.nextBtn').html(lang.fermer);
		}
	
	} else {
		if ($('.leftbutton').attr('etat') == 'tuto') {
			$('.inboxtext').html('<span class="tutoS">' + tutos[newId].titre + '</span>');
		}
		$('.alexandre').removeClass('hide');
		$('.linkAlex').attr('href', tutos[newId].lien);
		
		$('.tutocontent').html('<strong>' + tutos[newId].sstitre + '</strong><br><br>' + tutos[newId].content);
		if (newId == 37) {
			$('.nextBtn').html(lang.fermer);
		} else {
			$('.nextBtn').html(lang.suivant);
		}
		
		$('.next').attr('i', newId);
		$('.tutopadding').scrollTop(0);
	}
	
	grisLoad(newId);
}


function newPageload() {
	$('.tutocontent').transition({y: 0, opacity: 1}, 1200);
	$('#maintitle').transition({x: 0, opacity: 1}, 1200);
	$('.nextBtn').transition({y: 0, opacity: 1}, 1200);
}

function grisLoad(newId) {
	
		console.log(newId);
	
		$('.tutocontentGris').html(
			'<div class="bigtitle bigTitleGris">' +
				tutos[newId].titre +
			'</div>'
		);
		
		$('.ssTitreGris').html(
				'<div>' + truncate(tutos[newId].content, 20, '...') + '</div>'
		);
		
		if (newId == 0) {
			$('.start').html(lang.commencer);
		} else if (newId == 37) {
			$('.start').html(lang.terminer);
		} else {
			$('.start').html(lang.rl);
		}
}


function truncate (text, limit, append) {
    if (typeof text !== 'string')
        return '';
    if (typeof append == 'undefined')
        append = '...';
    var parts = text.split(' ');
    if (parts.length > limit) {
        for (var i = parts.length - 1; i > -1; --i) {
            if (i+1 > limit) {
                parts.length = i;
            }
        }
        parts.push(append);
    }
    return parts.join(' ');
}

$('.tutopadding').scroll(function(){
	console.log('scrolling');
	if($('.tutocontent').offset().top > -180) {
		$('.alexandre').removeClass('hide');
	} else {
		$('.alexandre').addClass('hide');
	}	
});


$(document).on('click touchstart', '#chose', function(){
	$('.cropsection').transition({x: '-60px'});
});

$(document).on('click touchstart', '#crop', function(){
	$('.cropsection').transition({x: 0});
});




$(function () {
	$('#theimg').change(function () {
		console.log('face detection is working!');

		var imgWidth = $('#theimg').width();
		var imgHeight = $('#theimg').height();

		var $this = $(this);


		var coords = $('#imgdisplay img').faceDetection();


		for (var i = 0; i < coords.length; i++) {

			var classId = "'." + "face" + i + "'";

			$('<div>', {
				'class':'face' + ' ' + 'face' + i,
				'css': {
					'position':	'absolute',
					'left':		coords[i].positionX + 'px',
					'top':		coords[i].positionY + 'px',
					'width': 	coords[i].width + 'px',
					'height': 	coords[i].height + 'px'
				},
				'i' : i

			})
				.appendTo('#imgdisplay');

			$('<div>', {
				'class':'facehidden fh' + i,
				'css': {
					'position':	'absolute',
					'left':		coords[i].positionX + 'px',
					'top':		coords[i].positionY + 'px',
					'width': 	coords[i].width + 'px',
					'height': 	coords[i].height + 'px',
					'display':  'block',
					'visibility':'hidden'
				},
				'i' : i
			})
				.appendTo('#imgdisplay');

			console.log((imgHeight / 2));

			if ((imgHeight / 2) > coords[i].y) {
				$('.face' + i).css( {
					'border':'2px solid #00ff00'
				});
			} else {
				$('.face' + i).css( {
					'border':'2px solid #ff0000'
				});
			}


			console.log(coords[i].positionX, coords[i].positionY, coords[i].width, coords[i].height, coords[i].confidence, coords[i].x, coords[i].y, coords[i]);
		}

		faces();

	});

	return false

});


$(document).ready(function (e) {
	imgresize();
	imglayer();
});

$(window).resize(function () {
	imgresize();
	imglayer();
	//faces();

});

function faces() {

	for (i = 0; i< 30; i++) {
		var imgWidth = $('#theimg').width();
		var imgHeight = $('#theimg').height();

		var imgWidthFull = $('#theimgfull').width();
		var imgHeightFull = $('#theimgfull').height();

		var proportionX = (imgWidth / imgWidthFull);
		var proportionY = (imgHeight / imgHeightFull);

		console.log('Proportion', proportionX, proportionY);

		var fh = '.fh' + i

			var widthX = Math.round($(fh).width() * proportionX);
		var heightY = Math.round($(fh).height() * proportionY);
		var leftX = Math.round($(fh).offset().left);
		var topY = Math.round($(fh).offset().top);
		var leftP = leftX * proportionX;
		var topP = topY * proportionY;


		console.log(leftP, topP, leftX, topY);

		var face = '.face' + i

			$(face).width(widthX);
		$(face).height(heightY);
		$(face).css( {
			'left': leftP
		});
		$(face).css( {
			'top': topP
		});
	}

}



function imgresize() {
	var imgW = $('#theimg').width();
	var imgH = $('#theimg').height();
	var wW = $(window).width();
	var wH = $(window).height();
	var imgW2 = wW - 80;

	console.log('imgresizing');
	
	$('.imgLayer.l2').height(wH);
	

}

function imglayer() {
	var imgW = $('#theimg').innerWidth();
	var imgH = $('#theimg').innerHeight();

	$('.imgLayer.l2, #webcam').width(imgW);
	$('.imgLayer.l2, #webcam').height(imgH);
	
	var pos = 0, ctx = null, saveCB, image = [];

	console.log(imgW, imgH);
}



var imgW = $('#theimg').innerWidth();
	var imgH = $('#theimg').innerHeight();
	
	$(function() {

	var pos = 0, ctx = null, saveCB, image = [];

	var canvas = document.createElement("canvas");
	canvas.setAttribute('width', 320);
	canvas.setAttribute('height', 240);
	
	if (canvas.toDataURL) {

		ctx = canvas.getContext("2d");
		
		image = ctx.getImageData(0, 0, 320, 240);
	
		saveCB = function(data) {
			
			var col = data.split(";");
			var img = image;

			for(var i = 0; i < 320; i++) {
				var tmp = parseInt(col[i]);
				img.data[pos + 0] = (tmp >> 16) & 0xff;
				img.data[pos + 1] = (tmp >> 8) & 0xff;
				img.data[pos + 2] = tmp & 0xff;
				img.data[pos + 3] = 0xff;
				pos+= 4;
			}

			if (pos >= 4 * 320 * 240) {
				ctx.putImageData(img, 0, 0);
				$("#imgDownload").attr('href', canvas.toDataURL("image/jpg"));
				$(".imgLayer img").attr('src', canvas.toDataURL("image/jpg"));
				//$.post("/upload.php", {type: "data", image: canvas.toDataURL("image/png")});
				pos = 0;
			}
		};

	} else {

		saveCB = function(data) {
			image.push(data);
			
			pos+= 4 * 320;
			
			if (pos >= 4 * 320 * 240) {
				$("#imgDownload").attr('href', image.push(data));
				$(".imgLayer img").attr('src', image.push(data));
				//$.post("/upload.php", {type: "pixel", image: image.join('|')});
				pos = 0;
			}
		};
	}

	$("#webcam").webcam({

		width: imgW ,
		height: imgH ,
		mode: "callback",
		swffile: "jQuery-webcam-master/jscam_canvas_only.swf",

		onSave: saveCB,

		onCapture: function () {
			webcam.save();
			$('.imgD ').show();
			$('.nBtn').hide();
		},
		debug: function (type, string) {
			console.log(type + ": " + string);
		},
		onLoad: function () {
			$('.prendreP').show();	
			$('.p p').html(lang.nTip);
		}
	});

});


	
	
	$(document).on('click touchstart', '.prendreP', function(){
				webcam.capture();
				console.log('image captured');
				
			});
			
	$(document).on('click touchstart', '.imgD button', function(){
			
			$('.imgD ').hide();
			$('.nBtn').show();
			$(".imgLayer img").attr('src', 'img/169.png');
	});
	



if (localStorage) {
	$('.tuto').click(function (){
		var key = $(this).attr('id');	
	
		localStorage['tutoId2'] = key;
	
		console.log(localStorage['tutoId2']);
	});
	
	$('#viewlast').click(function() {
	
			$('.tuto-full').slideDown(750);
			$('#tuto-big').show();
	
			var key = localStorage['tutoId2'];
			var idtoshownb = parseInt(key) - 1;
			var windowsW = $(window).width();
			var showI = '-' + (idtoshownb * windowsW) + 'px';
			console.log(showI);
			$('#tuto-big').transition( {
				x: showI
			}, 0);
	
   });
} 


$(document).ready(function () {
	closeStep1()
});

function closeStep1() {
	
	
	var html = '';
	for (i=0; i < layers.length; i++) {
		var html = html + "<li class='sMenuli' data-id='" + i + "'>" + layers[i].titre + "</li>";
		$('.sMenu').html(html);
	}
	$('.sMenu').html($('.sMenu').html() + '<div class="ul"></div>');
	
	$('#gridcontainer h2[data-id=1] img').fadeIn();
	
	setTimeout(function () { $('.step-cont-2').slideDown();}, 500);
}

$(document).on('click', '.ul li', function () {
	var id = $(this).attr('data-id');
	var l = $(this).attr('data-layer');
	
	var img = 'url(img/calque_fini/' + layers[l].array[id].url + ')';
	
	$('.imgLayer').css({'background-image' : img});
	
	$('#gridcontainer h2[data-id=2] img').fadeIn();
	
	$('.change').attr('data-layer', l);
	$('.change').attr('data-id', id);
	
	$('.change').val(layers[l].array[id].start[0]);
	$('.change').attr('min', layers[l].array[id].start[0]);
	$('.change').attr('max', layers[l].array[id].end[0]);
	
	$('.step-cont-2').slideUp();
	$('.step-cont-3').slideDown();
	
});

$(document).on('click touchstart', '.gauche', function () {
	
	
	$('.imgLayer').addClass('rotate');
	
	$(this).addClass('of1');
	$('.droite').removeClass('of2');
	
	$('#gridcontainer h2[data-id=3] img').fadeIn();
	
	$('.step-cont-3').slideUp();
	$('.step-cont-4').slideDown();
	
});

$(document).on('click touchstart', '.droite', function () {
	
	$('.imgLayer').removeClass('rotate');
	
	$(this).addClass('of2');
	$('.gauche').removeClass('of1');
	
	$('#gridcontainer h2[data-id=3] img').fadeIn();
	
	$('.step-cont-3').slideUp();
	$('.step-cont-4').slideDown();
	
	setTimeout(function () {$('#gridcontainer').scrollTop(300); }, 1000);
	
});

$(document).on('click', '.prendreP', function () {
	$('.leftbutton').click();
	$('#webcam').show();
});

$(document).on('change', '.change', function () {
	$('#gridcontainer h2[data-id=4] img').fadeIn();
});


$(document).on('click', '.choseP', function () {
	$('.imgSelect').click();
	$('.leftbutton').click();
	$('#webcam').hide();
});







$(document).on('click', '.sMenuli', function () {
	$(this).addClass('s');	
	var id = $(this).attr('data-id');
	
	$('.sMenuli').each(function(index, element) {
        if ($(this).hasClass('s') == 0) {
			$(this).slideUp();
			$(this).remove();
		}
    });
	
	var html = '';
	for (i=0; i < layers[id].array.length; i++) {
		var html = html + '<li data-layer="' + id + '" data-id="' + i + '" style="background-image: url(img/calque_fini/' + layers[id].array[i].url  + ');">' + layers[id].array[i].titre + '</li>';
		$('.ul').html(html);
	}
	
});

$(document).on('click', '.s', function () {
	$(this).removeClass('s');
	var id = $(this).attr('data-id');	
	
	var html = '';
	for (i=0; i < layers.length; i++) {
		var html = html + "<li class='sMenuli' data-id='" + i + "' >" + layers[i].titre + "</li>";
		$('.sMenu').html(html);
	}
	$('.sMenu').html($('.sMenu').html() + '<div class="ul"></div>');
	
});

$(document).on('click', '#gridcontainer h2', function(){
	$('.step-container').slideUp();
	var id = $(this).attr('data-id');
	$('.step-cont-' + id).slideDown();	
});





$('.change').change(function(){
	var l = $(this).attr('data-layer');
	var id = $(this).attr('data-id');
	
	var sS = parseInt(layers[l].array[id].start[0]);
	var hS = parseInt(layers[l].array[id].start[1]);
	var wS = parseInt(layers[l].array[id].start[2]);
	var sE = parseInt(layers[l].array[id].end[0]);
	var hE = parseInt(layers[l].array[id].end[1]);
	var wE = parseInt(layers[l].array[id].end[2]);
	
	var x = parseInt($(this).val());
	var y = (sE - sS);
	var z = ((x - sS) * 100) / y;
	
	//var h = hS + ((hE + ( hS / 100)) * (z * 0.01));
	var h = hS + (((hE - hS)) * (z / 100));
	var w = wS + (((wE - wS)) * (z / 100));
	
		
	var bgScale = x + '% auto';
	
	$('.imgLayer').css({
		'background-size' : bgScale,	
		'background-position' : h + '% ' + w + '%'
	});
	
	console.log(bgScale, w, h);
});





$(document).ready(function(e) {
	
	if ($(window).width() > 960) {
    	resizeContent();
		
		$('.scene').click(function (e) {
			e.preventDefault();
			$('.sceneselect').slideDown();
	});
	}
});



$(window).resize(function(){
	if ($(window).width() > 960) {
		resizeContent();
		
		$('.scene').click(function (e) {
			e.preventDefault();
			$('.sceneselect').slideDown();
		});
	}
});

function resizeContent() {
	
	$('.start').click(function () {
		setTimeout(function () {$('.leftbutton').click(); }, 1000);
	});
	
	
}





