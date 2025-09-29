# Playwright Tests for Sets António Coutinho

Este projeto contém testes automatizados usando Playwright para o site https://sets.antoniocoutinho.pt/

## Instalação

```bash
npm install
npx playwright install
```

## Executar Testes

```bash
# Executar todos os testes
npm test

# Executar testes com interface visual
npm run test:ui

# Executar testes com browser visível
npm run test:headed

# Debug de testes
npm run test:debug

# Ver relatório dos testes
npm run test:report
```

## Estrutura dos Testes

- `tests/basic.spec.ts` - Testes básicos de funcionalidade
- `tests/performance.spec.ts` - Testes de performance
- `tests/accessibility.spec.ts` - Testes de acessibilidade

## Configuração

A configuração do Playwright está em `playwright.config.ts` e inclui:
- Testes em múltiplos browsers (Chrome, Firefox, Safari)
- Testes em dispositivos móveis
- Screenshots em caso de falha
- Trace para debug
- Base URL configurada para o site alvo