const {
    getAllDrivers,
    postDriver,
    getDriverById,
    getDriverByName,
  } = require("..//controllers/driversController");
  // Controlador para obtener conductores por nombre o todos los conductores
  // by name y getAll de api y bdd
  const getDriversHandler = async (req, res) => {
    const { name } = req.query;
  
    try {
      const allDrivers = await getAllDrivers();
       // Filtrar conductores por nombre si se proporciona el parámetro 'name'
      if (name) {
        const driversByName = allDrivers.filter((driver) =>
          driver.name.toLowerCase().startsWith(name.toLowerCase())
        );
        // Limitar la respuesta a 15 conductores
        if (driversByName.length > 0) {
          const quinceDrivers = driversByName.slice(0, 15);
  
          res.status(200).json(quinceDrivers);
        } else {
          res.status(404).send("Not found");
        }
  
        // if (name) {
        //   const driversByName = await getDriverByName(name);
  
        //   if (driversByName.length === 0) {
        //     res.status(404).json({ message: "No se encontraron coincidencias" });
        //   } else {
        //     return res.status(200).json(driversByName);
        //   }
      } else {
        // const allDrivers = await getAllDrivers();
  // Si no se proporciona 'name', devolver todos los conductores
        return res.status(200).json(allDrivers);
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  //Post driver
  // Controlador para crear un nuevo conductor
  const postDriverHandler = async (req, res) => {
    const { name, lastname, description, image, nationality, dob, teams } =
      req.body;
  
    try {
      // Verificar que se proporcionen los datos requeridos
      if (!name || !lastname || !description || !dob) {
        return res.status(400).json({ error: "Missing required data..." });
      }
       // Crear un nuevo conductor
      const newDriver = await postDriver({
        name,
        lastname,
        description,
        nationality,
        dob,
        image,
        teams,
      });
  
      res
        .status(201)
        .json({ message: "Driver created successfully", driver: newDriver });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  // Controlador para obtener detalles de un conductor por ID
  // 📍 GET | /drivers/:idDriver
  const getDetailDriverHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
  
    try {
      const response = await getDriverById(id, source);
  
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Conductor no encontrado." });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Error en el servidor." });
    }
  };
  
  module.exports = {
    getDriversHandler,
    postDriverHandler,
    getDetailDriverHandler,
    getDriverByName,
  };