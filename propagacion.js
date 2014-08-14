var abuelo = { dinero : 10 };
var padre = { dinero : 0 };
var hijo = { dinero : 0 };

function abuelo_da_dinero_a_padre(changes){
	if (abuelo.dinero!=0){
		padre.dinero++;
		abuelo.dinero--;
	}
	console.log(abuelo,padre,hijo);
};

function padre_da_dinero_a_hijo(changes){
	if (padre.dinero!=0){
		hijo.dinero++;
		padre.dinero--;
	}
	console.log(abuelo,padre,hijo);
};

function hijo_da_dinero_a_abuelo(changes){
	if (hijo.dinero!=0 && abuelo!=5){
		abuelo.dinero++;
		hijo.dinero--;
	}
	console.log(abuelo,padre,hijo);	
}

Object.observe( abuelo, abuelo_da_dinero_a_padre, ['update']);

Object.observe( padre, padre_da_dinero_a_hijo, ['update']);

Object.observe( hijo, hijo_da_dinero_a_abuelo, ['update']);

//Al inifinito y mas alla :)