function getContent(ctx){
	console.log(ctx);
	$.get(ctx+".html",
		function(data) {
			$("#content").html(data);
		},
		"text"
	);
}


$("#mitglied").click(		function(){ getContent("mitglied"); 		});
$("#lehrgang").click(		function(){ getContent("lehrgang"); 		});
$("#voraussetzung").click(	function(){ getContent("voraussetzung"); 	});
$("#ausschluss").click(		function(){ getContent("ausschluss"); 		});