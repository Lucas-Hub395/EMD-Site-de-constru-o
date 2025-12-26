# 🚀 Comandos Git - Guia Rápido

Guia prático dos comandos Git mais utilizados para o projeto EMD Serviços.

## 📥 Configuração Inicial (Apenas 1 vez)

```bash
# Configurar seu nome
git config --global user.name "Seu Nome"

# Configurar seu email
git config --global user.email "seu@email.com"

# Verificar configuração
git config --list
```

## 🎯 Workflow Básico

### 1️⃣ Inicializar Repositório

```bash
# Navegar até a pasta do projeto
cd caminho/para/emdservicos

# Inicializar Git
git init
```

### 2️⃣ Conectar ao GitHub

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/[SEU-USUARIO]/emdservicos.git

# Verificar se foi adicionado
git remote -v
```

### 3️⃣ Primeiro Commit

```bash
# Ver status dos arquivos
git status

# Adicionar TODOS os arquivos
git add .

# OU adicionar arquivo específico
git add nome-do-arquivo.tsx

# Fazer commit com mensagem
git commit -m "🎉 Primeiro commit - Website EMD Serviços"

# Definir branch principal
git branch -M main

# Enviar para GitHub
git push -u origin main
```

## 🔄 Atualizações Diárias

### Fluxo completo de atualização:

```bash
# 1. Ver o que mudou
git status

# 2. Adicionar mudanças
git add .

# 3. Fazer commit
git commit -m "✨ Descrição da mudança"

# 4. Enviar para GitHub
git push
```

## 📝 Mensagens de Commit (Boas Práticas)

Use emojis e descrições claras:

```bash
# Nova funcionalidade
git commit -m "✨ Adicionar seção de depoimentos"

# Correção de bug
git commit -m "🐛 Corrigir formulário de contacto"

# Atualização de conteúdo
git commit -m "📝 Atualizar informações de serviços"

# Melhorias de estilo
git commit -m "💄 Melhorar design do footer"

# Performance
git commit -m "⚡ Otimizar imagens"

# SEO
git commit -m "🔍 Adicionar meta tags"

# Configuração
git commit -m "🔧 Atualizar configuração Vercel"
```

## 🌿 Trabalhando com Branches

```bash
# Criar nova branch
git branch nova-funcionalidade

# Mudar para a branch
git checkout nova-funcionalidade

# OU criar e mudar em 1 comando
git checkout -b nova-funcionalidade

# Ver todas as branches
git branch

# Voltar para main
git checkout main

# Mesclar branch na main
git merge nova-funcionalidade

# Deletar branch
git branch -d nova-funcionalidade
```

## 📥 Baixar Atualizações do GitHub

```bash
# Baixar mudanças
git pull origin main
```

## ↩️ Desfazer Mudanças

### Antes do commit:

```bash
# Desfazer mudanças em arquivo específico
git checkout -- nome-arquivo.tsx

# Desfazer TODAS as mudanças
git reset --hard
```

### Depois do commit (mas antes do push):

```bash
# Voltar ao commit anterior (mantém mudanças)
git reset --soft HEAD~1

# Voltar ao commit anterior (descarta mudanças)
git reset --hard HEAD~1
```

## 📜 Ver Histórico

```bash
# Ver histórico de commits
git log

# Ver histórico simplificado
git log --oneline

# Ver últimos 5 commits
git log -5

# Ver mudanças específicas
git log --stat
```

## 🔍 Ver Diferenças

```bash
# Ver mudanças não commitadas
git diff

# Ver mudanças em arquivo específico
git diff nome-arquivo.tsx

# Ver diferença entre commits
git diff commit1 commit2
```

## 🏷️ Tags (Versões)

```bash
# Criar tag
git tag v1.0.0

# Criar tag com mensagem
git tag -a v1.0.0 -m "Versão 1.0 - Lançamento"

# Enviar tags para GitHub
git push --tags

# Ver tags
git tag
```

## 🆘 Problemas Comuns

### Erro: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/[SEU-USUARIO]/emdservicos.git
```

### Erro: "failed to push"

```bash
# Baixar mudanças primeiro
git pull origin main --rebase

# Depois enviar
git push origin main
```

### Esqueci de fazer pull antes de commitar

```bash
git pull origin main --rebase
git push origin main
```

### Remover arquivo do Git (mas manter no computador)

```bash
git rm --cached nome-arquivo.tsx
git commit -m "🗑️ Remover arquivo do repositório"
git push
```

## 🔐 Autenticação (Token)

Se pedir senha ao fazer push:

1. Vá em GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecione permissões: `repo` (full control)
4. Copie o token
5. Use como senha quando o Git pedir

### Salvar credenciais (não precisar digitar sempre):

```bash
# Windows
git config --global credential.helper wincred

# Mac
git config --global credential.helper osxkeychain

# Linux
git config --global credential.helper store
```

## 📚 Comandos Úteis

```bash
# Ver configuração atual
git config --list

# Ver status curto
git status -s

# Adicionar parte de um arquivo
git add -p

# Ver quem modificou cada linha
git blame nome-arquivo.tsx

# Limpar arquivos não rastreados
git clean -fd

# Salvar mudanças temporariamente
git stash

# Recuperar mudanças salvas
git stash pop

# Ver mudanças salvas
git stash list
```

## 🎯 Checklist Diário

Ao finalizar o trabalho do dia:

```bash
git status          # Ver o que mudou
git add .           # Adicionar mudanças
git commit -m "📝 Resumo do que foi feito"
git push            # Enviar para GitHub
```

---

## 📞 Ajuda

- **Documentação oficial:** https://git-scm.com/doc
- **Tutorial interativo:** https://learngitbranching.js.org/
- **Cheat sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

**Dica:** Cole este arquivo na pasta do projeto e consulte sempre que precisar! 📌
