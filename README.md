# 🏗️ EMD Serviços - Website Oficial

> **Website moderno e profissional** para empresa de construção e remodelação em Lisboa

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/)

## 📌 Sobre o Projeto

Site completo e otimizado para SEO da **EMD Serviços**, empresa especializada em:

- 🎨 Remodelação em Geral
- ⚡ Eletricidade
- 🖌️ Pintura Profissional
- 🏠 Pavimento Flutuante
- 🪑 Montagem de Móveis
- 🏗️ Serviços Gerais de Construção

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultrarrápida
- **Tailwind CSS 4** - Framework CSS
- **Motion (Framer Motion)** - Animações fluidas
- **React Hook Form** - Formulários otimizados
- **Lucide React** - Ícones modernos
- **Sonner** - Notificações toast

## ✨ Funcionalidades

- ✅ Design moderno e responsivo (mobile-first)
- ✅ Animações 3D e efeitos de flutuação
- ✅ Sistema de marcação de visitas
- ✅ Formulário de contato integrado
- ✅ Envio automático para WhatsApp, SMS e Email
- ✅ Carrosséis de fotos dos serviços
- ✅ Navegação mobile otimizada
- ✅ SEO completo (meta tags, structured data)
- ✅ Sitemap.xml e robots.txt
- ✅ Performance otimizada

## 📊 SEO Otimizado

Palavras-chave principais:
- EMD Serviços
- Obras Lisboa
- Remodelação Lisboa
- Cozinhas
- Pintura
- Telhados

### Meta Tags Completas
- Open Graph (Facebook)
- Twitter Cards
- Schema.org (LocalBusiness)
- Geo tags (Lisboa)

## 📞 Informações de Contato

- **WhatsApp:** +351 914040103
- **Instagram:** [@emd_servicos](https://instagram.com/emd_servicos)
- **Email:** emdservicos2025@gmail.com

## 🎨 Identidade Visual

- **Cor Primária:** Azul Ciano (#06B6D4)
- **Cor Secundária:** Dourado/Amarelo (#D5B035)
- **Logo:** EMD Serviços (96x50px)

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/emdservicos.git

# 2. Entre na pasta
cd emdservicos

# 3. Instale as dependências
npm install

# 4. Execute em desenvolvimento
npm run dev

# 5. Acesse no navegador
http://localhost:5173
```

### Build para Produção

```bash
# Compilar para produção
npm run build

# Visualizar build
npm run preview
```

## 📁 Estrutura do Projeto

```
emdservicos/
├── public/                 # Arquivos estáticos
│   ├── robots.txt         # Configuração SEO
│   └── sitemap.xml        # Mapa do site
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── BookingSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css    # Estilos globais
│   └── main.tsx           # Entrada principal
├── index.html             # HTML principal com SEO
├── package.json
├── vite.config.ts
└── README.md
```

## 🌐 Deploy

### Netlify (Recomendado)

1. Conecte o repositório GitHub ao Netlify
2. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy automático!

### Vercel

```bash
npm i -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages para usar a pasta /dist
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` (opcional):

```env
VITE_WHATSAPP_NUMBER=+351914040103
VITE_INSTAGRAM_HANDLE=@emd_servicos
VITE_EMAIL=emdservicos2025@gmail.com
```

## 📈 Performance

- ⚡ First Contentful Paint: < 1.5s
- ⚡ Lighthouse Score: 95+
- ⚡ Core Web Vitals: Aprovado
- ⚡ Mobile-friendly: 100%

## 🔍 Google Search Console

Após deploy:

1. Adicione a propriedade no [Google Search Console](https://search.google.com/search-console)
2. Envie o sitemap: `https://emdservicos.pt/sitemap.xml`
3. Solicite indexação manual
4. Aguarde 2-7 dias para aparecer nas buscas

## 🐛 Solução de Problemas

### Imagens não aparecem

Se estiver usando `figma:asset`, você precisa:
1. Baixar as imagens do Figma
2. Colocar em `/public/images/`
3. Atualizar as importações

Ver: [INSTRUCOES-PUBLICACAO-GITHUB.md](./INSTRUCOES-PUBLICACAO-GITHUB.md)

### Build falha

```bash
# Limpe o cache
rm -rf node_modules dist
npm install
npm run build
```

## 📝 Licença

MIT License - Veja o arquivo [LICENSE](./LICENSE) para detalhes

## 👨‍💻 Autor

**EMD Serviços**
- Website: https://emdservicos.pt
- Instagram: [@emd_servicos](https://instagram.com/emd_servicos)
- WhatsApp: +351 914040103

## 🙏 Agradecimentos

- Unsplash pelas imagens de placeholder
- Lucide pelos ícones
- Comunidade React e Vite

---

**💼 "Você sonha, nós construímos!" - EMD Serviços** 🏗️✨
