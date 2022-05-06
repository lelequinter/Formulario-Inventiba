import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Steps } from "../Steps/Steps";
import {
  Container,
  StyledTitle,
  DivForm,
  ButtonsSection,
  Button,
  VoidDiv,
} from "./styles";

export const Formulario = () => {
  const [step, setStep] = useState(1);

  const handleAnterior = () => {
    setStep(() => step - 1);
  };

  const handleSiguiente = () => {
    setStep(() => step + 1);
  };

  return (
    <Container>
      <StyledTitle>
        <h1>Nuevo Colaborador</h1>
        <h2>
          Ingresa los datos a continuación, incluyendo hoja de vida, portafolio
          y certificado bancario.
        </h2>
      </StyledTitle>
      <Steps step={step} />
      <Formik
        initialValues={{
          correo: "",
          cedula: "",
          nombres: "",
          apellidos: "",
          emailcorp: "",
          emailalt: "",
          skype: "",
          direccion: "",
          telefono: "",
          celular: "",
          fechaIngreso: "",
          fechaRetiro: "",
          ciudadNacimiento: "",
          personaContacto: "",
          parentezcoContacto: "",
          telefonoContacto: "",
          eps: "",
          pension: "",
          cajaCompensacion: "",
          salarioReal: "",
          salarioCotizado: "",
          numeroCuenta: "",
          tipoCuenta: "",
          certificadoBancario: "",
          tipoContratacion: "",
          vinculado: "",
        }}
        onSubmit={() => {
          console.log("Formulario enviado");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <DivForm>
              {step === 1 && (
                <>
                  <Field
                    type="email"
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
                    type="email"
                    id="emailcorp"
                    name="emailcorp"
                    placeholder="Email Corporativo"
                  />
                  <Field
                    type="email"
                    id="emailalt"
                    name="emailalt"
                    placeholder="Email Alternativo"
                  />
                  <Field
                    type="text"
                    id="skype"
                    name="skype"
                    placeholder="Skype"
                  />
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
                </>
              )}
              {step === 2 && (
                <>
                  <Field
                    type="text"
                    id="celular"
                    name="celular"
                    placeholder="Celular"
                  />
                  <Field
                    type="text"
                    id="fechaIngreso"
                    name="fechaIngreso"
                    placeholder="Fecha de Ingreso"
                  />
                  <Field
                    type="text"
                    id="fechaRetiro"
                    name="fechaRetiro"
                    placeholder="Fecha de Retiro"
                  />
                  <Field
                    type="text"
                    id="ciudadNacimiento"
                    name="ciudadNacimiento"
                    placeholder="Ciudad de Nacimiento"
                  />
                  <Field
                    type="text"
                    id="personaContacto"
                    name="personaContacto"
                    placeholder="Persona de Contacto"
                  />
                  <Field
                    type="text"
                    id="parentezcoContacto"
                    name="parentezcoContacto"
                    placeholder="Parentezco con el Contacto"
                  />
                  <Field
                    type="text"
                    id="telefonoContacto"
                    name="telefonoContacto"
                    placeholder="Telefono del Contacto"
                  />
                  <Field type="text" id="eps" name="eps" placeholder="EPS" />
                  <Field
                    type="text"
                    id="pension"
                    name="pension"
                    placeholder="Pension"
                  />
                </>
              )}
              {step === 3 && (
                <>
                  <Field
                    type="text"
                    id="cajaCompensacion"
                    name="cajaCompensacion"
                    placeholder="Caja de Compensacion"
                  />
                  <Field
                    type="text"
                    id="salarioReal"
                    name="salarioReal"
                    placeholder="Salario Real"
                  />
                  <Field
                    type="text"
                    id="salarioCotizado"
                    name="salarioCotizado"
                    placeholder="Salario Cotizado"
                  />
                  <Field
                    type="text"
                    id="numeroCuenta"
                    name="numeroCuenta"
                    placeholder="Número de Cuenta Bancaria"
                  />
                  <Field
                    type="text"
                    id="tipoCuenta"
                    name="tipoCuenta"
                    placeholder="Tipo de Cuenta"
                  />
                  <Field
                    type="text"
                    id="certificadoBancario"
                    name="certificadoBancario"
                    placeholder="Certificado Bancario"
                  />
                  <Field
                    type="text"
                    id="tipoContratacion"
                    name="tipoContratacion"
                    placeholder="Tipo de Contratación"
                  />
                  <Field
                    type="text"
                    id="vinculado"
                    name="vinculado"
                    placeholder="Vinculado"
                  />
                  <VoidDiv />
                </>
              )}

              <ButtonsSection>
                {step === 1 ? (
                  <VoidDiv />
                ) : (
                  <Button type="button" onClick={handleAnterior}>
                    <FaChevronLeft />
                    <p>Anterior</p>
                  </Button>
                )}
                {step === 3 ? (
                  <Button type="submit">Guardar</Button>
                ) : (
                  <Button type="button" onClick={handleSiguiente}>
                    <p>Siguiente</p> <FaChevronRight />
                  </Button>
                )}
              </ButtonsSection>
            </DivForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
