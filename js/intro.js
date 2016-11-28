$(function() {
	
	if (window.localStorage) {
		
		
		
		console.log('localstorage');
		
		if (localStorage.getItem('introKey') == null || localStorage.getItem('introKey') == 0) {
		
				/*
				the json config obj.
				name: the class given to the element where you want the tooltip to appear
				bgcolor: the background color of the tooltip
				color: the color of the tooltip text
				text: the text inside the tooltip
				time: if automatic tour, then this is the time in ms for this step
				position: the position of the tip. Possible values are
					TL	top left
					TR  top right
					BL  bottom left
					BR  bottom right
					LT  left top
					LB  left bottom
					RT  right top
					RB  right bottom
					T   top
					R   right
					B   bottom
					L   left
				 */
				var config = [
					{
						"name" 		: "leftbutton",
						"bgcolor"	: "black",
						"color"		: "white",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 75,
						"text"		: "Le but de cette section est de vous aider à composer votre photo en créant un exemple de composition. Sélectionner un type de sujet pour commencer.",
						"time" 		: 5000,
						"class"		: "sMenuli"
					},
					{
						"name" 		: "step-cont-2",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Sélectionnez le sujet principal de votre photo.",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 200,
						"time" 		: 5000,
						"class"		: "ul"	
					},
					{
						"name" 		: "step-cont-3",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Sélectionnez la position désirez de votre sujet (droite ou gauche).",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 160,
						"time" 		: 5000,
						"class"		: "left"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Sélectionnez la grosseur du sujet. C'est une grosseur approximative.",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 230,
						"time" 		: 5000,
						"class"		: "change"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Mémorisez la position de votre sujet et essayez de prendre une photo en respectant sa position. Vous pouvez aussi vérifier des photos que vous avez déjà prises.",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 320,
						"time" 		: 5000,
						"class"		: "choseP"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Vérifiez si le positionnement de votre sujet correspond à celui que vous avez créé. Si oui, votre photo est bien composée :) <a href='#' class=\"tooltipLink\">Continuer</a>",
						"position"	: "R",
						"p21"		: 400,
						"p22"		: 200,
						"time" 		: 5000,
						"class"		: "tooltipLink"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Ouvrez ce menu pour accéder aux tutoriels et aux conseils rapides. Cliquez commencer pour continuer.",
						"position"	: "TR",
						"p21"		: $(window).width() - 280,
						"p22"		: 75,
						"time" 		: 5000,
						"class"		: "start"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Vous pouvez lire cette série de 30 tutoriels pour vraiment approffondir vos connaissances en photographie. Sélectionnez un tutoriel pour continuer.",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 80,
						"time" 		: 5000,
						"class"		: "tutolist-item"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Fermer la section tutoriel et sélectionnez \"Ouvrir\"",
						"position"	: "TR",
						"p21"		: $(window).width() - 280,
						"p22"		: 75,
						"time" 		: 5000,
						"class"		: "conseilOpen"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "Cette section vous donne des conseils pour régler votre appareil photo. Sélectionnez une scène pour continuer.",
						"position"	: "LT",
						"p21"		: 340,
						"p22"		: 80,
						"class"		: "scenes"
					},
					{
						"name" 		: "step-cont-4",
						"bgcolor"	: "black",
						"color"		: "white",
						"text"		: "La visite est terminée!<br><a href='#' class=\"endTour\">Fermer</a>",
						"position"	: "TR",
						"p21"		: $(window).width() - 280,
						"p22"		: 340,
						"p22"		: 80,
						"class"		: "tooltip"
					}

				],
				//define if steps should change automatically
				autoplay	= 	false,
				//timeout for the step
				showtime,
				//current step of the tour
				step		= -1,
				//total number of steps
				total_steps	= config.length;
					
				//show the tour controls
				showControls();
				
				/*
				we can restart or stop the tour,
				and also navigate through the steps
				 */
				$('#activatetour').on('click',startTour);
				$('#canceltour').on('click',endTour);
				$(document).on('click', '#endtour, .endTour' ,endTour);
				$('#restarttour').on('click',restartTour);
				
				$('#prevstep').on('click', prevStep);
				
				
				function startTour(){
					$('#tourcontrols').slideUp();
					setTimeout(function () {$('#tourcontrols').remove();}, 1000);
					$('#endtour,#restarttour').show();
					if(!autoplay && total_steps > 1)
						$('#nextstep').show();
					//showOverlay();
					nextStep();
				}
				
				function nextStep(){
					if(!autoplay){
						if(step > 0)
							$('#prevstep').show();
						else
							$('#prevstep').hide();
						if(step == total_steps-1)
							$('#nextstep').hide();
						else
							$('#nextstep').show();	
					}	
					if(step >= total_steps){
						//if last step then end tour
						endTour();
						return false;
					}
					++step;
					console.log(' step', step);
					showTooltip();
					
					window.step = step;
					
					console.log(window.step);
				}
				
				function prevStep(){
					if(!autoplay){
						if(step > 2)
							$('#prevstep').show();
						else
							$('#prevstep').hide();
						if(step == total_steps)
							$('#nextstep').show();
					}		
					if(step <= 1)
						return false;
					--step;
					showTooltip();
				}
				
				function endTour(){
					step = 0;
					if(autoplay) clearTimeout(showtime);
					removeTooltip();
					hideControls();
					hideOverlay();
					
					localStorage.setItem('introKey', 1);
				}
				
				function restartTour(){
					step = 0;
					if(autoplay) clearTimeout(showtime);
					nextStep();
				}
				
				function showTooltip(){
					//remove current tooltip
					removeTooltip();
					
					var step_config		= config[step];
					var $elem			= $('.' + step_config.name);
					
					if(autoplay)
						showtime	= setTimeout(nextStep,step_config.time);
					
					var bgcolor 		= step_config.bgcolor;
					var color	 		= step_config.color;
					
					var $tooltip		= $('<div>',{
						id			: 'tour_tooltip',
						class 	: 'tooltip',
						html		: '<p>'+step_config.text+'</p><span class="tooltip_arrow"></span>'
					}).css({
						'display'			: 'none',
						'color'				: color
					});
					
					//<button class="button" id="nextstep" style="">Next &gt;</button>
					
					//position the tooltip correctly:
					
					//the css properties the tooltip should have
					var properties		= {};
					
					var tip_position 	= step_config.position;
					
					var p1 = step_config.p21;
					var p2 = step_config.p22;
					
					//append the tooltip but hide it
					$('BODY').prepend($tooltip);
					
					//get some info of the element
					var e_w				= $elem.outerWidth();
					var e_h				= $elem.outerHeight();
					var e_l				= $elem.offset().left;
					var e_t				= $elem.offset().top;
					
					
					switch(tip_position){
						case 'TL'	:
							properties = {
								'left'	:  p1,
								'top'	:  p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_TL');
							break;
						case 'TR'	:
							properties = {
								'left'	:   p1 + 'px',
								'top'	:   p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_TR');
							break;
						case 'BL'	:
							properties = {
								'left'	:  p1 + 'px',
								'top'	:  p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_BL');
							break;
						case 'BR'	:
							properties = {
								'left'	:   p1 + 'px',
								'top'	:  	p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_BR');
							break;
						case 'LT'	:
							properties = {
								'left'	:  p1 + 'px',
								'top'	:  p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_LT');
							break;
						case 'LB'	:
							properties = {
								'left'	:  p1 + 'px',
								'top'	:  p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_LB');
							break;
						case 'RT'	:
							properties = {
								'left'	: 	p1 + 'px',
								'top'	:  	p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_RT');
							break;
						case 'RB'	:
							properties = {
								'left'	: 	p1 + 'px',
								'top'	:  	p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_RB');
							break;
						case 'T'	:
							properties = {
								'left'	:  	p1 + 'px',
								'top'	:   p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_T');
							break;
						case 'R'	:
							properties = {
								'left'	: 	p1 + 'px',
								'top'	:  	p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_R');
							break;
						case 'B'	:
							properties = {
								'left'	:  	p1 + 'px',
								'top'	: 	p2 + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_B');
							break;
						case 'L'	:
							properties = {
								'left'	:  	p1 + 'px',
								'top'	:  	p2  + 'px'
							};
							$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_L');
							break;
					}
					
					
					/*
					if the element is not in the viewport
					we scroll to it before displaying the tooltip
					 */
					var w_t	= $(window).scrollTop();
					var w_b = $(window).scrollTop() + $(window).height();
					//get the boundaries of the element + tooltip
					var b_t = parseFloat(properties.top,10);
					
					if(e_t < b_t)
						b_t = e_t;
					
					var b_b = parseFloat(properties.top,10) + $tooltip.height();
					if(( e_h) > b_b)
						b_b =  e_h;
						
					
					if((b_t < w_t || b_t > w_b) || (b_b < w_t || b_b > w_b)){
						$('html, body').stop()
						.animate({scrollTop: b_t}, 500, 'easeInOutExpo', function(){
							//need to reset the timeout because of the animation delay
							if(autoplay){
								clearTimeout(showtime);
								showtime = setTimeout(nextStep,step_config.time);
							}
							//show the new tooltip
							$tooltip.css(properties).show();
						});
					}
					else
					//show the new tooltip
						$tooltip.css(properties).show();
				}
				
				function removeTooltip(){
					$('#tour_tooltip').remove();
				}
				
				function showControls(){
					/*
					we can restart or stop the tour,
					and also navigate through the steps
					 */
					var $tourcontrols  = '<div id="tourcontrols" class="tourcontrols fullscreen">';
					$tourcontrols += '<h1>Bienvenue sur BettrPic!</h1>';
					$tourcontrols += '<p>Nous vous proposons de suivre cette visite guidée de l\'application qui vous permettra de comprendre son fonctionnement et son utilité. </p><br><br>';
					$tourcontrols += '<button id="activatetour">Commencer le tour</button>';
					$tourcontrols += '<a id="endtour">Ne pas faire le tour</a>';
					
						if(!autoplay){
							$tourcontrols += '<div class="nav"><span class="button" id="prevstep" style="display:none;">< Previous</span>';
							//$tourcontrols += '<span class="button" id="nextstep" style="display:none;">Next ></span></div>';
						}
						$tourcontrols += '<a id="restarttour" style="display:none;">Restart the tour</span>';
						$
						$tourcontrols += '<span class="close" id="canceltour"></span>';
					$tourcontrols += '</div>';
					
					$('BODY').prepend($tourcontrols);
					$('#tourcontrols').animate({'right':'30px'},500);
				}
				
				function hideControls(){
					$('#tourcontrols').slideUp();
					setTimeout(function () {$('#tourcontrols').remove();}, 1000);
				}
				
				function showOverlay(){
					var $overlay	= '<div id="tour_overlay" class="overlay"></div>';
					$('BODY').prepend($overlay);
				}
				
				function hideOverlay(){
					$('#tour_overlay').remove();
				}
				
				var classN = "";
				for (i=0; i<config.length; i++) {
					classN = classN + config[i].class + ", ";
				}
				classN = "'" + classN + "'"; 
				
				console.log(classN);
				
				$(document).on('click', '.sMenuli, .ul, .left, .change, .prendreP, .choseP, .tooltip a, .start, .tutolist-item, .conseilOpen, .scenes, .tooltip a' ,function () {
					
					console.log($(this).hasClass(config[window.step].class));
					
					if ($(this).hasClass(config[window.step].class) ==  true) {
						nextStep();	
					}
				
	
				
					console.log(' step', step);
				
				});
								
				
		}
		
	}
				
});