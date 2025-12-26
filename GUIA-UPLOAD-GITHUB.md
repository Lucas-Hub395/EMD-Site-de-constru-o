# 📤 Guia Completo: Upload para GitHub e Deploy do Site

## 🎯 Objetivo

Subir o projeto EMD Serviços para o GitHub e fazer deploy com o domínio **emdservicos.pt**

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter:

1. ✅ Conta no [GitHub](https://github.com) (criar se não tiver)
2. ✅ [Git instalado](https://git-scm.com/downloads) no seu computador
3. ✅ [Node.js](https://nodejs.org) instalado (versão 18 ou superior)
4. ✅ Todos os arquivos do projeto EMD Serviços salvos numa pasta local

---

## 🚀 PASSO 1: Preparar o Projeto Localmente

### 1.1 - Organizar os Arquivos

Certifique-se de que tem TODOS estes arquivos na sua pasta do projeto:

```
emdservicos/
├── .gitignore              ✅ NOVO - Criado agora
├── package.json            ✅
├── vite.config.ts          ✅
├── vercel.json             ✅
├── netlify.toml            ✅
├── tsconfig.json           ✅
├── index.html              ✅
├── README-GITHUB.md        ✅ NOVO - Criado agora (renomear para README.md)
├── App.tsx                 ✅
├── components/             ✅ (pasta com todos os componentes)
├── styles/                 ✅ (pasta com globals.css)
└── public/                 ✅ (pasta com robots.txt e sitemap.xml)
```

### 1.2 - Renomear o README

Renomeie o arquivo `README-GITHUB.md` para `README.md`:
- Apague o `README.md` antigo (se existir)
- Renomeie `README-GITHUB.md` → `README.md`

---

## 🌐 PASSO 2: Criar Repositório no GitHub

### 2.1 - Criar Novo Repositório

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**

### 2.2 - Configurar o Repositório

Preencha os campos:

- **Repository name:** `emdservicos`
- **Description:** `Website oficial da EMD Serviços - Construção e Remodelação em Lisboa`
- **Visibility:** Escolha **Public** (público) ou **Private** (privado)
- **NÃO marque** "Add a README file"
- **NÃO marque** "Add .gitignore"
- **NÃO marque** "Choose a license"

Clique em **"Create repository"**

### 2.3 - Copiar a URL do Repositório

Após criar, o GitHub mostrará uma página com comandos. Copie a URL que aparece, algo como:

```
https://github.com/[seu-usuario]/emdservicos.git
```

---

## 💻 PASSO 3: Fazer Upload via Git (OPÇÃO A - Recomendada)

### 3.1 - Abrir Terminal/Linha de Comando

- **Windows:** Abra o "Git Bash" ou "CMD" na pasta do projeto
- **Mac/Linux:** Abra o "Terminal" e navegue até a pasta do projeto

### 3.2 - Executar Comandos Git

Digite os seguintes comandos, um de cada vez:

```bash
# 1. Inicializar repositório Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "Initial commit: EMD Serviços website"

# 4. Conectar ao repositório do GitHub (SUBSTITUA pela sua URL)
git remote add origin https://github.com/[seu-usuario]/emdservicos.git

# 5. Renomear branch para main
git branch -M main

# 6. Fazer upload (push) para o GitHub
git push -u origin main
```

**IMPORTANTE:** No passo 4, substitua `[seu-usuario]` pelo seu nome de usuário do GitHub!

### 3.3 - Autenticação

O GitHub pode pedir suas credenciais:
- **Username:** Seu nome de usuário do GitHub
- **Password:** Use um **Personal Access Token** (não a senha da conta)

**Como criar um Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Marque "repo" → Generate token
3. Copie o token e use como senha

---

## 📁 PASSO 3: Fazer Upload Direto (OPÇÃO B - Mais Simples)

Se não quiser usar Git via terminal, pode fazer upload direto:

### 3.1 - Preparar Arquivos

1. Selecione TODOS os arquivos e pastas do projeto
2. **NÃO incluir** a pasta `node_modules` (se existir)
3. **NÃO incluir** a pasta `dist` (se existir)

### 3.2 - Upload no GitHub

1. No repositório do GitHub que criou, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos e pastas para a área de upload
3. Aguarde o upload completar
4. Na parte inferior:
   - **Commit message:** `Initial commit: EMD Serviços website`
5. Clique em **"Commit changes"**

---

## 🌍 PASSO 4: Deploy na Vercel (RECOMENDADO)

### 4.1 - Criar Conta na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar seus repositórios

### 4.2 - Importar Projeto

1. No dashboard da Vercel, clique em **"Add New Project"**
2. Selecione o repositório **emdservicos**
3. Clique em **"Import"**

### 4.3 - Configurar Deploy

A Vercel irá detectar automaticamente que é um projeto Vite. Verifique:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Clique em **"Deploy"**

### 4.4 - Aguardar Deploy

A Vercel irá:
1. Instalar dependências
2. Fazer build do projeto
3. Publicar o site

Aguarde 2-3 minutos. Quando concluir, terá um link temporário como:
```
https://emdservicos.vercel.app
```

**Teste o site neste link antes de configurar o domínio personalizado!**

---

## 🌐 PASSO 5: Configurar Domínio emdservicos.pt

### 5.1 - Adicionar Domínio na Vercel

1. No projeto na Vercel, vá em **Settings → Domains**
2. Clique em **"Add Domain"**
3. Digite: `emdservicos.pt`
4. Clique em **"Add"**

### 5.2 - Adicionar Variante WWW

Repita para `www.emdservicos.pt`

### 5.3 - Configurar DNS

A Vercel mostrará as configurações de DNS necessárias. Você precisa:

#### Opção A - Usar Nameservers da Vercel (Mais Fácil)

Se o domínio permitir, use os nameservers da Vercel:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Configure isso no painel onde comprou o domínio.

#### Opção B - Configurar Registros DNS Manualmente

No painel do seu registador de domínios, adicione:

**Registro A:**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
TTL: 3600
```

**Registro CNAME para WWW:**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600
```

### 5.4 - Aguardar Propagação

- DNS pode levar de **10 minutos a 48 horas** para propagar
- Normalmente, demora cerca de **1-2 horas**
- Teste em: [dnschecker.org](https://dnschecker.org)

---

## 🎉 PASSO 6: Verificar se Está Tudo OK

### ✅ Checklist Final

- [ ] Código está no GitHub
- [ ] Site está online na Vercel
- [ ] Domínio `emdservicos.pt` está configurado
- [ ] Domínio `www.emdservicos.pt` redireciona corretamente
- [ ] Formulários enviam para WhatsApp corretamente
- [ ] Instagram link funciona: `@emd_servicos`
- [ ] Telefone funciona: `+351914040103`
- [ ] Email funciona: `emdservicos2025@gmail.com`
- [ ] Site aparece no Google (pode demorar alguns dias)

### 🧪 Testes Importantes

Teste TODOS estes links:

1. **Página principal:** `https://emdservicos.pt`
2. **Com WWW:** `https://www.emdservicos.pt`
3. **Seção Serviços:** `https://emdservicos.pt/#services`
4. **Seção Quem Somos:** `https://emdservicos.pt/#about`
5. **Seção Marcações:** `https://emdservicos.pt/#booking`
6. **Seção Contacto:** `https://emdservicos.pt/#contact`

### 📱 Teste nos Dispositivos

- [ ] Desktop/Computador
- [ ] Tablet
- [ ] Smartphone
- [ ] Diferentes navegadores (Chrome, Firefox, Safari, Edge)

---

## 🔄 PASSO 7: Atualizar o Site no Futuro

Quando quiser fazer alterações no site:

### Via GitHub Web (Mais Fácil)

1. Acesse o repositório no GitHub
2. Navegue até o arquivo que quer editar
3. Clique no ícone de lápis (Edit)
4. Faça as alterações
5. Clique em **"Commit changes"**
6. A Vercel fará deploy automático em 1-2 minutos

### Via Git Local (Avançado)

```bash
# 1. Fazer alterações nos arquivos localmente
# 2. Salvar as alterações

# 3. Adicionar arquivos modificados
git add .

# 4. Fazer commit
git commit -m "Descrição da alteração"

# 5. Enviar para GitHub
git push

# A Vercel fará deploy automático
```

---

## ❓ Problemas Comuns e Soluções

### ❌ Erro: "npm command not found"

**Solução:** Instale o Node.js: https://nodejs.org

### ❌ Erro: "git command not found"

**Solução:** Instale o Git: https://git-scm.com/downloads

### ❌ Deploy falhou na Vercel

**Solução:**
1. Verifique os logs de build na Vercel
2. Certifique-se de que `package.json` está correto
3. Teste `npm install` e `npm run build` localmente

### ❌ Domínio não funciona após 48h

**Solução:**
1. Verifique se os DNS estão corretos no registador
2. Use [dnschecker.org](https://dnschecker.org) para verificar propagação
3. Contacte o suporte do registador de domínios

### ❌ Site não aparece no Google

**Solução:**
1. Aguarde 1-2 semanas (é normal)
2. Submeta manualmente: [Google Search Console](https://search.google.com/search-console)
3. Verifique se `robots.txt` e `sitemap.xml` estão acessíveis

---

## 📞 Precisa de Ajuda?

### Documentação Oficial

- **Git:** https://git-scm.com/doc
- **GitHub:** https://docs.github.com
- **Vercel:** https://vercel.com/docs
- **Vite:** https://vitejs.dev

### Tutoriais em Vídeo (YouTube)

Pesquise por:
- "Como subir projeto para GitHub"
- "Como fazer deploy na Vercel"
- "Configurar domínio personalizado Vercel"

---

## ✅ Resumo dos Comandos Git

```bash
# Configurar Git pela primeira vez (apenas uma vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"

# Upload inicial
git init
git add .
git commit -m "Initial commit: EMD Serviços website"
git remote add origin https://github.com/[seu-usuario]/emdservicos.git
git branch -M main
git push -u origin main

# Atualizações futuras
git add .
git commit -m "Descrição da alteração"
git push
```

---

## 🎊 Parabéns!

Se seguiu todos os passos, o site **EMD Serviços** está agora:

✅ No GitHub (backup seguro)  
✅ Online na Vercel (hospedagem profissional)  
✅ Acessível em **emdservicos.pt** (domínio personalizado)  
✅ Pronto para receber clientes!  

---

**EMD Serviços - Você Sonha, Nós Construímos!** 🏗️✨

📞 +351 914040103 | 🌐 emdservicos.pt | 📸 @emd_servicos
