# 🚀 GITHUB + NETLIFY - PASSO A PASSO SIMPLES

## 📌 RESUMO: O QUE VAMOS FAZER

1. Criar conta no GitHub (se não tiver)
2. Criar repositório novo
3. Fazer upload dos arquivos
4. Conectar ao Netlify
5. Site publicado!

**Tempo total**: 10-15 minutos

---

## PARTE 1: GITHUB (5 minutos)

### 1️⃣ CRIAR CONTA (se ainda não tem)

1. Acesse: [github.com](https://github.com)
2. Clique em **"Sign up"**
3. Preencha:
   - Email
   - Senha
   - Nome de usuário (ex: `emdservicos`)
4. Verifique o email
5. Faça login

### 2️⃣ CRIAR REPOSITÓRIO

1. No GitHub, clique no botão **"+"** (canto superior direito)
2. Selecione **"New repository"**
3. Preencha:
   ```
   Repository name: emd-servicos-site
   Description: Site oficial da EMD Serviços
   ☑️ Public (deixe marcado)
   ☐ Add README (NÃO marque, já temos um)
   ```
4. Clique em **"Create repository"** (botão verde)

### 3️⃣ FAZER UPLOAD DOS ARQUIVOS

**MÉTODO FÁCIL - Pelo Site:**

1. Na página que abriu, clique em **"uploading an existing file"**
2. **ARRASTE** todos os arquivos da pasta `html-site` para o GitHub:
   - index.html
   - styles.css
   - script.js
   - netlify.toml
   - sitemap.xml
   - robots.txt
   - .gitignore
   - README.md
   - GUIA-PUBLICACAO.md
   - COMECE-AQUI.txt
   - LISTA-ARQUIVOS.md
   - GITHUB-PASSO-A-PASSO.md (este arquivo)
3. No campo "Commit changes", escreva: `Adicionar site EMD Serviços`
4. Clique em **"Commit changes"** (botão verde)
5. ✅ Arquivos enviados!

---

**MÉTODO AVANÇADO - Git (Opcional):**

Se preferir usar a linha de comando:

```bash
# 1. Abra o terminal na pasta html-site
cd caminho/para/html-site

# 2. Configure o Git (apenas primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@gmail.com"

# 3. Inicialize e faça commit
git init
git add .
git commit -m "Adicionar site EMD Serviços"

# 4. Conecte ao GitHub (SUBSTITUA 'seu-usuario')
git branch -M main
git remote add origin https://github.com/seu-usuario/emd-servicos-site.git

# 5. Envie
git push -u origin main
```

---

## PARTE 2: NETLIFY (5 minutos)

### 4️⃣ CRIAR CONTA NO NETLIFY

1. Acesse: [app.netlify.com](https://app.netlify.com)
2. Clique em **"Sign up"**
3. Escolha **"Sign up with GitHub"** (mais fácil)
4. Autorize o Netlify a acessar sua conta GitHub
5. ✅ Conta criada!

### 5️⃣ CONECTAR REPOSITÓRIO

1. No Netlify, clique em **"Add new site"**
2. Escolha **"Import an existing project"**
3. Clique em **"Deploy with GitHub"**
4. Procure e selecione: **"emd-servicos-site"**
5. Na tela de configuração:
   ```
   Branch to deploy: main
   Build command: (deixe vazio)
   Publish directory: (deixe vazio ou coloque .)
   ```
6. Clique em **"Deploy site"** (botão azul)
7. ⏳ Aguarde 1-2 minutos (barra de progresso)
8. ✅ **SITE PUBLICADO!**

---

## PARTE 3: SEU SITE ESTÁ NO AR! 🎉

### 6️⃣ ACESSAR SEU SITE

O Netlify criou um endereço temporário:

```
https://seu-site-random-name.netlify.app
```

**Exemplo**: `https://emd-servicos-8f3j2.netlify.app`

### 7️⃣ PERSONALIZAR URL (Opcional)

1. No Netlify, clique em **"Site settings"**
2. Vá em **"Domain management"**
3. Em "Custom domains", clique em **"Options"** → **"Edit site name"**
4. Mude para algo melhor:
   ```
   emd-servicos.netlify.app
   ```
5. Salve
6. ✅ Novo endereço: `https://emd-servicos.netlify.app`

---

## PARTE 4: DOMÍNIO PRÓPRIO (Opcional)

### 8️⃣ ADICIONAR DOMÍNIO PERSONALIZADO

Se você tem um domínio (ex: `emdservicos.pt`):

1. No Netlify → **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite: `emdservicos.pt`
4. Siga as instruções para configurar DNS
5. Aguarde propagação (24-48h)
6. ✅ Site acessível em: `https://emdservicos.pt`

**Onde comprar domínio:**
- [GoDaddy](https://godaddy.com)
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [PTisp](https://ptisp.pt) (Portugal)

---

## 📝 ATUALIZAR O SITE NO FUTURO

### Método 1 - Pelo GitHub (Fácil)

1. Acesse seu repositório no GitHub
2. Clique no arquivo que quer editar
3. Clique no ícone de lápis ✏️ (Edit)
4. Faça as alterações
5. Clique em **"Commit changes"**
6. ✅ Netlify atualiza automaticamente em 1 minuto!

### Método 2 - Upload novo arquivo

1. Acesse seu repositório no GitHub
2. Clique no arquivo antigo
3. Clique no ícone de lixeira 🗑️ (Delete)
4. Confirme
5. Faça upload do novo arquivo
6. ✅ Site atualizado!

### Método 3 - Git (Avançado)

```bash
# Edite os arquivos localmente
# Depois:

git add .
git commit -m "Descrição da atualização"
git push

# Pronto! Netlify atualiza sozinho
```

---

## ✅ CHECKLIST FINAL

Antes de considerar concluído:

- [ ] Repositório criado no GitHub
- [ ] Todos os 12 arquivos enviados
- [ ] Conta criada no Netlify
- [ ] Repositório conectado ao Netlify
- [ ] Deploy concluído (sem erros)
- [ ] Site acessível pela URL
- [ ] Testei em mobile
- [ ] Testei os formulários
- [ ] Botões WhatsApp/Instagram funcionam
- [ ] Carrosséis de imagens funcionam

---

## 🎯 RESULTADO FINAL

Você terá:

✅ **Site profissional no ar**  
✅ **URL pública para compartilhar**  
✅ **HTTPS grátis (seguro)**  
✅ **Atualizações automáticas**  
✅ **Backup no GitHub**  
✅ **Sem custo mensal**  

---

## 🔗 LINKS ÚTEIS

- **GitHub**: [github.com/seu-usuario/emd-servicos-site](https://github.com)
- **Netlify Dashboard**: [app.netlify.com](https://app.netlify.com)
- **Seu Site**: `https://seu-site.netlify.app`

---

## 🆘 PROBLEMAS COMUNS

### GitHub não aceita upload
- **Solução**: Certifique-se de ter criado o repositório primeiro
- Verifique se está logado

### Netlify não encontra repositório
- **Solução**: Autorize o Netlify a acessar seus repositórios
- Vá em Settings → Applications → Netlify

### Deploy falhou
- **Solução**: Verifique se `index.html` está na raiz
- Certifique-se de que todos os arquivos foram enviados

### Site carrega mas sem estilos
- **Solução**: Verifique se `styles.css` foi enviado
- Verifique o link no `index.html`

### Formulários não funcionam
- **Solução**: Normal! Funcionalidade depende do dispositivo
- WhatsApp abre automaticamente em nova aba

---

## 📱 COMPARTILHAR SEU SITE

Agora que está no ar, compartilhe:

### WhatsApp Business
```
🏗️ Visite nosso novo site!
https://emd-servicos.netlify.app

Você sonha, nós Construímos! ✨
```

### Instagram Bio
```
🌐 Site: emd-servicos.netlify.app
☎️ +351 914040103
```

### Google Meu Negócio
Adicione a URL do site no perfil da empresa

---

## 🎓 RECURSOS DE APRENDIZADO

### Quer aprender mais?

**GitHub:**
- [GitHub Guides](https://guides.github.com)
- [GitHub Desktop](https://desktop.github.com) (interface gráfica)

**Netlify:**
- [Netlify Docs](https://docs.netlify.com)
- [Netlify Blog](https://www.netlify.com/blog)

**HTML/CSS/JS:**
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://w3schools.com)

---

## 🎉 PARABÉNS!

Você publicou com sucesso o site da **EMD Serviços**!

**Próximos passos:**
1. ✅ Testar todas as funcionalidades
2. 📱 Compartilhar nas redes sociais
3. 📈 Adicionar ao Google Search Console
4. 🌟 Começar a receber marcações!

---

**Precisa de ajuda?**
- WhatsApp: +351 914040103
- Email: emdservicos2025@gmail.com

---

*Desenvolvido para EMD Serviços*  
*"Você sonha, nós Construímos"*  
*Versão 1.0 - Dezembro 2024*
