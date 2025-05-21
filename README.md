# Weather API

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

🔗 **Link do site:** [https://jvlerner.github.io/weather-api/](https://jvlerner.github.io/weather-api/)

---

## 🚀 Scripts disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada sempre que você fizer alterações.  
Você também verá erros de lint no console.

### `npm run build`

Cria uma versão otimizada do aplicativo para produção na pasta `build/`.

### `npm run deploy`

Faz o deploy da aplicação para o **GitHub Pages** utilizando o pacote `gh-pages`.  
Antes do deploy, o build será executado automaticamente (`predeploy`).

---

## 📦 Deploy

O deploy é realizado automaticamente no GitHub Pages após o build.  
O site está publicado em:  
👉 [https://jvlerner.github.io/weather-api/](https://jvlerner.github.io/weather-api/)

---

## ✅ Commits - Padrão Conventional Commits

Este projeto segue o padrão de **[Conventional Commits](https://www.conventionalcommits.org/)**, para manter um histórico organizado e automatizar processos de release.

**Formato:**

```<tipo>(escopo opcional): <descrição>```

**Exemplos:**

- `feat: add weather forecast component`
- `fix: correct API response handling`
- `docs: update README with contribution guide`

**Tipos comuns:**

| Tipo     | Descrição                                      |
|---------- |----------------------------------------------|
| !feat     | Uma nova funcionalidade com breaking changes  |
| feat      | Uma nova funcionalidade                       |
| !fix      | Correção de bug com breaking changes          |
| fix       | Correção de bug                               |
| docs      | Alterações na documentação                    |
| chore     | Ajustes de configuração ou dependências       |
| refactor  | Refatoração sem alteração de funcionalidade   |
| style     | Alterações de estilo (formatação, lint)       |
| test      | Adição ou ajuste de testes                    |

---

## 🛠️ Como contribuir

1. Faça um **fork** deste repositório.
2. Clone o repositório para sua máquina local:

   `git clone https://github.com/seu-usuario/weather-api.git`

3. Crie uma nova **branch** a partir da `main`:

   `git checkout -b feat/nome-da-sua-feature`

4. Faça suas alterações no código.

5. Realize commits seguindo o padrão **Conventional Commits**:

   `git commit -m "feat: descrição da sua feature"`

6. Envie sua branch para o repositório remoto:

   `git push origin feat/nome-da-sua-feature`

7. Abra uma **Pull Request (PR)** para a branch `main` no GitHub.

---

**✔️ Antes de enviar a PR:**

- [ ] Verifique se o código está buildando (`npm run build`).
- [ ] Confirme que não há erros de lint.
- [ ] Garanta que os commits seguem o padrão **Conventional Commits**.
