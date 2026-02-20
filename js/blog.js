document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const post = blogPosts.find((p) => p.id === id);
  const container = document.getElementById("blogPosts"); // Onde o conteúdo será injetado

  if (!post) {
    container.innerHTML = "<h1>Artigo não encontrado</h1>";
    return;
  }

  container.innerHTML = `
        <section class="blog-hero">
            <div class="hero-inner">
                <a href="index.html#blog" class="back-link">← Voltar para a página inicial</a>
                <h1 class="hero-title">${post.title}</h1>
                <p class="hero-subtitle">${post.excerpt}</p>
                
            </div>
        </section>

        <div class="blog-main-grid">
            <div class="blog-column-left">
                <div class="blog-gallery">
                    <img src="${post.image}" alt="${post.title}" class="main-img">
                </div>

                <h2>Sobre o Artigo</h2>
                <div class="blog-text-content">
                    ${post.content || "<p>Conteúdo em desenvolvimento...</p>"}
                </div>

                
            </div>

            <aside class="blog-column-right">
                <div class="info-card">
                    <h3>Informações do Post</h3>
                    <p><strong>Concluído:</strong> ${post.date}</p>
                    <p><strong>Categoria:</strong> ${post.category}</p>
                </div>

                

                <a href="index.html" class="btn-return-home">← Voltar para Home</a>
            </aside>
        </div>
    `;
});
