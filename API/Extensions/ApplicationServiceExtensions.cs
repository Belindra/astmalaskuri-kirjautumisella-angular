using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();

             var builder = new SqlConnectionStringBuilder(
                config.GetConnectionString("Default"));
            builder.UserID =  config.GetSection("User Id").Value;
            builder.Password = config.GetSection("Password").Value;

            var connectionString = builder.ConnectionString;

            services.AddDbContext<DataContext>(options => {
                options.UseSqlServer((connectionString));
            });

            return services;
        }
    }
}