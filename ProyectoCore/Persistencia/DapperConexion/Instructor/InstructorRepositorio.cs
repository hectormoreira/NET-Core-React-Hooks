using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;

namespace Persistencia.DapperConexion.Instructor
{
    public class InstructorRepositorio : IInstructor
    {
        private readonly IFactoryConnection _factoryConnection;
        public InstructorRepositorio(IFactoryConnection factoryConnection)
        {
            _factoryConnection = factoryConnection;
        }


        public async Task<int> Actualizar(Guid instructorId, string nombre, string apellidos, string titulo)
        {
            var storeProcedure = "usp_instructor_editar";
            try
            {
                var connection = _factoryConnection.GetConnection();
                var resultado = await connection.ExecuteAsync(
                    storeProcedure, new
                    {
                        InstructorId = instructorId,
                        Nombre = nombre,
                        Apellidos = apellidos,
                        Titulo = titulo
                    },
                    commandType: CommandType.StoredProcedure
                );
                _factoryConnection.CloseConnection();
                return resultado;
            }
            catch (Exception e)
            {
                throw new Exception("No se pudo actualizar instructor", e);
            }
        }

        public Task<int> Eliminar(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<int> Nuevo(string nombre, string apellidos, string titulo)
        {
            var storeProcedure = "usp_instructor_nuevo";
            try
            {
                var connection = _factoryConnection.GetConnection();
                var resultado = await connection.ExecuteAsync(
                    storeProcedure, new
                    {
                        InstructorId = Guid.NewGuid(),
                        Nombre = nombre,
                        Apellidos = apellidos,
                        Titulo = titulo
                    },
                    commandType: CommandType.StoredProcedure
                );
                _factoryConnection.CloseConnection();
                return resultado;
            }
            catch (Exception e)
            {
                throw new Exception("No se pudo guardar al nuevo instructor", e);
            }
        }

        public async Task<IEnumerable<InstructorModel>> ObtenerLista()
        {
            IEnumerable<InstructorModel> instructorList = null;
            var storeProcedure = "usp_Obtener_Instructores";
            try
            {
                var connection = _factoryConnection.GetConnection();
                instructorList = await connection.QueryAsync<InstructorModel>(storeProcedure, null, commandType: CommandType.StoredProcedure);
            }
            catch (Exception e)
            {
                throw new Exception("Error en la consulta de datos", e);
            }
            finally
            {
                _factoryConnection.CloseConnection();
            }
            return instructorList;
        }

        public Task<InstructorModel> ObtenerPorId()
        {
            throw new NotImplementedException();
        }
    }
}