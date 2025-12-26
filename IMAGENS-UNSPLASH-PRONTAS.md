# 🖼️ URLS DE IMAGENS PRONTAS PARA USAR

## 📋 COPIE E COLE NOS ARQUIVOS

Use estas URLs do Unsplash enquanto não adiciona suas fotos reais.

---

## 📝 /components/Hero.tsx

Substitua as linhas 4-11 por:

```typescript
// Remove todas as linhas import figma:asset

// Adicione estas linhas:
const logo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';
const newLogo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop';
const electricImage1 = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop';
const flooringImage1 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop';
const kitchenImage1 = 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop';
const renovationImage1 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop';
const roofImage1 = 'https://images.unsplash.com/photo-1632471595857-39bb3ce0c4e5?w=800&h=600&fit=crop';
```

---

## 📝 /components/Services.tsx

Substitua as linhas 6-22 por:

```typescript
// Remove todas as linhas import figma:asset

// Adicione estas linhas:
// PINTURA
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop';
const paintImage2 = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop';
const paintImage3 = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop';

// ELETRICIDADE
const electricImage1 = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop';
const electricImage2 = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop';
const electricImage3 = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop';

// PAVIMENTO FLUTUANTE
const flooringImage1 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop';
const flooringImage2 = 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop';
const flooringImage3 = 'https://images.unsplash.com/photo-1566908829550-e6551b00979b?w=800&h=600&fit=crop';

// COZINHA
const kitchenImage1 = 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop';
const kitchenImage2 = 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop';

// REMODELAÇÃO
const renovationImage1 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop';
const renovationImage2 = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop';
const renovationImage3 = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop';

// TELHADOS
const roofImage1 = 'https://images.unsplash.com/photo-1632471595857-39bb3ce0c4e5?w=800&h=600&fit=crop';

// DRONE (se necessário)
const droneImage1 = 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop';
const droneImage2 = 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&h=600&fit=crop';
```

---

## 📝 /components/Header.tsx

Substitua as linhas 1-4 e linha 8 por:

```typescript
// Remove as linhas:
// import backgroundImage from 'figma:asset/...';
// import navBackgroundImage from 'figma:asset/...';
// import logo from 'figma:asset/...';

// Adicione DEPOIS dos outros imports (após lucide-react):
const backgroundImage = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop';
const navBackgroundImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=400&fit=crop';
const logo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';
```

---

## 📝 /components/Footer.tsx

Substitua a linha 1 e 3 por:

```typescript
// Remove a linha:
// import logo from 'figma:asset/...';

// Adicione DEPOIS do import { Instagram, Facebook, Phone, Mail }:
const logo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';
```

---

## 🎨 LOGO EMD SERVIÇOS (Personalizado)

**IMPORTANTE:** O logo placeholder acima é temporário!

Para adicionar seu logo real:

### Opção 1: Upload no Imgur (Grátis)
1. Acesse: https://imgur.com/upload
2. Faça upload do logo EMD Serviços
3. Clique com botão direito → "Copiar endereço da imagem"
4. Substitua a URL do logo nos arquivos

### Opção 2: Hospede no GitHub
1. Crie a pasta `/public/images/`
2. Adicione o arquivo `emd-logo.png`
3. Substitua por: `const logo = '/images/emd-logo.png';`

### Opção 3: Use Cloudinary (Profissional)
1. Crie conta grátis: https://cloudinary.com/
2. Faça upload do logo
3. Copie a URL gerada

---

## 📊 COMPARAÇÃO DE OPÇÕES

| Opção | Velocidade | Qualidade | Profissionalismo | Custos |
|-------|-----------|-----------|------------------|--------|
| **Unsplash** (acima) | ⚡⚡⚡ Rápido | ⭐⭐⭐ Bom | ⭐⭐ Médio | ✅ Grátis |
| **Suas fotos reais** | ⚡⚡ Médio | ⭐⭐⭐⭐⭐ Excelente | ⭐⭐⭐⭐⭐ Alto | ✅ Grátis |
| **Imgur** | ⚡⚡⚡ Rápido | ⭐⭐⭐⭐ Muito bom | ⭐⭐⭐ Bom | ✅ Grátis |
| **Cloudinary** | ⚡⚡⚡ Rápido | ⭐⭐⭐⭐⭐ Excelente | ⭐⭐⭐⭐⭐ Alto | ✅ Grátis* |

*Cloudinary: Grátis até 25GB de armazenamento e 25GB de banda

---

## 🔄 WORKFLOW RECOMENDADO

### Fase 1: Lançamento Rápido (AGORA)
1. Use as URLs do Unsplash acima
2. Publique no GitHub
3. Deploy no Netlify
4. Site online em 30 minutos! ✅

### Fase 2: Profissionalização (Depois)
1. Tire fotos reais dos seus trabalhos
2. Faça upload no Cloudinary ou `/public/images/`
3. Atualize as URLs nos componentes
4. Commit e push para o GitHub
5. Netlify faz deploy automático! ✅

---

## 🎯 EXEMPLO COMPLETO - Hero.tsx

### ANTES (com figma:asset):
```typescript
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import logo from 'figma:asset/23636324fab7da45d5a32dfe260c6ca414ff0877.png';
import newLogo from 'figma:asset/6d7e617358534f4875f3f427dca8bce7aefc0bf8.png';
import paintImage1 from 'figma:asset/9f80e1b15023fa3ce8357b0bb26db92f62982fa5.png';
import electricImage1 from 'figma:asset/33107fc7c949e24656191c1571d283db632eab60.png';
import flooringImage1 from 'figma:asset/1b8eec7b0985080d9ba71c554a464e4d80915687.png';
import kitchenImage1 from 'figma:asset/85cb08568358012bfeb364ff2f4406e31999b16a.png';
import renovationImage1 from 'figma:asset/44977952c993d653636b54fc085b3972af0dec8f.png';
import roofImage1 from 'figma:asset/bd8a06392662bf490566a90bc9bd8701c170e2c4.png';

export function Hero() {
```

### DEPOIS (com URLs prontas):
```typescript
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';

// Imagens
const logo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';
const newLogo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop';
const electricImage1 = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop';
const flooringImage1 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop';
const kitchenImage1 = 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop';
const renovationImage1 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop';
const roofImage1 = 'https://images.unsplash.com/photo-1632471595857-39bb3ce0c4e5?w=800&h=600&fit=crop';

export function Hero() {
```

---

## ✅ VANTAGENS DAS URLs UNSPLASH

✓ Funcionam imediatamente
✓ Não precisa fazer upload
✓ Imagens profissionais de alta qualidade
✓ Grátis e sem restrições
✓ Carregamento rápido via CDN
✓ Você pode substituir depois

---

## 📞 PRÓXIMOS PASSOS

1. **Copie e cole** as URLs acima nos 4 arquivos
2. **Salve** todos os arquivos
3. **Teste localmente**: `npm run dev`
4. **Publique no GitHub** (veja COMANDOS-GIT.md)
5. **Deploy no Netlify**
6. **🎉 Site online!**

Depois, quando tiver tempo:
- Substitua pelo logo real da EMD Serviços
- Adicione fotos reais dos seus trabalhos
- Faça novo commit e push
- Netlify atualiza automaticamente!

---

**💡 Dica:** Comece com Unsplash agora. Site online hoje. Fotos reais depois! 🚀
