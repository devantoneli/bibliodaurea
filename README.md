# 📚 Bibliodaurea - Sistema de Gestão de Biblioteca

Sistema web para registros de entrada e saída de livros, desenvolvido como Trabalho de Conclusão de Curso. Voltado para a biblioteca do Luiz D'Aurea.

## 🛠️ Stack Técnica

### Frontend
- **React** `^18.2.0` - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** `^6.15.0` - Roteamento e navegação entre páginas
- **React Modal** `^3.16.1` - Componentes de modais interativos
- **CSS Modules** - Estilos encapsulados e modulares

### Backend & APIs
- **Node.js** - Runtime JavaScript para execução de servidor
- **JSON Server** `^0.17.3` - Mock REST API com banco de dados JSON
- **Firebase** `^10.4.0` - Plataforma completa com autenticação e realtime database
- **Firebase Storage** `^0.11.2` - Armazenamento em nuvem de arquivos

### Ferramentas de Desenvolvimento
- **Create React App** - Scaffolding, configuração e build tool
- **Webpack** - Empacotamento de módulos
- **Babel** - Transpilação de código JavaScript moderno
- **ESLint** - Verificação e qualidade de código
- **Jest** - Framework de testes unitários
- **React Testing Library** - Testes de componentes React

### Outras Dependências
- **Web Vitals** `^2.1.4` - Métricas de performance
- **Testing Library** - Utilidades para testes automatizados

## 🚀 Como Começar

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm build

# Executar testes
npm test
```

### Scripts Disponíveis

- `npm start` - Inicia a aplicação em modo de desenvolvimento (http://localhost:3000)
- `npm build` - Cria build otimizado para produção na pasta `build/`
- `npm test` - Executa testes em modo interativo

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── BookData.js
│   ├── BooksList.js
│   ├── StudentData.js
│   ├── StudentsList.js
│   ├── FormBook.js
│   ├── FormStudents.js
│   ├── SearchForm.js
│   ├── PopUpdate.js
│   ├── Menu.js
│   ├── EventClick.js
│   └── css/                 # Estilos dos componentes
├── pages/                   # Páginas da aplicação
│   ├── Home.js
│   ├── ConsultBooks.js
│   ├── ConsultLoans.js
│   ├── ConsultStudents.js
│   ├── RegisterBooks.js
│   ├── RegisterStudents.js
│   ├── Reports.js
│   ├── MyAccount.js
│   ├── Help.js
│   └── css/                 # Estilos das páginas
├── firebaseConfig/          # Configuração Firebase
├── realtimeData/            # Integração com dados realtime
├── App.js                   # Componente raiz
└── index.js                 # Entry point da aplicação

public/
├── index.html               # HTML principal
├── manifest.json            # Metadados PWA
└── robots.txt               # Configuração para web crawlers

db.json                       # Banco de dados Mock (JSON Server)
package.json                  # Dependências e scripts
```

## ✨ Funcionalidades Principais

- 📖 **Consulta de Livros** - Visualizar catálogo completo de livros
- ➕ **Registro de Livros** - Adicionar novos livros ao acervo
- 👥 **Gerenciamento de Estudantes** - Gerenciar perfis de estudantes
- 🔄 **Consulta de Empréstimos** - Acompanhar histórico de empréstimos
- 📊 **Relatórios** - Gerar relatórios de uso da biblioteca
- 👤 **Minha Conta** - Gerenciar conta de usuário
- ❓ **Ajuda** - Documentação e suporte


