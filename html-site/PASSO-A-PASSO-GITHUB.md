# 📦 Como Adicionar Estes Arquivos ao GitHub

## 🎯 Opção 1: Upload Direto no GitHub (MAIS FÁCIL)

### Passo 1: Criar Repositório
1. Acesse: **https://github.com**
2. Faça login (ou crie conta se não tiver)
3. Clique no botão **"+"** no canto superior direito
4. Selecione **"New repository"**
5. Preencha:
   ```
   Repository name: emd-servicos-site
   Description: Site oficial da EMD Serviços - Construção e Remodelação
   ☑️ Public (deixe marcado)
   ☑️ Add a README file (marque esta opção)
   ```
6. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos
1. Na página do seu repositório, clique em **"Add file"**
2. Selecione **"Upload files"**
3. Arraste TODOS estes arquivos:
   ```
   ✅ index.html
   ✅ styles.css
   ✅ script.js
   ✅ netlify.toml
   ✅ robots.txt
   ✅ sitemap.xml
   ✅ COMO-PUBLICAR-NO-NETLIFY.md
   ✅ INICIO-RAPIDO.txt
   ✅ PASSO-A-PASSO-GITHUB.md (este arquivo)
   ```
4. Na caixa "Commit changes", escreva:
   ```
   Primeiro commit - Site EMD Serviços completo
   ```
5. Clique em **"Commit changes"**
6. ✅ **PRONTO!** Seus arquivos estão no GitHub!

---

## 🎯 Opção 2: Usar Git (Para Usuários Avançados)

### Pré-requisitos:
- Ter o Git instalado: https://git-scm.com/downloads

### Comandos:
```bash
# 1. Criar pasta e entrar nela
mkdir emd-servicos-site
cd emd-servicos-site

# 2. Copiar todos os arquivos para esta pasta

# 3. Inicializar repositório Git
git init

# 4. Adicionar todos os arquivos
git add .

# 5. Fazer primeiro commit
git commit -m "Primeiro commit - Site EMD Serviços completo"

# 6. Adicionar repositório remoto (substitua SEU-USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/emd-servicos-site.git

# 7. Enviar arquivos para o GitHub
git branch -M main
git push -u origin main
```

---

## 🚀 Conectar GitHub ao Netlify

### Depois de ter os arquivos no GitHub:

1. **Acesse:** https://app.netlify.com
2. **Clique em:** "Add new site"
3. **Selecione:** "Import an existing project"
4. **Escolha:** "GitHub"
5. **Autorize** a conexão entre Netlify e GitHub
6. **Selecione** o repositório: `emd-servicos-site`
7. **Configurações de build:**
   ```
   Build command: (deixe em branco)
   Publish directory: . ou (deixe em branco)
   ```
8. **Clique em:** "Deploy site"
9. ⏳ Aguarde 1-2 minutos
10. ✅ **Site online!**

---

## 🌐 Configurar Domínio Personalizado

### No Netlify:
1. Clique no seu site
2. Vá em **"Domain settings"**
3. Clique em **"Add custom domain"**
4. Digite: `emdservicos.pt`
5. Clique em **"Verify"**
6. Siga as instruções de DNS

### No seu provedor de domínio:
Configure os **Name Servers** para:
```
dns1.p02.nsone.net
dns2.p02.nsone.net
dns3.p02.nsone.net
dns4.p02.nsone.net
```

OU configure os registros **A**:
```
Tipo: A
Nome: @
Valor: 75.2.60.5

Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
```

---

## 🔄 Como Fazer Atualizações

### Método 1: Upload no GitHub (Fácil)
1. Acesse seu repositório no GitHub
2. Clique no arquivo que quer editar
3. Clique no ícone de **lápis** ✏️
4. Faça as alterações
5. Role até o fim da página
6. Escreva uma descrição do que mudou
7. Clique em **"Commit changes"**
8. 🎉 O Netlify atualizará automaticamente em 1-2 minutos!

### Método 2: Upload de Novo Arquivo
1. Acesse seu repositório no GitHub
2. Clique em **"Add file"** > **"Upload files"**
3. Arraste o arquivo atualizado
4. Clique em **"Commit changes"**
5. 🎉 Netlify atualizará automaticamente!

### Método 3: Git (Avançado)
```bash
# 1. Fazer alterações nos arquivos
# 2. Verificar o que mudou
git status

# 3. Adicionar alterações
git add .

# 4. Fazer commit
git commit -m "Descrição do que mudou"

# 5. Enviar para o GitHub
git push
```

---

## ✅ Verificar se Funcionou

### No GitHub:
- Acesse: `https://github.com/SEU-USUARIO/emd-servicos-site`
- Você deve ver todos os arquivos listados

### No Netlify:
- Acesse: https://app.netlify.com
- Clique no seu site
- Deve mostrar "Published" em verde
- Clique em "Open production deploy"
- Seu site deve abrir!

---

## 📊 Estrutura Final no GitHub

Seu repositório deve ficar assim:
```
emd-servicos-site/
│
├── 📄 index.html
├── 🎨 styles.css
├── ⚙️ script.js
├── 🔧 netlify.toml
├── 🤖 robots.txt
├── 🗺️ sitemap.xml
├── 📖 README.md
├── 📘 COMO-PUBLICAR-NO-NETLIFY.md
├── 📄 INICIO-RAPIDO.txt
└── 📗 PASSO-A-PASSO-GITHUB.md
```

---

## 🎯 URLs Importantes

| Serviço | URL |
|---------|-----|
| GitHub | https://github.com |
| Netlify | https://app.netlify.com |
| Seu repositório | https://github.com/SEU-USUARIO/emd-servicos-site |
| Site no Netlify | https://seu-site.netlify.app |
| Site final | https://emdservicos.pt |

---

## ❓ Problemas Comuns

### "Não consigo fazer upload"
✅ Certifique-se de estar logado no GitHub
✅ Verifique se o repositório foi criado
✅ Tente usar navegador diferente

### "Netlify não encontra o repositório"
✅ Certifique-se de ter autorizado a conexão
✅ Verifique se o repositório é público
✅ Tente desconectar e reconectar o GitHub

### "Site não atualiza"
✅ Aguarde 2-3 minutos após o commit
✅ Limpe o cache do navegador (Ctrl + F5)
✅ Verifique se o commit foi enviado com sucesso

---

## 🆘 Precisa de Ajuda?

### Recursos Úteis:
- **GitHub Docs:** https://docs.github.com
- **Netlify Docs:** https://docs.netlify.com
- **Git Tutorial:** https://git-scm.com/book/pt-br/v2

### Suporte EMD Serviços:
- 📞 +351 914040103
- 📧 emdservicos2025@gmail.com
- 📷 @emd_servicos

---

## 🎉 Pronto!

Agora você tem:
- ✅ Código no GitHub (backup e controle de versão)
- ✅ Site online no Netlify (atualização automática)
- ✅ Domínio personalizado configurado
- ✅ Sistema de atualizações fácil

**Boa sorte com o site da EMD Serviços! 🏗️🎨⚡**
