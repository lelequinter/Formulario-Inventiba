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
      <Steps step={step}/>
      <Formik>
        {() => (
          <Form>
            <DivForm>
              {step === 1 && (
                <>
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
                    id="fecha-ingreso"
                    name="fecha-ingreso"
                    placeholder="Fecha de Ingreso"
                  />
                  <Field
                    type="text"
                    id="fecha-retiro"
                    name="fecha-retiro"
                    placeholder="Fecha de Retiro"
                  />
                  <Field
                    type="text"
                    id="ciudad-nacimiento"
                    name="ciudad-nacimiento"
                    placeholder="Ciudad de Nacimiento"
                  />
                  <Field
                    type="text"
                    id="persona-contacto"
                    name="persona-contacto"
                    placeholder="Persona de Contacto"
                  />
                  <Field
                    type="text"
                    id="parentezco-contacto"
                    name="parentezco-contacto"
                    placeholder="Parentezco con el Contacto"
                  />
                  <Field
                    type="text"
                    id="telefono-contacto"
                    name="telefono-contacto"
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
                    id="caja-compensacion"
                    name="caja-compensacion"
                    placeholder="Caja de Compensacion"
                  />
                  <Field
                    type="text"
                    id="salario-real"
                    name="salario-real"
                    placeholder="Salario Real"
                  />
                  <Field
                    type="text"
                    id="salario-cotizado"
                    name="salario-cotizado"
                    placeholder="Salario Cotizado"
                  />
                  <Field
                    type="text"
                    id="numero-cuenta"
                    name="numero-cuenta"
                    placeholder="Número de Cuenta Bancaria"
                  />
                  <Field
                    type="text"
                    id="tipo-cuenta"
                    name="tipo-cuenta"
                    placeholder="Tipo de Cuenta"
                  />
                  <Field
                    type="text"
                    id="certificado-bancario"
                    name="certificado-bancario"
                    placeholder="Certificado Bancario"
                  />
                  <Field
                    type="text"
                    id="tipo-contratacion"
                    name="tipo-contratacion"
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
                <Button type="button" onClick={() => {handleSiguiente()}}>
                  {step === 3 ? <p>Guardar</p> : <><p>Siguiente</p> <FaChevronRight /></> }
                </Button>
              </ButtonsSection>
            </DivForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
