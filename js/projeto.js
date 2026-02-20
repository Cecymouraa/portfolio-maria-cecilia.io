document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Busca o projeto no array que está no data.js
  const project = projects.find((p) => p.id === id);
  const container = document.getElementById("projectContainer");

  if (!project) {
    container.innerHTML =
      "<div class='container'><h1>Projeto não encontrado</h1><a href='index.html'>Voltar</a></div>";
    return;
  }

  // O HTML abaixo usa as classes exatas do CSS que criamos para a foto
  container.innerHTML = `
    <section class="project-hero">
        <div class="hero-content">
            <a href="index.html" class="back-link">← Voltar para a página inicial</a>

            <h1>${project.title}</h1>
            <p>${project.description}</p>

            <div class="project-tags">
                ${project.technologies
                  .map((t) => `<span class="tag">${t}</span>`)
                  .join("")}
            </div>

          
        </div>
    </section>

    <section class="project-content-wrapper">

        <div class="project-main">
            <div class="gallery-main" style="background-image: url('${project.image}')">
            </div>

            <h2>Sobre o Projeto</h2>
            <p>${project.content || project.description}</p>

            <div class="challenges-box">
                <div>
                    <h4>Desafios e Soluções</h4>
                    <p>${project.desafios || "Gerenciar grandes volumes de dados mantendo uma interface responsiva ao principal desafio. Implementei técnicas de virtualização e carregamento lento."}</p>
                </div>
            </div>
        </div>

        <aside class="project-sidebar">
            <div class="sidebar-card">
                <h3>Informações do Projeto</h3>
                <p><strong>Concluído:</strong> ${project.date || project.ano || "2025-01"}</p>
            </div>

            <div class="sidebar-card dark">
                <h3>Habilidades Utilizadas</h3>
                <div class="project-tags">
                    ${project.technologies
                      .map((t) => `<span class="tag">${t}</span>`)
                      .join("")}
                </div>
            </div>

            <a href="index.html" class="btn-dark full">
              ← Voltar para Home
            </a>
        </aside>

    </section>
  `;
});
