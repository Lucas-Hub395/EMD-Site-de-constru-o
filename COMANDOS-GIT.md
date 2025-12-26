# 📝 COMANDOS GIT - Guia Completo para Publicar no GitHub

## 🚀 PUBLICAÇÃO INICIAL (Primeira Vez)

### 1️⃣ Prepare o Projeto

```bash
# Navegue até a pasta do projeto
cd /caminho/para/emdservicos

# Verifique se está na pasta correta
ls
# Deve mostrar: package.json, src/, components/, etc.
```

### 2️⃣ Inicialize o Git

```bash
# Inicialize o repositório Git
git init

# Verifique o status
git status
# Deve mostrar todos os arquivos em vermelho (não rastreados)
```

### 3️⃣ Configure o Git (Primeira Vez)

```bash
# Configure seu nome
git config --global user.name "Seu Nome"

# Configure seu email (use o mesmo do GitHub)
git config --global user.email "seu-email@exemplo.com"

# Verifique as configurações
git config --list
```

### 4️⃣ Adicione os Arquivos

```bash
# Adicione TODOS os arquivos
git add .

# Verifique o que foi adicionado
git status
# Agora os arquivos devem estar em verde
```

### 5️⃣ Faça o Primeiro Commit

```bash
# Commit inicial
git commit -m "🎉 Initial commit - Site EMD Serviços completo"

# Verifique o histórico
git log --oneline
```

### 6️⃣ Crie o Repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name:** `emdservicos`
   - **Description:** `Website oficial EMD Serviços - Construção e Remodelação em Lisboa`
   - **Visibilidade:** ✅ Public
   - ❌ **NÃO** marque "Add a README file"
   - ❌ **NÃO** marque "Add .gitignore"
   - ❌ **NÃO** marque "Choose a license"
3. Clique em **"Create repository"**

### 7️⃣ Conecte ao GitHub

```bash
# SUBSTITUA 'seu-usuario' pelo seu nome de usuário do GitHub
git remote add origin https://github.com/seu-usuario/emdservicos.git

# Verifique a conexão
git remote -v
# Deve mostrar: origin https://github.com/seu-usuario/emdservicos.git
```

### 8️⃣ Renomeie a Branch para 'main'

```bash
# Renomeie de 'master' para 'main' (padrão do GitHub)
git branch -M main

# Verifique a branch atual
git branch
# Deve mostrar: * main
```

### 9️⃣ Envie para o GitHub (Push)

```bash
# Primeiro push (com upstream)
git push -u origin main

# Se pedir autenticação:
# - Use seu nome de usuário do GitHub
# - Use um Personal Access Token como senha (NÃO a senha da conta)
```

### 🎉 PRONTO! Seu código está no GitHub!

Acesse: `https://github.com/seu-usuario/emdservicos`

---

## 🔄 ATUALIZAÇÕES FUTURAS

### Quando Fizer Alterações no Código

```bash
# 1. Verifique o que mudou
git status

# 2. Adicione as mudanças
git add .
# OU adicione arquivos específicos:
git add src/components/Header.tsx

# 3. Faça o commit com mensagem descritiva
git commit -m "✨ Adicionar nova seção de depoimentos"

# 4. Envie para o GitHub
git push
```

### Mensagens de Commit Recomendadas

Use emojis para facilitar a identificação:

```bash
git commit -m "✨ feat: Nova funcionalidade"
git commit -m "🐛 fix: Correção de bug"
git commit -m "💄 style: Mudanças de estilo/CSS"
git commit -m "♻️ refactor: Refatoração de código"
git commit -m "📝 docs: Atualização de documentação"
git commit -m "🚀 deploy: Configuração de deploy"
git commit -m "⚡ perf: Melhoria de performance"
git commit -m "🔧 config: Mudanças de configuração"
```

---

## 📥 CLONAR O PROJETO EM OUTRO COMPUTADOR

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/emdservicos.git

# Entre na pasta
cd emdservicos

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 🌿 BRANCHES (Ramificações)

### Criar Nova Branch para Desenvolvimento

```bash
# Criar e mudar para nova branch
git checkout -b desenvolvimento

# OU em 2 comandos:
git branch desenvolvimento
git checkout desenvolvimento

# Verifique em qual branch está
git branch
# * desenvolvimento  ← Você está aqui
#   main
```

### Trabalhar em Branch Separada

```bash
# Faça mudanças normalmente
git add .
git commit -m "🔧 Teste de nova funcionalidade"

# Envie a branch para o GitHub
git push -u origin desenvolvimento
```

### Mesclar Branch (Merge)

```bash
# Volte para a branch main
git checkout main

# Mescle as mudanças da branch desenvolvimento
git merge desenvolvimento

# Envie para o GitHub
git push
```

### Deletar Branch

```bash
# Deletar branch local
git branch -d desenvolvimento

# Deletar branch no GitHub
git push origin --delete desenvolvimento
```

---

## 🔐 AUTENTICAÇÃO DO GITHUB

### Gerar Personal Access Token (PAT)

1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Marque: `repo` (todos)
5. Generate token
6. **COPIE O TOKEN** (não será mostrado novamente!)

### Usar o Token

```bash
# Quando fizer push, use:
Username: seu-usuario
Password: ghp_seu_token_aqui  ← Cole o PAT aqui
```

### Salvar Credenciais (Opcional)

```bash
# Salvar credenciais para não digitar sempre
git config --global credential.helper store

# Próximo push salvará automaticamente
```

---

## 📋 COMANDOS ÚTEIS

### Verificar Status

```bash
# Ver arquivos modificados
git status

# Ver diferenças
git diff

# Ver histórico de commits
git log
git log --oneline  # Versão resumida
git log --graph    # Versão visual
```

### Desfazer Mudanças

```bash
# Desfazer mudanças ANTES do commit (arquivo específico)
git checkout -- arquivo.tsx

# Desfazer mudanças ANTES do commit (todos os arquivos)
git reset --hard

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

### Atualizar do GitHub

```bash
# Baixar mudanças do GitHub
git pull

# OU:
git fetch    # Baixa mudanças
git merge    # Mescla com seu código local
```

### Ver Branches

```bash
# Branches locais
git branch

# Branches remotas
git branch -r

# Todas as branches
git branch -a
```

### Remover Arquivos

```bash
# Remover arquivo do Git (mas mantém no computador)
git rm --cached arquivo.txt

# Remover arquivo do Git E do computador
git rm arquivo.txt

# Commit da remoção
git commit -m "🗑️ Remove arquivo desnecessário"
```

---

## 🆘 PROBLEMAS COMUNS

### Erro: "fatal: not a git repository"

```bash
# Você não está na pasta do projeto
# Navegue até a pasta correta
cd /caminho/correto/emdservicos

# Ou inicialize o Git
git init
```

### Erro: "remote origin already exists"

```bash
# Remova o remote antigo
git remote remove origin

# Adicione novamente
git remote add origin https://github.com/seu-usuario/emdservicos.git
```

### Erro: "failed to push"

```bash
# Primeiro baixe as mudanças do GitHub
git pull origin main --rebase

# Depois envie
git push
```

### Erro: "Please tell me who you are"

```bash
# Configure nome e email
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Conflitos de Merge

```bash
# 1. Abra os arquivos com conflito (marcados com <<<<<<<)
# 2. Edite e resolva manualmente
# 3. Remova as marcações <<<<<<< ======= >>>>>>>
# 4. Adicione os arquivos resolvidos
git add .
# 5. Commit
git commit -m "🔀 Resolve conflitos"
```

---

## 🎯 WORKFLOW RECOMENDADO

```bash
# 1️⃣ SEMPRE comece atualizando
git pull

# 2️⃣ Faça suas mudanças no código
# ... editar arquivos ...

# 3️⃣ Verifique o que mudou
git status
git diff

# 4️⃣ Adicione as mudanças
git add .

# 5️⃣ Commit com mensagem clara
git commit -m "✨ Descrição clara da mudança"

# 6️⃣ Envie para o GitHub
git push

# 7️⃣ Verifique no GitHub se deu certo
# https://github.com/seu-usuario/emdservicos
```

---

## 📚 RECURSOS ADICIONAIS

### Documentação Oficial
- Git: https://git-scm.com/doc
- GitHub: https://docs.github.com/

### Cheat Sheets
- https://education.github.com/git-cheat-sheet-education.pdf

### Tutoriais Interativos
- https://learngitbranching.js.org/
- https://try.github.io/

---

**💡 Dica:** Faça commits pequenos e frequentes com mensagens claras!

**🚀 Boa sorte com seu projeto no GitHub!**
