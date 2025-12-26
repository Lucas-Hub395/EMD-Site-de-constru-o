# 🚀 GUIA RÁPIDO DE PUBLICAÇÃO - EMD SERVIÇOS

## ⚡ PUBLICAÇÃO RÁPIDA (5 MINUTOS)

### MÉTODO 1: ARRASTE E SOLTE NO NETLIFY

1. **Acesse**: [app.netlify.com](https://app.netlify.com)
2. **Faça login** ou crie conta grátis
3. **Arraste** toda a pasta `html-site` para a área de upload
4. **Aguarde** o deploy (30 segundos)
5. **PRONTO!** Seu site está no ar

---

## 📂 MÉTODO 2: VIA GITHUB + NETLIFY (RECOMENDADO)

### PASSO 1: SUBIR PARA O GITHUB

#### Opção A - Pelo Site (Mais Fácil)

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **+** (canto superior direito) → **New repository**
3. Preencha:
   - **Repository name**: `emd-servicos`
   - **Description**: `Site oficial EMD Serviços`
   - **Public** ✅
4. Clique em **Create repository**
5. Na próxima tela, clique em **uploading an existing file**
6. **Arraste TODOS os arquivos** da pasta `html-site` para o GitHub
7. No campo de commit, escreva: `Site EMD Serviços inicial`
8. Clique em **Commit changes**

#### Opção B - Via Git (Terminal)

```bash
# Abra o terminal/prompt e navegue até a pasta html-site
cd html-site

# Configure seu Git (se ainda não configurou)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@gmail.com"

# Inicialize o repositório
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Site EMD Serviços inicial"

# Conecte ao GitHub (SUBSTITUA 'SEU-USUARIO' pelo seu usuário do GitHub)
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/emd-servicos.git

# Envie os arquivos
git push -u origin main
```

### PASSO 2: CONECTAR AO NETLIFY

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **Add new site** → **Import an existing project**
3. Escolha **Deploy with GitHub**
4. Selecione o repositório **emd-servicos**
5. Configurações (deixe tudo vazio):
   - Build command: *(vazio)*
   - Publish directory: *(vazio)*
6. Clique em **Deploy site**
7. **PRONTO!** Aguarde 1 minuto

### PASSO 3: CONFIGURAR DOMÍNIO (OPCIONAL)

1. No Netlify, clique em **Domain settings**
2. Clique em **Add custom domain**
3. Digite: `emdservicos.pt`
4. Siga as instruções para configurar o DNS

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Todos os arquivos estão na pasta `html-site`
- [ ] Arquivo `index.html` presente
- [ ] Arquivo `styles.css` presente
- [ ] Arquivo `script.js` presente
- [ ] Arquivo `netlify.toml` presente
- [ ] Arquivo `sitemap.xml` presente
- [ ] Arquivo `robots.txt` presente
- [ ] Número de telefone correto: +351 914040103
- [ ] Email correto: emdservicos2025@gmail.com
- [ ] Instagram correto: @emd_servicos

---

## 📋 ARQUIVOS NECESSÁRIOS

Estes arquivos devem estar na pasta `html-site`:

```
html-site/
├── index.html              ✅ Página principal
├── styles.css              ✅ Estilos
├── script.js               ✅ Funcionalidades
├── netlify.toml            ✅ Configuração Netlify
├── sitemap.xml             ✅ SEO
├── robots.txt              ✅ SEO
├── README.md               ✅ Documentação
└── GUIA-PUBLICACAO.md      ✅ Este guia
```

---

## 🌐 APÓS A PUBLICAÇÃO

### Seu site estará acessível em:

1. **URL temporária Netlify**: `https://seu-site.netlify.app`
2. **Domínio personalizado** (se configurar): `https://emdservicos.pt`

### Testar funcionalidades:

- [ ] Site carrega corretamente
- [ ] Menu de navegação funciona
- [ ] Carrosséis de imagens funcionam
- [ ] Formulário de marcação envia para WhatsApp
- [ ] Formulário de contato envia para WhatsApp
- [ ] Botões flutuantes (WhatsApp/Instagram) funcionam
- [ ] Site responsivo em mobile
- [ ] Todas as seções aparecem corretamente

---

## 🔧 ATUALIZAR O SITE DEPOIS

### Se publicou via Netlify (Arraste e Solte):
1. Faça as alterações nos arquivos
2. Arraste novamente para o Netlify
3. O site atualiza automaticamente

### Se publicou via GitHub:
1. Faça as alterações nos arquivos
2. No terminal:
```bash
git add .
git commit -m "Atualização do site"
git push
```
3. O Netlify atualiza automaticamente em 1 minuto

---

## 📞 CONTATOS DO SITE

- **WhatsApp**: +351 914040103
- **Email**: emdservicos2025@gmail.com
- **Instagram**: [@emd_servicos](https://instagram.com/emd_servicos)

---

## 🆘 PROBLEMAS COMUNS

### Site não carrega
- Verifique se o arquivo `index.html` está na raiz da pasta
- Verifique se todos os arquivos foram enviados

### Imagens não aparecem
- As imagens vêm do Unsplash (grátis)
- Requer conexão à internet

### Formulários não funcionam
- Funcionalidade depende do dispositivo do usuário
- WhatsApp abre em nova aba automaticamente

### Cores estão erradas
- Verifique o arquivo `styles.css`
- Cores: Azul Ciano (#06b6d4) e Dourado (#fbbf24)

---

## 🎉 PARABÉNS!

Seu site está pronto para receber clientes!

**Compartilhe em:**
- WhatsApp Business
- Instagram (@emd_servicos)
- Facebook
- Google Meu Negócio

---

**Desenvolvido para EMD Serviços**
*"Você sonha, nós Construímos"*
