import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { firebaseStorage } from "../Firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Formik, Form, Field } from "formik";
import {
  FaChevronRight,
  FaChevronLeft,
  FaUpload,
  FaCheckCircle,
} from "react-icons/fa";
import { Steps } from "../Steps/Steps";
import { SpinnerDotted } from "spinners-react";
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
  DivInputDate,
  StyledError,
  Row,
  Col,
} from "./styles";

export const Formulario = () => {
  const [step, setStep] = useState(1);
  const [showHoja, setShowHoja] = useState(false);
  const [showCertificado, setShowCertificado] = useState(false);
  const [showFechaRetiro, setShowFechaRetiro] = useState(false);
  const [showFechaIngreso, setShowFechaIngreso] = useState(false);
  const [showFechaNacimiento, setShowFechaNacimiento] = useState(false);

  const [urlHdV, setUrlHdV] = useState("");
  const [urlCertificado, setUrlCertificado] = useState("");

  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [uploadCertificado, setUploadCertificado] = useState(false);
  const [uploadHoja, setUploadHoja] = useState(false);

  const [errorUploadCertificado, setErrorUploadCertificado] = useState(false);
  const [errorUploadHoja, setErrorUploadHoja] = useState(false);

  const [validacionStepOne, setValidacionStepOne] = useState(false);
  const [validacionStepTwo, setValidacionStepTwo] = useState(false);
  const [validacionStepThree, setValidacionStepThree] = useState(false);

  const formRef = useRef(null);
  const hojaRef = useRef(null);
  const certificadoRef = useRef(null);

  const handleAnterior = () => {
    setStep(() => step - 1);
  };

  const handleSiguiente = () => {
    setStep(() => step + 1);
  };

  // var uploadTask;
  function subirArchivo(file, name) {
    if (!file || file.size / 1024 / 1024 > 1) return;

    // Reseteamos los errores en caso de que anteriormente se haya detectado alguno
    setErrorUploadCertificado(false);
    setErrorUploadHoja(false);

    // console.log(name);
    name === "hojaDeVida" ? setUploadHoja(true) : setUploadCertificado(true);
    const storageRef = ref(firebaseStorage, `/${new Date() + "-" + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // El evento donde comienza el control del estado de la subida
    // Supervisar en cada instante
    let URLFile = "";
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (prog === 100) {
          name === "hojaDeVida"
            ? setUploadHoja(false)
            : setUploadCertificado(false);
        }
      },
      (error) => {
        name === "hojaDeVida" && setErrorUploadHoja(true);
        error &&
          name === "certificadoBancario" &&
          setErrorUploadCertificado(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          name === "hojaDeVida"
            ? setUrlHdV(downloadURL)
            : setUrlCertificado(downloadURL);
        });
      }
    );

    return URLFile;
  }

  const CapitalizeString = (string) => {
    const capitalize = string.split(" ").map((i) => {
      return i.charAt(0).toUpperCase() + i.toLowerCase().slice(1);
    });

    return capitalize.toString().replace(/,/g, " ");
  };

  useEffect(() => {
    setTimeout(() => {
      setDone(false);
      setStep(1);
    }, 4000);
    // console.log("SetDone ejecutado");
  }, [done]);

  return (
    <Wrapper>
      <Container>
        <StyledTitle>
          <h1>Nuevo Colaborador</h1>
          {step !== 4 ? (
            <h2>
              Ingresa los datos a continuación, incluyendo hoja de vida,
              portafolio y certificado bancario.
            </h2>
          ) : (
            <h2>
              Por favor confirma que todos los datos ingresados son correctos
            </h2>
          )}
        </StyledTitle>
        {step !== 4 ? <Steps step={step} /> : ""}
        <Formik
          initialValues={{
            correo: "",
            cedula: "",
            fechaNacimiento: "",
            nombres: "",
            apellidos: "",
            emailcorp: "",
            emailalt: "",
            skype: "",
            direccion: "",
            ciudadResidencia: "",
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
            arl: "",
            cajaCompensacion: "",
            salarioAcordado: "",
            salarioCotizado: "",
            numeroCuenta: "",
            tipoCuenta: "",
            certificadoBancario: "",
            hojaDeVida: "",
            portafolio: "",
            repositorio: "",
            tipoContratacion: "",
            vinculado: false,
          }}
          validate={(valores) => {
            let errores = {};

            // Validacion correo
            // if (!valores.correo) {
            //   errores.correo = "Ingrese su correo";
            // } else if (
            //   !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            //     valores.correo
            //   )
            // ) {
            //   errores.correo =
            //     "El correo solo puede contener letras, números, puntos y guiones";
            // }

            // Validacion Documento de identidad
            if (!valores.cedula) {
              errores.cedula = "Ingrese su documento de identidad";
            } else if (!/^([0-9])*$/.test(valores.cedula)) {
              errores.cedula =
                "El documento de identidad solo puede contener números";
            }

            // Validacion Fecha de Nacimiento
            if (!valores.fechaNacimiento) {
              errores.fechaNacimiento = "Ingrese una fecha";
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
              errores.direccion = "Ingrese su dirección de residencia";
            }

            // VAlidacion ciudad de residencia
            if (!valores.ciudadResidencia) {
              errores.ciudadResidencia = "Ingrese su ciudad de residencia";
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

            // Validacion ARL
            // if (!valores.arl) {
            //   errores.arl = "Ingrese el nombre de su ARL";
            // }

            // Validacion Caja de Compensacion
            // if (!valores.cajaCompensacion) {
            //   errores.cajaCompensacion =
            //     "Ingrese el nombre de su caja de compensación";
            // }

            // Validacion Salario Real
            // if (!valores.salarioAcordado) {
            //   errores.salarioAcordado = "Ingrese su salario real";
            // } else if (!/^([0-9.,'"])*$/.test(valores.salarioAcordado)) {
            //   errores.salarioAcordado =
            //     "El salario solo puede contener números o simbolos de separacion";
            // }

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

            //Validacion de Certificado bancario
            if (!valores.certificadoBancario) {
              errores.certificadoBancario =
                "Adjunte su certificado de cuenta bancaria";
            }
            if (
              valores.certificadoBancario &&
              valores.certificadoBancario.size / 1024 / 1024 > 1
            ) {
              errores.certificadoBancario = "El tamaño del PDF excede 1Mb";
            }
            if (uploadCertificado) {
              errores.certificadoBancario =
                "No ha terminado de subir el documento";
            }
            if (errorUploadCertificado) {
              errores.certificadoBancario =
                "Ha ocurrido un error, vuelve a cargar el documento";
            }

            // Validacion de Hoja de Vida
            if (!valores.hojaDeVida) {
              errores.hojaDeVida = "Adjunte su hoja de vida";
            }
            if (
              valores.hojaDeVida &&
              valores.hojaDeVida.size / 1024 / 1024 > 1
            ) {
              errores.hojaDeVida = "El tamaño del PDF excede 1Mb";
            }
            if (uploadHoja) {
              errores.hojaDeVida = "No ha terminado de subir el documento";
            }
            if (errorUploadHoja) {
              errores.hojaDeVida =
                "Ha ocurrido un error, vuelve a cargar el documento";
            }

            // Validacion Tipo de Contratacion
            if (!valores.tipoContratacion) {
              errores.tipoContratacion = "Seleccione el tipo de contratación";
            }

            // Validacion portafolio y repositorio
            if (!valores.portafolio) {
              errores.portafolio = "Agregue la URL de su portafolio";
            }

            if (!valores.repositorio) {
              errores.repositorio = "Agregue la URL de su repositorio";
            }

            return errores;
          }}
          onSubmit={(values, { resetForm }) => {
            //Envio del formulario
            setLoading(true);
            const urls = {
              urlCertifica: urlCertificado,
              urlHojadeVida: urlHdV,
              vinculadoStr: values.vinculado ? "Sí" : "No",
            };
            const data = { ...values, ...urls };
            // console.log(data);
            emailjs
              .send(
                "service_hsmh3dj",
                "template_i6a61qv",
                data,
                "_pmKLtKc8gu3H24R6"
              )
              .then(() => {
                // console.log(res);
                setLoading(false);
                setDone(true);
                setShowHoja(false);
                setShowCertificado(false);
                setShowFechaRetiro(false);
                setShowFechaIngreso(false);
                setShowFechaNacimiento(false);
                setUrlCertificado("");
                setUrlHdV("");
                setValidacionStepOne(false);
                setValidacionStepTwo(false);
                setValidacionStepThree(false);
                resetForm();
              })
              .catch((err) => console.log(err));
          }}
        >
          {({
            handleSubmit,
            values,
            touched,
            errors,
            setFieldValue,
            handleBlur,
          }) => (
            <Form onSubmit={handleSubmit} ref={formRef}>
              <DivForm>
                {step === 1 && (
                  <>
                    {/* <Field
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="Correo"
                      className={`${
                        (touched.correo || validacionStepOne) &&
                        errors.correo &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.correo || validacionStepOne) &&
                        errors.correo &&
                        errors.correo}
                    </StyledError> */}
                    <Field
                      type="text"
                      id="cedula"
                      name="cedula"
                      placeholder="Documento de identidad"
                      className={`${
                        (touched.cedula || validacionStepOne) &&
                        errors.cedula &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.cedula || validacionStepOne) &&
                        errors.cedula &&
                        errors.cedula}
                    </StyledError>
                    <DivInputDate
                      className={`${
                        (touched.fechaNacimiento || validacionStepOne) &&
                        errors.fechaNacimiento &&
                        "InputError"
                      }`}
                    >
                      <p>Fecha de Nacimiento</p>
                      <Field
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        placeholder="Fecha de Nacimineto"
                        onMouseLeave={() => {
                          values.fechaNacimiento &&
                            setShowFechaNacimiento(true);
                        }}
                        className={`${showFechaNacimiento && "show"}`}
                      />
                    </DivInputDate>
                    <StyledError>
                      {(touched.fechaNacimiento || validacionStepOne) &&
                        errors.fechaNacimiento &&
                        errors.fechaNacimiento}
                    </StyledError>
                    <Field
                      type="text"
                      id="nombres"
                      name="nombres"
                      placeholder="Nombres"
                      className={`${
                        (touched.nombres || validacionStepOne) &&
                        errors.nombres &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.nombres || validacionStepOne) &&
                        errors.nombres &&
                        errors.nombres}
                    </StyledError>
                    <Field
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Apellidos"
                      className={`${
                        (touched.apellidos || validacionStepOne) &&
                        errors.apellidos &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.apellidos || validacionStepOne) &&
                        errors.apellidos &&
                        errors.apellidos}
                    </StyledError>
                    <Field
                      type="email"
                      id="emailcorp"
                      name="emailcorp"
                      placeholder="Email Corporativo"
                      className={`${
                        (touched.emailcorp || validacionStepOne) &&
                        errors.emailcorp &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.emailcorp || validacionStepOne) &&
                        errors.emailcorp &&
                        errors.emailcorp}
                    </StyledError>
                    <Field
                      type="email"
                      id="emailalt"
                      name="emailalt"
                      placeholder="Email Alternativo"
                      className={`${
                        (touched.emailalt || validacionStepOne) &&
                        errors.emailalt &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.emailalt || validacionStepOne) &&
                        errors.emailalt &&
                        errors.emailalt}
                    </StyledError>
                    <Field
                      type="text"
                      id="skype"
                      name="skype"
                      placeholder="Skype"
                      className={`${
                        (touched.skype || validacionStepOne) &&
                        errors.skype &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.skype || validacionStepOne) &&
                        errors.skype &&
                        errors.skype}
                    </StyledError>
                    <Field
                      type="text"
                      id="direccion"
                      name="direccion"
                      placeholder="Dirección de Residencia"
                      className={`${
                        (touched.direccion || validacionStepOne) &&
                        errors.direccion &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.direccion || validacionStepOne) &&
                        errors.direccion &&
                        errors.direccion}
                    </StyledError>
                    <Field
                      type="text"
                      id="ciudadResidencia"
                      name="ciudadResidencia"
                      placeholder="Ciudad de Residencia"
                      className={`${
                        (touched.ciudadResidencia || validacionStepOne) &&
                        errors.ciudadResidencia &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.ciudadResidencia || validacionStepOne) &&
                        errors.ciudadResidencia &&
                        errors.ciudadResidencia}
                    </StyledError>
                    <Field
                      type="text"
                      id="telefono"
                      name="telefono"
                      placeholder="Teléfono"
                      className={`${
                        (touched.telefono || validacionStepOne) &&
                        errors.telefono &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.telefono || validacionStepOne) &&
                        errors.telefono &&
                        errors.telefono}
                    </StyledError>
                    {/* <VoidDiv /> */}
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
                        (touched.celular || validacionStepTwo) &&
                        errors.celular &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.celular || validacionStepTwo) &&
                        errors.celular &&
                        errors.celular}
                    </StyledError>
                    <DivInputDate
                      className={`${
                        (touched.fechaIngreso || validacionStepTwo) &&
                        errors.fechaIngreso &&
                        "InputError"
                      }`}
                    >
                      <p>Fecha de Ingreso</p>
                      <Field
                        type="date"
                        id="fechaIngreso"
                        name="fechaIngreso"
                        placeholder="Fecha de Ingreso"
                        onMouseLeave={() => {
                          values.fechaIngreso && setShowFechaIngreso(true);
                        }}
                        className={`${showFechaIngreso && "show"}`}
                      />
                    </DivInputDate>
                    <StyledError>
                      {(touched.fechaIngreso || validacionStepTwo) &&
                        errors.fechaIngreso &&
                        errors.fechaIngreso}
                    </StyledError>
                    <DivInputDate>
                      <p>Fecha de Retiro</p>
                      <Field
                        type="date"
                        id="fechaRetiro"
                        name="fechaRetiro"
                        placeholder="Fecha de Retiro"
                        onMouseLeave={() => {
                          values.fechaRetiro && setShowFechaRetiro(true);
                        }}
                        className={`${showFechaRetiro && "show"}`}
                      />
                    </DivInputDate>
                    <StyledError />
                    <Field
                      type="text"
                      id="ciudadNacimiento"
                      name="ciudadNacimiento"
                      placeholder="Ciudad de Nacimiento"
                      className={`${
                        (touched.ciudadNacimiento || validacionStepTwo) &&
                        errors.ciudadNacimiento &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.ciudadNacimiento || validacionStepTwo) &&
                        errors.ciudadNacimiento &&
                        errors.ciudadNacimiento}
                    </StyledError>
                    <Field
                      type="text"
                      id="personaContacto"
                      name="personaContacto"
                      placeholder="Persona de Contacto"
                      className={`${
                        (touched.personaContacto || validacionStepTwo) &&
                        errors.personaContacto &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.personaContacto || validacionStepTwo) &&
                        errors.personaContacto &&
                        errors.personaContacto}
                    </StyledError>
                    <Field
                      type="text"
                      id="parentezcoContacto"
                      name="parentezcoContacto"
                      placeholder="Parentezco con el Contacto"
                      className={`${
                        (touched.parentezcoContacto || validacionStepTwo) &&
                        errors.parentezcoContacto &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.parentezcoContacto || validacionStepTwo) &&
                        errors.parentezcoContacto &&
                        errors.parentezcoContacto}
                    </StyledError>
                    <Field
                      type="text"
                      id="telefonoContacto"
                      name="telefonoContacto"
                      placeholder="Telefono del Contacto"
                      className={`${
                        (touched.telefonoContacto || validacionStepTwo) &&
                        errors.telefonoContacto &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.telefonoContacto || validacionStepTwo) &&
                        errors.telefonoContacto &&
                        errors.telefonoContacto}
                    </StyledError>
                    <Field
                      type="text"
                      id="eps"
                      name="eps"
                      placeholder="EPS"
                      className={`${
                        (touched.eps || validacionStepTwo) &&
                        errors.eps &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.eps || validacionStepTwo) &&
                        errors.eps &&
                        errors.eps}
                    </StyledError>
                    <Field
                      type="text"
                      id="pension"
                      name="pension"
                      placeholder="Pension"
                      className={`${
                        (touched.pension || validacionStepTwo) &&
                        errors.pension &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.pension || validacionStepTwo) &&
                        errors.pension &&
                        errors.pension}
                    </StyledError>
                    <Field
                      type="text"
                      id="arl"
                      name="arl"
                      placeholder="ARL"
                      className={`${
                        (touched.arl || validacionStepTwo) &&
                        errors.arl &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.arl || validacionStepTwo) &&
                        errors.arl &&
                        errors.arl}
                    </StyledError>
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
                        (touched.cajaCompensacion || validacionStepThree) &&
                        errors.cajaCompensacion &&
                        "InputError"
                      }`}
                      onInput={(e) => {
                        e.target.value = CapitalizeString(e.target.value);
                      }}
                    />
                    <StyledError>
                      {(touched.cajaCompensacion || validacionStepThree) &&
                        errors.cajaCompensacion &&
                        errors.cajaCompensacion}
                    </StyledError>
                    <Field
                      type="text"
                      id="salarioAcordado"
                      name="salarioAcordado"
                      placeholder="Salario Acordado"
                      className={`${
                        (touched.salarioAcordado || validacionStepThree) &&
                        errors.salarioAcordado &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.salarioAcordado || validacionStepThree) &&
                        errors.salarioAcordado &&
                        errors.salarioAcordado}
                    </StyledError>
                    {/* <Field
                      type="text"
                      id="salarioCotizado"
                      name="salarioCotizado"
                      placeholder="Salario Cotizado"
                    />
                    <StyledError /> */}
                    <Field
                      type="text"
                      id="numeroCuenta"
                      name="numeroCuenta"
                      placeholder="Número de Cuenta Bancaria"
                      className={`${
                        (touched.numeroCuenta || validacionStepThree) &&
                        errors.numeroCuenta &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.numeroCuenta || validacionStepThree) &&
                        errors.numeroCuenta &&
                        errors.numeroCuenta}
                    </StyledError>
                    <Field
                      type="text"
                      id="tipoCuenta"
                      name="tipoCuenta"
                      placeholder="Tipo de Cuenta"
                      component="select"
                      className={`${
                        (touched.tipoCuenta || validacionStepThree) &&
                        errors.tipoCuenta &&
                        "InputError"
                      }`}
                    >
                      <option value="">Tipo de Cuenta</option>
                      <option value="Cuenta de Ahorros">
                        Cuenta de Ahorros
                      </option>
                      <option value="Cuenta Corriente">Cuenta Corriente</option>
                    </Field>
                    <StyledError>
                      {(touched.tipoCuenta || validacionStepThree) &&
                        errors.tipoCuenta &&
                        errors.tipoCuenta}
                    </StyledError>
                    <Field
                      type="text"
                      id="tipoContratacion"
                      name="tipoContratacion"
                      placeholder="Tipo de Contratación"
                      component="select"
                      className={`${
                        (touched.tipoContratacion || validacionStepThree) &&
                        errors.tipoContratacion &&
                        "InputError"
                      }`}
                    >
                      <option value="">Tipo de Contratación</option>
                      <option value="Indefinido">Indefinido</option>
                      <option value="Servicios">Servicios</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Definido">Definido</option>
                    </Field>
                    <StyledError>
                      {(touched.tipoContratacion || validacionStepThree) &&
                        errors.tipoContratacion &&
                        errors.tipoContratacion}
                    </StyledError>
                    <DivInputFile
                      className={`${
                        (touched.certificadoBancario ||
                          validacionStepThree ||
                          showCertificado) &&
                        errors.certificadoBancario &&
                        "InputError"
                      }`}
                      onClick={() => {
                        setUrlCertificado("");
                        certificadoRef.current.click();
                        !values.certificadoBancario &&
                          (errors.certificadoBancario =
                            "Adjunte su certificado de cuenta bancaria");
                        !values.certificadoBancario && setShowCertificado(true);
                      }}
                    >
                      <p>Certificado Bancario</p>
                      <input
                        hidden
                        ref={certificadoRef}
                        type="file"
                        id="certificadoBancario"
                        name="certificadoBancario"
                        placeholder="Certificado Bancario"
                        accept="application/pdf"
                        onChange={(e) => {
                          subirArchivo(
                            e.target.files[0],
                            "certificadoBancario"
                          );
                          setFieldValue(
                            "certificadoBancario",
                            e.target.files[0]
                          );
                        }}
                      />
                      {values.certificadoBancario ? (
                        <span className="scroll">
                          {values.certificadoBancario.name}
                        </span>
                      ) : (
                        <span>Cargar archivo (PDF)</span>
                      )}
                      {uploadCertificado ? (
                        <SpinnerDotted size={25} color="#757575" />
                      ) : (
                        <FaUpload />
                      )}
                    </DivInputFile>
                    <StyledError>
                      {(touched.certificadoBancario ||
                        validacionStepThree ||
                        showCertificado) &&
                        errors.certificadoBancario &&
                        errors.certificadoBancario}
                    </StyledError>
                    <DivInputFile
                      className={`${
                        (touched.hojaDeVida ||
                          validacionStepThree ||
                          showHoja) &&
                        errors.hojaDeVida &&
                        "InputError"
                      }`}
                      onClick={() => {
                        setUrlHdV("");
                        hojaRef.current.click();
                        !values.hojaDeVida &&
                          (errors.hojaDeVida = "Adjunte su hoja de vida");
                        !values.hojaDeVida && setShowHoja(true);
                      }}
                    >
                      <p>Hoja de Vida</p>
                      <input
                        hidden
                        ref={hojaRef}
                        type="file"
                        id="hojaDeVida"
                        name="hojaDeVida"
                        placeholder="Hoja De Vida"
                        accept="application/pdf"
                        onChange={(e) => {
                          subirArchivo(e.target.files[0], "hojaDeVida");
                          setFieldValue("hojaDeVida", e.target.files[0]);
                        }}
                      />
                      {values.hojaDeVida ? (
                        <span className="scroll">{values.hojaDeVida.name}</span>
                      ) : (
                        <span>Cargar archivo (PDF)</span>
                      )}
                      {uploadHoja ? (
                        <SpinnerDotted size={25} color="#757575" />
                      ) : (
                        <FaUpload />
                      )}
                    </DivInputFile>
                    <StyledError>
                      {(touched.hojaDeVida ||
                        validacionStepThree ||
                        showHoja) &&
                        errors.hojaDeVida &&
                        errors.hojaDeVida}
                    </StyledError>
                    <Field
                      type="text"
                      id="portafolio"
                      name="portafolio"
                      placeholder="Link a Portafolio"
                      className={`${
                        (touched.portafolio || validacionStepThree) &&
                        errors.portafolio &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.portafolio || validacionStepThree) &&
                        errors.portafolio &&
                        errors.portafolio}
                    </StyledError>
                    {/* <DivInputFile>
                      <p>Vinculado</p>
                      <Field
                        type="checkbox"
                        id="vinculado"
                        name="vinculado"
                        placeholder="Vinculado"
                        className={"show"}
                      />
                    </DivInputFile> */}
                    <Field
                      type="text"
                      id="repositorio"
                      name="repositorio"
                      placeholder="Link a Repositorio"
                      className={`${
                        (touched.repositorio || validacionStepThree) &&
                        errors.repositorio &&
                        "InputError"
                      }`}
                    />
                    <StyledError>
                      {(touched.repositorio || validacionStepThree) &&
                        errors.repositorio &&
                        errors.repositorio}
                    </StyledError>
                  </>
                )}
                {step === 4 && (
                  <>
                    {/* <Row>
                      <Col>
                        <span>Correo</span>
                      </Col>
                      <Col>
                        {errors.correo ? (
                          <StyledError>{errors.correo}</StyledError>
                        ) : (
                          <p>{values.correo}</p>
                        )}
                      </Col>
                    </Row> */}
                    <Row>
                      <Col>
                        <span>Cédula</span>
                      </Col>
                      <Col>
                        {errors.cedula ? (
                          <StyledError>{errors.cedula}</StyledError>
                        ) : (
                          <p>{values.cedula}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Nombres</span>
                      </Col>
                      <Col>
                        {errors.nombres ? (
                          <StyledError>{errors.nombres}</StyledError>
                        ) : (
                          <p>{values.nombres}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Apellidos</span>
                      </Col>
                      <Col>
                        {errors.apellidos ? (
                          <StyledError>{errors.apellidos}</StyledError>
                        ) : (
                          <p>{values.apellidos}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Email Corporativo</span>
                      </Col>
                      <Col>
                        {errors.emailcorp ? (
                          <StyledError>{errors.emailcorp}</StyledError>
                        ) : (
                          <p>{values.emailcorp}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Email Alternativo</span>
                      </Col>
                      <Col>
                        {errors.emailalt ? (
                          <StyledError>{errors.emailalt}</StyledError>
                        ) : (
                          <p>{values.emailalt}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Skype</span>
                      </Col>
                      <Col>
                        {errors.skype ? (
                          <StyledError>{errors.skype}</StyledError>
                        ) : (
                          <p>{values.skype}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Dirección Fisica</span>
                      </Col>
                      <Col>
                        {errors.direccion ? (
                          <StyledError>{errors.direccion}</StyledError>
                        ) : (
                          <p>{values.direccion}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Teléfono</span>
                      </Col>
                      <Col>
                        {errors.telefono ? (
                          <StyledError>{errors.telefono}</StyledError>
                        ) : (
                          <p>{values.telefono}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Celular</span>
                      </Col>
                      <Col>
                        {errors.celular ? (
                          <StyledError>{errors.celular}</StyledError>
                        ) : (
                          <p>{values.celular}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Fecha de Ingreso</span>
                      </Col>
                      <Col>
                        {errors.fechaIngreso ? (
                          <StyledError>{errors.fechaIngreso}</StyledError>
                        ) : (
                          <p>{values.fechaIngreso}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Fecha de Retiro</span>
                      </Col>
                      <Col>
                        <p>{values.fechaRetiro}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Ciudad de Nacimiento</span>
                      </Col>
                      <Col>
                        {errors.ciudadNacimiento ? (
                          <StyledError>{errors.ciudadNacimiento}</StyledError>
                        ) : (
                          <p>{values.ciudadNacimiento}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Persona de Contacto</span>
                      </Col>
                      <Col>
                        {errors.personaContacto ? (
                          <StyledError>{errors.personaContacto}</StyledError>
                        ) : (
                          <p>{values.personaContacto}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Parentezco del Contacto</span>
                      </Col>
                      <Col>
                        {errors.parentezcoContacto ? (
                          <StyledError>{errors.parentezcoContacto}</StyledError>
                        ) : (
                          <p>{values.parentezcoContacto}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Teléfono del Contacto</span>
                      </Col>
                      <Col>
                        {errors.telefonoContacto ? (
                          <StyledError>{errors.telefonoContacto}</StyledError>
                        ) : (
                          <p>{values.telefonoContacto}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Eps</span>
                      </Col>
                      <Col>
                        {errors.eps ? (
                          <StyledError>{errors.eps}</StyledError>
                        ) : (
                          <p>{values.eps}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Pension</span>
                      </Col>
                      <Col>
                        {errors.pension ? (
                          <StyledError>{errors.pension}</StyledError>
                        ) : (
                          <p>{values.pension}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Caja de Compensacion</span>
                      </Col>
                      <Col>
                        {errors.cajaCompensacion ? (
                          <StyledError>{errors.cajaCompensacion}</StyledError>
                        ) : (
                          <p>{values.cajaCompensacion}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Salario Real</span>
                      </Col>
                      <Col>
                        {errors.salarioAcordado ? (
                          <StyledError>{errors.salarioAcordado}</StyledError>
                        ) : (
                          <p>{values.salarioAcordado}</p>
                        )}
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col>
                        <span>Salario Cotizado</span>
                      </Col>
                      <Col>
                        <p>{values.salarioCotizado}</p>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col>
                        <span>Número de Cuenta Bancaria</span>
                      </Col>
                      <Col>
                        {errors.numeroCuenta ? (
                          <StyledError>{errors.numeroCuenta}</StyledError>
                        ) : (
                          <p>{values.numeroCuenta}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Tipo de Cuenta</span>
                      </Col>
                      <Col>
                        {errors.tipoCuenta ? (
                          <StyledError>{errors.tipoCuenta}</StyledError>
                        ) : (
                          <p>{values.tipoCuenta}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Tipo de Contratación</span>
                      </Col>
                      <Col>
                        {errors.tipoContratacion ? (
                          <StyledError>{errors.tipoContratacion}</StyledError>
                        ) : (
                          <p>{values.tipoContratacion}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Certificado Bancario</span>
                      </Col>
                      <Col>
                        {errors.certificadoBancario ? (
                          <StyledError>
                            {errors.certificadoBancario}
                          </StyledError>
                        ) : (
                          <p>{values.certificadoBancario.name}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Hoja de Vida</span>
                      </Col>
                      <Col>
                        {errors.hojaDeVida ? (
                          <StyledError>{errors.hojaDeVida}</StyledError>
                        ) : (
                          <p>{values.hojaDeVida.name}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Link a Portafolio</span>
                      </Col>
                      <Col>
                        <p>{values.portafolio}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span>Link a Repositorio</span>
                      </Col>
                      <Col>
                        <p>{values.repositorio}</p>
                      </Col>
                    </Row>
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
                    {step === 4 && (
                      <Button
                        type="submit"
                        id="submit-button"
                        name="submit-button"
                        style={{ backgroundColor: done && "#9CCA1F" }}
                      >
                        {done ? (
                          <>
                            <p>Enviado</p> <FaCheckCircle size={20} />
                          </>
                        ) : (
                          "Guardar"
                        )}
                        {loading && (
                          <SpinnerDotted
                            size={20}
                            thickness={100}
                            speed={100}
                            color="#fff"
                          />
                        )}
                      </Button>
                    )}
                    {step !== 4 && (
                      <Button
                        type="button"
                        id="nextButton"
                        name="nextButton"
                        onMouseEnter={handleBlur}
                        onClick={() => {
                          if (step === 1) {
                            setValidacionStepOne(true);
                          }

                          if (step === 2) {
                            setValidacionStepTwo(true);
                          }

                          if (step === 3) {
                            setValidacionStepThree(true);
                          }

                          step === 1 &&
                            values.cedula &&
                            values.fechaNacimiento &&
                            values.nombres &&
                            values.apellidos &&
                            values.emailcorp &&
                            values.emailalt &&
                            values.skype &&
                            values.direccion &&
                            values.ciudadResidencia &&
                            values.telefono &&
                            handleSiguiente();

                          step === 2 &&
                            values.celular &&
                            values.fechaIngreso &&
                            values.ciudadNacimiento &&
                            values.personaContacto &&
                            values.parentezcoContacto &&
                            values.telefonoContacto &&
                            values.eps &&
                            values.pension &&
                            // values.arl &&
                            handleSiguiente();

                          step === 3 &&
                            values.numeroCuenta &&
                            values.tipoCuenta &&
                            values.tipoContratacion &&
                            values.certificadoBancario &&
                            values.hojaDeVida &&
                            values.portafolio &&
                            values.repositorio &&
                            handleSiguiente();
                        }}
                      >
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
