// Importar el servidor y la biblioteca supertest para realizar pruebas HTTP
const server = require("../src/server");
const supertest = require("supertest");
// Descripción del conjunto de pruebas para el servidor
describe("Server ok", () => {
  // Prueba: La solicitud GET a '/teams' debe devolver un status 200 y un array de equipos
  it("Debe responder con un status 200 al hacer una req GET a '/'", async () => {
    const response = await supertest(server).get("/teams");
    // Expectativas para la respuesta de la solicitud
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
// Prueba: La solicitud GET a '/uruguay' debe devolver un status 404
  it("Debe responder con un status 404 al hacer un req GET a '/uruguay'", async () => {
    const response = await supertest(server).get("/uruguay");
     // Expectativa para el status code 404
    expect(response.statusCode).toEqual(404);
  });
// Prueba: La solicitud GET a '/drivers' debe devolver información de los conductores
  it("Debe enviar información de los drivers al hacer req GET a '/drivers'", async () => {
    const response = await supertest(server).get("/drivers");
    // Expectativas para la respuesta de la solicitud
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
// Prueba: La solicitud GET a '/drivers/:id' debe devolver un conductor específico por ID
  it("Debe devolver un conductor específico por ID", async () => {
    const driverId = 1;
    const response = await supertest(server).get(`/drivers/${driverId}`);
// Expectativas para la respuesta de la solicitud
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.id).toBe(driverId);
  });
});