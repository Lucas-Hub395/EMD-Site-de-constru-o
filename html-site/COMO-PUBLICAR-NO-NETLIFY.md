# 🚀 Guia Completo: Como Publicar seu Site EMD Serviços no Netlify

## 📋 O que você tem agora

Todos os arquivos do seu site em HTML, CSS e JavaScript puro:
- `index.html` - Página principal com todo o conteúdo
- `styles.css` - Todos os estilos e animações
- `script.js` - Todas as funcionalidades (formulários, carrossel, menu)
- `netlify.toml` - Configuração do Netlify
- `robots.txt` - Para SEO no Google
- `sitemap.xml` - Mapa do site para motores de busca

## 🎯 Método 1: Publicar Direto no Netlify (MAIS RÁPIDO - 5 minutos)

### Passo 1: Preparar os arquivos
1. Crie uma pasta no seu computador chamada `emd-site`
2. Copie TODOS os arquivos acima para dentro dessa pasta:
   - index.html
   - styles.css
   - script.js
   - netlify.toml
   - robots.txt
   - sitemap.xml

### Passo 2: Fazer o Upload no Netlify
1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `emd-site` inteira para a área indicada
3. Aguarde o upload completar (geralmente 1-2 minutos)
4. ✅ Pronto! Seu site estará online imediatamente

### Passo 3: Configurar Domínio Personalizado
1. Após o upload, clique em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite: `emdservicos.pt` (ou o domínio que você comprou)
4. Siga as instruções para configurar o DNS

**Seu site estará online em:** `https://seu-site.netlify.app` (até configurar o domínio próprio)

---

## 💻 Método 2: Publicar via GitHub (Para controle de versão)

### Passo 1: Criar conta no GitHub
1. Acesse: https://github.com
2. Clique em **"Sign up"** (se ainda não tem conta)
3. Crie sua conta gratuita

### Passo 2: Criar novo repositório
1. Após fazer login, clique no botão **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Preencha:
   - **Repository name:** `emd-servicos-site`
   - **Description:** `Site oficial da EMD Serviços`
   - Marque como **"Public"** (público)
   - ✅ Marque **"Add a README file"**
4. Clique em **"Create repository"**

### Passo 3: Fazer Upload dos arquivos
1. Na página do seu repositório, clique em **"Add file"** > **"Upload files"**
2. Arraste TODOS os arquivos:
   - index.html
   - styles.css
   - script.js
   - netlify.toml
   - robots.txt
   - sitemap.xml
3. Na caixa "Commit changes", escreva: `Primeiro commit - Site EMD Serviços`
4. Clique em **"Commit changes"**

### Passo 4: Conectar GitHub ao Netlify
1. Acesse: https://app.netlify.com
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Selecione **"GitHub"**
4. Autorize a conexão entre Netlify e GitHub
5. Selecione o repositório **"emd-servicos-site"**
6. Configurações de build:
   - **Build command:** deixe em branco
   - **Publish directory:** deixe em branco ou coloque `.`
7. Clique em **"Deploy site"**
8. ✅ Aguarde 1-2 minutos e seu site estará online!

### Passo 5: Configurar Domínio Personalizado
1. No painel do Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite: `emdservicos.pt`
4. Siga as instruções para configurar o DNS no seu provedor de domínio

---

## 🌐 Como Configurar o DNS (para usar emdservicos.pt)

### Se você comprou o domínio em algum provedor (ex: GoDaddy, Hostinger, etc):

1. **Entre no painel do seu provedor de domínio**
2. **Encontre as configurações de DNS**
3. **Adicione estes registros:**

#### Opção A - Usando Name Servers do Netlify (Recomendado):
```
Name Server 1: dns1.p02.nsone.net
Name Server 2: dns2.p02.nsone.net
Name Server 3: dns3.p02.nsone.net
Name Server 4: dns4.p02.nsone.net
```

#### Opção B - Usando registros A:
```
Tipo: A
Nome: @
Valor: 75.2.60.5

Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
```

4. **Aguarde de 24-48 horas** para a propagação do DNS

---

## ✅ Verificar se está funcionando

### Teste estas URLs:
1. **Site principal:** https://emdservicos.pt
2. **Formulário de marcação:** https://emdservicos.pt/#booking
3. **Formulário de contato:** https://emdservicos.pt/#contact
4. **Botão WhatsApp:** Deve abrir conversa para +351 914040103
5. **Botão Instagram:** Deve abrir @emd_servicos

### Teste no Google:
1. Após 1-2 semanas, pesquise: `site:emdservicos.pt`
2. Pesquise: `EMD obras Lisboa`
3. Pesquise: `remodelação cozinha Lisboa`

---

## 🔧 Atualizações Futuras

### Método 1 (Upload Direto):
1. Acesse https://app.netlify.com
2. Clique no seu site
3. Vá em **"Deploys"**
4. Arraste os arquivos novamente na área de **"Deploy manually"**

### Método 2 (GitHub):
1. Acesse seu repositório no GitHub
2. Clique no arquivo que quer editar
3. Clique no ícone de lápis ✏️ para editar
4. Faça as alterações
5. Clique em **"Commit changes"**
6. O Netlify atualizará automaticamente em 1-2 minutos!

---

## 📱 Funcionalidades Implementadas

✅ **Menu de Navegação**
- Desktop e Mobile
- Smooth scroll para seções
- Links para Instagram

✅ **Seção Hero**
- Logo animado
- Texto com efeitos 3D
- Botões interativos

✅ **Serviços (7 serviços)**
- Carrossel de imagens automático
- Animações ao passar o mouse
- 7 tipos de serviços mostrados

✅ **Formulário de Marcação**
- Envia para WhatsApp
- Envia para SMS (mobile)
- Envia para Email
- Validação de campos

✅ **Formulário de Contato**
- Envia para WhatsApp
- Envia para SMS (mobile)
- Envia para Email
- Mensagem: "PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA"

✅ **Botões Flutuantes**
- WhatsApp (verde)
- Instagram (gradiente)
- Sempre visíveis

✅ **SEO Otimizado**
- Meta tags completas
- Structured Data (Schema.org)
- Sitemap.xml
- Robots.txt
- Palavras-chave: EMD, obras, remodelação, cozinha, pintura, telhado

✅ **Responsivo**
- Funciona em celular, tablet e desktop
- Menu mobile otimizado

---

## 🎨 Cores Usadas (Identidade Visual)

- **Azul Ciano:** #06b6d4, #0891b2, #0e7490
- **Dourado/Amarelo:** #fbbf24, #f59e0b, #d97706
- **Cinza:** Tons variados para texto e fundos

---

## 📞 Dados de Contato Configurados

- **Telefone:** +351 914040103
- **WhatsApp:** +351 914040103
- **Instagram:** @emd_servicos
- **Email:** emdservicos2025@gmail.com

---

## ❓ Problemas Comuns e Soluções

### 1. "Formulário não está enviando"
✅ **Solução:** Os formulários abrem WhatsApp, SMS e Email. Certifique-se de ter um aplicativo de email configurado no dispositivo.

### 2. "Site não aparece no Google"
✅ **Solução:** O Google leva 1-4 semanas para indexar sites novos. Envie manualmente em: https://search.google.com/search-console

### 3. "Imagens não estão carregando"
✅ **Solução:** As imagens usam Unsplash (serviço gratuito de fotos). Se alguma não carregar, basta atualizar a página.

### 4. "Domínio não funciona"
✅ **Solução:** Aguarde 24-48 horas após configurar o DNS. É normal demorar.

### 5. "WhatsApp não abre"
✅ **Solução:** Certifique-se de ter o WhatsApp instalado. Em desktop, funciona via WhatsApp Web.

---

## 🎯 Próximos Passos Recomendados

1. ✅ Publicar o site no Netlify
2. ✅ Configurar domínio emdservicos.pt
3. ✅ Testar todos os formulários
4. ✅ Compartilhar link nas redes sociais
5. ✅ Adicionar link na bio do Instagram
6. ✅ Enviar link para clientes
7. ✅ Registrar no Google Search Console
8. ✅ Criar Google My Business

---

## 📊 Como Acompanhar Visitas

### No Netlify (Grátis):
1. Acesse seu site no painel Netlify
2. Clique em **"Analytics"**
3. Veja número de visitantes

### Google Analytics (Opcional):
Se quiser estatísticas detalhadas, adicione o código do Google Analytics no `index.html` antes do `</head>`.

---

## 🆘 Precisa de Ajuda?

Se encontrar algum problema:
1. Verifique se todos os arquivos foram enviados
2. Limpe o cache do navegador (Ctrl + F5)
3. Teste em modo anônimo do navegador
4. Teste em outro dispositivo

---

## 🎉 Parabéns!

Seu site está pronto para ser publicado! É um site moderno, profissional, otimizado para SEO e com todas as funcionalidades que você pediu.

**Boa sorte com a EMD Serviços! 🏗️🎨⚡**
