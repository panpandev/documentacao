# Documentação Moderna

Uma página de documentação moderna, responsiva e personalizável, construída com HTML, CSS e JavaScript puro.

## 🚀 Características

- **Design Moderno e Responsivo**
  - Tema escuro com cores personalizáveis
  - Layout adaptável para todos os dispositivos
  - Menu lateral retrátil em dispositivos móveis
  - Botão hambúrguer no topo para navegação mobile

- **Estrutura Organizada**
  - Seções bem definidas (Sobre, Começando, Instalação, etc.)
  - Menu de navegação intuitivo
  - Badges para categorização
  - Navegação por hash na URL

- **Recursos Interativos**
  - Botões de copiar código
  - Tooltips informativos
  - Scroll suave para links internos
  - Blocos de código formatados

- **Componentes Reutilizáveis**
  - Cards para conteúdo
  - Grids para features e requisitos
  - Steps para guias passo a passo
  - Blocos de código formatados

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para personalização)
- JavaScript (Vanilla)
- [Highlight.js](https://highlightjs.org/) para syntax highlighting
- [Font Awesome](https://fontawesome.com/) para ícones

## 📦 Estrutura do Projeto

```text
documentacao/
├── index.html          # Página principal
└── style.css      # Estilos da documentação
├── main.js        # Lógica principal

```

## 🎨 Personalização

A documentação pode ser facilmente personalizada através das variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #818cf8;
    --bg-color: #0f172a;
    --bg-darker: #020617;
    --text-color: #e2e8f0;
    --border-color: #1e293b;
}
```

## 📱 Responsividade

- **Desktop**: Menu lateral fixo à esquerda
- **Tablet**: Menu lateral retrátil
- **Mobile**: Menu hambúrguer no topo com overlay

## 🚀 Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Personalize o conteúdo e estilos conforme necessário

## 📝 Adicionando Conteúdo

Para adicionar novas seções:

1. Adicione o link no menu lateral (`sidebar-menu`)
2. Crie a seção correspondente no conteúdo principal
3. Use as classes predefinidas para manter a consistência visual

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com este projeto através de:

1. Fork do repositório
2. Criação de uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abertura de um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## ✨ Créditos

- Design inspirado em documentações modernas
- Ícones por [Font Awesome](https://fontawesome.com/)
- Syntax highlighting por [Highlight.js](https://highlightjs.org/)