// password.test.js
const validarContrasena = require('./password');

describe('Pruebas de validación de contraseña', () => {
    // Casos normales válidos
    test('Contraseña válida compleja', () => {
        expect(validarContrasena('Playa2010@')).toBe(true);
    });

    test('Contraseña válida con otro carácter especial', () => {
        expect(validarContrasena('Perro2021#')).toBe(true);
    });

    // Casos inválidos
    test('Muy corta', () => {
        expect(validarContrasena('A1@abc')).toBe(false);
    });

    test('Sin mayúsculas', () => {
        expect(validarContrasena('playa2010@')).toBe(false);
    });

    test('Sin minúsculas', () => {
        expect(validarContrasena('PLAYA2010@')).toBe(false);
    });

    test('Sin números', () => {
        expect(validarContrasena('Playa@@@@')).toBe(false);
    });

    test('Sin caracteres especiales', () => {
        expect(validarContrasena('Playa2010')).toBe(false);
    });

    test('Con espacios', () => {
        expect(validarContrasena('Playa 2010@')).toBe(false);
    });

    test('Sin palabra significativa (ej. "Playa")', () => {
        expect(validarContrasena('Xyz1234@')).toBe(false);
    });

    // Casos extremos
    test('Vacía', () => {
        expect(validarContrasena('')).toBe(false);
    });

    test('Undefined', () => {
        expect(validarContrasena(undefined)).toBe(false);
    });

    test('Null', () => {
        expect(validarContrasena(null)).toBe(false);
    });

    test('Tipo incorrecto (número)', () => {
        expect(validarContrasena(12345678)).toBe(false);
    });
});