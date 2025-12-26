# 🎯 INSTRUÇÕES SIMPLIFICADAS - Publicar EMD Serviços no GitHub

## ⚡ AÇÃO IMEDIATA NECESSÁRIA

O projeto usa imagens do Figma que **NÃO FUNCIONAM** fora desta plataforma. Você tem 2 opções:

---

## 🚀 OPÇÃO 1: PUBLICAÇÃO RÁPIDA (30 minutos)

### A) Baixar as Imagens Atuais

1. **No Figma Make**, clique com botão direito em cada imagem
2. Salve como: `emd-logo.png`, `paint-1.jpg`, `electric-1.jpg`, etc.
3. Crie uma pasta `/public/images/` no projeto
4. Coloque todas as imagens lá

### B) Atualizar o Código

Edite estes 4 arquivos e substitua as linhas:

**1. `/components/Hero.tsx`** (linhas 4-11):
```typescript
// SUBSTITUA:
import logo from 'figma:asset/23636324fab7da45d5a32dfe260c6ca414ff0877.png';
import newLogo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';
import paintImage1 from 'figma:asset/9f80e1b15023fa3ce8357b0bb26db92f62982fa5.png';
import electricImage1 from 'figma:asset/33107fc7c949e24656191c1571d283db632eab60.png';
import flooringImage1 from 'figma:asset/1b8eec7b0985080d9ba71c554a464e4d80915687.png';
import kitchenImage1 from 'figma:asset/85cb08568358012bfeb364ff2f4406e31999b16a.png';
import renovationImage1 from 'figma:asset/44977952c993d653636b54fc085b3972af0dec8f.png';
import roofImage1 from 'figma:asset/bd8a06392662bf490566a90bc9bd8701c170e2c4.png';

// POR:
const logo = '/images/emd-logo-old.png';
const newLogo = '/images/emd-logo.png';
const paintImage1 = '/images/paint-1.jpg';
const electricImage1 = '/images/electric-1.jpg';
const flooringImage1 = '/images/flooring-1.jpg';
const kitchenImage1 = '/images/kitchen-1.jpg';
const renovationImage1 = '/images/renovation-1.jpg';
const roofImage1 = '/images/roof-1.jpg';
```

**2. `/components/Services.tsx`** (linhas 6-22):
```typescript
// SUBSTITUA todas as linhas import figma:asset por:
const paintImage1 = '/images/paint-1.jpg';
const paintImage2 = '/images/paint-2.jpg';
const paintImage3 = '/images/paint-3.jpg';
const electricImage1 = '/images/electric-1.jpg';
const electricImage2 = '/images/electric-2.jpg';
const electricImage3 = '/images/electric-3.jpg';
const flooringImage1 = '/images/flooring-1.jpg';
const flooringImage2 = '/images/flooring-2.jpg';
const flooringImage3 = '/images/flooring-3.jpg';
const kitchenImage1 = '/images/kitchen-1.jpg';
const kitchenImage2 = '/images/kitchen-2.jpg';
const renovationImage1 = '/images/renovation-1.jpg';
const renovationImage2 = '/images/renovation-2.jpg';
const renovationImage3 = '/images/renovation-3.jpg';
const roofImage1 = '/images/roof-1.jpg';
const droneImage1 = '/images/drone-1.jpg';
const droneImage2 = '/images/drone-2.jpg';
```

**3. `/components/Header.tsx`** (linhas 1-4, 8):
```typescript
// SUBSTITUA:
import backgroundImage from 'figma:asset/06484b21683e0ddde3130615e9bf3ab86d5c1960.png';
import navBackgroundImage from 'figma:asset/93e48bb62716ca304f1a75c915ad014e0e929428.png';
import logo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';

// POR:
const backgroundImage = '/images/background.jpg';
const navBackgroundImage = '/images/nav-background.jpg';
const logo = '/images/emd-logo.png';
```

**4. `/components/Footer.tsx`** (linha 1, 3):
```typescript
// SUBSTITUA:
import logo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';

// POR:
const logo = '/images/emd-logo.png';
```

---

## 🌐 OPÇÃO 2: USAR IMAGENS ONLINE (10 minutos)

Use URLs do Unsplash/Pexels (temporário até você adicionar suas fotos reais):

**No `/components/Hero.tsx`:**
```typescript
const newLogo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Serviços';
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800';
const electricImage1 = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800';
const flooringImage1 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800';
const kitchenImage1 = 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800';
const renovationImage1 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800';
const roofImage1 = 'https://images.unsplash.com/photo-1632471595857-39bb3ce0c4e5?w=800';
```

Faça o mesmo nos outros arquivos.

---

## 📤 PUBLICAR NO GITHUB

### 1. Crie o Repositório

```bash
# No terminal, na pasta do projeto:
git init
git add .
git commit -m "Site EMD Serviços - Versão inicial"
```

### 2. No GitHub (https://github.com/new):

- Nome: `emdservicos`
- Descrição: `Website EMD Serviços - Construção e Remodelação`
- Público
- Criar repositório

### 3. Conecte e Envie:

```bash
# SUBSTITUA 'seu-usuario' pelo seu nome de usuário do GitHub
git remote add origin https://github.com/seu-usuario/emdservicos.git
git branch -M main
git push -u origin main
```

---

## 🌍 PUBLICAR NO NETLIFY (Deploy Automático)

### Método 1: Pelo GitHub (Recomendado)

1. Acesse: https://app.netlify.com/
2. Faça login com GitHub
3. "Add new site" → "Import from Git"
4. Escolha o repositório `emdservicos`
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Deploy!

### Método 2: Drag & Drop

1. Execute no terminal: `npm run build`
2. Acesse: https://app.netlify.com/drop
3. Arraste a pasta `dist` para a página
4. Pronto!

---

## 🔍 INDEXAÇÃO NO GOOGLE

### Passo 1: Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: `https://seu-site.netlify.app`
3. Verifique a propriedade
4. Envie o sitemap: `https://seu-site.netlify.app/sitemap.xml`

### Passo 2: Aguarde

- **Primeira indexação:** 2-7 dias
- **Indexação completa:** 2-4 semanas

### Passo 3: Acelere a Indexação

```
# Solicite indexação manual:
1. Google Search Console
2. Ferramentas → Inspeção de URL
3. Cole: https://seu-site.netlify.app
4. "Solicitar indexação"
```

---

## ✅ LISTA DE VERIFICAÇÃO

- [ ] Substituí todas as importações `figma:asset`
- [ ] Adicionei as imagens em `/public/images/` OU usei URLs online
- [ ] Criei o repositório no GitHub
- [ ] Fiz o commit e push
- [ ] Conectei ao Netlify
- [ ] Site está no ar
- [ ] Enviei sitemap ao Google Search Console
- [ ] Solicitei indexação manual

---

## 🎯 LISTA DE IMAGENS NECESSÁRIAS

Se escolheu a Opção 1, você precisa destas imagens:

```
/public/images/
├── emd-logo.png          ← Logo principal EMD Serviços
├── emd-logo-old.png      ← Logo antiga (se houver)
├── paint-1.jpg           ← Foto de pintura 1
├── paint-2.jpg           ← Foto de pintura 2
├── paint-3.jpg           ← Foto de pintura 3
├── electric-1.jpg        ← Foto de eletricidade 1
├── electric-2.jpg        ← Foto de eletricidade 2
├── electric-3.jpg        ← Foto de eletricidade 3
├── flooring-1.jpg        ← Foto de pavimento 1
├── flooring-2.jpg        ← Foto de pavimento 2
├── flooring-3.jpg        ← Foto de pavimento 3
├── kitchen-1.jpg         ← Foto de cozinha 1
├── kitchen-2.jpg         ← Foto de cozinha 2
├── renovation-1.jpg      ← Foto de remodelação 1
├── renovation-2.jpg      ← Foto de remodelação 2
├── renovation-3.jpg      ← Foto de remodelação 3
├── roof-1.jpg            ← Foto de telhado 1
├── drone-1.jpg           ← Foto drone 1
├── drone-2.jpg           ← Foto drone 2
├── background.jpg        ← Imagem de fundo
└── nav-background.jpg    ← Imagem nav
```

---

## 🆘 PRECISA DE AJUDA?

**Erro comum:** "Module not found: figma:asset"
- **Causa:** Você não substituiu as importações
- **Solução:** Revise os 4 arquivos mencionados acima

**Site não indexa no Google:**
- **Aguarde:** 2-7 dias é normal
- **Verifique:** robots.txt permite indexação
- **Envie:** sitemap.xml no Search Console

---

**🚀 Pronto! Após seguir estes passos, seu site estará publicado e sendo indexado pelo Google!**
