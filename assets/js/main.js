		$(document).ready(function(){

			var ageVerificator = "%";
			var countryVerificator = "%";
			var genderVerificator = "%";
			var video = " ";
			var paginator = " ";
			var firstPag = "";

				$.ajax({
					  type: "POST",
					  url: "app/videolist.php",
					}).done( function (msg) {
							$('.listResult').empty();
							$('.listResult').prepend(msg);
							firstPag = parseInt($("li").attr("value")); //last row in base
							$(".linkR").click( function(){
								video = $(this).attr("value");
								$(".monitor").html("<iframe width='500px' height='300px' src='"+video+"?rel=0&border=&autoplay=1' allowfullscreen></iframe>");
								$(".monitor").show();
							});
						});


				//choose age
				$(".ageChield").on("click", function(){
					$(".ageChield").css("border","0px solid #879a89");
					if(ageVerificator == $(this).attr("value")){
						ageVerificator = "%";
						$(this).css("border","0px solid #879a89");
					}
					else{ 
						ageVerificator = $(this).attr("value");
						$(this).css("border","1px solid #879a89");
					}
					$.ajax({
					  type: "POST",
					  url: "app/videolist.php",
					  data: { age: ageVerificator, country: countryVerificator, gender: genderVerificator }
					}).done( function (msg) {
							$('.listResult').empty();
							$('.listResult').prepend(msg);
							$(".linkR").click( function(){
								video = $(this).attr("value");
								$(".monitor").html("<iframe width='500px' height='300px' src='"+video+"?rel=0&border=&autoplay=1' allowfullscreen></iframe>");
								$(".monitor").show();
							});
						});
				});	//end age

			//choose country
			$(".countryChield").on("click", function(){
				$(".countryChield").css({"border":"0px solid #879a89", "opacity":"0.8"});
				if(countryVerificator == $(this).attr("value")){
					countryVerificator = "%";
					$(this).css({"border":"0px solid #879a89", "opacity":"0.8"});
				}
				else {
					countryVerificator = $(this).attr("value");
					$(this).css({"border":"1px solid #879a89", "opacity":"1"});
				}
				$.ajax({
					  type: "POST",
					  url: "app/videolist.php",
					  data: { age: ageVerificator, country: countryVerificator, gender: genderVerificator }
					}).done( function (msg) {
							$('.listResult').empty();
							$('.listResult').prepend(msg);
							$(".linkR").click( function(){
								video = $(this).attr("value");
								$(".monitor").html("<iframe width='500px' height='300px' src='"+video+"?rel=0&border=&autoplay=1' allowfullscreen></iframe>");
								$(".monitor").show();
						});
				});
			}); //end country

			//choose your gender
			$(".genderChield").on("click", function(){
				$(".genderChield").css("border","0px solid black");
				if (genderVerificator == $(this).attr("value")){
					genderVerificator = "%";
					$(this).css("border","0px solid black");
				}
				else {
					genderVerificator = $(this).attr("value");
					$(this).css("border","1px solid #879a89");
				}
				$.ajax({
						  type: "POST",
						  url: "app/videolist.php",
						  data: { age: ageVerificator, country: countryVerificator, gender: genderVerificator }
						}).done( function (msg) {
								$('.listResult').empty();
								$('.listResult').prepend(msg);
								$(".linkR").click( function(){
									video = $(this).attr("value");
									$(".monitor").html("<iframe width='500px' height='300px' src='"+video+"?rel=0&border=&autoplay=1' allowfullscreen></iframe>");
									$(".monitor").show();
							});
					});
				}); //end country
			//pagination
				$(".paginist").on("click", function(){
					var valLi = parseInt($("li").attr("value")); 
					if ($(this).attr("value") > 0){
						paginator = valLi;//left
						$('#left').show();
					}
					else {paginator = parseInt($("li").attr("value")) + firstPag + 1; //right
						 $('#right').show();
						 }
					if (paginator > firstPag){
						$('#left').hide();
					}
					if (paginator <= firstPag){
						$('#right').hide();
					}
				$.ajax({
						  type: "POST",
						  url: "app/videolist.php",
						  data: { pag: paginator, age: ageVerificator, country: countryVerificator, gender: genderVerificator  }
						}).done( function (msg) {
								$('.listResult').empty();
								$('.listResult').prepend(msg);
								$(".linkR").click( function(){
									video = $(this).attr("value");
									$(".monitor").html("<iframe width='500px' height='300px' src='"+video+"?rel=0&border=&autoplay=1' allowfullscreen></iframe>");
									$(".monitor").show();
							});
					});
				}); //end pagination
		});