const renderDataToolsCards = [
  {
    icon: "bi-award-fill",
    name: "Google Drive",
    description:
      "Permite organizar y compartir documentos importantes con los clientes de manera rápida y segura. Así, tanto el agente como sus clientes pueden acceder fácilmente a contratos, fichas técnicas y otros archivos relevantes en cualquier momento y desde cualquier lugar.",
  },
  {
    icon: "bi-file-spreadsheet",
    name: "Excel",
    description:
      "Ayuda a gestionar bases de datos de propiedades, realizar análisis de precios por zona y hacer seguimiento de clientes. Facilita la toma de decisiones informadas gracias al manejo de datos actualizados y bien organizados.",
  },
  {
    icon: "bi-file-earmark-fill",
    name: "Word",
    description:
      "Es fundamental para redactar contratos, informes y presentaciones personalizadas para cada cliente. Permite crear documentos profesionales, claros y adaptados a las necesidades de cada operación inmobiliaria.",
  },
  {
    icon: "bi-palette",
    name: "PowerPoint",
    description:
      "Sirve para crear presentaciones visuales y atractivas de propiedades o proyectos, ideales para mostrar en reuniones presenciales o virtuales. Facilita la comunicación del valor y las características de cada inmueble de forma clara y efectiva.",
  },
];

function renderToolsCards() {
  const container = document.querySelector(
    "#herramientas .row.row-cols-1.row-cols-md-2 .col:last-child .row"
  );
  if (!container) return;
  container.innerHTML = renderDataToolsCards
    .map(
      (tool) => `
      <div class="col d-flex flex-column gap-2">
        <div style="background: #eeeeeeff !important;" class="feature-icon-small d-flex align-items-center justify-content-center text-bg-light bg-gradient fs-1 p-4 rounded-3">
          <i class="bi ${tool.icon}"></i>
        </div>
        <h4 class="fw-semibold mb-0 text-body-emphasis">${tool.name}</h4>
        <p class="text-body-secondary">${tool.description}</p>
      </div>
    `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", renderToolsCards);
