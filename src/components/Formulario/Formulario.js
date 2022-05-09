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
  DivInputFile,
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
          hojaDeVida: "",
          portafolio: "",
          tipoContratacion: "",
          vinculado: false,
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          resetForm();
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
                  <VoidDiv />
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
                    id="fechaIngreso"
                    name="fechaIngreso"
                    placeholder="Fecha de Ingreso"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                  <Field
                    id="fechaRetiro"
                    name="fechaRetiro"
                    placeholder="Fecha de Retiro"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
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
                  <VoidDiv />
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
                  <DivInputFile>
                    <p>Certificado Bancario</p>
                    <Field
                      type="file"
                      id="certificadoBancario"
                      name="certificadoBancario"
                      placeholder="Certificado Bancario"
                    />
                  </DivInputFile>
                  <DivInputFile>
                    <p>Hoja de Vida</p>
                    <Field
                      type="file"
                      id="hojaDeVida"
                      name="hojaDeVida"
                      placeholder="Hoja De Vida"
                    />
                  </DivInputFile>
                  <Field
                    type="text"
                    id="portafolio"
                    name="portafolio"
                    placeholder="Portafolio"
                  />
                  <Field
                    type="text"
                    id="tipoContratacion"
                    name="tipoContratacion"
                    placeholder="Tipo de Contratación"
                  />
                  <DivInputFile>
                  <p>Vinculado</p>
                  <Field
                    type="checkbox"
                    id="vinculado"
                    name="vinculado"
                    placeholder="Vinculado"
                  />
                  </DivInputFile>
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
                <>
                  {step === 3 && <Button type="submit">Guardar</Button>}
                  {step !== 3 && (
                    <Button type="button" onClick={handleSiguiente}>
                      <p>Siguiente</p> <FaChevronRight />
                    </Button>
                  )}
                </>
              </ButtonsSection>
            </DivForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
