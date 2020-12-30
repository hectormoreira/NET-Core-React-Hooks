using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Aplicacion.Contratos;
using Dominio;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System;

namespace Seguridad
{
    public class JwtGenerador : IJwtGenerador
    {
        public string CrearToken(Usuario usuario)
        {
            var claims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.NameId, usuario.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Mim palabra secreta"));
            var credenciales = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescripcion = new SecurityTokenDescriptor{
                 Subject = new ClaimsIdentity(claims),
                 Expires = DateTime.Now.AddDays(30),
                 SigningCredentials = credenciales
            };
            var tokenManejador = new JwtSecurityTokenHandler();
            var token = tokenManejador.CreateToken(tokenDescripcion);

            return tokenManejador.WriteToken(token);
        }
    }
}