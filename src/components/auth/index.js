import React, { useState } from "react";
import clienteAxios from "../../config/axios";
import { withRouter, Link } from "react-router-dom";

//hooks
import useForm from '../../hooks/useForm';

//Components
import Container from "../layout/Container";
import Illustrations from "../Ilustrations";
import { SOURCE } from "../../constantes";

import Swal from "sweetalert2";

const Login = ({ history }) => {

  const [values, handleInputChange] = useForm('');
  const [userToken, setToken] = useState('');
  const {email='', password=''} = values;

  const onSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Completa los campos",
      });
      return;
    }

    try {
      const {data} = await clienteAxios.post("/api/login", values);
      setToken(data.token);
      Swal.fire("Login Correcto", "Has iniciado sesión", "success");

      history.push("/movies");
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: e,
      });
    }
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-around h-full p-5 m-0 md:pt-24 md:pb-16">
            <Illustrations source={SOURCE.login_two} />
            <form onSubmit={onSubmit}>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="email"
              />
              <input
                className="w-full my-5 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="password"
              />

              <button
                type="submit"
                className="px-4 py-2 mb-5 w-full text-base font-bold text-white uppercase bg-blue-500 rounded bottom-5 hover:bg-red-500"
              >
                Iniciar sesión
              </button>

              <div className="flex items-center justify-between mb-6">
                <span>No tienes una cuenta ?</span>{" "}
                <Link
                  to={"/register"}
                  className="mr-5 hover:text-gray-900 text-blue-500"
                >
                  Registrate aquí
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around">
          <Illustrations source={SOURCE.login} />
        </div>
      </Container>
    </>
  );
};

export default withRouter(Login);
