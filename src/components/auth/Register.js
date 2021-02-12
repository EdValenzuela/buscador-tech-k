import React, { useState } from 'react';
import Container from '../layout/Container';

import Swal from "sweetalert2";
import clienteAxios from '../../config/axios';

const Register = ({history}) => {

    const [dataForm, saveDataForm] = useState({
        email: "",
        password: "",
      });
    
      const { email, password } = dataForm;
    
      const handleChange = (e) => {
        saveDataForm({
          ...dataForm,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = async (e) => {
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
          const { data } = await clienteAxios.post("/api/register", dataForm);
          Swal.fire("Registro Correcto", "Has registrado una cuenta", "success");
    
          history.push("/login");
        } catch (e) {
          Swal.fire({
            icon: "error",
            title: "Hubo un error",
            text: e,
          });
        }
      };

    return (
        <Container>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="flex flex-col items-center justify-center p-5 border-2 border-blue-100">
            <h1 className="mb-10 font-bold text-4xl text-black">Registrarse</h1>
            <form onSubmit={onSubmit}>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email"
              />
              <input
                className="w-full my-5 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="password"
              />

              <button
                type="submit"
                className="px-4 py-2 mb-5 w-full text-base font-bold text-white uppercase bg-green-500 rounded bottom-5 hover:bg-red-500"
              >
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </Container>
    )
}

export default Register
