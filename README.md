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
dotnet ef migrations add updateDatabase -p Persistencia/ -s WebApi/
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
- Prettier - Code formatter
- [Node.js Modules Intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense)
- [HTML Boilerplate](https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
