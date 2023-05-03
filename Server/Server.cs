using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Text;

namespace Server
{
    public static class Auth
    {
        public static string Issuer = "AuthServer";
        public static string Audience = "AuthTokenUser";
        public static string Key = "EncodedToken1";
    }
    public class Server
    {
        public static void Main(params string[] args)
        {
            var builder = WebApplication.CreateBuilder();
            builder.Services.AddControllers();
            builder.Services.AddAuthentication("Bearer").AddJwtBearer(options => options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters {
                ValidateIssuer = true,
                ValidIssuer = Auth.Issuer,
                ValidateAudience = true,
                ValidAudience = Auth.Audience,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Auth.Key))
        });
            builder.Services.AddAuthorization();
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
            app.UseAuthentication();
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
              endpoints.MapControllerRoute(name:"default",pattern:"{controller}/{action}/{id?}").RequireCors("_AllowedOrigins");
            });
            app.Run();
        }
    }
}
