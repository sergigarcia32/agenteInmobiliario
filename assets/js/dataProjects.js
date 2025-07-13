const projects = [
  {
    title: "Proyecto personal: Aprendizaje y Pasión por el Sector Inmobiliario",
    description: `
   Me dedico a aprender de forma autodidacta sobre el mundo de las ventas y las propiedades.<br>
  Elaboro mis propios apuntes y los repaso diariamente, profundizando en información online relacionada con bienes raíces y conocimientos de informática básica.<br>
  Cada día escucho un pódcast especializado en bienes raíces.<br>
  Además, disfruto explorando páginas web de propiedades en distintas zonas residenciales y ubicaciones de España y Cataluña, informándome sobre los precios de viviendas y terrenos.
      `,
    button: {
      text: "Ver más",
      link: "#",
    },
  },
];
function renderProjects() {
  const container = document.getElementById("proyectos-dinamicos");
  if (!container) return;
  container.innerHTML = projects
    .map(
      (project) => `
      <div  style="background: #dbc86a" class="p-3 px-5 mb-4 rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">${project.title}</h1>
          <p class="col-md-8 fs-4">
            ${project.description}
          </p>
        </div>
      </div>
    `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", renderProjects);
