using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using Vue.Web.Extensions;

namespace Vue.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        { 
            //ÔÊÐí¿çÓò
            services.AddCustomCors();

            var applicationName = "Vue.Web";
            services.AddSwaggerGen(options =>
            {
                options.SchemaGeneratorOptions.GeneratePolymorphicSchemas = true;
                //options.DescribeAllEnumsAsStrings();
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = applicationName,
                    Version = "v1",
                    Description = applicationName
                });

                var basePath = AppDomain.CurrentDomain.BaseDirectory;
                var apiDocPaths = Directory.GetFiles(basePath).Where(p => p.EndsWith(".xml"));
                foreach (var apiDocPath in apiDocPaths)
                {
                    options.IncludeXmlComments(apiDocPath);
                }

                options.OperationFilter<AddResponseHeadersFilter>();
                options.OperationFilter<AppendAuthorizeToSummaryOperationFilter>();
                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {  
            
          
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var pathBase = Configuration["PATH_BASE"];

            app.UseSwagger()
            .UseSwaggerUI(options =>
            {
                var applicationName = "Vue.Web";
                options.SwaggerEndpoint($"{ (!string.IsNullOrEmpty(pathBase) ? pathBase : string.Empty) }/swagger/v1/swagger.json", applicationName);
            });

            app.UseRouting();

            //ÔÊÐí¿çÓò
            app.UseCors(CorsExtension.CORS_POLICY_NAME);

            app.UseAuthorization();

          
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
