// Import Models
import User from "../models/User.js";

import createJWT from "../helpers/CreateJWT.js";

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
// loguear al user
const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  // Comprobar si el user existe en la db
  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error("User not found");
    return res.status(400).json({ msg: error.message });
  }
  // comprobar si el user esta confirmado
  if (!user.confirmed) {
    const error = new Error("Your account has not been confirmed");
    return res.status(400).json({ msg: error.message });
  }

  // comprobar su password
  if (await user.comprobarPassword(password)) {
    // si retorno el usuario me retorna mucha info que no necesito como la password
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: createJWT(user._id) // para comprobar la password le mandamos un token
    });
  } else {
    const error = new Error("Your password is incorrect");
    return res.status(400).json({ msg: error.message });
  }
};

export { createNewUser, authenticate };
