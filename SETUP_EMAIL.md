# Email Setup for GitHub Actions

Para configurar o envio de emails, precisas de adicionar estes **secrets** no teu repositório GitHub:

## 📧 Secrets Required

Vai a: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

### 1. `EMAIL_USERNAME`
- **Value:** O teu email (ex: `teu-email@gmail.com`)
- Para Gmail, recomendo criar uma conta específica para automação

### 2. `EMAIL_PASSWORD` 
- **Value:** App Password (NÃO a tua password normal)
- Para Gmail: [Como criar App Password](https://support.google.com/accounts/answer/185833)

### 3. `EMAIL_TO`
- **Value:** Email de destino onde queres receber os relatórios
- Pode ser o mesmo que `EMAIL_USERNAME` ou diferente

## 🔧 Setup Gmail App Password

1. Vai a [myaccount.google.com](https://myaccount.google.com)
2. **Security** → **2-Step Verification** (tem de estar ativo)
3. **App passwords** → **Generate**
4. Escolhe **Mail** e **Other**
5. Usa a password gerada (16 caracteres) como `EMAIL_PASSWORD`

## ⏰ Schedule

O workflow está configurado para correr:
- **Diariamente às 9:00 UTC** (10:00 em Portugal)
- **Manualmente** quando quiseres (workflow_dispatch)

## 📊 Email Content

O email inclui:
- ✅ Resumo dos testes executados
- 🔗 Link para o relatório completo
- 📈 Links para artifacts e logs
- 🌐 Link para o site testado

## 🧪 Test Manual

Para testar imediatamente:
1. Vai a **Actions** no GitHub
2. Seleciona **Daily Playwright Tests**
3. Clica **Run workflow** → **Run workflow**