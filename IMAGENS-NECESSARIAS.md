# 📸 IMAGENS NECESSÁRIAS PARA O PROJETO EMD SERVIÇOS

## 📁 Estrutura de Pastas

Crie esta estrutura no seu projeto:

```
emdservicos/
└── public/
    └── images/
        ├── emd-logo.png
        ├── paint-1.jpg
        ├── paint-2.jpg
        ├── paint-3.jpg
        ├── electric-1.jpg
        ├── electric-2.jpg
        ├── electric-3.jpg
        ├── flooring-1.jpg
        ├── flooring-2.jpg
        ├── flooring-3.jpg
        ├── kitchen-1.jpg
        ├── kitchen-2.jpg
        ├── renovation-1.jpg
        ├── renovation-2.jpg
        ├── renovation-3.jpg
        ├── roof-1.jpg
        ├── drone-1.jpg
        └── drone-2.jpg
```

## 📋 LISTA COMPLETA DE IMAGENS (18 arquivos)

### Logo (1 imagem)
- **emd-logo.png** - Logo da EMD Serviços (fundo branco, 400x200px recomendado)

### Pintura (3 imagens)
- **paint-1.jpg** - Foto de trabalho de pintura 1
- **paint-2.jpg** - Foto de trabalho de pintura 2
- **paint-3.jpg** - Foto de trabalho de pintura 3

### Eletricidade (3 imagens)
- **electric-1.jpg** - Foto de trabalho elétrico 1
- **electric-2.jpg** - Foto de trabalho elétrico 2
- **electric-3.jpg** - Foto de trabalho elétrico 3

### Pavimento Flutuante (3 imagens)
- **flooring-1.jpg** - Foto de pavimento flutuante 1
- **flooring-2.jpg** - Foto de pavimento flutuante 2
- **flooring-3.jpg** - Foto de pavimento flutuante 3

### Cozinha (2 imagens)
- **kitchen-1.jpg** - Foto de montagem de cozinha 1
- **kitchen-2.jpg** - Foto de montagem de cozinha 2

### Remodelação (3 imagens)
- **renovation-1.jpg** - Foto de remodelação completa 1
- **renovation-2.jpg** - Foto de remodelação completa 2
- **renovation-3.jpg** - Foto de remodelação completa 3

### Telhados (1 imagem)
- **roof-1.jpg** - Foto de trabalho em telhado

### Drone (2 imagens)
- **drone-1.jpg** - Foto de inspeção com drone 1
- **drone-2.jpg** - Foto de inspeção com drone 2

---

## 🎨 ESPECIFICAÇÕES TÉCNICAS

### Formato Recomendado
- **Formato:** JPG (para fotos) ou PNG (para logo)
- **Resolução:** Mínimo 1920x1080px (Full HD)
- **Tamanho:** Máximo 500KB por imagem (otimizado para web)
- **Proporção:** 16:9 ou 4:3 (landscape)

### Qualidade
- Fotos nítidas e bem iluminadas
- Boa composição (mostre o trabalho completo)
- Evite fotos escuras ou tremidas
- Prefira fotos horizontais (landscape)

---

## 📥 COMO ADICIONAR AS IMAGENS

### Passo 1: Criar a pasta
```bash
mkdir -p public/images
```

### Passo 2: Copiar suas fotos
Copie todos os 18 arquivos para a pasta `public/images/` com os nomes exatos listados acima.

### Passo 3: Verificar
Certifique-se de que os nomes dos arquivos estão EXATAMENTE como listado (case-sensitive).

---

## 🚀 ALTERNATIVA RÁPIDA: URLs TEMPORÁRIAS

Se não tiver as fotos prontas agora, pode usar URLs temporárias do Unsplash:

**Edite os arquivos:**
- `/components/Hero.tsx`
- `/components/Services.tsx`
- `/components/Header.tsx`
- `/components/Footer.tsx`

**Substitua:**
```javascript
// De:
const paintImage1 = '/images/paint-1.jpg';

// Para:
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800';
```

**URLs sugeridas:**

```javascript
// Logo
const logo = 'https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=EMD+Servicos';

// Pintura
const paintImage1 = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920';
const paintImage2 = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920';
const paintImage3 = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920';

// Eletricidade
const electricImage1 = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920';
const electricImage2 = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920';
const electricImage3 = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920';

// Pavimento
const flooringImage1 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920';
const flooringImage2 = 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920';
const flooringImage3 = 'https://images.unsplash.com/photo-1566908829550-e6551b00979b?w=1920';

// Cozinha
const kitchenImage1 = 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1920';
const kitchenImage2 = 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1920';

// Remodelação
const renovationImage1 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920';
const renovationImage2 = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920';
const renovationImage3 = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920';

// Telhado
const roofImage1 = 'https://images.unsplash.com/photo-1632471595857-39bb3ce0c4e5?w=1920';

// Drone
const droneImage1 = 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920';
const droneImage2 = 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1920';
```

---

## ✅ VERIFICAÇÃO

Após adicionar as imagens, verifique:

```bash
# Listar arquivos
ls -la public/images/

# Deve mostrar 18 arquivos:
# emd-logo.png
# paint-1.jpg, paint-2.jpg, paint-3.jpg
# electric-1.jpg, electric-2.jpg, electric-3.jpg
# flooring-1.jpg, flooring-2.jpg, flooring-3.jpg
# kitchen-1.jpg, kitchen-2.jpg
# renovation-1.jpg, renovation-2.jpg, renovation-3.jpg
# roof-1.jpg
# drone-1.jpg, drone-2.jpg
```

---

## 🎯 IMPORTÂNCIA

**CRÍTICO:** Sem estas imagens, o site NÃO funcionará corretamente.

**Escolha uma opção:**
1. ✅ Adicione suas fotos reais agora (recomendado)
2. ✅ Use URLs temporárias do Unsplash (rápido)
3. ✅ Adicione fotos reais depois e faça novo commit

---

## 💡 DICA

Se tiver fotos com nomes diferentes, você pode:

**Opção A:** Renomear os arquivos:
```bash
mv foto_pintura_1.jpg paint-1.jpg
mv foto_pintura_2.jpg paint-2.jpg
# etc...
```

**Opção B:** Editar os componentes para usar seus nomes de arquivo.

---

**📸 Suas fotos mostram a qualidade do seu trabalho! Use fotos reais sempre que possível.** 🏗️✨
