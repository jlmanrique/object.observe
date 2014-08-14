var model = {};
Object.observe(model, function(changes){
	changes.forEach(function(change){
		console.log( change.type, change.name, change.oldValue);
	});
});

model.asistentes = 21;
//add asistentes undefined 
delete model.asistentes;
//delete asistentes 21 

model.admin = {};
//add admin undefined 
model.admin.name = "Jose";
//
