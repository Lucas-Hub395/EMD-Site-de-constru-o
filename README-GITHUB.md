# 🚀 GUIA COMPLETO: Como Publicar o Site EMD Serviços no GitHub

## 📋 IMPORTANTE - LEIA PRIMEIRO

Este projeto está atualmente usando **imagens do Figma** que precisam ser substituídas por URLs reais ou arquivos locais antes da publicação no GitHub.

### ⚠️ Problema Atual
As imagens estão importadas assim:
```typescript
import logo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';
```

Isso **NÃO funciona fora do Figma Make!**

---

## 🎯 SOLUÇÃO RÁPIDA - 3 OPÇÕES

### **OPÇÃO 1: Usar Unsplash (Mais Rápido)** ✅ RECOMENDADO

1. Substitua todas as importações `figma:asset` por URLs do Unsplash
2. Exemplo:
```typescript
// ANTES:
import paintImage1 from 'figma:asset/9f80e1b15023fa3ce8357b0bb26db92f62982fa5.png';

// DEPOIS:
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800';
```

### **OPÇÃO 2: Hospedar Imagens no GitHub** 

1. Crie uma pasta `/public/images/` no projeto
2. Baixe todas as imagens do Figma Make
3. Coloque-as na pasta `/public/images/`
4. Atualize as importações:
```typescript
// ANTES:
import logo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';

// DEPOIS:
import logo from '/images/emd-logo.png';
```

### **OPÇÃO 3: Usar CDN (Imgur, Cloudinary)**

1. Faça upload das imagens para um CDN gratuito
2. Use as URLs diretas:
```typescript
const logo = 'https://i.imgur.com/SEU_ID.png';
```

---

## 📁 ESTRUTURA DE PASTAS PARA GITHUB

```
emdservicos/
├── public/
│   ├── images/              # ← ADICIONE SUAS IMAGENS AQUI
│   │   ├── emd-logo.png
│   │   ├── paint-1.jpg
│   │   ├── electric-1.jpg
│   │   └── ...
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── styles/
│   └── main.tsx
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🔧 PASSO A PASSO COMPLETO

### **PASSO 1: Prepare os Arquivos**

1. **Baixe o projeto completo** do Figma Make
2. **Crie uma nova pasta** no seu computador chamada `emdservicos`
3. **Copie TODOS os arquivos** para essa pasta

### **PASSO 2: Crie o .gitignore**

Crie um arquivo chamado `.gitignore` na raiz do projeto:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/

# Environment
.env
.env.local
.env.production

# Logs
*.log
npm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
```

### **PASSO 3: Substitua as Imagens**

**VOCÊ PRECISA EDITAR ESTES ARQUIVOS:**

1. `/components/Hero.tsx` - Linhas 4-11
2. `/components/Services.tsx` - Linhas 6-22
3. `/components/Header.tsx` - Linhas 1-4, 8
4. `/components/Footer.tsx` - Linha 1, 3

**Exemplo de como editar:**

```typescript
// ❌ REMOVA ISTO:
import logo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';
import paintImage1 from 'figma:asset/9f80e1b15023fa3ce8357b0bb26db92f62982fa5.png';

// ✅ SUBSTITUA POR:
import logo from '/images/emd-logo.png';
import paintImage1 from '/images/paint-1.jpg';

// OU use URLs do Unsplash:
const logo = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800';
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800';
```

### **PASSO 4: Crie o Repositório no GitHub**

1. Acesse: https://github.com/new
2. **Nome do repositório:** `emdservicos`
3. **Descrição:** `Website oficial da EMD Serviços - Construção e Remodelação em Lisboa`
4. **Visibilidade:** Public
5. **NÃO marque** "Add a README file"
6. Clique em **"Create repository"**

### **PASSO 5: Configure o Git Local**

Abra o terminal na pasta do projeto e execute:

```bash
# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "🎉 Inicial commit - Site EMD Serviços completo"

# Adicione o repositório remoto (SUBSTITUA seu-usuario pelo seu nome de usuário do GitHub)
git remote add origin https://github.com/seu-usuario/emdservicos.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### **PASSO 6: Configure o Netlify para Deploy**

1. Acesse: https://app.netlify.com/
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **"GitHub"** e autorize o Netlify
4. Selecione o repositório **`emdservicos`**
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em **"Deploy site"**

### **PASSO 7: Configure o Domínio Personalizado**

1. No Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite: `emdservicos.pt`
4. Siga as instruções para configurar o DNS

---

## 🌐 CONFIGURAÇÃO DNS (emdservicos.pt)

No seu provedor de domínio, adicione estes registros:

```
Tipo: A
Nome: @
Valor: 75.2.60.5

Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
```

---

## ✅ CHECKLIST FINAL

- [ ] Todas as imagens `figma:asset` foram substituídas
- [ ] O arquivo `.gitignore` foi criado
- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub (`git push`)
- [ ] Site conectado ao Netlify
- [ ] Deploy funcionando
- [ ] Domínio personalizado configurado
- [ ] SSL/HTTPS ativado
- [ ] Testado em mobile e desktop

---

## 🆘 PROBLEMAS COMUNS

### Erro: "Module not found: figma:asset"
**Solução:** Você esqueceu de substituir as importações `figma:asset`. Revise os arquivos mencionados no PASSO 3.

### Erro: "Build failed"
**Solução:** Execute `npm install` antes de fazer o deploy.

### Site não aparece no Google
**Solução:** 
1. Aguarde 2-7 dias para indexação
2. Envie o sitemap: `https://emdservicos.pt/sitemap.xml`
3. Use o Google Search Console

---

## 📞 SUPORTE

Se tiver dúvidas, revise este guia passo a passo. Cada etapa é essencial!

**Boa sorte com o lançamento do site! 🚀**
