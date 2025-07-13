const tools = [
  {
    type: "intro",
    text: "Para brindar un servicio de calidad, combino mi experiencia con herramientas digitales que me permiten ser más ágil, organizado y eficiente en cada etapa del proceso inmobiliario.",
  },
  {
    name: "Google Drive",
    description:
      "Utilizo Google Drive para organizar y compartir documentos importantes con mis clientes de manera rápida y segura. Así mantenemos todo a mano, desde contratos hasta fichas técnicas.",
  },
  {
    name: "Excel",
    description:
      "Con Excel gestiono bases de datos de propiedades, análisis de precios por zona y seguimientos de clientes. Me ayuda a tomar decisiones basadas en datos reales y actualizados.",
  },
  {
    name: "Microsoft Word",
    description:
      "Word es esencial para redactar contratos, informes y presentaciones personalizadas para cada cliente. Me permite cuidar cada detalle y ofrecer documentos profesionales.",
  },
  {
    name: "Microsoft PowerPoint",
    description:
      "Con PowerPoint creo presentaciones atractivas para mostrar propiedades o proyectos, ya sea en reuniones presenciales o virtuales. Es una forma clara y visual de comunicar el valor de cada inmueble.",
  },
];

function renderTools() {
  const container = document.getElementById("tools-dinamicas");
  if (!container) return;
  let html = "";
  tools.forEach((tool) => {
    if (tool.type === "intro") {
      html += `<p class="text-black">${tool.text}</p>`;
    } else {
      html += `
          <p class="text-black">
            <strong class="fw-bold fs-4">${tool.name}: </strong><br />
            ${tool.description}
          </p>
        `;
    }
  });
  container.innerHTML = html;
}
document.addEventListener("DOMContentLoaded", renderTools);
