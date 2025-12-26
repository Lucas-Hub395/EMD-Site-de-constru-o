# 🚀 COMECE AQUI - EMD Serviços Deploy

## 👋 Bem-vindo!

Este é o ponto de partida para fazer o deploy do site **EMD Serviços** no domínio **emdservicos.pt**.

---

## ✅ O QUE FOI FEITO

Todos os arquivos de configuração necessários foram criados e estão prontos:

✅ Configurações de build (Vite, TypeScript)  
✅ Configurações de deploy (Vercel, Netlify)  
✅ SEO completo (meta tags, sitemap, robots.txt)  
✅ Domínio atualizado para `emdservicos.pt`  
✅ Contactos corretos (+351914040103, @emd_servicos)  
✅ Documentação completa  

---

## 📚 ARQUIVOS DE DOCUMENTAÇÃO CRIADOS

Foram criados 6 arquivos de documentação para ajudá-lo:

| Arquivo | Propósito | Quando Usar |
|---------|-----------|-------------|
| **INICIO-AQUI.md** | Este arquivo - ponto de partida | AGORA ← Você está aqui |
| **COMO-SALVAR-ARQUIVOS.md** | Como salvar arquivos do Figma | Se precisar exportar arquivos |
| **ARQUIVOS-CRIADOS.md** | Lista completa de todos os arquivos | Para referência |
| **CHECKLIST-FINAL.md** | Verificação antes do deploy | Antes de fazer upload |
| **GUIA-UPLOAD-GITHUB.md** | Tutorial completo de upload e deploy | Para fazer deploy |
| **CONFIGURACAO-DNS.md** | Configuração do domínio | Após deploy na Vercel |

---

## 🎯 PRÓXIMOS PASSOS - ORDEM RECOMENDADA

### 1️⃣ VERIFICAR ARQUIVOS (5 minutos)

📖 Abra e leia: **ARQUIVOS-CRIADOS.md**

Este arquivo lista TODOS os arquivos de configuração que foram criados.

**Ação:** Verifique se você tem todos os arquivos listados.

---

### 2️⃣ PREPARAR PROJETO (10 minutos)

**Tarefas importantes:**

#### A) Renomear README
🔴 **OBRIGATÓRIO:** Renomear `README-GITHUB.md` → `README.md`

```bash
# No terminal (Linux/Mac):
mv README-GITHUB.md README.md

# No Windows (CMD):
ren README-GITHUB.md README.md
```

Ou renomeie manualmente no explorador de arquivos.

#### B) Verificar Estrutura de Pastas

Certifique-se de que tem esta estrutura:

```
emdservicos/
├── .gitignore
├── package.json
├── vite.config.ts
├── vercel.json
├── netlify.toml
├── index.html
├── README.md  ← Renomeado
├── App.tsx
├── src/
│   └── main.tsx
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── components/
└── styles/
```

---

### 3️⃣ VERIFICAR LOCALMENTE (15 minutos)

📖 Abra: **CHECKLIST-FINAL.md**

Antes de fazer deploy, teste localmente:

```bash
# 1. Instalar dependências
npm install

# 2. Testar em modo desenvolvimento
npm run dev

# Abra: http://localhost:3000

# 3. Testar build de produção
npm run build
npm run preview
```

**Verificar:**
- [ ] Site carrega sem erros
- [ ] Todas as seções aparecem
- [ ] Formulários funcionam
- [ ] Links funcionam (WhatsApp, Instagram)
- [ ] Sem erros no console do navegador

---

### 4️⃣ FAZER UPLOAD PARA GITHUB (20 minutos)

📖 Abra e siga: **GUIA-UPLOAD-GITHUB.md**

#### Resumo Rápido:

**Opção A - Via Terminal (Recomendado):**

```bash
# 1. Inicializar Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer primeiro commit
git commit -m "Initial commit: EMD Serviços website"

# 4. Conectar ao GitHub (substitua [seu-usuario])
git remote add origin https://github.com/[seu-usuario]/emdservicos.git

# 5. Fazer upload
git branch -M main
git push -u origin main
```

**Opção B - Via Interface Web:**
1. Crie repositório no GitHub
2. Arraste e solte todos os arquivos
3. Commit changes

---

### 5️⃣ FAZER DEPLOY NA VERCEL (15 minutos)

📖 Continua em: **GUIA-UPLOAD-GITHUB.md** (seção Deploy)

#### Resumo Rápido:

1. Acesse [vercel.com](https://vercel.com)
2. Login com GitHub
3. Clique "New Project"
4. Selecione repositório `emdservicos`
5. Click "Deploy"
6. Aguarde 2-3 minutos
7. Teste o link temporário: `https://emdservicos.vercel.app`

---

### 6️⃣ CONFIGURAR DOMÍNIO emdservicos.pt (30-60 minutos)

📖 Abra e siga: **CONFIGURACAO-DNS.md**

#### Resumo Rápido:

**Na Vercel:**
1. Settings → Domains
2. Add Domain: `emdservicos.pt`
3. Add Domain: `www.emdservicos.pt`

**No Registador de Domínios:**

Configure estes registros DNS:

```
Tipo: A
Nome: @
Valor: 76.76.21.21
TTL: 3600

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600
```

**Aguardar Propagação:** 1-2 horas (pode levar até 48h)

**Verificar em:** [dnschecker.org](https://dnschecker.org)

---

### 7️⃣ VERIFICAÇÃO FINAL (10 minutos)

📖 Use: **CHECKLIST-FINAL.md** (seção Pós-Deploy)

**Teste todos estes links:**

- [ ] https://emdservicos.pt
- [ ] https://www.emdservicos.pt
- [ ] https://emdservicos.pt/#services
- [ ] https://emdservicos.pt/#about
- [ ] https://emdservicos.pt/#booking
- [ ] https://emdservicos.pt/#contact

**Teste funcionalidades:**

- [ ] Formulário de marcação envia para WhatsApp
- [ ] Formulário de contacto envia para WhatsApp
- [ ] Botão WhatsApp flutuante funciona
- [ ] Link Instagram funciona
- [ ] SSL ativo (cadeado verde)

**Teste SEO:**

- [ ] https://emdservicos.pt/robots.txt acessível
- [ ] https://emdservicos.pt/sitemap.xml acessível

---

## ⏱️ TEMPO TOTAL ESTIMADO

| Etapa | Tempo Estimado |
|-------|---------------|
| 1. Verificar arquivos | 5 minutos |
| 2. Preparar projeto | 10 minutos |
| 3. Verificar localmente | 15 minutos |
| 4. Upload GitHub | 20 minutos |
| 5. Deploy Vercel | 15 minutos |
| 6. Configurar DNS | 30-60 minutos |
| 7. Verificação final | 10 minutos |
| **TOTAL ATIVO** | **~2 horas** |
| Propagação DNS (passivo) | 1-48 horas |

---

## 📋 CHECKLIST RÁPIDO

Antes de começar, certifique-se de ter:

- [ ] Conta no [GitHub](https://github.com)
- [ ] [Git instalado](https://git-scm.com/downloads) no computador
- [ ] [Node.js](https://nodejs.org) instalado (versão 18+)
- [ ] Todos os arquivos do projeto em uma pasta local
- [ ] Acesso ao painel do registador do domínio `emdservicos.pt`
- [ ] `README-GITHUB.md` renomeado para `README.md`

---

## 🆘 PROBLEMAS COMUNS

### ❌ "npm command not found"

**Solução:** Instale o Node.js: https://nodejs.org

### ❌ "git command not found"

**Solução:** Instale o Git: https://git-scm.com/downloads

### ❌ Não consigo ver arquivo `.gitignore`

**Solução:** No Windows, ative "Mostrar arquivos ocultos" no Explorador de Arquivos

### ❌ DNS não propaga

**Solução:** 
- Aguarde mais tempo (pode levar até 48h)
- Verifique em [dnschecker.org](https://dnschecker.org)
- Limpe cache DNS: `ipconfig /flushdns` (Windows)

---

## 📞 INFORMAÇÕES DO PROJETO

### Dados de Contacto (Verificar se estão corretos)
- **Telefone/WhatsApp:** +351914040103
- **Email:** emdservicos2025@gmail.com
- **Instagram:** @emd_servicos
- **Website:** emdservicos.pt

### Cores da Marca
- **Azul Ciano:** #00CED1
- **Dourado:** #FFD700

### Serviços Oferecidos
1. Remodelação em Geral
2. Eletricidade
3. Pintura
4. Pavimento Flutuante
5. Montagem de Móveis
6. Serviços Gerais

---

## 🎯 OBJETIVO FINAL

Após completar todos os passos, você terá:

✅ Código no GitHub (backup seguro)  
✅ Site online na Vercel (hospedagem profissional)  
✅ Domínio personalizado (`emdservicos.pt`)  
✅ SSL/HTTPS ativo (segurança)  
✅ SEO otimizado (Google)  
✅ Formulários funcionais (WhatsApp)  
✅ Site profissional e pronto para clientes! 🎊  

---

## 📖 LEITURA RECOMENDADA

### Leia AGORA:
1. ✅ **INICIO-AQUI.md** ← Você está aqui
2. ✅ **ARQUIVOS-CRIADOS.md** ← Entender o que foi criado

### Leia ANTES do deploy:
3. ✅ **CHECKLIST-FINAL.md** ← Verificar tudo

### Leia DURANTE o deploy:
4. ✅ **GUIA-UPLOAD-GITHUB.md** ← Passo a passo

### Leia APÓS o deploy:
5. ✅ **CONFIGURACAO-DNS.md** ← Configurar domínio

### Use SE NECESSÁRIO:
6. ✅ **COMO-SALVAR-ARQUIVOS.md** ← Se precisar exportar do Figma

---

## 🚀 COMECE AGORA!

**Passo 1:** Leia **ARQUIVOS-CRIADOS.md** para entender o que foi criado

**Passo 2:** Renomeie `README-GITHUB.md` → `README.md`

**Passo 3:** Execute `npm install` e `npm run dev` para testar

**Passo 4:** Siga **GUIA-UPLOAD-GITHUB.md** para fazer deploy

---

## 💡 DICAS IMPORTANTES

### ✅ Faça Testes Locais Primeiro
Sempre teste com `npm run dev` antes de fazer deploy

### ✅ Leia as Instruções Completas
Cada guia tem informações detalhadas e soluções de problemas

### ✅ Não Tenha Pressa
Melhor fazer com calma e corretamente do que rápido e com erros

### ✅ Verifique os Contactos
Certifique-se de que telefone, email e Instagram estão corretos

### ✅ Aguarde a Propagação DNS
DNS pode demorar até 48 horas - é normal!

---

## 🎁 BÔNUS: Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Git - Status
git status

# Git - Adicionar arquivos
git add .

# Git - Commit
git commit -m "mensagem"

# Git - Push
git push

# Limpar cache DNS (Windows)
ipconfig /flushdns

# Limpar cache DNS (Mac)
sudo dscacheutil -flushcache
```

---

## 📚 RECURSOS ÚTEIS

### Documentação Oficial
- **Vite:** https://vitejs.dev
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vercel:** https://vercel.com/docs
- **Git:** https://git-scm.com/doc

### Ferramentas Online
- **DNS Checker:** https://dnschecker.org
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html
- **Google Search Console:** https://search.google.com/search-console

---

## ✅ RESUMO EM 3 PASSOS

### 1. PREPARAR
- Renomear README
- Testar localmente
- Verificar checklist

### 2. DEPLOY
- Upload para GitHub
- Deploy na Vercel
- Testar link temporário

### 3. DOMÍNIO
- Configurar DNS
- Aguardar propagação
- Testar site final

---

## 🎊 PARABÉNS!

Você tem tudo o que precisa para fazer o deploy do site **EMD Serviços**!

**Agora é só seguir os guias passo a passo.** 🚀

---

**EMD Serviços - Você Sonha, Nós Construímos!** 🏗️✨

📞 +351 914040103  
🌐 emdservicos.pt  
📸 @emd_servicos  
📧 emdservicos2025@gmail.com  

---

## 🔄 PRÓXIMA AÇÃO

👉 **Abra agora:** `ARQUIVOS-CRIADOS.md`

Boa sorte! 🍀
