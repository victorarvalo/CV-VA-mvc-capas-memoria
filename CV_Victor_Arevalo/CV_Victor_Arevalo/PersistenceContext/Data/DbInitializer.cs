using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.PersistenceContext.Data
{
    public static class DbInitializer
    {
        private static IConfiguration Config;

        public static void Initialize(IServiceProvider serviceProvider)
        {
            Config = serviceProvider.GetRequiredService<IConfiguration>();
            using (var _context = new PersistenceContext(
                serviceProvider.GetRequiredService<DbContextOptions<PersistenceContext>>(),
                Config
                )
                )
            {
                PersonalData(_context);
                SummaryData(_context);
                TypeTraining(_context);
                ModalityTraining(_context);
                EducationData(_context);
                ExperienceData(_context);
                PersonalReference(_context);
            }
        }

        private static void PersonalData( PersistenceContext _context )
        {
            if(_context.PersonalData.Any())
            {
                return;
            }

            _context.PersonalData.Add(
                new PersonalData()
                {
                    name = "Víctor Manuel",
                    lastName = "Arévalo Fandiño",
                    age = 41,
                    bornDate = "05/03/1982",
                    bornPlace = "Bogotá - Colombia",
                    idDocument = "80126794",
                    address = "Av Calle 72 # 82 - 40, piso 1",
                    celPhone = "(+57)3004136306",
                    email = new List<string> { "victorarvalo@gmail.com", "victorarvalo@yahoo.com" }
                });
            _context.SaveChanges();
        }

        private static void SummaryData( PersistenceContext _context )
        {
            if(_context.SummaryData.Any()) { return; }

            _context.SummaryData.AddRange(
                new SummaryData
                {
                    Title = "OBJETIVOS PERSONALES",
                    Data = "Busco desarrollar un proyecto de vida que me permita crecer en forma individual a través de la participación activa y comprometida en cada uno de los aspectos que forman mi entorno personal, familiar, laboral, social y global. Este proceso de crecimiento se enmarca en condiciones personales como: Innovación y solución creativa de problemas, la participación activa y crítica en el trabajo en equipo, la capacidad de actuar en ambientes cambiantes y el liderazgo basado en la capacidad de orientar los esfuerzos grupales hacia el logro de objetivos."
                },
                new SummaryData
                {
                    Title = "OBJETIVOS PROFESIONALES",
                    Data = "Espero desempeñar cargos de ingeniería en las áreas relacionadas con mi formación profesional y experiencia laboral, caracterizados por niveles de responsabilidad y que representan tanto un reto laboral como intelectual. Mi objetivo es contribuir a la generación de valor de las organizaciones y comunidades en las cuales me encuentre interactuando."
                }
            );
            _context.SaveChanges();
        }

        private static void TypeTraining( PersistenceContext _context)
        {
            if (_context.TypeTraining.Any()) { return; }

            _context.TypeTraining.AddRange(
                new TypeTraining
                {
                    Type = "Academic"
                },
                new TypeTraining
                {
                    Type = "Business"
                }
            );

            _context.SaveChanges();
        }

        private static void ModalityTraining( PersistenceContext _context)
        {
            if (_context.ModalityTraining.Any()) { return; }

            _context.ModalityTraining.AddRange(
                new ModalityTraining
                {
                    Modality = "In Person"
                },
                new ModalityTraining
                {
                    Modality = "Virtual"
                }
            );

            _context.SaveChanges();
        }

        private static void EducationData( PersistenceContext _context)
        {
            if(_context.EducationData.Any()) { return; }

            _context.EducationData.AddRange(
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 1,
                    title = "Bachiller Academico",
                    institution = "Colegio Interamericano",
                    starDate = "02/02/1988",
                    finishDate = "31/11/1999",
                    summary = ""
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 1,
                    title = "Ingeniero de Diseño y Automatización Electrónica",
                    institution = "Universidad de La Salle",
                    starDate = "01/02/2000",
                    finishDate = "27/04/2012",
                    summary = ""
                },
                new EducationData
                {
                    IdTypeTraining = 2,
                    IdModalityTraining = 2,
                    title = "Ingles",
                    institution = "KOE Knowledge of English",
                    starDate = "02/02/2023",
                    finishDate = null,
                    summary = "Nivel: C2"
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "Tecnologías de información - Fundamentos de redes",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "01/12/2007",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "Instalación y administración del WINDOWS 2003 SERVER",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "15/12/2007",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "Java – Variables y estructuras de control en la programación orientada a objetos",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "15/12/2007",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "Java –Desarrollo de aplicaciones con interfaz gráfica, manejo de eventos, clases y objetos",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "01/05/2008",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "HTML- Diseño web con Macromedia dreamweaver MX",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "15/05/2008",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "Programación de páginas web con HTML y java script",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "01/06/2008",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 1,
                    IdModalityTraining = 2,
                    title = "Diseño de bases de datos en SQL",
                    institution = "Sena - Bogotá",
                    starDate = null,
                    finishDate = "15/09/2008",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 2,
                    IdModalityTraining = 2,
                    title = "Angular for Beginners Course",
                    institution = "Angular University",
                    starDate = null,
                    finishDate = "01/10/2023",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 2,
                    IdModalityTraining = 2,
                    title = "CRUD Angular + Net Core + Entity Framework",
                    institution = "Udemy",
                    starDate = null,
                    finishDate = "01/11/2023",
                    summary = null
                },
                new EducationData
                {
                    IdTypeTraining = 2,
                    IdModalityTraining = 2,
                    title = "Reajc JS: La biblioteca creada por Facebook",
                    institution = "Udemy",
                    starDate = null,
                    finishDate = "14/11/2023",
                    summary = null
                }
            );

            _context.SaveChanges();
        }

        private static void ExperienceData(PersistenceContext _context)
        {
            if (_context.ExperienceData.Any()) { return; }

            _context.ExperienceData.AddRange(

                new ExperienceData
                {
                    enterprise = "IQ Electronics",
                    phone = "2955856",
                    url = null,
                    position = "Técnico en Reparación",
                    summary = "Mi desempeño se centró principalmente en la logística, reparación y ensamble y de equipos electrónicos, encargados por nuestros clientes para la re-manufactura de los mismos.",
                    detailSummary = null,
                    skills = null,
                    startDate = "01/03/2010",
                    finishDate = "31/08/2010"
                },
                new ExperienceData
                {
                    enterprise = "Colvatel S.A. E.S.P",
                    phone = "4387000",
                    url = null,
                    position = "Técnico de instalación",
                    summary = "Mi desempeño se centró principalmente en la instalación y configuración de módems domiciliarios para la conexión a internet.",
                    detailSummary = null,
                    skills = null,
                    startDate = "01/09/2010",
                    finishDate = "30/11/2010"
                },
                new ExperienceData
                {
                    enterprise = "Automatización y Comunicaciones Industriales",
                    phone = "6014124233",
                    url = null,
                    position = "Ingeniero de Proyectos",
                    summary = "Realicé la parte logística y operativa de la prestación de servicios de asesoría y reparación en la parte de automatización y eléctrica de los clientes en la industria. Mi desempeño se centra principalmente en los siguientes aspectos:",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Asesoría y soporte telefónico de los sistemas de automatización de clientes"
                        },
                        new DetailSummary
                        {
                            detail = "Prestación de servicios en el área de automatización en la industria"
                        },
                        new DetailSummary

                         {
                            detail = "Programación e implementación de sistemas de control y supervisión de acuerdo a los requerimientos del proyecto"
                        },
                        new DetailSummary
                        {
                            detail = "Capacitación de personal encargado de las áreas operativas y de mantenimiento de los diferentes sistemas de automatización"
                        },
                        new DetailSummary
                         {
                            detail = "Desarrollo de la documentación de proyectos realizados por la compañía."
                        },
                        new DetailSummary
                        {
                            detail = "Coordinación en la ejecución de proyectos de automatización"
                        },
                        new DetailSummary
                        {
                            detail = "Asistencia en el diseño y dimensionamiento de proyectos de la parte de automatización"
                        }
                    },
                    skills = new List<Skill>
                    {
                        new Skill
                        {
                                skil = "Programación e implementación de base de datos SQL Server 2008 y sitio web ASP .NET para reportes de zona de pasteurización en la planta de helados de Colombina S.A."

                        },
                        new Skill
                        {
                                skil = "Programación e implementación de PLC Siemens S7-300 y Panel PC Siemens para el control y supervisión de autoclave “GETINGE” en las instalaciones de Vecol S.A."

                        },
                        new Skill
                        {
                                skil = "Programación e implementación de PLC Siemens S7-300, SCADA Win CC 7.2 y base de datos SQL Server 2008 para visualización y control del área de jarabes en Aje Colombia."

                        },
                        new Skill
                         {
                                skil = "Programación e implementación de PLC Siemens S7-300, HMI OP177B Siemens y SCADA Ifix 3.5 para la visualización, control y supervisión de cuartos de enfriamiento de carnes, pescados y pollos del Carulla Vivero."

                        },
                        new Skill
                        {
                                skil = "Programación e implementación de migración de PLC S5-S95U a PLC S7-300 de cuartos de enfriamiento de carnes de Carulla Vivero."

                        },
                        new Skill
                        {
                                skil = "Programación e implementación de PLC S7-400 y SCADA WinCC V7.0 para el control y supervisión de línea de producción de yeso de los sistemas drywall en la planta de Gyplac Cartagena."

                        },
                        new Skill
                        {
                                skil = "Migración de SCADA Ifix 3.0 a SCADA Ifix 3.5 de la supervisión y control de las líneas de laminación y molienda de Alimentos Polar"

                        },
                        new Skill
                        {
                                skil = "Capacitación de Step 7 básico, intermedio y avanzado en las instalaciones de Siemens Tenjo."

                        },
                        new Skill
                        {
                                skil = "Capacitación de Tia Portal V12 en las instalaciones de Sena"

                        }
                    },
                    startDate = "01/11/2010",
                    finishDate = "31/10/2014"
                },
                new ExperienceData
                {
                    enterprise = "3 PULGADAS ING",
                    phone = "6012678261",
                    url = null,
                    position = "Ingeniero de Proyectos",
                    summary = "Realice la parte logística y operativa de la prestación de servicios de asesoría y reparación en la parte de automatización y eléctrica de los clientes en la industria. Mi desempeño se centra principalmente en los siguientes aspectos:",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Asesoría y soporte de los sistemas de automatización de clientes"
                        },
                                    new DetailSummary
                        {
                            detail = "Prestación de servicios en el área de automatización en la industria"
                        },new DetailSummary
                        {
                            detail = "Programación e implementación de sistemas de control y supervisión de acuerdo a los requerimientos del proyecto"
                        },new DetailSummary
                        {
                            detail = "Preparación y presentación de ofertas comerciales en el área de automatización."
                        },new DetailSummary
                        {
                            detail = "Diseño y dimensionamiento de proyectos de la parte de automatización."
                        }
                    },
                    skills = new List<Skill>
                    {
                        new Skill
                        {
                                skil = "Programación e implementación de PLC Mitsubishi serie Q"

                        },new Skill
                        {
                                skil = "Programación e implementación de Scada Mitsubishi"

                        }
                    },
                    startDate = "01/10/2014",
                    finishDate = "31/01/2015"
                },
                new ExperienceData
                {
                    enterprise = "Process Solutions S.A.S.",
                    phone = "6016052116",
                    url = "",
                    position = "Ingeniero de Soporte y Proyectos",
                    summary = "Realicé la parte logística y operativa de la prestación de servicios de asesoría e implementación de proyectos de automatización:",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Asesoría y soporte de los sistemas de automatización de clientes"
                        },new DetailSummary
                        {
                            detail = "Programación e implementación de sistemas de control y supervisión de acuerdo a los requerimientos del proyecto"
                        }
                    },
                    skills = new List<Skill>
                    {
                        new Skill
                        {
                                skil = "Gerencia de proyecto de Visualización Remota Operativa en las oficinas de Bogotá de Oleoducto de los Llanos Orientales."

                        },new Skill
                        {
                                skil = "Programación, implementación y soporte en Terminal de Hidrocarburos de Sociedad Puertario Puerto Bahia (SPPB)"

                        },new Skill
                        {
                                skil = "Programación, implementación y soporte de SCADA en WinCC v7-2 para PCS7"

                        },new Skill
                        {
                                skil = "Programación, implementación y soporte de comunicaciones de instrumentación de campo y PLC para PCS7"

                        }
                    },
                    startDate = "01/02/2015",
                    finishDate = "30/03/2018"
                },
                new ExperienceData
                {
                    enterprise = "Delcop Colombia S.A.S. ",
                    phone = "6014251180",
                    url = null,
                    position = "Ingeniero Programador",
                    summary = "Realicé la parte operativa de los proyectos de implementación de facturación electrónica:",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Programación de aplicaciones Web y de escritorio para proyectos de implementación de facturación electrónica."
                        },new DetailSummary
                        {
                            detail = "Coordinación de proyectos de implementación de facturación electrónica."
                        },new DetailSummary
                        {
                            detail = "Programación, implementación y pruebas de reportes de facturación electrónica"
                        }
                    },
                    skills = new List<Skill> {
                        new Skill
                        {
                                skil = "Coordinación de proyectos de implementación de facturación electrónica"

                        },new Skill
                        {
                                skil = "Coordinación de programación de aplicaciones de escritorio para facturación electrónica"

                        },new Skill
                        {
                                skil = "Programación de aplicaciones web para facturación electrónica"

                        },new Skill
                        {
                                skil = "Programación, pruebas e implementación de proyectos de facturación electrónica en plataformas de pruebas y producción"

                        },new Skill
                        {
                                skil = "Programación de aplicaciones de web y escritorio en Visual Studio 2017"

                        },new Skill
                        {
                                skil = "Planeación, programación, pruebas e implementación de aplicaciones de consola, Windows Forms, aplicaciones Web, WebService REST para proyectos de facturación electrónica"

                        },new Skill
                        {
                                skil = "Programación de consumo de Webservice REST y SOAP de diferentes plataformas para obtención y envío de información relacionado a proyectos de facturación electrónica"

                        }
                    },
                    startDate = "01/04/2018",
                    finishDate = "31/01/2020"
                },
                new ExperienceData
                {
                    enterprise = "Robotec S.A.S",
                    phone = "6015169651",
                    url = null,
                    position = "Desarrollador",
                    summary = "Realicé la programación en C# y Python de los diferentes productos de software de la compañía:",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Programación, implementación, pruebas y puesta en marcha de módulo de reconocimiento de placas."
                        },new DetailSummary
                        {
                            detail = "Planeación, programación, implementación y puesta en marcha de módulo de integración con el sistema de vigilancia Axxon Intellect"
                        },new DetailSummary
                        {
                            detail = "Planeación, programación y puesta en marcha de software de grabación de sala de audiencias INVICT."
                        }
                    },
                    skills = new List<Skill>
                    {
                        new Skill
                        {
                                skil = "Manejo de Git en consola y aplicación web GitLab."

                        },new Skill
                        {
                                skil = "Instalación e integración de docker con servicio web Rest del reconocimiento de placas."

                        },new Skill
                        {
                                skil = "Manejo de Git en consola y aplicación web GitLab."

                        },new Skill
                        {
                                skil = "Implementación de servicio de windows para el reconocimiento de placas e integración con la aplicación web de control de acceso."

                        },new Skill
                        {
                                skil = "Implementación de servicio web Rest para la integración con el sistema de vigilancia Axxon Intellect en C#."

                        },new Skill
                        {
                                skil = "Implementación de servicio de windows para el consumo del servicio web Rest de integración con el sistema de vigilancia Axxon Intellect programado en C#."

                        },new Skill
                        {
                                skil = "Integración de wrapper de C# para la implementación del sistema Invict."

                        },new Skill
                        {
                                skil = "Planeación, programación en C# de para la grabación de audio y video de cámaras usb, entradas HDMI y cámaras IP en sistema operativo Windows."

                        },new Skill
                        {
                                skil = "Planeación, programación en C++ y SDK gstreamer para sistema operativo Linux Debian."

                        },new Skill
                        {
                                skil = "Planeación, programación en C# e implementación de movimientos de cámaras PTZ a través de protocolo serial y ONVIF."

                        },new Skill
                        {
                                skil = "Planeación y programación en Python para conexión de base de datos SQL Server y MongoDB."

                        },new Skill
                        {
                                skil = "Planeación y programación en Python para creación de servidor TCP con mensajería Json."

                        }
                    },
                    startDate = "01/02/2020",
                    finishDate = "31/10/2021"
                },
                new ExperienceData
                {
                    enterprise = "Geovictoria",
                    phone = null,
                    url = "",
                    position = "Desarrollador",
                    summary = "Me encargué de la programación en C# de los diferentes componentes para la producción de reportes de los clientes de la plataforma GeoVictoria",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Programación de obtención de cálculos de reportes"
                        },new DetailSummary
                        {
                            detail = "Programación de reportes en Excel y PDF"
                        },new DetailSummary
                        {
                            detail = "Programación de links de solicitud de reportes"
                        }
                    },
                    skills = new List<Skill>
                    {
                        new Skill
                        {
                                skil = "Manejo de Git en Visual Studio"

                        },new Skill
                        {
                                skil = "Manejo de requerimientos en DevOps Azure"

                        },new Skill
                        {
                                skil = "Programación en arquitectura por capas"

                        }
                    },
                    startDate = "01/11/2021",
                    finishDate = "04/01/2022"
                },
                new ExperienceData
                {
                    enterprise = "Oftalmos S.A.S.",
                    phone = null,
                    url = null,
                    position = "Ingeniero Desarrollador",
                    summary = "Me encargué de la programación en C# del nuevo software requerido para   la clínica y el soporte al software que actualmente se encuentra en producción",
                    detailSummary = new List<DetailSummary>
                    {
                        new DetailSummary
                        {
                            detail = "Continuación en la programación del sistema de control y reportes de Central de Mezclas"
                        },new DetailSummary
                        {
                            detail = "Inclusión del sistema de Central de Mezclas en el nuevo proyecto general de la clínica Barraquer"
                        },new DetailSummary
                        {
                            detail = "Soporte al software de Historia Clínica de pacientes"
                        },new DetailSummary
                        {
                            detail = "Soporte al software de control de citas, cirugías y facturación de la clínica "
                        }
                    },
                    skills = new List<Skill>
                    {
                        new Skill
                        {
                                skil = "Aprendizaje y programación de páginas web con JavaScript con el framework Jquery"

                        },new Skill
                        {
                                skil = "Aprendizaje y programación de plugins de tablas, validaciones de campos y Linq sobre JQuery"

                        },new Skill
                        {
                                skil = "Creación y modificación de procedimientos almacenados en SQL Server"

                        }
                    },
                    startDate = "03/02/2022",
                    finishDate = "07/10/2023"
                }
            );

            _context.SaveChanges();
        }

        private static void PersonalReference(PersistenceContext _context)
        {
            if (_context.personalReference.Any())
            {
                return;
            }

            _context.personalReference.AddRange(
            
                new PersonalReference
                {
                    name = "Gilberto Becerra",
                    celPhone = "3153313587",
                    email = null,
                    occupation = "Ingeniero Electricista"
                },
                new PersonalReference
                {
                    name = "Alejandro Céspedes",
                    celPhone = "313 4224593",
                    email = null,
                    occupation = "Ingeniero de sistemas"
                }
            );

            _context.SaveChanges();
        }
    }
}
