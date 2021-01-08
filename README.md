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
- Auto rename tag - JunHan
- C# - Microsoft
- C# extension - jchannon
- Nuget Package Manager - jmrog
- Reactjs code snippets
- React Redux ES6 Snippets
- Prettier - Code formatter
- Node.js Modules Intellisense
- HTML Boilerplate
- Auto Close Tag
