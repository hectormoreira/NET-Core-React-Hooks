# NET-Core-React-Hooks
Curso en español [Udemy - .Net Core y React Hooks](https://www.udemy.com/course/aspnet-core-react-hooks/)
En este curso de utiliza CQRS pattern.

## Run App
```
dotnet run -p WebApi/
```
Otros comandos:
```
dotnet restore
dotnet build
```

## Instalar dependencias Core 3.1.10
En Persistencia:
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Tools
- Dapper

En Aplicacion, para inyección de dependencias
- MediatR.Extension.Microsoft.DependencyInjection
- FluentValidation.AspNetCore 8.6.2
- Newtonsoft.Json
- AutoMapper.Extensions.Microsoft.DependencyInjection

En Seguridad
- System.IdentityModel.Token.Jwt

En WebApi
- Microsoft.AspNetCore.Authentication.JwtBearer
- Swashbuckle.AspNetCore

## Crear Migración y actualizar base
Instalar EF

```
dotnet tool install --global dotnet-ef --version 3.1.10
```

Migración

```
dotnet ef migrations add "crearEntidadDocumento" -p Persistencia/ -s WebApi/
cd WebApi
dotnet watch run
```

## Extensiones VSCode
- [Auto rename tag - JunHan](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [C# - Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
- [C# extension - jchannon](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions)
- [Nuget Package Manager - jmrog](https://marketplace.visualstudio.com/items?itemName=jmrog.vscode-nuget-package-manager)
- [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [React Redux ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=timothymclane.react-redux-es6-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Node.js Modules Intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense)
- [HTML Boilerplate](https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)


# React app
Crear nuevo proyecto
```
npx create-react-app cursos-online-app 
```
Run app
```
cd cursos-online-app
npm start
```

## Librerías
```
npm install axios
npm install @material-ui/core
npm install @material-ui/styles
npm install @material-ui/icons
npm install react-router-dom
npm install react-images-upload
npm install uuid
npm install @date-io/date-fns@1.3.13
npm install date-fns@2.12.0
npm install @material-ui/pickers@3.2.10
```

## Recursos
- Client http [restcountries](https://restcountries.eu/rest/v2/all)
- [Material UI](https://material-ui.com/es/)
- [Iconos](https://material.io/resources/icons/?style=baseline)
- [Snackbars](https://material-ui.com/es/components/snackbars/)
- [Drawers](https://material-ui.com/es/components/drawers/)
- [Color tool](https://material.io/resources/color)
- [Pickers](https://material-ui.com/es/components/pickers/)
- [Axios](https://github.com/axios/axios)