
namespace Server
{

    public class Server
    {
        public static void Main(params string[] args)
        {

            var builder = WebApplication.CreateBuilder();
            var app = builder.Build();
            app.UseRouting();
            app.UseStaticFiles();
            app.UseEndpoints(endpoints =>
            {
            });
            app.Run();
        }
    }
}
