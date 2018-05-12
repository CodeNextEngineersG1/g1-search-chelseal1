var database = [
{
name: "Nelson Mandela",
born: "July 18, 1918, Mvezo, South Africa",
died: "December 5, 2013, Houghton Estate, Johannesburg, South Africa",
picture: "nelsonMandela.png",
bio: "Nelson Mandela was a civil rights activists in South Africa. He successfully fought against apartheid and became the first black president of South Africa in 1994"
}, 

{
name: "Princess Diana",
born: "July 1, 1961, Sandringham, United Kingdom",
died: "August 31, 1997, Pitié-Salpêtrière Hospital, Paris, France",
picture: "princessDiana.png",
bio: "Princess Diana contributed to many fields like HIV/Aids, children in need, and the homeless"
}, 

{
name: "Mother Teresa",
born: "August 26, 1910, Skopje, Macedonia (FYROM)",
died: "September 5, 1997, Kolkata, India",
picture: "motherTeresa.png",
bio: "Mother Teresa was owner of a catholic congregation of women who dedicated their time to help the poor."
},

{ 
name: "Mohatma Ghandi",
born: "October 2, 1869, Porbandar, India",
died: "January 30, 1948, New Delhi, India",
picture: "mohtamaGhandi.png",
bio: "Mohatma Ghandi was an anti-war activist who fought for India's independence form Britain. Gandhipromoted a non-vioent civil disodence during his activism."
},

{ 
name: "Oprah Winfrey",
born: "January 29, 1954 (age 64 years), Kosciusko, MS",
died: null,
picture: "oprahWinfrey.jpg",
bio: "Oprah Winfrey is a television producer, talk show host, film actress, but above all she is a philanthropist. she contributes to fields like education for those who dont have it and natural disaster relief programs."
},

{ 
name: "Angelina Jolie",
born: "June 4, 1975 (age 42 years), Los Angeles, CA",
died: null,
picture: "angelinaJolie.png",
bio: "Angelina Jolie is a producer, actress, director, and activist. She contibutes a lot to refugee rights in fact she spoke in the united nations on their behalf."
} 

];

var searchBar = document.getElementById("search-bar"); 
var searchButton = document.getElementById("search-button"); 
var autoSuggestions = document.getElementById("auto-suggestions"); 
var display = document.getElementById("display");
var image = document.getElementById("humanitarianism-Img");

searchBar.addEventListener("keypress", checkKey);
// searchBar.addEventListener("input", getAutoSuggestions);
searchButton.addEventListener("click", processInput)


function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key === 13) {
    processInput();
    console.log("hello")
  }
}

function processInput(){
	var cleanedInput = searchBar.value.toLowerCase().trim();
	autoSuggestions.innerHTML = "";
	autoSuggestions.style.display = "none";
	searchBar = "";
	var databaseRecord = getRecord(cleanedInput);
	if(databaseRecord != null){
		displayRecord(databaseRecord);
	} else{
		// displaySuggestions(getSuggestions(cleanedInput));
	alert("No results")
	}
}

function getRecord(cleanedInput){
	for(i = 0; i < database.length ; i++){
		var cleanedRecordName = database[i].name.toLowerCase().trim();
		if(cleanedRecordName == cleanedInput){
			return database[i];
		}	
	}
	return null; 
}

function displayRecord(databaseRecord){
	display.innerHTML = "";
	var recordName = document.createElement("h1");
	recordName.innerHTML = databaseRecord.name;

	var recordBorn = document.createElement("h2");
	recordBorn.innerHTML = "<b>Born:</b> " + databaseRecord.born;
	
	var recordDied = document.createElement("h2");
	if(databaseRecord.died != null) {
	  recordDied.innerHTML = "<b>Died:</b> " + databaseRecord.died;
	}
	else {
	  recordDied.innerHTML = "<b>Died:</b> N/A";
	}


	image.src = databaseRecord.picture;
	
	var recordBio = document.createElement("h2");
	recordBio.innerHTML = databaseRecord.bio;

	display.appendChild(recordName);
	display.appendChild(recordBorn);
	display.appendChild(recordDied);
	display.appendChild(recordBio);

 //    document.getElementById("humanitarianism-Img").appendChild(recordName);
	// document.getElementById("humanitarianism-Img").appendChild(recordPicture); 
	// document.getElementById("humanitarianism-Img").appendChild(recordBorn);
	// document.getElementById("humanitarianism-Img").appendChild(recordDied);
	// document.getElementById("humanitarianism-Img").appendChild(recordBio);
	
	// display(recordName);
	// display(recordPicture);
	// display(recordBorn);
	// display(recordDied);
	// display(recordBio);


}








//  function  getAutoSuggestions(){

//  	var cleanedInput = searchBar.value.toLowerCase().trim();
//  	autoSuggestions.innerHTML = "";
//  	for (var i = 0; i < database.length; i++) {
//  		var cleanedRecordName = database[i].name.toLowerCase().trim();
//  		if(cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0){
//  			var matching = record.name.substring(0, searchBar.value.length)
//  			var remaining = record.name.substring(searchBar.value.length)
//  			var result = matching + "<b>" + remaining + "</b>";
 		


//  			var button = document.createElement("button");
//  			button.innerHTML = result;
//  			button.style.display = "block"
//  			button.className = suggestion;
//  			activateSuggestionButton(button, database[i]);
//  			autoSuggestions.appendChild(button);

//  		}
//  	}

//  	if(autoSuggestions.hasChildNodes() == true){
//  		autoSuggestion.style.display = "block";
//  	} else{
//  		autoSuggestion.style.display = "none";
//  	}
//  }


//  function activateSuggestionButton(button, record) {
// 	button.addEventListener("click", function() {
    
//   });
// 	displayRecord(record);
// 	autoSuggestion.innerHTML = "";
// 	autoSuggestion.style.display = "none";
// 	searchBar = "";
// }

//  function getSuggestions(cleanedInput){
//  	var suggestions  = [];
//  	for (var i = 0; i < database.length; i++){
//  		var cleanedRecordName = database[i].name.toLowerCase().trim();
//  		if(cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length >= 0){
//  			suggestions.push(database[i]);
//  	}
//  }
// return suggestions;
// }

//  function displaySugestions(suggestions){
//  	  display.innerHTML = "";
//  	  var paragraph = document.createElement("p");
//  	  if(suggestions.length > 0){
//  	  	paragraph.innerHTML = "Did you mean:";
//  	  	display.appendChild(paragraph);
//  	  	for (var i = 0; i < suggestions.length; i++){
//  	  		var button = document.createElement("button");
//  	  		button.innerHTML = suggestions[i].name();
//  	  		//help
//  	  		button.style.display = "block";
//  	  		button.className = "suggestions";
//  	  		activateSuggestionButton(button, suggestions[i]);
//  	  		display.appendChild(button);	
//  	     }
//  	   }else{
//  	  	paragraph.innerHTML = "No results!";
//  	  	display.appendChild(paragraph);
//  	  }
 
// }





