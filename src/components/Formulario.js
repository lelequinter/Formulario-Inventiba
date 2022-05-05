import React from "react";
import { Formik, Form, Field } from "formik";
import { Container, StyledTitle, DivForm, Button } from "../styles/styles";
import "../index.css";

export const Formulario = () => {
  return (
    <Container>
      <StyledTitle>
        <h1>Nuevo Colaborador</h1>
        <h2>
          Ingresa los datos a continuación, incluyendo hoja de vida,
          portafolioycertificado bancario.
        </h2>
      </StyledTitle>
      <Formik>
        {() => (
          <Form>
            <DivForm>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="Correo"
              />
              <Field
                type="text"
                id="cedula"
                name="cedula"
                placeholder="Documento de identidad"
              />
              <Field
                type="text"
                id="nombres"
                name="nombres"
                placeholder="Nombres"
              />
              <Field
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Apellidos"
              />
              <Field
                type="text"
                id="email-corp"
                name="email-corp"
                placeholder="Email Corporativo"
              />
              <Field
                type="text"
                id="email-alt"
                name="email-alt"
                placeholder="Email Alternativo"
              />
              <Field type="text" id="skype" name="skype" placeholder="Skype" />
              <Field
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Dirección Física"
              />
              <Field
                type="text"
                id="telefono"
                name="telefono"
                placeholder="Telefono"
              />
              <Button>
                <p>Siguiente</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Button>
            </DivForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
