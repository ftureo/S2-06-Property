// Import Models
import User from "../models/User.js";

// Import Helpers
import AppError from "../helpers/AppError.js";
import createId from "../helpers/createId.js";

// Create new user
const createNewUser = async (req, res, next) => {
  // evitar registros duplicados
  const { email } = req.body; // vamos a extraer el email
  // el metodo findOne te va a buscar el primer email que esta en la db y que coincida con lo que le mandas desde el body
  const existsUser = await User.findOne({ email: email }); // si no le ponemos el await va a intentar registrar al user en vez de verficar primero si ese email ya existe

  if (existsUser) {
    const error = new Error("User already registered");
    console.log(error);
    return res.status(400).json({ msg: error.message }); // devuelvo el error y con el .message entro al mensaje de la fila 12
  }
  try {
    const user = new User(req.body); // aca creamos un nuevo objeto de tipo user con la info del modelo
    user.token = createId(); // user es un objeto y le asignamos al token la funcion createId que es un id aleatorio(generamos un token por user)
    const userSave = await user.save(); // le ponemos await, para que espere a que almacene el objeto y luego si te da la respuesta del json
    res.json(userSave);
  } catch (error) {
    console.log(error);
  }
};

export { createNewUser };
