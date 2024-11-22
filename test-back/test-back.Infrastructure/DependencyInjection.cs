using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using test_back.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace test_back.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
        {
            var connectionString = "Server=localhost,1433;Database=airline;User Id=sa;Password=yourStrong(!)Password;TrustServerCertificate=true;";

            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(connectionString,
                builder => builder.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));
            return services;
        }
    }
}