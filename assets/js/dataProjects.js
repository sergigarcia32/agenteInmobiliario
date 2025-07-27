const projects = [
  {
    title: "Aprendizaje y Pasión por el Sector Inmobiliario y ventas.<br>",
    description: `
   - Me dedico a aprender de forma autodidacta sobre el mundo de las ventas y las propiedades.<br>
  - Elaboro mis propios apuntes y los repaso diariamente, profundizando en información online relacionada con bienes raíces y conocimientos de informática básica.<br>
  - Me gusta ver vídeos de YouTube sobre ventas, marketing y propiedades, y sigo a profesionales destacados en el sector inmobiliario.<br>
  - Además, disfruto explorando páginas web de propiedades en distintas zonas residenciales y ubicaciones de España y Cataluña, informándome sobre los precios de viviendas y terrenos.
      `,
    button: {
      text: "Vane Monroe",
      link: "https://www.youtube.com/@VaneMonroe",
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
           <p class="lead fs-4 fw-bold">Aprendiendo sobre el sector inmobiliario, ventas, marketing y propiedades de..
          </p>
   
          <a class="btn btn-dark btn-lg" href="${project.button.link}" role="button" target="_blank">
            ${project.button.text}
          </a>
    
        </div>
      </div>
    `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", renderProjects);
