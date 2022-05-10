import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Steps } from "../Steps/Steps";
import "./styles.css";
import {
  Wrapper,
  Container,
  StyledTitle,
  DivForm,
  ButtonsSection,
  Button,
  VoidDiv,
  DivInputFile,
  StyledError,
} from "./styles";

export const Formulario = () => {
  const [step, setStep] = useState(1);
  const [showHoja, setShowHoja] = useState(false);
  const [showCertificado, setShowCertificado] = useState(false);

  const handleAnterior = () => {
    setStep(() => step - 1);
  };

  const handleSiguiente = () => {
    setStep(() => step + 1);
  };

  return (
    <Wrapper>
      <Container>
        <StyledTitle>
          <h1>Nuevo Colaborador</h1>
          <h2>
            Ingresa los datos a continuación, incluyendo hoja de vida,
            portafolio y certificado bancario.
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
          validate={(valores) => {
            let errores = {};

            // Validacion correo
            if (!valores.correo) {
              errores.correo = "Ingrese su correo";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo =
                "El correo solo puede contener letras, números, puntos y guiones";
            }

            // Validacion Documento de identidad
            if (!valores.cedula) {
              errores.cedula = "Ingrese su documento de identidad";
            } else if (!/^([0-9])*$/.test(valores.cedula)) {
              errores.cedula =
                "El documento de identidad solo puede contener números";
            }

            // Validacion Nombres
            if (!valores.nombres) {
              errores.nombres = "Ingrese sus nombres";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombres)) {
              errores.nombres =
                "Los nombres solo pueden contener letras y espacios";
            }

            // Validacion Apellidos
            if (!valores.apellidos) {
              errores.apellidos = "Ingrese sus Apellidos";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidos)) {
              errores.apellidos =
                "Los apellidos solo pueden contener letras y espacios";
            }

            // Validacion Email Corporativo
            if (!valores.emailcorp) {
              errores.emailcorp = "Ingrese su correo corporativo";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.emailcorp
              )
            ) {
              errores.emailcorp =
                "El correo solo puede contener letras, números, puntos y guiones";
            }

            // Validacion Email Alternativo
            if (!valores.emailalt) {
              errores.emailalt = "Ingrese su correo alternativo";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.emailalt
              )
            ) {
              errores.emailalt =
                "El correo solo puede contener letras, números, puntos y guiones";
            }

            // Validacion Skype
            if (!valores.skype) {
              errores.skype = "Ingrese su usuario de skype";
            }

            // Validacion Direccion
            if (!valores.direccion) {
              errores.direccion = "Ingrese su dirreción";
            }

            // Validacion Telefono
            if (!valores.telefono) {
              errores.telefono = "Ingrese su teléfono";
            } else if (!/^([0-9+\s])*$/.test(valores.telefono)) {
              errores.telefono = "El teléfono solo puede contener números";
            }

            // Validacion Celular
            if (!valores.celular) {
              errores.celular = "Ingrese su número celular";
            } else if (!/^([0-9/+\s])*$/.test(valores.celular)) {
              errores.celular = "El número celular solo puede contener números";
            }

            // Validacion Fecha de Ingreso
            if (!valores.fechaIngreso) {
              errores.fechaIngreso = "Ingrese una fecha";
            }

            // Validacion Ciudad de Nacimiento
            if (!valores.ciudadNacimiento) {
              errores.ciudadNacimiento =
                "Ingrese el nombre de su ciudad de nacimiento";
            } else if (
              !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ciudadNacimiento)
            ) {
              errores.ciudadNacimiento =
                "El nombre de la ciudad solo puede contener letras y espacios";
            }

            // Validacion Persona de Contacto
            if (!valores.personaContacto) {
              errores.personaContacto =
                "Ingrese el nombre de su persona de contacto";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.personaContacto)) {
              errores.personaContacto =
                "El nombre de la persona solo puede contener letras y espacios";
            }

            // Validacion Parentezco
            if (!valores.parentezcoContacto) {
              errores.parentezcoContacto =
                "Ingrese su parentezco con la persona de contacto";
            }

            // Validacion Telefono Contacto
            if (!valores.telefonoContacto) {
              errores.telefonoContacto = "Ingrese el teléfono del contacto";
            } else if (!/^([0-9/+\s])*$/.test(valores.telefonoContacto)) {
              errores.telefonoContacto =
                "El número teléfono solo puede contener números";
            }

            // Validacion Eps
            if (!valores.eps) {
              errores.eps = "Ingrese el nombre de su EPS";
            }

            // Validacion Pension
            if (!valores.pension) {
              errores.pension = "Ingrese el nombre de su fondo de pensiones";
            }

            // Validacion Caja de Compensacion
            if (!valores.cajaCompensacion) {
              errores.cajaCompensacion =
                "Ingrese el nombre de su caja de compensación";
            }

            // Validacion Salario Real
            if (!valores.salarioReal) {
              errores.salarioReal = "Ingrese su salario real";
            } else if (!/^([0-9.,'"])*$/.test(valores.salarioReal)) {
              errores.salarioReal =
                "El salario solo puede contener números o simbolos de separacion ";
            }

            // Validacion Numero Cuenta Bancaria
            if (!valores.numeroCuenta) {
              errores.numeroCuenta = "Ingrese su número de cuenta bancaria";
            } else if (!/^([0-9.,-])*$/.test(valores.numeroCuenta)) {
              errores.numeroCuenta =
                "El número de cuenta solo puede contener números y guiones";
            }

            // Validacion Numero Cuenta Bancaria
            if (!valores.tipoCuenta) {
              errores.tipoCuenta = "Ingrese su tipo de cuenta bancaria";
            }

            // Validacion de Certificado bancario
            // Validacion de Certificado bancario
            // Validacion de Certificado bancario

            // Validacion de Hoja de Vida
            // Validacion de Hoja de Vida
            // Validacion de Hoja de Vida

            // Validacion Tipo de Contratacion
            if (!valores.tipoContratacion) {
              errores.tipoContratacion = "Seleccione el tipo de contratación";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            console.log(valores);
            resetForm();
          }}
        >
          {({ handleSubmit, values, touched, errors }) => (
            <Form onSubmit={handleSubmit}>
              <DivForm>
                {step === 1 && (
                  <>
                    <Field
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="Correo"
                      className={`${
                        touched.correo && errors.correo && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.correo && errors.correo && errors.correo}
                    </StyledError>
                    <Field
                      type="text"
                      id="cedula"
                      name="cedula"
                      placeholder="Documento de identidad"
                      className={`${
                        touched.cedula && errors.cedula && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.cedula && errors.cedula && errors.cedula}
                    </StyledError>
                    <Field
                      type="text"
                      id="nombres"
                      name="nombres"
                      placeholder="Nombres"
                      className={`${
                        touched.nombres && errors.nombres && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.nombres && errors.nombres && errors.nombres}
                    </StyledError>
                    <Field
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Apellidos"
                      className={`${
                        touched.apellidos && errors.apellidos && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.apellidos &&
                        errors.apellidos &&
                        errors.apellidos}
                    </StyledError>
                    <Field
                      type="email"
                      id="emailcorp"
                      name="emailcorp"
                      placeholder="Email Corporativo"
                      className={`${
                        touched.emailcorp && errors.emailcorp && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.emailcorp &&
                        errors.emailcorp &&
                        errors.emailcorp}
                    </StyledError>
                    <Field
                      type="email"
                      id="emailalt"
                      name="emailalt"
                      placeholder="Email Alternativo"
                      className={`${
                        touched.emailalt && errors.emailalt && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.emailalt && errors.emailalt && errors.emailalt}
                    </StyledError>
                    <Field
                      type="text"
                      id="skype"
                      name="skype"
                      placeholder="Skype"
                      className={`${
                        touched.skype && errors.skype && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.skype && errors.skype && errors.skype}
                    </StyledError>
                    <Field
                      type="text"
                      id="direccion"
                      name="direccion"
                      placeholder="Dirección Física"
                      className={`${
                        touched.direccion && errors.direccion && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.direccion &&
                        errors.direccion &&
                        errors.direccion}
                    </StyledError>
                    <Field
                      type="text"
                      id="telefono"
                      name="telefono"
                      placeholder="Teléfono"
                      className={`${
                        touched.telefono && errors.telefono && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.telefono && errors.telefono && errors.telefono}
                    </StyledError>
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
                      className={`${
                        touched.celular && errors.celular && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.celular && errors.celular && errors.celular}
                    </StyledError>
                    <Field
                      id="fechaIngreso"
                      name="fechaIngreso"
                      placeholder="Fecha de Ingreso"
                      onMouseEnter={(e) => (e.target.type = "date")}
                      onMouseLeave={(e) => (e.target.type = "text")}
                      className={`${
                        touched.fechaIngreso &&
                        errors.fechaIngreso &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.fechaIngreso &&
                        errors.fechaIngreso &&
                        errors.fechaIngreso}
                    </StyledError>
                    <Field
                      id="fechaRetiro"
                      name="fechaRetiro"
                      placeholder="Fecha de Retiro"
                      onMouseEnter={(e) => (e.target.type = "date")}
                      onMouseLeave={(e) => (e.target.type = "text")}
                    />
                    <StyledError />
                    <Field
                      type="text"
                      id="ciudadNacimiento"
                      name="ciudadNacimiento"
                      placeholder="Ciudad de Nacimiento"
                      className={`${
                        touched.ciudadNacimiento &&
                        errors.ciudadNacimiento &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.ciudadNacimiento &&
                        errors.ciudadNacimiento &&
                        errors.ciudadNacimiento}
                    </StyledError>
                    <Field
                      type="text"
                      id="personaContacto"
                      name="personaContacto"
                      placeholder="Persona de Contacto"
                      className={`${
                        touched.personaContacto &&
                        errors.personaContacto &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.personaContacto &&
                        errors.personaContacto &&
                        errors.personaContacto}
                    </StyledError>
                    <Field
                      type="text"
                      id="parentezcoContacto"
                      name="parentezcoContacto"
                      placeholder="Parentezco con el Contacto"
                      className={`${
                        touched.parentezcoContacto &&
                        errors.parentezcoContacto &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.parentezcoContacto &&
                        errors.parentezcoContacto &&
                        errors.parentezcoContacto}
                    </StyledError>
                    <Field
                      type="text"
                      id="telefonoContacto"
                      name="telefonoContacto"
                      placeholder="Telefono del Contacto"
                      className={`${
                        touched.telefonoContacto &&
                        errors.telefonoContacto &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.telefonoContacto &&
                        errors.telefonoContacto &&
                        errors.telefonoContacto}
                    </StyledError>
                    <Field
                      type="text"
                      id="eps"
                      name="eps"
                      placeholder="EPS"
                      className={`${touched.eps && errors.eps && "InputError"}`}
                    />
                    <StyledError>
                      {touched.eps && errors.eps && errors.eps}
                    </StyledError>
                    <Field
                      type="text"
                      id="pension"
                      name="pension"
                      placeholder="Pension"
                      className={`${
                        touched.pension && errors.pension && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.pension && errors.pension && errors.pension}
                    </StyledError>
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
                      className={`${
                        touched.cajaCompensacion &&
                        errors.cajaCompensacion &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.cajaCompensacion &&
                        errors.cajaCompensacion &&
                        errors.cajaCompensacion}
                    </StyledError>
                    <Field
                      type="text"
                      id="salarioReal"
                      name="salarioReal"
                      placeholder="Salario Real"
                      className={`${
                        touched.salarioReal &&
                        errors.salarioReal &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.salarioReal &&
                        errors.salarioReal &&
                        errors.salarioReal}
                    </StyledError>
                    <Field
                      type="text"
                      id="salarioCotizado"
                      name="salarioCotizado"
                      placeholder="Salario Cotizado"
                    />
                    <StyledError />
                    <Field
                      type="text"
                      id="numeroCuenta"
                      name="numeroCuenta"
                      placeholder="Número de Cuenta Bancaria"
                      className={`${
                        touched.numeroCuenta &&
                        errors.numeroCuenta &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.numeroCuenta &&
                        errors.numeroCuenta &&
                        errors.numeroCuenta}
                    </StyledError>
                    <Field
                      type="text"
                      id="tipoCuenta"
                      name="tipoCuenta"
                      placeholder="Tipo de Cuenta"
                      className={`${
                        touched.tipoCuenta && errors.tipoCuenta && "InputError"
                      }`}
                    />
                    <StyledError>
                      {touched.tipoCuenta &&
                        errors.tipoCuenta &&
                        errors.tipoCuenta}
                    </StyledError>
                    <DivInputFile>
                      <p>Certificado Bancario</p>
                      <Field
                        type="file"
                        id="certificadoBancario"
                        name="certificadoBancario"
                        placeholder="Certificado Bancario"
                        onMouseLeave={() => {
                          values.certificadoBancario &&
                            setShowCertificado(true);
                        }}
                        className={`${showCertificado && "show"}`}
                      />
                    </DivInputFile>
                    <StyledError />
                    <DivInputFile>
                      <p>Hoja de Vida</p>
                      <Field
                        type="file"
                        id="hojaDeVida"
                        name="hojaDeVida"
                        placeholder="Hoja De Vida"
                        onMouseLeave={() => {
                          values.hojaDeVida && setShowHoja(true);
                        }}
                        className={`${showHoja && "show"}`}
                      />
                    </DivInputFile>
                    <StyledError />
                    <Field
                      type="text"
                      id="portafolio"
                      name="portafolio"
                      placeholder="Link a Portafolio"
                    />
                    <StyledError />
                    <Field
                      type="text"
                      id="tipoContratacion"
                      name="tipoContratacion"
                      placeholder="Tipo de Contratación"
                      component="select"
                      className={`${
                        touched.tipoContratacion && errors.tipoContratacion && "InputError"
                      }`}
                    >
                      <option value="">Tipo de Contratación</option>
                      <option value="indefinido">Indefinido</option>
                      <option value="servicios">Servicios</option>
                      <option value="freelance">Freelance</option>
                      <option value="definido">Definido</option>
                    </Field>
                    <StyledError>
                      {touched.tipoContratacion &&
                        errors.tipoContratacion &&
                        errors.tipoContratacion}
                    </StyledError>
                    <DivInputFile>
                      <p>Vinculado</p>
                      <Field
                        type="checkbox"
                        id="vinculado"
                        name="vinculado"
                        placeholder="Vinculado"
                        className={"show"}
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
    </Wrapper>
  );
};
