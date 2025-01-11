const carritoCompra = require("../index");

describe("testeamos el carrito de compras", () => {

    const carrito = new carritoCompra();

    test("deberia existir la clase carrito", () => {
        expect(typeof carritoCompra).toBe("function")
    })
    
    test("Deberia tener un constructor", () => {
        expect(carrito.constructor).toBeDefined();
    })
    test("validamos el array inicial vacio", () => {
        expect(carrito.productos).toEqual([]);
    })
})