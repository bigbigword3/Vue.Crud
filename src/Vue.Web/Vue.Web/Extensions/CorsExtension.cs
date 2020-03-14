using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Vue.Web.Extensions
{
    public static class CorsExtension
    {
        public static readonly string CORS_POLICY_NAME = "CorsPolicy";
        public static IServiceCollection AddCustomCors(this IServiceCollection services)
        {
            services.AddCors(options =>
             {
                 options.AddPolicy(CORS_POLICY_NAME,
                     builder => builder.AllowAnyOrigin()
                     .AllowAnyMethod()
                     .AllowAnyHeader()
                     );
             });

            return services;
        }
    }
}
