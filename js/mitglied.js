$(document).ready(function(){
	loadData();
});


loadData = function(){
	$.ajax({
		url: "php/mitglied.php",
		data: {type:"list"},
		success: function succ(data){
			data = JSON.parse(data.replace('ï»¿',''));
			var out;
			out = "<table><tr><th>Nachname</th><th>Vorname</th><th>Feuerwehr</th><th>Geburtsdatum</th><th>Wohnort</th><th>Urlaub bis</th><td></td><td></td>";
			for(var i = 0; i < data.length; i++){
				out += TableRow(data[i]);
			}
			out += "</table>";
			$("#context").append(out);
		},
		dataType: "text"
	});
}

// Eine Zeile zusammenbauen
TableRow = function(data){
	var ret;
	ret  = "<tr>";
	ret += "<td>"+data.nachname		+"</td>";
	ret += "<td>"+data.vorname		+"</td>";
	ret += "<td>"+data.feuerwehr	+"</td>";
	ret += "<td>"+data.geburtsdatum	+"</td>";
	ret += "<td>"+data.wohnort		+"</td>";
	ret += "<td>"+data.urlaubBis	+"</td>";
	ret += '<td><a href="javascript:edit('+data.id+')">Bearbeiten</a></td>';
	ret += '<td><a href="javascript:del('+data.id+')">Löschen</a></td>';
	ret += "</tr>";
	return ret;
}

// Zur Editierfunktion
edit = function(id){

}

// mitglied-Element mit der id: "id" aus der Datenbank entfernen
del = function(id){

}

// Hilfsfunktion
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

// Auto-Aktualisierung der Suchleiste
$("input").keyup(function(){
	var text = $("input").val();
	$("td:first-child").each(function(){
		var item = $(this);
		var searchString = item.text() +" "+ item.next().text();
		if(searchString.contains(text) || searchString == ""){
			item.parent().fadeIn();
		}else{
			item.parent().fadeOut();
		}
	})
});