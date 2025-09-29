# GitHub Actions Setup

A GitHub Action está configurada para correr **automaticamente** sem necessidade de configuração adicional.

## ⏰ Schedule

O workflow está configurado para correr:
- **Diariamente às 9:00 UTC** (10:00 em Portugal)
- **Manualmente** quando quiseres (workflow_dispatch)

## 📊 Ver Resultados

Os resultados são mostrados diretamente na **GitHub Actions page**:

1. Vai a **Actions** tab no teu repo
2. Seleciona **Daily Playwright Tests** 
3. Clica num run específico
4. Vê o **summary detalhado** na página da action
5. Download dos **artifacts** com relatórios HTML completos

## 🔍 O que é testado

- ✅ Basic functionality tests
- 🎵 Audio player functionality  
- 📱 Download functionality
- 📋 Playlist functionality
- ♿ Accessibility tests
- ⚡ Performance tests
- 📱 Mobile responsiveness

## 📊 Browsers Testados

- 🌐 Chrome (Desktop)
- 🦊 Firefox (Desktop)  
- 🧭 Safari (Desktop)
- 📱 Chrome Mobile
- 📱 Safari Mobile

## 🧪 Test Manual

Para executar imediatamente:
1. Vai a **Actions** no GitHub
2. Seleciona **Daily Playwright Tests**
3. Clica **Run workflow** → **Run workflow**

**Nota:** Não é necessária configuração de email - todos os resultados são visíveis diretamente no GitHub!