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
                        policy.WithOrigins("http://localhost:3000");
                    });
            });
            var app = builder.Build();
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseStaticFiles();
            app.UseEndpoints(endpoints =>
            {
              endpoints.MapControllerRoute(name:"default",pattern:"{controller}/{action}/{id?}");
            });
            app.Run();
        }
    }
}
