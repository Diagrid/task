	
	// Example code
	
	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['fipsCode']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});


	//Weather


	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo2.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				lng: $('#selLng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtStation').html(result['data']['stationName']);
					$('#txtTemperature').html(result['data']['temperature']);
					$('#txtHumidity').html(result['data']['humidity']);
					$('#txtWindSpeed').html(result['data']['windSpeed']);
					$('#txtWindDirection').html(result['data']['windDirection']);
					$('#txtClouds').html(result['data']['clouds']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				console.log('didnt work')
			}
		}); 
	
	});


	// wikipedia 



	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo3.php",
			type: 'POST',
			dataType: 'json',
			data: {
				loc: $('#selLoc').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtTitle').html(result['data'][0]['title']);
					$('#txtSummary').html(result['data'][0]['summary']);
					$('#txtLink').html(result['data'][0]['wikipediaUrl']);
					$('#txtLng').html(result['data'][0]['lng']);
					$('#txtLat').html(result['data'][0]['lat']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				console.log('didnt work - wiki')
			}
		}); 
	
	});



	// nearby events
	

	$('#btnRun4').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo4.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat1: $('#selLat1').val(),
				lng1: $('#selLng1').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtSummary1').html(result['data'][0]['summary']);
					$('#txtLink1').html(result['data'][0]['wikipediaUrl']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				console.log('didnt work - nearby')
			}
		}); 
	
	});