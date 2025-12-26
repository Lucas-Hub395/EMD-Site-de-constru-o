# 🚀 PUBLICAR NO NETLIFY AGORA - PASSO A PASSO

## ⚡ MÉTODO 1: NETLIFY DROP (Mais Simples - Arraste e Solte)

### Passo 1: Abrir Terminal
- **Windows**: Pesquise "cmd" ou "PowerShell" no menu Iniciar
- **Mac**: Procure "Terminal" no Spotlight
- **Navegue até a pasta do projeto emdservicos**

### Passo 2: Instalar Dependências e Fazer Build
```bash
npm install
```
Aguarde finalizar (pode demorar 1-2 minutos)

```bash
npm run build
```
Aguarde finalizar (30 segundos - 1 minuto)

✅ Uma pasta chamada **`dist`** será criada!

### Passo 3: Publicar no Netlify
1. **Acesse:** https://app.netlify.com/drop
2. **Faça login ou crie conta** (pode usar email ou GitHub)
3. **Arraste a pasta `dist`** inteira para a área de upload
4. **PRONTO!** Site publicado instantaneamente!

Você receberá um link: `https://[nome-aleatorio].netlify.app`

### Passo 4: Mudar Nome do Site (Opcional)
- No dashboard do Netlify
- Clique em "Site settings"
- "Change site name"
- Digite: `emdservicos`
- Novo link: `https://emdservicos.netlify.app`

---

## ⚡ MÉTODO 2: NETLIFY CLI (Para Deploy Automático)

### Passo 1: Instalar Netlify CLI
```bash
npm install -g netlify-cli
```

### Passo 2: Login
```bash
netlify login
```
Abrirá navegador para fazer login

### Passo 3: Deploy
```bash
netlify deploy --prod
```

Quando perguntar:
- **"Create & configure a new site?"** → Digite: `y` + Enter
- **"Team"** → Selecione seu time (use setas ↑↓)
- **"Site name"** → Digite: `emdservicos` + Enter
- **"Publish directory"** → Digite: `dist` + Enter

✅ **Site publicado!**

---

## ⚡ MÉTODO 3: NETLIFY + GITHUB (Atualizações Automáticas)

### Se já tiver GitHub configurado:

1. **Acesse:** https://app.netlify.com
2. **Login** → "Add new site" → "Import an existing project"
3. **Selecione "GitHub"**
4. **Autorize** Netlify a acessar seus repositórios
5. **Selecione** o repositório `emdservicos`
6. **Configurações de Build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
7. **Deploy site**

✅ Agora toda vez que fizer push no GitHub, o site atualiza automaticamente!

---

## 🌐 CONFIGURAR DOMÍNIO emdservicos.pt

### Depois que o site estiver no ar:

1. **No Netlify:**
   - Site settings → Domain management
   - Add custom domain → `emdservicos.pt`

2. **No seu Registrador de Domínio** (onde comprou emdservicos.pt):
   
   **Configure os DNS:**
   - **Tipo A** → Nome: `@` → Valor: `75.2.60.5`
   - **Tipo CNAME** → Nome: `www` → Valor: `[seu-site].netlify.app`

   **OU use Netlify DNS** (mais simples):
   - Netlify vai te dar nameservers
   - Copie os nameservers
   - No registrador, mude para os nameservers da Netlify

3. **Aguarde propagação** (15 minutos a 48 horas)

✅ Seu site estará em `https://emdservicos.pt`

---

## 🔍 APÓS PUBLICAR - GOOGLE

### 1. Google Search Console
```
https://search.google.com/search-console
```
- Adicionar propriedade: `https://emdservicos.netlify.app` (ou .pt)
- Verificar propriedade
- Enviar sitemap: `https://[seu-site]/sitemap.xml`

### 2. Google My Business (ESSENCIAL!)
```
https://business.google.com
```
- Criar perfil "EMD Serviços"
- Adicionar:
  - Telefone: +351914040103
  - Email: emdservicos2025@gmail.com
  - Endereço (se tiver escritório)
  - Instagram: @emd_servicos
- Upload fotos dos trabalhos
- Solicitar reviews de clientes

**Isto faz o negócio aparecer no Google Maps e buscas locais!**

### 3. Indexação Rápida
No Search Console:
- Inspeção de URL
- Cole a URL do site
- "Solicitar indexação"

---

## ✅ VERIFICAÇÃO FINAL

Após publicar, teste:
- ✅ Site carrega corretamente
- ✅ Todas as imagens aparecem
- ✅ Formulário de contacto funciona
- ✅ WhatsApp button funciona: `https://wa.me/351914040103`
- ✅ Link Instagram funciona: `@emd_servicos`
- ✅ Site é responsivo (teste no celular)

---

## 📞 LINKS IMPORTANTES

- **Site Netlify:** https://app.netlify.com
- **Netlify Drop:** https://app.netlify.com/drop
- **Google Search Console:** https://search.google.com/search-console
- **Google My Business:** https://business.google.com

---

## ⚠️ RESOLUÇÃO DE PROBLEMAS

### Erro "npm: command not found"
→ Instale Node.js: https://nodejs.org (versão LTS)

### Erro no build
→ Delete pasta `node_modules`, execute novamente:
```bash
rm -rf node_modules
npm install
npm run build
```

### Site não carrega imagens
→ Limpe cache do Netlify:
- Site settings → Build & deploy → Clear cache and deploy site

---

## 🎉 PRONTO!

Seu site EMD Serviços estará no ar e otimizado para aparecer no Google quando pesquisarem:
- ✅ EMD
- ✅ Obras
- ✅ Remodelação
- ✅ Cozinha
- ✅ Pintura
- ✅ Telhado

**Boa sorte com o negócio! 🚀**
