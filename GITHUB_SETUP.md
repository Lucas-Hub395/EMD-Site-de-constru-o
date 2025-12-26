# 📚 Guia Completo: Publicar no GitHub e Deploy

Este guia explica passo a passo como colocar o site da EMD Serviços no GitHub e fazer deploy automático.

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Criar Repositório no GitHub](#criar-repositório-no-github)
3. [Subir o Código](#subir-o-código)
4. [Deploy na Vercel](#deploy-na-vercel)
5. [Deploy na Netlify](#deploy-na-netlify)
6. [Configurar Domínio](#configurar-domínio)

---

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] Conta no [GitHub](https://github.com) (gratuita)
- [ ] [Git](https://git-scm.com/downloads) instalado no computador
- [ ] Conta na [Vercel](https://vercel.com) ou [Netlify](https://netlify.com) (gratuitas)
- [ ] Domínio `emdservicos.pt` registrado

### Verificar se o Git está instalado:

```bash
git --version
```

Se não estiver instalado, baixe em: https://git-scm.com/downloads

---

## 📦 1. Criar Repositório no GitHub

### Opção A: Pelo Site do GitHub (Mais Fácil)

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha os campos:
   - **Repository name:** `emdservicos` ou `emdservicos-website`
   - **Description:** `Website oficial da EMD Serviços - Construção e Remodelação`
   - **Visibility:** Escolha **Public** (público) ou **Private** (privado)
   - **NÃO** marque "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### Opção B: Pelo GitHub CLI (Avançado)

```bash
gh repo create emdservicos --public --source=. --remote=origin
```

---

## 🚀 2. Subir o Código para o GitHub

### Passo 1: Abrir Terminal/CMD na pasta do projeto

- **Windows:** Clique com botão direito na pasta → "Abrir no Terminal" ou "Git Bash Here"
- **Mac/Linux:** Botão direito → "Abrir no Terminal"

### Passo 2: Inicializar repositório Git

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "🎉 Primeiro commit - Website EMD Serviços"
```

### Passo 3: Conectar ao GitHub

**IMPORTANTE:** Substitua `[SEU-USUARIO]` pelo seu nome de usuário do GitHub!

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/[SEU-USUARIO]/emdservicos.git

# Exemplo: git remote add origin https://github.com/joaosilva/emdservicos.git
```

### Passo 4: Enviar para o GitHub

```bash
# Renomear branch para main (padrão moderno)
git branch -M main

# Enviar código
git push -u origin main
```

### ✅ Verificar

Acesse `https://github.com/[SEU-USUARIO]/emdservicos` para ver seu código online!

---

## 🌐 3. Deploy na Vercel (Recomendado)

A Vercel é otimizada para React/Vite e oferece deploy automático super rápido.

### Passo 1: Conectar ao GitHub

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** → **"Continue with GitHub"**
3. Autorize a Vercel a acessar o GitHub

### Passo 2: Importar Projeto

1. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
2. Selecione o repositório **`emdservicos`**
3. Clique em **"Import"**

### Passo 3: Configurar Build

A Vercel detecta automaticamente as configurações do Vite. Verifique se está assim:

- **Framework Preset:** Vite
- **Root Directory:** `./` (raiz)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde 1-2 minutos
3. ✅ Pronto! Seu site está no ar em `https://emdservicos.vercel.app`

### Passo 5: Configurar Domínio Personalizado

1. No projeto na Vercel, vá em **"Settings"** → **"Domains"**
2. Adicione `emdservicos.pt` e `www.emdservicos.pt`
3. A Vercel mostrará os **DNS records** necessários
4. Configure esses DNS no seu registrador de domínio (ver seção abaixo)

---

## 🌈 4. Deploy na Netlify (Alternativa)

### Passo 1: Conectar ao GitHub

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Sign Up"** → **"GitHub"**
3. Autorize a Netlify

### Passo 2: Importar Projeto

1. Clique em **"Add new site"** → **"Import an existing project"**
2. Selecione **"Deploy with GitHub"**
3. Escolha o repositório **`emdservicos`**

### Passo 3: Configurar Build

- **Branch:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Passo 4: Deploy

1. Clique em **"Deploy site"**
2. Aguarde 1-2 minutos
3. ✅ Site online em `https://[nome-aleatorio].netlify.app`

### Passo 5: Configurar Domínio

1. Vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite `emdservicos.pt`
4. Configure os DNS records fornecidos

---

## 🔗 5. Configurar Domínio emdservicos.pt

### Onde o seu domínio está registrado?

Encontre onde você comprou o domínio (ex: GoDaddy, Namecheap, Cloudflare, etc.)

### Para Vercel:

Adicione estes DNS records no seu registrador:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Para Netlify:

Adicione estes DNS records:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [seu-site].netlify.app
```

### ⏰ Tempo de Propagação

Aguarde entre 10 minutos a 48 horas para o DNS propagar globalmente.

Verifique em: https://dnschecker.org

---

## 🔄 Atualizações Futuras

Sempre que quiser atualizar o site:

```bash
# Fazer alterações nos arquivos...

# Adicionar mudanças
git add .

# Commit com mensagem descritiva
git commit -m "✨ Adicionar nova seção de depoimentos"

# Enviar para GitHub
git push
```

**🎉 Deploy automático!** A Vercel/Netlify detecta o push e atualiza automaticamente!

---

## 📊 Monitoramento e Analytics

### Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione `emdservicos.pt`
3. Verifique propriedade
4. Submeta o sitemap: `https://emdservicos.pt/sitemap.xml`

### Google Analytics (Opcional)

1. Crie conta em [analytics.google.com](https://analytics.google.com)
2. Adicione propriedade para `emdservicos.pt`
3. Copie o ID de medição (ex: G-XXXXXXXXXX)
4. Adicione ao código conforme necessário

---

## 🆘 Problemas Comuns

### "fatal: not a git repository"

```bash
git init
```

### "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/[SEU-USUARIO]/emdservicos.git
```

### "Authentication failed"

Use um **Personal Access Token** em vez de senha:

1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Use o token como senha ao fazer push

### Build falha na Vercel/Netlify

Verifique se o `package.json` está correto e todas as dependências estão listadas.

---

## 📞 Suporte

Se tiver dúvidas:

- 📧 Email: emdservicos2025@gmail.com
- 📱 WhatsApp: +351 914 040 103

---

## ✅ Checklist Final

Antes de finalizar, confirme:

- [ ] Código no GitHub
- [ ] Site online na Vercel/Netlify
- [ ] Domínio `emdservicos.pt` configurado
- [ ] SSL/HTTPS ativado automaticamente
- [ ] Sitemap submetido ao Google Search Console
- [ ] WhatsApp e Instagram funcionando
- [ ] Formulários enviando corretamente
- [ ] Site responsivo em mobile

---

**🎉 Parabéns! Seu site está no ar!** 

Visite: https://emdservicos.pt

---

*Última atualização: Dezembro 2024*
