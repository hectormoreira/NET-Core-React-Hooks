using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistencia.Migrations
{
    public partial class fixNombreFoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FotoPublicacion",
                table: "Curso");

            migrationBuilder.AddColumn<byte[]>(
                name: "FotoPortada",
                table: "Curso",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FotoPortada",
                table: "Curso");

            migrationBuilder.AddColumn<byte[]>(
                name: "FotoPublicacion",
                table: "Curso",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
