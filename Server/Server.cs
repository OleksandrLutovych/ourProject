namespace Server
{

    public class Server
    {
        public static void Main(params string[] args)
        {
            var builder = WebApplication.CreateBuilder();
            builder.Services.AddControllers();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: "_AllowedOrigins",
                    policy =>
                    {
                        policy
                        .WithOrigins("http://localhost:3000","http://localhost:5000","https://localhost:5001")
                        .WithMethods("GET","POST")
                        .AllowCredentials()
                        .AllowAnyHeader();
                    });
            });
            var app = builder.Build();
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseStaticFiles();
            app.UseCors();
            app.UseEndpoints(endpoints =>
            {
              endpoints.MapControllerRoute(name:"default",pattern:"{controller}/{action}/{id?}").RequireCors("_AllowedOrigins");
            });
            app.Run();
        }
    }
}
