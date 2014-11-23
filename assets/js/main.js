		$(document).ready(function(){

			var ageVerificator = "%";
			var countryVerificator = "%";
			var genderVerificator = "%";
			var video = " ";

				$.ajax({
					  type: "POST",
					  url: "app/videolist.php",
					}).done( function (msg) {
							$('.listResult').empty();
							$('.listResult').prepend(msg);
							$(".linkR").click( function(){
								video = $(this).attr("value");
								$(".monitor").html("<iframe width='560' height='315' src='"+video+"' allowfullscreen></iframe>'");
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
								$(".monitor").html("<embed width='560' height='315' src='"+video+"'allowfullscreen></embed>'");
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
								$(".monitor").html("<embed width='560' height='315' src='"+video+"'allowfullscreen></embed>'");
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
									$(".monitor").html("<embed width='560' height='315' src='"+video+"'allowfullscreen></embed>'");
									$(".monitor").show();
							});
					});
				}); //end country
		});