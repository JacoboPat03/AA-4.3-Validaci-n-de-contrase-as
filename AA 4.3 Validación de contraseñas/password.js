
/*function validarContrasena(contrasena) {
    
    if (contrasena.length < 8) return false;
    if (contrasena.includes(' ')) return false;
    if (!/[A-Z]/.test(contrasena)) return false;
    // Falta verificar minúsculas
    // Falta verificar números
    // Falta verificar caracteres especiales
    // Falta verificar palabra significativa
    
    return true;
}

module.exports = validarContrasena;*/
// password.js (versión optimizada)
function validarContrasena(contrasena) {
    // Palabras significativas permitidas
    const palabrasSignificativas = ['playa', 'perro', 'gato', 'casa', 'mario', '1990', 'lima'];
    
    // Verificaciones básicas
    if (typeof contrasena !== 'string') return false;
    if (contrasena.length < 8) return false;
    if (contrasena.includes(' ')) return false;
    
    // Verificaciones de caracteres
    if (!/[A-Z]/.test(contrasena)) return false;
    if (!/[a-z]/.test(contrasena)) return false;
    if (!/[0-9]/.test(contrasena)) return false;
    if (!/[@#$%^&*()]/.test(contrasena)) return false;
    
    // Verificar palabra significativa
    const tienePalabra = palabrasSignificativas.some(palabra => 
        contrasena.toLowerCase().includes(palabra.toLowerCase())
    );
    if (!tienePalabra) return false;
    
    return true;
}

module.exports = validarContrasena;