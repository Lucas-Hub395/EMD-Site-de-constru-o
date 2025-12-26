# ✅ Checklist Final - EMD Serviços

## 📋 Verificação Completa Antes do Deploy

Use este checklist para garantir que tudo está correto antes de publicar o site.

---

## 🗂️ 1. ARQUIVOS DO PROJETO

### Arquivos de Configuração Essenciais

- [ ] **package.json** - Configurado com dependências corretas
- [ ] **vite.config.ts** - Configuração do Vite
- [ ] **tsconfig.json** - Configuração TypeScript
- [ ] **vercel.json** - Configuração Vercel (deploy)
- [ ] **netlify.toml** - Configuração Netlify (alternativa)
- [ ] **.gitignore** - Lista de arquivos ignorados pelo Git
- [ ] **index.html** - HTML principal com SEO
- [ ] **README.md** - Documentação do projeto (renomear README-GITHUB.md)

### Arquivos de SEO

- [ ] **public/robots.txt** - Configuração para motores de busca
- [ ] **public/sitemap.xml** - Mapa do site

### Componentes React

- [ ] **App.tsx** - Componente principal
- [ ] **components/Header.tsx** - Cabeçalho
- [ ] **components/Hero.tsx** - Banner principal
- [ ] **components/Services.tsx** - Galeria de serviços
- [ ] **components/AboutSection.tsx** - Sobre a empresa
- [ ] **components/BookingSection.tsx** - Sistema de marcações
- [ ] **components/ContactSection.tsx** - Formulário de contacto
- [ ] **components/Footer.tsx** - Rodapé
- [ ] **components/WhatsAppButton.tsx** - Botão WhatsApp flutuante
- [ ] **components/InstagramButton.tsx** - Botão Instagram

### Estilos

- [ ] **styles/globals.css** - Estilos globais e Tailwind

---

## 📞 2. INFORMAÇÕES DE CONTACTO

Verifique se TODOS os contactos estão corretos em TODOS os arquivos:

### Telefone/WhatsApp
- [ ] **+351914040103** está correto em todos os componentes
- [ ] Links WhatsApp funcionam: `https://wa.me/351914040103`
- [ ] Formatação consistente em todo o site

### Email
- [ ] **emdservicos2025@gmail.com** está correto
- [ ] Links mailto funcionam: `mailto:emdservicos2025@gmail.com`

### Instagram
- [ ] **@emd_servicos** está correto
- [ ] Link funciona: `https://instagram.com/emd_servicos`

### Website
- [ ] Todas as URLs foram atualizadas de `.com` para `.pt`
- [ ] **emdservicos.pt** aparece em:
  - [ ] index.html (meta tags)
  - [ ] package.json (homepage)
  - [ ] robots.txt (Sitemap)
  - [ ] sitemap.xml (todas as URLs)
  - [ ] Componentes relevantes

---

## 🎨 3. IDENTIDADE VISUAL

### Cores
- [ ] **Azul Ciano** (#00CED1 / cyan-500) aplicado corretamente
- [ ] **Dourado/Amarelo** (#FFD700 / yellow-400) aplicado corretamente
- [ ] Esquema de cores consistente em todo o site

### Logo
- [ ] Logo EMD Serviços está sendo usado
- [ ] Logo aparece no Header
- [ ] Logo aparece no Footer
- [ ] Favicon configurado (se aplicável)

---

## 🖼️ 4. IMAGENS E CONTEÚDO

### Galeria de Serviços
- [ ] **Remodelação em Geral** - Imagem e descrição
- [ ] **Eletricidade** - Imagem e descrição
- [ ] **Pintura** - Imagem e descrição
- [ ] **Pavimento Flutuante** - Imagem e descrição
- [ ] **Montagem de Móveis** - Imagem e descrição
- [ ] **Serviços Gerais** - Imagem e descrição

### Imagens
- [ ] Todas as imagens carregam corretamente
- [ ] Imagens são relevantes aos serviços
- [ ] Imagens têm boa qualidade
- [ ] Alt text configurado para SEO

---

## 📱 5. FUNCIONALIDADES

### Sistema de Marcações
- [ ] Formulário funciona corretamente
- [ ] Validação de campos implementada
- [ ] Campos requeridos: Nome, Telefone, Data, Hora, Serviço
- [ ] Mensagem é enviada para WhatsApp ao submeter
- [ ] Notificação de sucesso aparece
- [ ] Formulário limpa após envio

### Formulário de Contacto
- [ ] Formulário funciona corretamente
- [ ] Validação de campos implementada
- [ ] Campos requeridos: Nome, Telefone, Mensagem
- [ ] Mensagem é enviada para WhatsApp ao submeter
- [ ] Notificação de sucesso aparece
- [ ] Formulário limpa após envio

### Navegação
- [ ] Menu funciona corretamente
- [ ] Links internos funcionam (#services, #about, #booking, #contact)
- [ ] Link Instagram abre em nova aba
- [ ] Scroll suave está funcionando
- [ ] Menu mobile funciona (se implementado)

### Botões Flutuantes
- [ ] Botão WhatsApp aparece e funciona
- [ ] Botão leva para chat com número correto
- [ ] Mensagem pré-preenchida está correta

---

## 🔍 6. SEO E META TAGS

### Meta Tags Básicas (index.html)
- [ ] `<title>` otimizado e descritivo
- [ ] `<meta name="description">` completa (150-160 caracteres)
- [ ] `<meta name="keywords">` relevantes
- [ ] `<meta name="author">` configurado
- [ ] `<link rel="canonical">` aponta para emdservicos.pt

### Open Graph (Facebook/WhatsApp)
- [ ] `og:title` configurado
- [ ] `og:description` configurado
- [ ] `og:url` aponta para emdservicos.pt
- [ ] `og:type` configurado como "website"
- [ ] `og:image` configurado (se aplicável)
- [ ] `og:locale` configurado como "pt_PT"

### Twitter Cards
- [ ] `twitter:card` configurado
- [ ] `twitter:title` configurado
- [ ] `twitter:description` configurado

### Schema.org (Structured Data)
- [ ] LocalBusiness schema configurado
- [ ] Nome da empresa correto
- [ ] Telefone correto
- [ ] Email correto
- [ ] Endereço/localização (Lisboa) configurado
- [ ] Coordenadas geográficas corretas
- [ ] Horário de funcionamento configurado
- [ ] Serviços listados no schema
- [ ] Link Instagram no sameAs

### SEO Técnico
- [ ] robots.txt acessível em `/robots.txt`
- [ ] sitemap.xml acessível em `/sitemap.xml`
- [ ] Sitemap aponta para emdservicos.pt
- [ ] Meta robots configurado para "index, follow"

---

## 📱 7. RESPONSIVIDADE

Teste o site em diferentes tamanhos de tela:

### Desktop
- [ ] 1920px (Full HD) - Layout perfeito
- [ ] 1366px (Laptop comum) - Layout perfeito
- [ ] 1024px (Tablet landscape) - Layout perfeito

### Tablet
- [ ] 768px (iPad Portrait) - Layout adaptado
- [ ] 820px (iPad Air) - Layout adaptado

### Mobile
- [ ] 375px (iPhone SE) - Layout mobile
- [ ] 390px (iPhone 12/13) - Layout mobile
- [ ] 414px (iPhone Plus) - Layout mobile
- [ ] 360px (Android comum) - Layout mobile

### Teste Visual
- [ ] Textos legíveis em todos os tamanhos
- [ ] Imagens não distorcem
- [ ] Botões clicáveis em touch screens
- [ ] Menu mobile funciona (se aplicável)
- [ ] Formulários usáveis em mobile

---

## 🌐 8. NAVEGADORES

Teste o site nos principais navegadores:

- [ ] **Google Chrome** (versão atual)
- [ ] **Mozilla Firefox** (versão atual)
- [ ] **Safari** (Mac/iOS)
- [ ] **Microsoft Edge** (versão atual)
- [ ] **Chrome Mobile** (Android)
- [ ] **Safari Mobile** (iOS)

---

## ⚡ 9. PERFORMANCE

### Build Local
- [ ] `npm install` funciona sem erros
- [ ] `npm run dev` inicia servidor local
- [ ] `npm run build` completa com sucesso
- [ ] `npm run preview` mostra build de produção
- [ ] Sem erros no console do navegador
- [ ] Sem warnings críticos

### Otimizações
- [ ] Código minificado no build
- [ ] CSS otimizado
- [ ] Imagens otimizadas (tamanho razoável)
- [ ] Code splitting configurado (vite.config.ts)

---

## 🔐 10. SEGURANÇA

### Headers de Segurança (vercel.json / netlify.toml)
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] SSL/HTTPS será configurado automaticamente

---

## 📦 11. PREPARAÇÃO PARA GITHUB

### Limpeza
- [ ] Pasta `node_modules/` NÃO está incluída (ignorada por .gitignore)
- [ ] Pasta `dist/` NÃO está incluída (ignorada por .gitignore)
- [ ] Sem arquivos desnecessários
- [ ] Sem arquivos de teste ou desenvolvimento

### Documentação
- [ ] README.md está completo e atualizado
- [ ] GUIA-UPLOAD-GITHUB.md disponível
- [ ] CONFIGURACAO-DNS.md disponível
- [ ] CHECKLIST-FINAL.md disponível (este arquivo)

### Git
- [ ] .gitignore configurado corretamente
- [ ] Sem credenciais ou chaves de API commitadas
- [ ] Sem informações sensíveis

---

## 🚀 12. PREPARAÇÃO PARA DEPLOY

### Vercel
- [ ] vercel.json configurado corretamente
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Framework preset: Vite

### Netlify (Alternativa)
- [ ] netlify.toml configurado corretamente
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`

### Variáveis de Ambiente
- [ ] Não há variáveis de ambiente necessárias (projeto é frontend puro)
- [ ] Se houver, estão documentadas

---

## 🌍 13. DOMÍNIO

### Informações
- [ ] Domínio comprado: **emdservicos.pt**
- [ ] Acesso ao painel do registador disponível
- [ ] Credenciais salvas com segurança

### DNS (Configurar DEPOIS do deploy)
- [ ] Instruções em CONFIGURACAO-DNS.md revisadas
- [ ] Registros DNS prontos para configurar:
  - [ ] Registro A para @
  - [ ] Registro CNAME para www

---

## ✅ 14. TESTE FINAL LOCAL

Antes de fazer deploy, teste localmente:

```bash
# 1. Instalar dependências
npm install

# 2. Testar em modo desenvolvimento
npm run dev
# Abrir: http://localhost:3000

# 3. Testar build de produção
npm run build
npm run preview
# Abrir: http://localhost:4173
```

### Checklist de Testes Locais
- [ ] Página inicial carrega
- [ ] Todas as seções aparecem
- [ ] Navegação funciona
- [ ] Formulários funcionam
- [ ] Links externos funcionam
- [ ] Botão WhatsApp funciona
- [ ] Instagram link funciona
- [ ] Sem erros no console
- [ ] Build de produção funciona

---

## 📊 15. PÓS-DEPLOY

Após fazer deploy, verificar:

### URLs
- [ ] `https://emdservicos.pt` funciona
- [ ] `https://www.emdservicos.pt` funciona
- [ ] Todas as seções (#services, #about, etc.) funcionam
- [ ] SSL ativo (cadeado verde)

### Funcionalidades Online
- [ ] Formulário de marcação envia para WhatsApp
- [ ] Formulário de contacto envia para WhatsApp
- [ ] Links Instagram funcionam
- [ ] Telefone/WhatsApp clicáveis funcionam

### SEO
- [ ] robots.txt acessível: `https://emdservicos.pt/robots.txt`
- [ ] sitemap.xml acessível: `https://emdservicos.pt/sitemap.xml`
- [ ] Meta tags verificadas (ver fonte da página)

### Performance
- [ ] Site carrega rapidamente
- [ ] Imagens carregam
- [ ] Sem erros 404
- [ ] Sem erros no console

### Submissão a Motores de Busca
- [ ] Submeter em Google Search Console
- [ ] Submeter em Bing Webmaster Tools
- [ ] Aguardar indexação (1-2 semanas)

---

## 📱 16. TESTES FINAIS COMPLETOS

### Desktop
- [ ] Abrir https://emdservicos.pt no Chrome
- [ ] Abrir https://emdservicos.pt no Firefox
- [ ] Abrir https://emdservicos.pt no Edge
- [ ] Navegar por todas as seções
- [ ] Testar formulário de marcação
- [ ] Testar formulário de contacto
- [ ] Clicar em todos os links

### Mobile
- [ ] Abrir no iPhone/Safari
- [ ] Abrir no Android/Chrome
- [ ] Testar menu (se mobile)
- [ ] Testar formulários
- [ ] Testar botões flutuantes
- [ ] Testar links de telefone/WhatsApp

### Tablets
- [ ] Testar em iPad
- [ ] Testar em tablet Android
- [ ] Verificar layout responsivo

---

## 🎯 RESULTADO FINAL ESPERADO

Após completar todos os itens deste checklist, você terá:

✅ Website profissional e funcional  
✅ SEO completamente otimizado  
✅ Domínio personalizado (emdservicos.pt)  
✅ Hospedagem profissional (Vercel/Netlify)  
✅ Código versionado no GitHub  
✅ SSL/HTTPS ativo  
✅ Responsivo em todos os dispositivos  
✅ Formulários funcionais  
✅ Integração com WhatsApp  
✅ Pronto para receber clientes  

---

## 🎊 PARABÉNS!

Se todos os itens estão marcados ✅, o site está pronto para deploy!

**Próximos passos:**
1. Seguir GUIA-UPLOAD-GITHUB.md para upload
2. Seguir CONFIGURACAO-DNS.md para configurar domínio
3. Testar tudo novamente online
4. Promover o site nas redes sociais
5. Começar a receber clientes! 🚀

---

**EMD Serviços - Você Sonha, Nós Construímos!** 🏗️✨

📞 +351 914040103 | 🌐 emdservicos.pt | 📸 @emd_servicos

---

## 📝 Notas

Data de verificação: _______________

Verificado por: _______________

Status: [ ] Pronto para deploy | [ ] Precisa ajustes

Observações:
_________________________________________________
_________________________________________________
_________________________________________________
