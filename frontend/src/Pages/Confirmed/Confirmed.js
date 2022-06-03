import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alerta from "../../components/Alerta";
import { Link } from "react-router-dom";
import "./Confirmed.css";

function Confirmed() {
  const token = useParams();

  const [alert, setAlert] = useState({});
  const [confirm, setConfirm] = useState(false);
  console.log(token.token);
  const getToken = async () => {
    try {
      const { data } = await axios(
        `http://localhost:4000/api/user/confirmed/${token.token}`
      );
      setAlert({ msg: data.msg, error: false });
      setConfirm(true);
      console.log(data);
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      {alert?.msg && confirm !== true && <Alerta alerta={alert} />}
      {confirm && (
        <div className="container-confirm">
          <h1 className="title-confirm">Confirmed User</h1>
          <Link className="link-confirmed" to={"/login"}>
            <p className="redirect-confirm">Click Here to Continue </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Confirmed;

/* const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false); // arranca en false hasta hacer el llamado a la Api
  // tenemos que leer el id que viene por url
  const params = useParams();
  const { token } = params;

  console.log(params);

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/user/confirmed/${token}`;
        const { data } = await axios(url);
        // en caso de que valido correctamente la cuenta
        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmarCuenta();
  }, []); */
