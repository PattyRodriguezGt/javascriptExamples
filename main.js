var nombre="Patricia Rodriguez";
var altura=161;
var concatenacion=nombre + ' '+ altura;
var datos=document.getElementById('datos').innerHTML=`
<h1> hola soy la caja de datos</h1>
<h2>nombre ${nombre}</h2>`;

	// promesass
var saludar=new Promise((resolve,reject) =>
{
	setTimeout(()=>
	{
		let saludo= "Hola a todos!";
		if(saludo)
			{resolve(saludo);}
		else
		{
			reject('No hay saludo disponible');
		}
	},2000);
	
});

saludar.then(resultado => alert(resultado)).catch(err => alert(err));