# 📋 INSTRUÇÕES PARA ADICIONAR O LOGOTIPO

## ✅ O que foi atualizado:

Substituí todas as referências ao logotipo antigo pelo novo logotipo da EMD Serviços em:
- ✅ **Header/Menu** (topo da página)
- ✅ **Hero Section** (seção principal)
- ✅ **Schema JSON-LD** (SEO)
- ✅ **Componentes React** (App.tsx)

---

## 🎯 PASSO A PASSO PARA USAR O SITE:

### 1️⃣ **Salvar o Logotipo**
   
1. Clique com o botão direito na imagem do logotipo que você enviou
2. Selecione **"Salvar imagem como..."**
3. Salve com o nome exato: **`logo.png`**
4. Coloque o arquivo `logo.png` dentro da pasta **SITE-PRONTO-NETLIFY**

### 2️⃣ **Estrutura da Pasta**

Sua pasta SITE-PRONTO-NETLIFY deve ficar assim:

```
SITE-PRONTO-NETLIFY/
├── index.html
├── styles.css
├── script.js
├── netlify.toml
├── robots.txt
├── sitemap.xml
├── logo.png          ← ADICIONE ESTE ARQUIVO AQUI
└── LEIA-ME.txt
```

### 3️⃣ **Publicar no Netlify**

Depois de adicionar o arquivo `logo.png`:

1. Acesse https://app.netlify.com
2. Faça login ou crie uma conta gratuita
3. Clique em **"Add new site"** → **"Deploy manually"**
4. Arraste toda a pasta **SITE-PRONTO-NETLIFY** para a área de upload
5. Aguarde alguns segundos
6. Seu site estará online! 🎉

---

## 🔍 VERIFICAÇÃO

Após publicar, verifique se o logotipo aparece:
- ✅ No menu superior (header)
- ✅ Na seção hero (logo grande central)

---

## 💡 ALTERNATIVA: Se não conseguir salvar o logotipo

Se tiver dificuldade em salvar a imagem, você pode:

1. Usar uma URL de hospedagem de imagem (como Imgur, Cloudinary, etc.)
2. Substituir `./logo.png` por essa URL no arquivo `index.html`

Por exemplo, se hospedar no Imgur:
- Linha 46: `"image": "https://i.imgur.com/XXXXX.png"`
- Linha 141: `<img src="https://i.imgur.com/XXXXX.png" ...`
- Linha 184: `<img src="https://i.imgur.com/XXXXX.png" ...`

---

## 📞 Contato

Se tiver dúvidas, verifique os outros arquivos de instruções na pasta:
- `LEIA-ME.txt`
- Outros arquivos `.md` na raiz do projeto

---

**✨ Seu site EMD Serviços está pronto para ser publicado!**
