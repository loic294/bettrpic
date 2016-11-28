
$('.open').click(function(){
	showScenes();
});

$('#open').click(function () {
	showTuto();
});

$('.close').click(function () {
	showClose();
});

$(".touch-trigger").swipe( {
	swipeLeft:function (event, direction, distance, duration, fingerCount) {
		showScenes();
	},
	swipeRight:function (event, direction, distance, duration, fingerCount) {
		showTuto();
	},
	triggerOnTouchEnd:false,
	threshold:30
});

$(".scenetouch, #scenecontainer, .scenedisplay, .scene, .scene-section").swipe( {
	swipeLeft:function (event, direction, distance, duration, fingerCount) {
		showTuto();
		console.log('swipe left');
	},
	swipeRight:function (event, direction, distance, duration, fingerCount) {
		showClose();
		console.log('swipe right');
	},
	triggerOnTouchEnd:false,
	threshold:30
});

$("#gris").swipe( {
	swipeLeft:function (event, direction, distance, duration, fingerCount) {
		showClose();
	},
	swipeRight:function (event, direction, distance, duration, fingerCount) {
		showScenes();
	},
	triggerOnTouchEnd:false,
	threshold:30
});


function showScenes() {
	$('#scenecontainer, .touch-trigger, .scenetouch').transition( {
		x:'-100%'
	});
	$(".bgimg, #title,#gris,#gris,#tutocontainer,.phrase").transition( {
		x: 0
	});
	$('.open').transition( {
		opacity: 1
	});
	$('.close, #open').transition( {
		opacity: 0.7
	});
	$(".menu").transition( {
		x: '-224px'
	});
}


function showTuto() {
	$('#scenecontainer').transition({x:'-100%'});

	$("#gris, #tutocontainer, .touch-trigger, .scenetouch").transition( {
		x: '-200%'
	});
	
	$(".phrase").transition( {
		x: '-100px'
	});

	$('#open').transition( {
		opacity: 1
	});
	$('.open').transition( {
		opacity: 0.7
	});
	$(".menu").transition( {
		x: '-384px'
	});
}

function showClose() {
	$("#title,#gris,#tutocontainer,.touch-trigger,.menu,.phrase,#scenecontainer, .scenetouch").transition( {
		x: 0
	});
	
	$('.close').transition( {
		opacity : 1
	});
	$('#open, .open').transition( {
		opacity: 0.7
	});
}




$(document).ready(function () {
	var height = $(window).height() - 130;
	$("#tutocontainer").height(height);
	$("#tutocontainer").css( {
		'overflow-y':'auto'
	});

});
$(window).resize(function () {
	var height = $(window).height() - 170;
	$("#tutocontainer").height(height);
});

$(document).ready(function () {
	var height = $(window).height() - 170;
	$(".scenedisplay").height(height);

});
$(window).resize(function () {
	var height = $(window).height() - 130;
	$(".scenedisplay").height(height);
});





$('#compose').click(function () {
	$('#gridcontainer').show();
	$('#gridcontainer').transition( {
		'perspective': '0px', rotateX: '0deg', scale: '1', y: '-100%'
	}, 500);
	$('#closecompose').transition( {
		x:'-120px'
	});
	$('.step-container').transition( {
		x:'0%'
	});

	$('.step-container .padding .img').css( {
		'border':'solid 1px #ddd', 'height':'52px', 'width':'78px', 'background-color':'#fff'
	});
	$('.layers').hide();
});


$('#closecompose').click(function () {
	$('#gridcontainer').transition( {
		'perspective': '1200px', rotateX: '50deg', scale: '1.4', y: '0', 
	}, 500);
	$('#closecompose').transition( {
		x:'0px'
	});
	$('.step-container').delay(1000).transition( {
		x:'0%'
	});
	$('.step-container .padding .img').delay(1000).css( {
		'border':'solid 1px #ddd', 'height':'52px', 'width':'78px', 'background-color':'#fff'
	});
	$('#gridcontainer .menu').delay(1000).transition( {
		x:'0px'
	});
	$('.step').delay(1000).transition( {
		'opacity': '0.7'
	});
	$('.step1').delay(1000).transition( {
		'opacity': '1'
	});
	$('#gridcontainer').delay(1000).hide();
});

$('#chose').click(function () {
	$('#theimg').show();
	$('.face').remove();
	$('.facehidden').remove();
});


$('.turn').click(function () {
	$('.layers').transition( {
		rotateY: '0deg'
	});
	$(this).transition( {
		rotate: '0deg'
	});
	$('.turn').hide();
	$('.rotate').show();
});

$('.rotate').click(function () {
	$('.layers').transition( {
		rotateY: '180deg'
	});
	$(this).transition( {
		rotate: '270deg'
	});
	$('.rotate').hide();
	$('.turn').show();
});

$('#try').click(function () {
	$('.face').fadeToggle();
});



var autoheight = $(window).height() - 120 + 'px';
$('.step-container').height(autoheight);
var gridheight = $(window).height() - 60;
$('#gridcontainer').height(gridheight);
$(window).resize(function () {
	var autoheight = $(window).height() - 120 + 'px';
	$('.step-container').height(autoheight);
	var gridheight = $(window).height() - 60;
	$('#gridcontainer').height(gridheight);
});




$('#t-2').click(function () {
	$('#toggle-1').slideUp(500);
	$('#toggle-2').slideDown(500);
});
$('#t-1, #chose, #take').click(function () {
	$('#toggle-2').slideUp(500);
	$('#toggle-1').slideDown(500);
});

$('.step-cont-1 .padding .img').click(function () {
	$('.step-container').delay(50).transition( {
		x:'-100%'
	}, 1000);
	$('#gridcontainer .menu').delay(50).transition( {
		x:'-255px'
	}, 1000);
	$('.step').transition( {
		'opacity': '0.7'
	});
	$('.step2').transition( {
		'opacity': '1'
	});
});

$('.step-cont-2 .padding .img').click(function () {
	$('.step-container').delay(50).transition( {
		x:'-200%'
	}, 1000);
	$('#gridcontainer .menu').delay(50).transition( {
		x:'-376px'
	}, 1000);
	$('.step').transition( {
		'opacity': '0.7'
	});
	$('.step3').transition( {
		'opacity': '1'
	});
});

$('.step-cont-3 .padding .img').click(function () {
	$('.step-container').delay(50).transition( {
		x:'-300%'
	}, 1000);
	$('#gridcontainer .menu').delay(50).transition( {
		x:'-508px'
	}, 1000);
	$('.step').transition( {
		'opacity': '0.7'
	});
	$('.step4').transition( {
		'opacity': '1'
	});
});


$('.step-container .padding .img').click(function () {

	if ($(this).width() == 78) {
		$(this).css( {
			'border':'solid 4px #5cbcf6', 'height':'46px', 'width':'72px', 'background-color':'#f1f1f1'
		});
		var id = $(this).attr("id");
		var layerid = '.' + id;
		$(layerid).show();
		console.log(layerid);
	} else {
		$(this).css( {
			'border':'solid 1px #ddd', 'height':'52px', 'width':'78px', 'background-color':'#fff'
		});
		var id = $(this).attr("id");
		var layerid = '.' + id;
		$(layerid).hide();
		console.log(id);
	}
});




	function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#theimg').attr('src', e.target.result);
			$('#theimgfull').attr('src', e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	}



}








$(".tuto").bind('touchend click', function () {

	$('.tuto-full').slideDown(750);
	$('#tuto-big').show();

	var idtoshow = $(this).attr('i2');
	var idtoshownb = parseInt(idtoshow);
	var windowsW = $(window).width();
	var showI = '-' + (idtoshownb * windowsW) + 'px';
	console.log(showI);
	$('#tuto-big').transition( {
		x: showI
	}, 0);

});







$('.nextBtn').click(function () {
	var idtoshow = $(this).attr('i');
	var idtoshownb = parseInt(idtoshow);
	var windowsW = $(window).width();
	var nextId = '-' + (idtoshownb * windowsW) + 'px';
	console.log(nextId);
	$('#tuto-big').transition( {
		x: nextId
	}, 250);
});


$('.precBtn').click(function () {
	var idtoshow = $(this).attr('id');
	var idtoshownb = parseInt(idtoshow);
	var windowsW = $(window).width();
	var precId = '-' + (idtoshownb * windowsW) + 'px';

	console.log(precId);
	$('#tuto-big').transition( {
		x: precId
	}, 250);
});



$('.closetuto').click(function () {
	console.log('slideUp marche!');
	$('.tuto-full').slideUp(250);
	$('#tuto-big').css( {
		'display':'none'
	}, 1000);

});


$(document).ready(function () {
	var windowW = $(window).width();
	var windowH = $(window).height();

	if (windowW > windowH) {
		$('.landscape').show();
		$('.portrait').hide();
		console.log('Landscape');
	} else {
		$('.landscape').hide();
		$('.portrait').show();
		console.log('Portrait');
	}

});
$(window).resize(function () {
	var windowW = $(window).width();
	var windowH = $(window).height();

	if (windowW > windowH) {
		$('.landscape').show();
		$('.portrait').hide();
		console.log('Landscape');
	} else {
		$('.landscape').hide();
		$('.portrait').show();
		console.log('Portrait');
	}

});

$('.scenedropdown').click(function (){
	$('.sceneselect').slideToggle();
});

$('.sceneselect').width($('.scenedropdown').width());
$('.scene-section').width($('.scenedropdown').width() - 41);


$('.scenes').click(function (){
	$('.scene').hide();
	var uniqueId = $(this).attr('uniqueId');
	var Id = '#' + uniqueId;
	$(Id).show();
	console.log(Id);
	$('.sceneselect').slideToggle();

	var numberId = $(this).attr('numberId');
	$('.inboxtext').html(scenes[numberId].titre);
});


document.querySelector('#chose').addEventListener('click', function (e) {
	document.querySelector('#input').click();
}, false);

$('.step-container').css( {
	'margin-top':140
});


$(function () {
	$('#theimg').mouseenter(function () {
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
	faces();

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

	if (imgW > wW && imgW > imgH) {
		$('#theimg').width(imgW2);
		$('#theimg').height('auto');
	} else if (imgW > wW && imgH > imgW) {
		$('#theimg').width(imgW2);
		$('#theimg').height('auto');
	} else if (imgW < wW && imgH > imgW) {
		$('#theimg').width(imgW2);
		$('#theimg').height('auto');
	} else if (imgH > wH && imgH > imgW) {
		$('#theimg').height('100%');
		$('#theimg').width(imgW2);
	} else {
		$('#theimg').width(imgW2);
		$('#theimg').height('auto');
	}

	$('#theimg').attr('height', imgH);
	$('#theimg').attr('width', imgW);

}

function imglayer() {
	var imgW = $('#theimg').width();
	var imgH = $('#theimg').height();

	$('.theimglayers').width(imgW);
	$('.theimglayers').height(imgH);

	console.log(imgW, imgH);
}




