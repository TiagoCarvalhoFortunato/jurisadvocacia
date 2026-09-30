# Vanguard Advocacia — Landing Page

Landing page estática (HTML + CSS + JS vanilla) para escritório de advocacia premium.

## Como rodar localmente

Por ser 100% estática, basta abrir `index.html` no navegador. Para evitar problemas de CORS com fontes/CDN, sirva via servidor simples:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

E acesse `http://localhost:8000`.

## Estrutura

```
.
├── index.html              Página principal
├── assets/
│   ├── css/style.css       Estilos (reset, variáveis, layout, componentes, responsivo)
│   ├── js/main.js          JS vanilla (header, menu, particles, swiper, lightbox, AOS)
│   ├── images/             Imagens locais (atualmente usa Unsplash via URL)
│   └── icons/              Ícones SVG locais (usa Bootstrap Icons via CDN)
├── components/             Reservado para HTML partials/componentes futuros
├── pages/                  Reservado para páginas adicionais (termos, privacidade, etc.)
└── vendor/                 Reservado para libs locais (atualmente via CDN)
```

## Bibliotecas (via CDN)

- [Bootstrap Icons](https://icons.getbootstrap.com/) — ícones
- [AOS](https://michalsnik.github.io/aos/) — animações de scroll
- [Swiper](https://swiperjs.com/) — carrossel de depoimentos
- [GLightbox](https://biati-digital.github.io/glightbox/) — galeria
- [particles.js](https://vincentgarreau.com/particles.js/) — fundo animado do hero

## Deploy

Qualquer hospedagem estática serve: GitHub Pages, Netlify, Vercel, Cloudflare Pages, hospedagem cPanel tradicional, etc. Apenas envie a pasta inteira.
