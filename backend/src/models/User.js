import mongoose from "mongoose";

import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    // aca va toda la estructura de la tabla usuario
    name: {
      type: String,
      required: true, // hace que este campo sea obligatorio
      trim: true // te quita los espacios de adelante y de atras
    },
    userName: {
      type: String,
      required: true, // hace que este campo sea obligatorio
      trim: true // te quita los espacios de adelante y de atras
    },
    password: {
      type: String,
      required: true, // hace que este campo sea obligatorio
      trim: true
    },
    email: {
      type: String,
      required: true, // hace que este campo sea obligatorio
      trim: true,
      unique: true
    },
    token: {
      type: String
    },
    birthday: {
      type: Date
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    confirmed: {
      // la idea es mandarle un email para confirmar su cuenta y ahi pasa a ser true
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true // crea 2 columnas, una de creado y otra de actualizado
  }
);

// este codigo se ejecuta antes de guardar el registro en la db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // aca lo que evitamos es que si el usuario quiere modificar su perfil pero no su password, no le hashee de nuevo la contrasena
    next(); // si no esta modificando el password no ejecutes las lineas 50 y 51
  }
  //CUANDO CAMBIO EL PASSWORD VA A IGNORAR LAS FILAS 45 A 48 Y ME VA A HASHEAR EL NUEVO PASSWORD
  // aca estoy obteniendo la info del objeto User que estoy guardando en el controller
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // el this hace referencia al objeto del User
});

userSchema.methods.comprobarPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
