const edad = parseInt(prompt('Ingresa tu edad'));
const cant_dias= (edad * 365)

const edad_maxima = 83
const snack = prompt('¿Cuál es tu snack favorito?');
const snack_dias = parseInt(prompt('¿Cuántos de éstos comes por día?'));
const dias_restantes= (edad_maxima-edad)*365
const precio = parseInt(prompt('¿Cuánto $ cuestan estos snack?'));
const cantidad_snack = (dias_restantes*snack_dias);


alert('Hoy tienes '+edad+' años que corresponden a '+cant_dias+ ' dias de edad.\n'+'Necesitarás tener $ '+(cantidad_snack*precio)+' pesos \npara poder comer '+cantidad_snack+' '+snack+ ' durante el tiempo que te queda de vida');