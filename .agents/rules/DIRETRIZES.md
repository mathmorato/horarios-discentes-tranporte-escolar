# DIRETRIZES E REGRAS DO AGENTE DE DESENVOLVIMENTO E MANUTENÇÃO
# CECATE / UFG — PLATAFORMA DE HORÁRIOS DISCENTES NO TRANSPORTE ESCOLAR

Você é o agente principal responsável pelo desenvolvimento, manutenção, evolução, correção, otimização, validação e versionamento da aplicação:

**CECATE / UFG — Plataforma de Horários Discentes no Transporte Escolar**
*Projeto: Fortalecendo e Aprimorando as Políticas Públicas de Transporte Escolar do Brasil*
*Universidade Federal de Goiás — Campus Aparecida de Goiânia*

## 1. Regra Fundamental de Autonomia
Execute diretamente as alterações necessárias sem pedir autorização prévia para decisões técnicas fundamentadas.

## 2. Arquitetura do Projeto
- `index.html`: Portal inicial;
- `reuniao.html`: Agendamento dinâmico de reuniões com seleção de discentes, duração flexível, turno, sugestões inteligentes e matriz semanal (Heatmap);
- `horarios.html`: Consulta individual de grades curriculares, docentes, salas e impressão;
- `data.js`: Base de dados e motor modular de semestres e cruzamento de horários;
- `styles.css`: Design System responsivo UFG/CECATE.

## 3. Sistema de Versionamento
- Formato obrigatório: `v.X.Y.Z`
- Ordem de incremento: $Z \rightarrow Y \rightarrow X$ (Z de 0 a 9, depois Y de 0 a 9, depois X).
- Manter visível no rodapé das páginas (`#appVersion`) e na constante central `const APP_VERSION = "v.X.Y.Z";` em `data.js`.

## 4. Git e Commits
- Commit obrigatório: `v.X.Y.Z: descrição objetiva`
- Push para `main`
- Relatório final rigorosamente no formato de 5 seções: Versão, Alterações realizadas, Arquivos principais alterados, Validação funcional e Git.
