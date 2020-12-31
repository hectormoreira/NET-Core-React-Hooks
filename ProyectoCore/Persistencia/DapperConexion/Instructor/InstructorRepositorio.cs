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

        public async Task<int> Eliminar(Guid id)
        {
            var storeProcedure = "usp_instructor_eliminar";
            try
            {
                var connection = _factoryConnection.GetConnection();
                var resultado = await connection.ExecuteAsync(
                    storeProcedure, new
                    {
                        InstructorId = id,
                    },
                    commandType: CommandType.StoredProcedure
                );
                _factoryConnection.CloseConnection();
                return resultado;
            }
            catch (Exception e)
            {
                throw new Exception("No se pudo eliminar el registro de instructor", e);
            }
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
                instructorList = await connection.QueryAsync<InstructorModel>(
                    storeProcedure,null, commandType: CommandType.StoredProcedure
                );
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

        public async Task<InstructorModel> ObtenerPorId(Guid id)
        {
            var storeProcedure = "usp_instructor_por_id";
            InstructorModel instructor = null;
            try
            {
                var connection = _factoryConnection.GetConnection();
                instructor = await connection.QueryFirstAsync<InstructorModel>(
                    storeProcedure,
                    new {
                        Id = id
                    },
                    commandType: CommandType.StoredProcedure
                );
                _factoryConnection.CloseConnection();
                return instructor;
            }
            catch (Exception e)
            {
                throw new Exception("No se encontró el instructor", e);
            }
        }
    }
}