using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using CHA_Gateway.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using CHA_Gateway.Service;
using Serilog;
using CHA_Gateway.Middleware;

namespace CHA_Gateway
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            IConfigurationBuilder builder = new ConfigurationBuilder()
             .SetBasePath(env.ContentRootPath)
             .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
             .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
             .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddHttpClient();
            services.AddHttpContextAccessor();
            services.AddCors(option =>
            {
                option.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
            });
            services.Configure<AppSettings>(con => Configuration.GetSection("AppSettings").Bind(con));

            //Logger service
            services.AddSingleton(Log.Logger);

            // Service layer dependency
            services.AddScoped<IHttpService, HttpService>();
            services.AddScoped<IUserService, UserService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseCors(option => option.AllowAnyOrigin());
            app.UseRouting();
            app.UseAuthorization();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMiddleware<ErrorHandlerMiddleware>(logger);
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
