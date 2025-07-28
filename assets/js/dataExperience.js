const experiences = [
  {
    id: "cambio_profesion",
    title: "Cambio de Profesión",
    resumen:
      "En 2025, decidí dar un giro a mi carrera profesional y formarme como agente inmobiliario. Desde entonces, he estado adquiriendo conocimientos y habilidades en el sector inmobiliario.",
    detalle:
      "Durante este período realicé una pausa profesional estratégica con el objetivo de reflexionar, redefinir mis metas laborales y prepararme para una transición hacia una nueva etapa profesional. Aproveché este tiempo para actualizar mis conocimientos, explorar nuevas oportunidades y alinear mi trayectoria con mis intereses actuales.",
  },
  {
    id: "almacen",
    title: "Gestión de Almacén y Montaje",
    resumen:
      "Prácticas realizadas en NOVATILU Manlleu (Octubre 2016), desempeñando tareas de montaje de luminarias, embalaje, carga y descarga de materiales, y uso de transpalet manual.",
    detalle:
      "Durante el mes de octubre de 2016, realicé prácticas formativas en la empresa NOVATILU, ubicada en Manlleu, centradas en el área de gestión de almacén y montaje de productos industriales. Las actividades desarrolladas incluyeron el montaje de luminarias según especificaciones técnicas, el embalaje cuidadoso de los productos terminados para su posterior distribución, así como la carga y descarga de materiales utilizando herramientas manuales como el transpalet. Asimismo, participé en la organización y control del inventario, contribuyendo al correcto flujo de materiales dentro del almacén. Esta experiencia me permitió adquirir habilidades prácticas en entornos logísticos y de producción, trabajar en equipo y familiarizarme con procesos de eficiencia y seguridad en el manejo de mercancías.",
  },
  {
    id: "limpieza",
    title: "Limpieza Profesional en Oficinas",
    resumen:
      "Prácticas realizadas en la Residencia de Salud Mental de Manlleu (Octubre 2014), con tareas de limpieza en oficinas, salas y despachos, manteniendo espacios higiénicos y organizados.",
    detalle:
      "Durante el período de prácticas en la Residencia de Salud Mental de Manlleu, llevadas a cabo en octubre de 2014, desempeñé diversas tareas orientadas al mantenimiento y la limpieza de las instalaciones. Mis funciones incluyeron la higienización y organización de diferentes espacios como oficinas administrativas, salas de uso común y despachos profesionales. Estas labores se realizaron siguiendo estrictos protocolos de limpieza, con el objetivo de garantizar un entorno seguro, saludable y ordenado tanto para el personal como para los residentes. Además, se prestó especial atención al cuidado de los detalles y a la correcta disposición de materiales y mobiliario, contribuyendo así al bienestar general del centro y al mantenimiento de un ambiente profesional y acogedor.",
  },
  {
    id: "cuidado",
    title: "Cuidado de Personas Dependientes",
    resumen:
      "Formación práctica en la Residencia Aura de Manlleu (Marzo a Julio de 2013), apoyando en la higiene diaria, alimentación y actividades recreativas para residentes con dependencia.",
    detalle:
      "Durante el período comprendido entre marzo y julio de 2013, realicé una formación práctica en la Residencia Aura de Manlleu, centro especializado en la atención a personas en situación de dependencia. Mi participación se centró en brindar apoyo directo a los residentes en diversas áreas clave de su vida diaria. Entre las tareas desempeñadas se incluyeron la asistencia en la higiene personal, la colaboración en los momentos de alimentación. Esta experiencia me permitió desarrollar habilidades de trato cercano y respetuoso, así como adquirir conocimientos prácticos sobre el cuidado integral de personas dependientes, todo ello en un entorno profesional enfocado en la dignidad, el bienestar y la calidad de vida de los residentes.",
  },
  {
    id: "reponedor",
    title: "Repositor de Supermercado",
    resumen:
      "Realicé prácticas como reponedor en un supermercado entre diciembre de 2010 y enero de 2011. Mis tareas incluían reponer productos, limpiar estanterías y mantener el orden. También transportaba mercancía desde el almacén usando un transpalet. Esta experiencia me enseñó a ser ordenado, cuidadoso y disciplinado.",
    detalle:
      "Contrato de prácticas. Durante el período de prácticas que realicé de Diciembre de 2010 a Enero del 2011, mi única tarea era reponer correctamente, limpiar las estanterías y ordenar correctamente cada producto, asimismo también iba al almacén con un transpalet, llevarlo a la sección del supermercado a reponer cada producto en su sitio, en estas prácticas me dí cuenta y aprendí lo que era ser ordenado, cuidadoso y sobre todo aprendí a ser disciplinado.",
  },
  {
    id: "reponedor",
    title: "Repositor de Supermercado",
    resumen:
      "Realicé prácticas como reponedor en un supermercado entre diciembre de 2010 y enero de 2011. Mis tareas incluían reponer productos, limpiar estanterías y mantener el orden. También transportaba mercancía desde el almacén usando un transpalet. Esta experiencia me enseñó a ser ordenado, cuidadoso y disciplinado.",
    detalle:
      "Contrato de prácticas. Durante el período de prácticas que realicé de Diciembre de 2010 a Enero del 2011, mi única tarea era reponer correctamente, limpiar las estanterías y ordenar correctamente cada producto, asimismo también iba al almacén con un transpalet, llevarlo a la sección del supermercado a reponer cada producto en su sitio, en estas prácticas me dí cuenta y aprendí lo que era ser ordenado, cuidadoso y sobre todo aprendí a ser disciplinado.",
  },
];
function renderExperiences() {
  const container = document.getElementById("experiencias-dinamicas");
  container.innerHTML = experiences
    .map(
      (exp) => `
      <div style="background: #eeeeeeff;" class="p-5 mb-4 rounded-3">
        <div class="container-fluid py-1">
          <h1 class="display-5 fw-bold">${exp.title}</h1>
          <p class="col-md-8 fs-4">${exp.resumen}</p>
          <button
            class="btn btn-lg fw-bold"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-${exp.id}"
            aria-controls="offcanvas-${exp.id}"
            style="background: #dbc86a"
          >
            Ver experiencia
          </button>
          <div
            class="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvas-${exp.id}"
            aria-labelledby="offcanvasLabel-${exp.id}"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <h4 id="offcanvasLabel-${exp.id}">${exp.title}</h4>
              <p class="fs-5 px-3">${exp.detalle}</p>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", renderExperiences);
