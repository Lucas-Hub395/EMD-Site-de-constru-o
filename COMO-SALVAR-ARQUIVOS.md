# 📥 Como Salvar os Arquivos do Figma para o Seu Computador

## 🎯 Objetivo

Salvar todos os arquivos do projeto EMD Serviços do Figma Make para o seu computador, para depois fazer upload para o GitHub.

---

## 📂 Arquivos que Você Precisa Salvar

Estes são os arquivos de configuração criados que você precisa copiar:

### ✅ Arquivos de Configuração (Raiz do Projeto)

1. **`.gitignore`** - Configuração Git
2. **`package.json`** - Dependências do projeto
3. **`vite.config.ts`** - Configuração Vite
4. **`vercel.json`** - Configuração Vercel
5. **`netlify.toml`** - Configuração Netlify
6. **`tsconfig.json`** - Configuração TypeScript
7. **`tsconfig.node.json`** - Configuração TypeScript (Node)
8. **`index.html`** - HTML principal

### ✅ Pasta SRC

9. **`src/main.tsx`** - Arquivo de entrada do React

### ✅ Pasta PUBLIC

10. **`public/robots.txt`** - SEO
11. **`public/sitemap.xml`** - SEO

### ✅ Documentação

12. **`README-GITHUB.md`** - Documentação (renomear para README.md)
13. **`GUIA-UPLOAD-GITHUB.md`** - Tutorial de upload
14. **`CONFIGURACAO-DNS.md`** - Tutorial DNS
15. **`CHECKLIST-FINAL.md`** - Checklist
16. **`ARQUIVOS-CRIADOS.md`** - Lista de arquivos
17. **`COMO-SALVAR-ARQUIVOS.md`** - Este arquivo

### ✅ Componentes React (Pasta components/)

18. **`App.tsx`** - Componente principal
19. **`components/Header.tsx`**
20. **`components/Hero.tsx`**
21. **`components/Services.tsx`**
22. **`components/AboutSection.tsx`**
23. **`components/BookingSection.tsx`**
24. **`components/ContactSection.tsx`**
25. **`components/Footer.tsx`**
26. **`components/WhatsAppButton.tsx`**
27. **`components/InstagramButton.tsx`**
28. **`components/ImageCarousel.tsx`** (se existir)
29. Todos os arquivos em **`components/ui/`** (se existirem)
30. Todos os arquivos em **`components/figma/`** (se existirem)

### ✅ Estilos

31. **`styles/globals.css`** - Estilos globais

---

## 💾 MÉTODO 1: Salvar Arquivos Individualmente do Figma Make

Se o Figma Make permite exportar/baixar arquivos:

### Passo 1: Criar Estrutura de Pastas

No seu computador, crie a seguinte estrutura:

```
emdservicos/
├── src/
├── public/
├── components/
│   ├── ui/
│   └── figma/
└── styles/
```

### Passo 2: Exportar/Baixar Cada Arquivo

1. No Figma Make, selecione o arquivo
2. Procure por "Export", "Download" ou "Save"
3. Salve na pasta correspondente

### Passo 3: Verificar Estrutura Final

```
emdservicos/
│
├── .gitignore
├── package.json
├── vite.config.ts
├── vercel.json
├── netlify.toml
├── tsconfig.json
├── tsconfig.node.json
├── index.html
├── App.tsx
│
├── README-GITHUB.md
├── GUIA-UPLOAD-GITHUB.md
├── CONFIGURACAO-DNS.md
├── CHECKLIST-FINAL.md
├── ARQUIVOS-CRIADOS.md
├── COMO-SALVAR-ARQUIVOS.md
│
├── src/
│   └── main.tsx
│
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── AboutSection.tsx
│   ├── BookingSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── InstagramButton.tsx
│   ├── ui/ (todos os arquivos)
│   └── figma/ (todos os arquivos)
│
└── styles/
    └── globals.css
```

---

## 💾 MÉTODO 2: Copiar e Colar Manualmente

Se não conseguir exportar, pode criar os arquivos manualmente:

### Passo 1: Criar o Arquivo

1. Abra um editor de texto (Notepad++, VS Code, Sublime Text)
2. Crie um novo arquivo
3. Cole o conteúdo do arquivo do Figma
4. Salve com o nome correto e extensão correta

**Exemplos:**
- `.gitignore` (sem extensão, começa com ponto)
- `package.json` (extensão .json)
- `vite.config.ts` (extensão .ts)
- `README-GITHUB.md` (extensão .md)
- `App.tsx` (extensão .tsx)

### Passo 2: Atenção às Extensões

No Windows, certifique-se de ver as extensões dos arquivos:

1. Abra o Explorador de Arquivos
2. Clique em "Exibir" → Marque "Extensões de nome de arquivo"
3. Assim você verá `.json`, `.ts`, `.tsx`, etc.

---

## 📋 Conteúdo dos Arquivos Principais

### `.gitignore`

```
# Dependências
node_modules/
/.pnp
.pnp.js

# Testes
/coverage

# Produção
/build
/dist

# Diversos
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
*.log

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Vite
.vite
dist-ssr
*.local

# TypeScript
*.tsbuildinfo

# Environment variables
.env
.env.*.local
```

### `src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## ⚠️ IMPORTANTE: Renomear Arquivo

Após salvar todos os arquivos, você DEVE renomear:

**`README-GITHUB.md`** → **`README.md`**

1. Apague o `README.md` antigo (se existir)
2. Renomeie `README-GITHUB.md` para `README.md`

---

## ✅ Checklist de Verificação

Após salvar tudo, verifique:

- [ ] Pasta `emdservicos/` criada
- [ ] Todos os arquivos salvos nas pastas corretas
- [ ] `.gitignore` existe (começa com ponto)
- [ ] `package.json` existe
- [ ] `vite.config.ts` existe
- [ ] `vercel.json` existe
- [ ] `netlify.toml` existe
- [ ] `tsconfig.json` existe
- [ ] `index.html` existe
- [ ] `src/main.tsx` existe
- [ ] `public/robots.txt` existe
- [ ] `public/sitemap.xml` existe
- [ ] `README-GITHUB.md` renomeado para `README.md`
- [ ] Todos os componentes em `components/` salvos
- [ ] `styles/globals.css` existe
- [ ] `App.tsx` na raiz do projeto

---

## 🚀 Próximo Passo

Após salvar todos os arquivos:

1. ✅ Abra o terminal na pasta `emdservicos/`
2. ✅ Execute `npm install` para instalar dependências
3. ✅ Execute `npm run dev` para testar localmente
4. ✅ Se tudo funcionar, siga o **GUIA-UPLOAD-GITHUB.md**

---

## 🆘 Precisa de Ajuda?

### Arquivos com Ponto (.) no Início

No Windows, arquivos que começam com ponto (como `.gitignore`) são ocultos por padrão.

**Como criar:**

**Opção 1 - Via Notepad:**
1. Abra o Notepad
2. Cole o conteúdo
3. Salvar como: `.gitignore` (com as aspas)
4. Tipo: Todos os arquivos

**Opção 2 - Via Terminal:**
```cmd
echo. > .gitignore
```
Depois edite o arquivo e adicione o conteúdo

### Ver Arquivos Ocultos no Windows

1. Explorador de Arquivos
2. Exibir → Marque "Itens ocultos"
3. Agora você verá arquivos que começam com ponto

---

## 📝 Resumo Rápido

1. **Crie a estrutura de pastas** no seu computador
2. **Salve/exporte todos os arquivos** do Figma Make
3. **Renomeie** `README-GITHUB.md` → `README.md`
4. **Verifique** se todos os arquivos estão nas pastas corretas
5. **Teste localmente** com `npm install` e `npm run dev`
6. **Siga o GUIA-UPLOAD-GITHUB.md** para fazer upload

---

## 🎯 Estrutura Final Esperada

```
emdservicos/
│
├── 📄 Configuração
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.ts
│   ├── vercel.json
│   ├── netlify.toml
│   ├── tsconfig.json
│   └── tsconfig.node.json
│
├── 📄 HTML
│   └── index.html
│
├── 📄 React Principal
│   └── App.tsx
│
├── 📁 src/
│   └── main.tsx
│
├── 📁 public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── 📁 components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── AboutSection.tsx
│   ├── BookingSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── InstagramButton.tsx
│   ├── ui/ (pasta com componentes)
│   └── figma/ (pasta com componentes)
│
├── 📁 styles/
│   └── globals.css
│
└── 📄 Documentação
    ├── README.md (renomeado de README-GITHUB.md)
    ├── GUIA-UPLOAD-GITHUB.md
    ├── CONFIGURACAO-DNS.md
    ├── CHECKLIST-FINAL.md
    ├── ARQUIVOS-CRIADOS.md
    └── COMO-SALVAR-ARQUIVOS.md
```

---

**EMD Serviços - Você Sonha, Nós Construímos!** 🏗️✨

📞 +351 914040103 | 🌐 emdservicos.pt | 📸 @emd_servicos

**Boa sorte! Depois de salvar tudo, siga o GUIA-UPLOAD-GITHUB.md!** 🚀
