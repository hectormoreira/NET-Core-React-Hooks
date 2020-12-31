using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;

namespace Persistencia.DapperConexion
{
    public class FactoryConennection : IFactoryConnection
    {
        private IDbConnection _connection;
        private readonly IOptions<ConexionConfiguracion> _configs;
        public FactoryConennection(IDbConnection connection)
        {
            _connection = connection;
        }

        public void CloseConnection()
        {
            if (_connection != null && _connection.State == ConnectionState.Open)
            {
                _connection.Close();
            }
        }

        public IDbConnection GetConnection()
        {
            if (_connection == null)
            {
                _connection = new SqlConnection(_configs.Value.ConexionSql);
            }

            if (_connection.State != ConnectionState.Open)
            {
                _connection.Open();
            }
            return _connection;
        }
    }
}