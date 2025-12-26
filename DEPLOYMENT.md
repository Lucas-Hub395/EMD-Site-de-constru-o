# 🚀 Guia de Deployment - EMD Serviços

## 📦 Preparação do Projeto

### 1. Instalar Dependências
```bash
npm install
```

### 2. Testar Localmente
```bash
npm run dev
```
Abre automaticamente em: http://localhost:3000

### 3. Build de Produção
```bash
npm run build
```
Cria a pasta `dist/` com os arquivos otimizados.

---

## 🌐 Opções de Hospedagem

### **Opção A: Vercel (RECOMENDADO)**

#### Via GitHub (Automático)
1. Faça push do código para GitHub
2. Acesse: https://vercel.com
3. Clique em **"New Project"**
4. Importe o repositório do GitHub
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Clique em **"Deploy"**

#### Domínio Personalizado (Vercel)
1. No dashboard do projeto, vá em **"Settings" → "Domains"**
2. Adicione: `emdservicos.pt` e `www.emdservicos.pt`
3. Configure os DNS no registrador do domínio:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Aguarde propagação (24-48h)

---

### **Opção B: Netlify**

#### Via GitHub (Automático)
1. Faça push do código para GitHub
2. Acesse: https://netlify.com
3. Clique em **"Add new site" → "Import an existing project"**
4. Conecte o GitHub e selecione o repositório
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em **"Deploy site"**

#### Domínio Personalizado (Netlify)
1. No dashboard, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite: `emdservicos.pt`
4. Configure DNS no registrador:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [seu-site].netlify.app
   ```

---

### **Opção C: GitHub Pages**

#### Configuração
1. No repositório GitHub, vá em **Settings → Pages**
2. Source: **GitHub Actions**
3. Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Configure `vite.config.ts`:
```ts
export default defineConfig({
  base: '/emdservicos/', // Nome do repositório
  // ... resto da config
})
```

#### Domínio Personalizado (GitHub Pages)
1. No repositório, vá em **Settings → Pages → Custom domain**
2. Digite: `emdservicos.pt`
3. Crie arquivo `/public/CNAME` com conteúdo: `emdservicos.pt`
4. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: [seu-usuario].github.io
   ```

---

## 🔍 Google Search Console

### 1. Registar o Site
1. Acesse: https://search.google.com/search-console
2. Clique em **"Adicionar propriedade"**
3. Digite: `https://emdservicos.pt`
4. Verifique a propriedade (método HTML tag ou DNS)

### 2. Submeter Sitemap
1. No menu lateral, clique em **"Sitemaps"**
2. Digite: `https://emdservicos.pt/sitemap.xml`
3. Clique em **"Enviar"**

### 3. Monitoramento
- **Cobertura:** Verifica páginas indexadas
- **Desempenho:** Mostra cliques e impressões
- **Melhorias:** Sugere otimizações

---

## 📊 Google Analytics (Opcional)

1. Acesse: https://analytics.google.com
2. Crie uma propriedade para `emdservicos.pt`
3. Copie o código de rastreamento
4. Adicione no `/index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📱 Google My Business

1. Acesse: https://business.google.com
2. Clique em **"Adicionar sua empresa"**
3. Preencha:
   - Nome: **EMD Serviços**
   - Categoria: **Empresa de construção**
   - Localização: **Lisboa, Portugal**
   - Telefone: **+351 914040103**
   - Website: **https://emdservicos.pt**
   - Instagram: **@emd_servicos**
4. Verifique a empresa (carta postal ou telefone)

---

## ✅ Checklist Final

- [ ] Código no GitHub
- [ ] Deploy em Vercel/Netlify/GitHub Pages
- [ ] Domínio emdservicos.pt registrado
- [ ] DNS configurado
- [ ] SSL/HTTPS ativo
- [ ] Sitemap.xml submetido ao Google Search Console
- [ ] robots.txt acessível
- [ ] Google My Business criado
- [ ] Testar formulários (WhatsApp/Email/SMS)
- [ ] Testar responsividade mobile
- [ ] Verificar velocidade (PageSpeed Insights)

---

## 🆘 Suporte

### Problemas Comuns

**Build falhou:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Domínio não funciona:**
- Aguarde 24-48h para propagação DNS
- Verifique configuração DNS no registrador
- Force SSL na plataforma de hospedagem

**Sitemap não aparece no Google:**
- Aguarde 1-2 semanas para indexação
- Verifique URL: https://emdservicos.pt/sitemap.xml
- Reenvie no Search Console

---

**🎉 Boa Sorte com o Lançamento da EMD Serviços!**
