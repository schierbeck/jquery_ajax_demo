$(document).ready(function(){

	// Funktionen load_content() tar emot ett värde som ska vara en url-adress
	function load_content(url) {
		// Startar jQuery-metoden ajax()
		$.ajax({
			// url ska vara adressen vi ska hämta. Det skulle t.ex kunna vara http://localhost/mintt-projekt/min-fil.html
			// I det här fallet är värdet variabeln url, dvs den vi skickar med i funktionen load_content()
			url: url
			// Om ajax-anropet lyckas så körs koden inom metoden done()
			// Datan från filen vi hämtar sparas i den variabel vi skriver in i funktionens parametrar ( i detta fall kallar vi den data )
		}).done(function(data) {
			$("main").html(data); // Vi skriver ut variabeln data i html-taggen <main>
			// Om ajax-anropet inte lyckas, dvs vi når inte den fil vi försöker ladda, så kan vi skriva ut en feltext med metoden fail()
		}).fail(function() {
			// I exemplet så kommer en alert skrivas ut vid fel
			alert('Det gick inte att ladda in data. :-(');
		});
	}

	// Vid klick på en länk med klassen link
	$('.link').click(function(e) {
		// Hindra att länkarna skickar vidare användaren, dvs hindra länken från att agera som en länk normalt gör
		e.preventDefault();
		// Om länken vi klickade på inte har en klass som heter active så körs koden i iffen
		if( !$(this).hasClass('active') ) {
			// Vi tar bort klassen active på alla länkar som har klassen link
			$('.link').removeClass('active');
			// Vi lägger till klassen active på den länk vi klickade på
			$(this).addClass('active');
			// Vi tar adressen (href) från länken vi just klickade på, sen skickar vi med den till funktionen load_content
			// Länkens adress (href) blir mao variabeln url som vi ser inom paranteser ovanför i funktionen load_content
			load_content( $(this).attr('href') );
		}
	});

	// Vi kör funktionen load_content() direkt när javascript-filen laddas för att skriva ut om.html i html-taggen <main>
	load_content('om.html');

});