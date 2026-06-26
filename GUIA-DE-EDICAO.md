# CASA DOIS ARQUITETOS — Guia de Edição
### Portfólio Digital · Versão 01

---

## Estrutura de pastas

```
casadois-portfolio/
│
├── index.html                 ← página principal (HTML)
├── GUIA-DE-EDICAO.md          ← este arquivo
│
├── css/
│   └── estilo.css             ← cores, fontes, espaçamentos, layout
│
├── js/
│   └── main.js                ← animações de scroll (não precisa editar)
│
└── assets/
    ├── logos/
    │   ├── logo-nav.png           → cabeçalho fixo (navegação)
    │   ├── logo-hero.png          → capa (fundo cappuccino — use logo clara)
    │   ├── logo-encerramento.png  → encerramento (fundo preto — use logo clara)
    │   └── logo-footer.png        → rodapé (fundo cappuccino — use logo clara)
    │
    └── imagens/
        ├── hero-capa.jpg          → foto principal da capa (4:3)
        ├── encerramento.jpg       → melhor foto do portfólio (retrato/3:4)
        ├── qrcode.png             → QR Code de contato (quadrado)
        │
        ├── sobre/
        │   └── socios.jpg         → foto dos sócios (retrato)
        │
        ├── projetos/
        │   ├── destaque.jpg       → projeto em destaque (16:7 panorâmico)
        │   ├── serenidade.jpg     → Apartamento Serenidade (4:3)
        │   └── casa-brisa.jpg     → Casa Brisa (4:3)
        │
        └── interiores/
            ├── sala.jpg           → vertical 3:4
            ├── cozinha.jpg        → quadrado 1:1
            ├── quarto.jpg         → vertical 3:4
            └── social.jpg         → horizontal 3:2 (ocupa 2 colunas)
```

---

## Como trocar imagens

**Método mais simples:** substitua o arquivo na pasta mantendo o mesmo nome.
```
Apague: assets/imagens/hero-capa.jpg
Coloque: assets/imagens/hero-capa.jpg  (novo arquivo, mesmo nome)
```

**Para usar um nome diferente:** abra `index.html` e localize o `src=""` da imagem.
```html
<!-- Antes -->
<img src="assets/imagens/projetos/serenidade.jpg" alt="...">

<!-- Depois (novo nome) -->
<img src="assets/imagens/projetos/meu-projeto.jpg" alt="...">
```

---

## Como adicionar logos

Coloque os arquivos PNG (com fundo transparente) na pasta `assets/logos/`:
- `logo-nav.png` → navegação (cabeçalho)
- `logo-hero.png` → capa (versão clara/branca)
- `logo-encerramento.png` → encerramento (versão clara/branca)
- `logo-footer.png` → rodapé (versão clara/branca)

O portfólio carrega as logos automaticamente quando os arquivos existem na pasta.

---

## Como editar textos

Abra `index.html` no VS Code. Cada bloco de texto tem comentários explicando o que é.
Edite apenas o conteúdo entre as tags, sem remover as tags em si.

**Exemplo — mudar número de telefone:**
```html
<!-- Antes -->
<span class="contato-valor">19 9 9828-3366</span>

<!-- Depois -->
<span class="contato-valor">19 9 9999-0000</span>
```

**Exemplo — mudar tagline da capa:**
```html
<!-- Antes -->
<p class="hero-tagline reveal reveal-delay-2">
  Arquitetura que <em>acolhe.</em><br>
  Projetos que <em>transformam vidas.</em>
</p>

<!-- Depois -->
<p class="hero-tagline reveal reveal-delay-2">
  Espaços que <em>inspiram.</em><br>
  Lares que <em>acolhem.</em>
</p>
```

> **Dica:** `<em>` coloca o texto em destaque (branco na capa, cappuccino-light no encerramento).

---

## Como alterar cores

Abra `css/estilo.css` e localize o bloco `:root` no início do arquivo (linha ~14).

```css
:root {
  --algodao:         #F4F3EF;   /* fundo principal */
  --cappuccino:      #988E84;   /* cor de destaque / marca */
  --cappuccino-dark: #6b6259;
  --cappuccino-light:#c4bdb6;
  --branco:          #FAFAF8;
  --cinza-texto:     #4D4D4D;
  --preto-suave:     #1a1917;
}
```

Basta trocar o valor hexadecimal (`#988E84`) pela cor desejada.
A mudança se aplica em todo o portfólio automaticamente.

---

## Como alterar tamanhos de fonte

Em `css/estilo.css`, procure o seletor do elemento desejado e altere `font-size`.

```css
/* Título principal das seções */
.section-title {
  font-size: 42px;   /* ← altere aqui */
}

/* Subtítulo (eyebrow) */
.section-label {
  font-size: 10px;   /* ← altere aqui */
}
```

---

## Como alterar tamanho das logos

Em `css/estilo.css`, localize os seletores:

```css
/* Logo da navegação */
.nav-logo img {
  height: 36px;   /* ← altere a altura */
}

/* Logo da capa (hero) */
.hero-logo img {
  width: 280px;   /* ← altere a largura */
}

/* Logo do encerramento */
.enc-logo img {
  width: 220px;   /* ← altere a largura */
}

/* Logo do rodapé */
.footer-logo img {
  height: 36px;   /* ← altere a altura */
}
```

---

## Como adicionar um novo projeto

No `index.html`, localize o bloco `.projeto-grid` (busque por `projeto-grid`).
Copie um bloco `<div class="projeto-card">` completo e cole logo abaixo do último.

```html
<!-- Novo projeto -->
<div class="projeto-card">
  <img
    class="projeto-foto"
    src="assets/imagens/projetos/meu-novo-projeto.jpg"
    alt="Nome do Projeto"
  >
  <div class="projeto-info">
    <div>
      <p class="projeto-nome">Nome do Projeto</p>
      <p class="projeto-meta">Residencial · 150 m² · 2024</p>
    </div>
    <p class="projeto-conceito">Breve conceito do projeto</p>
  </div>
</div>
```

---

## Como adicionar uma imagem de interiores

No `index.html`, localize o bloco `.interiores-masonry` (busque por `interiores-masonry`).
Copie um bloco `<div class="int-img ...">` e cole logo abaixo.

```html
<!-- Nova imagem de interiores (proporção vertical) -->
<div class="int-img tall">
  <img src="assets/imagens/interiores/nova-imagem.jpg" alt="Descrição">
</div>
```

**Proporções disponíveis:**
| Classe | Proporção | Uso |
|--------|-----------|-----|
| `.tall` | 3:4 vertical | retrato, quarto, sala estreita |
| `.sq` | 1:1 quadrado | detalhe, objeto, close-up |
| `.wide` | 3:2 horizontal | sala aberta, panorâmica |
| `.span2` | 2 colunas | foto de destaque ampla |

---

## Como adicionar um depoimento

No `index.html`, localize o bloco `.depoimentos-grid` (busque por `depoimentos-grid`).

```html
<!-- Novo depoimento -->
<div class="depoimento">
  <div class="depo-aspas">"</div>
  <p class="depo-texto">
    Texto do depoimento aqui, entre aspas, em primeira pessoa.
  </p>
  <p class="depo-autor">Nome do Cliente · Tipo de Projeto · Ano</p>
</div>
```

---

## Como alterar itens do menu

No `index.html`, localize o bloco `<ul>` dentro de `<nav>`.

```html
<ul>
  <li><a href="#sobre">Escritório</a></li>       <!-- ← texto do link -->
  <li><a href="#projetos">Projetos</a></li>
  <li><a href="#processo">Processo</a></li>
  <li><a href="#depoimentos">Clientes</a></li>
  <li><a href="#contato">Contato</a></li>
</ul>
```

O `href="#sobre"` deve coincidir com o `id="sobre"` da seção correspondente.

---

## Dica: atalho VS Code para buscar no HTML

Use `Ctrl + F` (Windows/Linux) ou `Cmd + F` (Mac) para buscar.
Termos úteis para localizar rapidamente:
- `hero-capa` → foto da capa
- `socios.jpg` → foto dos sócios
- `destaque.jpg` → projeto em destaque
- `contato-valor` → dados de contato
- `depo-texto` → texto dos depoimentos
- `footer-copy` → texto do rodapé
- `logo-nav` → logo da navegação

---

*Casa Dois Arquitetos — Marcelo Berti & Victória Paula*
