# 💾 COMO BAIXAR O PROJETO DO FIGMA MAKE

## 🎯 OBJETIVO

Baixar todos os arquivos do projeto EMD Serviços do Figma Make para o seu computador, para depois publicar no GitHub.

---

## ⚠️ IMPORTANTE

O Figma Make não tem um botão direto de "Download". Você precisará copiar os arquivos manualmente OU usar ferramentas do navegador.

---

## 🚀 MÉTODO 1: DOWNLOAD MANUAL (Recomendado)

### Passo 1: Criar Estrutura de Pastas

No seu computador, crie esta estrutura:

```
emdservicos/
├── public/
│   ├── images/          ← Você adicionará as imagens aqui
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── figma/
│   ├── styles/
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### Passo 2: Copiar Arquivos Principais

No Figma Make, clique em cada arquivo e copie o conteúdo:

#### 1. Arquivos da Raiz

**`package.json`** (copie do arquivo atual):
```json
{
  "name": "emdservicos-website",
  "version": "1.0.0",
  "description": "Website oficial da EMD Serviços - Construção e Remodelação em Lisboa",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.344.0",
    "react-hook-form": "^7.55.0",
    "sonner": "^2.0.3",
    "motion": "^10.16.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.2.2",
    "vite": "^5.3.1"
  }
}
```

**`vite.config.ts`**:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**`tsconfig.json`**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**`tsconfig.node.json`**:
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

#### 2. Copiar Todos os Componentes

No Figma Make, copie o conteúdo de cada arquivo:

- `/App.tsx` → Copie para `src/App.tsx`
- `/src/main.tsx` → Copie
- `/components/Header.tsx` → Copie para `src/components/Header.tsx`
- `/components/Hero.tsx` → Copie
- `/components/Services.tsx` → Copie
- `/components/BookingSection.tsx` → Copie
- `/components/ContactSection.tsx` → Copie
- `/components/AboutSection.tsx` → Copie
- `/components/Footer.tsx` → Copie
- `/components/ImageCarousel.tsx` → Copie
- `/components/WhatsAppButton.tsx` → Copie
- `/components/InstagramButton.tsx` → Copie

**E todos os componentes UI:**
- `/components/ui/button.tsx`
- `/components/ui/input.tsx`
- `/components/ui/label.tsx`
- `/components/ui/card.tsx`
- etc. (todos os arquivos em `/components/ui/`)

#### 3. Copiar Arquivos de Estilo

- `/styles/globals.css` → Copie para `src/styles/globals.css`

#### 4. Copiar Arquivos Públicos

- `/index.html` → Copie para raiz
- `/public/robots.txt` → Copie
- `/public/sitemap.xml` → Copie

---

## 🔧 MÉTODO 2: USAR DEVTOOLS (Avançado)

### Para Usuários Técnicos

1. **Abra DevTools** (F12 no navegador)
2. **Vá para a aba "Sources"**
3. **Navegue pelos arquivos** do projeto
4. **Copie cada arquivo** individualmente
5. **Salve no seu computador**

---

## ✅ MÉTODO 3: EXPORTAR CÓDIGO COMPLETO (Se Disponível)

Alguns ambientes de desenvolvimento online oferecem export:

1. Procure por um botão **"Export"** ou **"Download"**
2. Ou **"Download as ZIP"**
3. Se existir, use-o!

---

## 📝 APÓS BAIXAR OS ARQUIVOS

### 1. Instalar Dependências

```bash
cd emdservicos
npm install
```

### 2. Substituir Imagens

**CRÍTICO:** As importações `figma:asset` não funcionarão!

Opções:
- **A)** Use URLs do Unsplash (ver `/IMAGENS-UNSPLASH-PRONTAS.md`)
- **B)** Adicione suas fotos em `/public/images/`

### 3. Testar Localmente

```bash
npm run dev
```

Abra: `http://localhost:5173`

### 4. Verificar se Funciona

- [ ] Site carrega sem erros
- [ ] Todas as seções aparecem
- [ ] Imagens carregam (se usou URLs)
- [ ] Navegação funciona
- [ ] Formulários aparecem

---

## 📋 LISTA COMPLETA DE ARQUIVOS NECESSÁRIOS

### Essenciais (Obrigatórios)

```
✅ package.json
✅ vite.config.ts
✅ tsconfig.json
✅ tsconfig.node.json
✅ .gitignore
✅ index.html
✅ src/main.tsx
✅ src/App.tsx
✅ src/styles/globals.css
```

### Componentes Principais

```
✅ src/components/Header.tsx
✅ src/components/Hero.tsx
✅ src/components/Services.tsx
✅ src/components/BookingSection.tsx
✅ src/components/ContactSection.tsx
✅ src/components/AboutSection.tsx
✅ src/components/Footer.tsx
✅ src/components/ImageCarousel.tsx
✅ src/components/WhatsAppButton.tsx
✅ src/components/InstagramButton.tsx
```

### Componentes UI (Pasta completa)

```
✅ src/components/ui/button.tsx
✅ src/components/ui/input.tsx
✅ src/components/ui/label.tsx
✅ src/components/ui/card.tsx
✅ src/components/ui/select.tsx
✅ src/components/ui/textarea.tsx
✅ src/components/ui/sonner.tsx
... (todos os outros)
```

### Componentes Figma

```
✅ src/components/figma/ImageWithFallback.tsx
```

### Arquivos Públicos

```
✅ public/robots.txt
✅ public/sitemap.xml
```

---

## 🎯 ALTERNATIVA: RECRIAR PROJETO DO ZERO

Se for muito trabalhoso copiar tudo:

### Opção: Usar Vite Template

```bash
# Criar novo projeto React + TypeScript
npm create vite@latest emdservicos -- --template react-ts

# Entrar na pasta
cd emdservicos

# Instalar dependências
npm install

# Instalar pacotes adicionais
npm install lucide-react react-hook-form sonner motion
npm install -D tailwindcss@4.0.0 autoprefixer postcss

# Copiar APENAS os componentes do Figma Make
# (Header, Hero, Services, etc.)

# Copiar o index.html com SEO

# Substituir imagens

# Testar
npm run dev
```

---

## 🔍 VERIFICAÇÃO FINAL

Antes de publicar no GitHub, confirme:

- [ ] Todos os arquivos foram copiados
- [ ] `npm install` executou sem erros
- [ ] `npm run dev` funciona
- [ ] Site abre no navegador
- [ ] Não há erros no console
- [ ] Todas as seções aparecem
- [ ] Imagens carregam (ou URLs estão corretas)
- [ ] Navegação funciona
- [ ] Formulários aparecem

---

## 🆘 PROBLEMAS COMUNS

### "Module not found: figma:asset"
**Causa:** Você copiou o código sem substituir as imagens.
**Solução:** Ver `/IMAGENS-UNSPLASH-PRONTAS.md`

### "Cannot find module 'vite'"
**Causa:** Dependências não instaladas.
**Solução:** Execute `npm install`

### "Port 5173 is already in use"
**Causa:** Outro projeto já está rodando.
**Solução:** Pare o outro projeto ou use: `npm run dev -- --port 3000`

### Erros de TypeScript
**Causa:** Falta algum arquivo de configuração.
**Solução:** Copie `tsconfig.json` e `tsconfig.node.json`

---

## 📊 TEMPO ESTIMADO

| Método | Tempo | Dificuldade |
|--------|-------|-------------|
| Download Manual | 1-2 horas | ⭐⭐⭐ Médio |
| DevTools | 30-60 min | ⭐⭐⭐⭐ Alto |
| Recriar do Zero | 2-3 horas | ⭐⭐⭐⭐⭐ Muito Alto |

---

## ✅ PRÓXIMOS PASSOS

Após baixar todos os arquivos:

1. ✅ Substitua as imagens (ver `/IMAGENS-UNSPLASH-PRONTAS.md`)
2. ✅ Teste localmente: `npm run dev`
3. ✅ Siga o guia: `/COMECE-AQUI-GITHUB.txt`
4. ✅ Publique no GitHub
5. ✅ Deploy no Netlify

---

## 💡 DICA IMPORTANTE

**NÃO tente** copiar as imagens do Figma diretamente. Elas estão em formato proprietário `figma:asset`.

**Em vez disso:**
1. Use URLs do Unsplash (RÁPIDO)
2. OU tire prints/salve suas fotos reais
3. OU use placeholders temporários

---

**🚀 Após baixar, vá direto para: `/COMECE-AQUI-GITHUB.txt`**
