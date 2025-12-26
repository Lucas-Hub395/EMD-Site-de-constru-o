# 🌐 Configuração de DNS para emdservicos.pt

## 📋 Informações do Domínio

- **Domínio:** emdservicos.pt
- **Tipo:** .pt (Portugal)
- **Propósito:** Website EMD Serviços

---

## ⚙️ Opção 1: Vercel (RECOMENDADO)

### Registros DNS Necessários

Configure estes registros no painel do seu registador de domínios:

#### Registro A (Principal)
```
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 76.76.21.21
TTL: 3600
```

#### Registro CNAME (WWW)
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600
```

### Nameservers Vercel (Alternativa - Mais Fácil)

Se o seu registador permitir, pode simplesmente alterar os nameservers para:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Desta forma, não precisa configurar registros individuais.

---

## ⚙️ Opção 2: Netlify

Se preferir usar Netlify em vez de Vercel:

### Registros DNS Necessários

#### Registro A (Principal)
```
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 75.2.60.5
TTL: 3600
```

#### Registro CNAME (WWW)
```
Tipo: CNAME
Nome: www
Valor: [seu-site-id].netlify.app
TTL: 3600
```

**Nota:** Substitua `[seu-site-id]` pelo ID do seu site na Netlify (exemplo: `emdservicos.netlify.app`)

### Nameservers Netlify (Alternativa)

```
dns1.p03.nsone.net
dns2.p03.nsone.net
dns3.p03.nsone.net
dns4.p03.nsone.net
```

---

## 📝 Passo a Passo para Configurar DNS

### 1️⃣ Aceder ao Painel do Registador

Faça login no site onde comprou o domínio emdservicos.pt (exemplos comuns):

- **Registador PT:** https://www.registador.pt
- **GoDaddy Portugal:** https://pt.godaddy.com
- **OVH Portugal:** https://www.ovhcloud.com/pt
- **Namecheap:** https://www.namecheap.com
- **Google Domains:** https://domains.google

### 2️⃣ Encontrar a Secção de DNS

Procure por uma destas opções no menu:

- "DNS Management" / "Gestão de DNS"
- "DNS Settings" / "Configurações de DNS"
- "Name Servers" / "Servidores de Nomes"
- "Advanced DNS" / "DNS Avançado"
- "DNS Zone Editor" / "Editor de Zona DNS"

### 3️⃣ Adicionar os Registros

#### Para Registro A:

1. Clique em "Add Record" / "Adicionar Registro"
2. Selecione tipo: **A**
3. Nome/Host: **@** (ou deixe em branco)
4. Valor/IP: **76.76.21.21** (para Vercel) ou **75.2.60.5** (para Netlify)
5. TTL: **3600** (ou automático)
6. Salve

#### Para Registro CNAME (WWW):

1. Clique em "Add Record" / "Adicionar Registro"
2. Selecione tipo: **CNAME**
3. Nome/Host: **www**
4. Valor/Destino: **cname.vercel-dns.com** (para Vercel)
5. TTL: **3600** (ou automático)
6. Salve

### 4️⃣ Remover Registros Antigos (Se Existirem)

**IMPORTANTE:** Se já existirem registros A ou CNAME para @ e www, você precisa:

1. **Apagar** os registros antigos primeiro
2. **Depois** adicionar os novos registros

Não pode ter duplicados!

### 5️⃣ Aguardar Propagação

- **Tempo mínimo:** 10-30 minutos
- **Tempo normal:** 1-2 horas
- **Tempo máximo:** 24-48 horas

---

## 🔍 Como Verificar se os DNS Estão Corretos

### Método 1: DNS Checker Online

1. Acesse: https://dnschecker.org
2. Digite: `emdservicos.pt`
3. Selecione tipo: **A**
4. Clique em "Search"

**Resultado esperado:**
- Deve mostrar o IP: **76.76.21.21** (Vercel) ou **75.2.60.5** (Netlify)
- Status: ✅ Verde na maioria dos locais

Repita para `www.emdservicos.pt` com tipo **CNAME**

### Método 2: Via Terminal/CMD

#### Windows (CMD ou PowerShell):

```cmd
nslookup emdservicos.pt
nslookup www.emdservicos.pt
```

#### Mac/Linux (Terminal):

```bash
dig emdservicos.pt
dig www.emdservicos.pt
```

**Resultado esperado para emdservicos.pt:**
```
Name:    emdservicos.pt
Address: 76.76.21.21
```

**Resultado esperado para www.emdservicos.pt:**
```
www.emdservicos.pt canonical name = cname.vercel-dns.com
```

---

## 🛡️ Configurações Adicionais de Segurança (Opcional)

### SSL/HTTPS (Certificado de Segurança)

✅ **Vercel e Netlify configuram automaticamente!**

Após os DNS propagarem, acesse:
- Vercel: Settings → Domains → Verify SSL
- Netlify: Domain settings → HTTPS

O certificado SSL será gerado automaticamente via Let's Encrypt.

### CAA Records (Opcional - Segurança Extra)

Para aumentar a segurança, pode adicionar registros CAA:

```
Tipo: CAA
Nome: @
Valor: 0 issue "letsencrypt.org"
TTL: 3600
```

Isso permite apenas Let's Encrypt emitir certificados SSL para o seu domínio.

---

## 📊 Registros DNS Completos - Resumo

### Para Vercel:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

### Para Netlify:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 3600 |
| CNAME | www | [seu-site].netlify.app | 3600 |

---

## ❓ Problemas Comuns e Soluções

### ❌ "DNS não propaga após 48h"

**Possíveis causas:**

1. **Registros duplicados:** Verifique se não há registros antigos em conflito
2. **Cache DNS:** Limpe o cache DNS do seu computador
3. **Nameservers errados:** Verifique se está usando os nameservers corretos

**Soluções:**

```bash
# Windows - Limpar cache DNS
ipconfig /flushdns

# Mac - Limpar cache DNS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux - Limpar cache DNS
sudo systemd-resolve --flush-caches
```

### ❌ "www funciona mas @ não funciona (ou vice-versa)"

**Solução:**
- Verifique se AMBOS os registros (A e CNAME) estão configurados
- Aguarde mais tempo para propagação completa

### ❌ "Certificado SSL não funciona"

**Soluções:**

1. Aguarde 10-20 minutos após DNS propagar
2. Na Vercel/Netlify, force renovação do SSL
3. Verifique se o domínio está corretamente verificado na plataforma

### ❌ "Erro: CNAME já existe"

**Solução:**
- Apague o registro CNAME antigo primeiro
- Depois adicione o novo registro

---

## 📞 Contactos dos Registadores Comuns em Portugal

### Registador.pt
- **Website:** https://www.registador.pt
- **Suporte:** suporte@registador.pt

### OVH Portugal
- **Website:** https://www.ovhcloud.com/pt
- **Suporte:** https://www.ovhcloud.com/pt/contact

### GoDaddy Portugal
- **Website:** https://pt.godaddy.com
- **Suporte:** https://pt.godaddy.com/contact-us

---

## ✅ Checklist de Verificação

Antes de considerar concluído, verifique:

- [ ] Registro A está configurado corretamente
- [ ] Registro CNAME (www) está configurado corretamente
- [ ] Não há registros DNS duplicados ou em conflito
- [ ] DNS propagou (verificar em dnschecker.org)
- [ ] `http://emdservicos.pt` redireciona para `https://emdservicos.pt`
- [ ] `http://www.emdservicos.pt` redireciona para `https://emdservicos.pt`
- [ ] Certificado SSL está ativo (cadeado verde no navegador)
- [ ] Site carrega corretamente em todos os dispositivos

---

## 🎯 URLs Finais Funcionais

Após configuração completa, TODAS estas URLs devem funcionar:

1. ✅ `https://emdservicos.pt` (Principal)
2. ✅ `https://www.emdservicos.pt` (Redireciona para principal)
3. ✅ `http://emdservicos.pt` (Redireciona para HTTPS)
4. ✅ `http://www.emdservicos.pt` (Redireciona para HTTPS)

---

## 📚 Recursos Úteis

- **DNS Checker:** https://dnschecker.org
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html
- **What's My DNS:** https://www.whatsmydns.net
- **Documentação Vercel DNS:** https://vercel.com/docs/concepts/projects/domains
- **Documentação Netlify DNS:** https://docs.netlify.com/domains-https/custom-domains

---

## 🔄 Tempo Estimado Total

| Etapa | Tempo Estimado |
|-------|---------------|
| Configurar registros DNS | 5-10 minutos |
| Propagação DNS inicial | 30 minutos - 2 horas |
| Propagação DNS completa | 24-48 horas |
| Ativação SSL automático | 10-20 minutos após DNS |
| **TOTAL (funcionando)** | **1-3 horas** |
| **TOTAL (propagação global)** | **48 horas** |

---

**EMD Serviços - Você Sonha, Nós Construímos!** 🏗️✨

Boa sorte com a configuração! 🚀
