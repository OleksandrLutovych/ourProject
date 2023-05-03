using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Net;
using Microsoft.AspNetCore.Cors;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Server.Migrations;
using Server;

namespace Server.Controllers
{
    [DisableCors]
    public class Api:ControllerBase
    {
        #region Private
        private string EncryptPassword(string password) => BitConverter.ToString(SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(password))).Replace("-", "").ToLower();
        #endregion
        #region Routes
        [HttpGet]
        public IResult Login(User user)
        {
            JwtSecurityToken token = new JwtSecurityToken();
            List<Claim> claims = new List<Claim>();
            User resultUser = new User();
            using(MySQLDbContext db = new MySQLDbContext())
            {
                if (db.Users.Where(x => x.Email == user.Email && x.Password == EncryptPassword(user.Password)).Any())
                {
                    token = new JwtSecurityToken(
                        issuer: Auth.Issuer,
                        audience: Auth.Audience,
                        claims: claims,
                        expires: DateTime.UtcNow.Add(TimeSpan.FromDays(7)),
                        signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Auth.Key)),SecurityAlgorithms.HmacSha256)
                    );
                    resultUser = db.Users.Where(x => x.Email == user.Email && x.Password == EncryptPassword(user.Password)).First();


                }
            }
            var response = new { resultUser.Id, resultUser.Name, resultUser.LastName, resultUser.Email, resultUser.Role, resultUser.CreationDate, token };
            return Results.Json(response);
        }
        [HttpGet]
        public List<User> GetAllUsers()
        {
            using(MySQLDbContext db = new MySQLDbContext())
            {
                return db.Users.ToList().Select(x=> { x.Password = ""; return x; }).ToList();
            }
        }
        [HttpGet]
        public User GetUser(int id)
        {
            using (MySQLDbContext db = new MySQLDbContext())
            {
                return db.Users.ToList().Select(x => { x.Password = ""; return x; }).Where(x=>x.Id==id)?.First(); 
            }
        }
        
        [HttpPost]
        public HttpResponseMessage CreateNewUser(User user)
        {
            if(user.Password is not null && user.Email is not null && user.Name is not null && user.LastName is not null)
            using (MySQLDbContext db = new MySQLDbContext())
            {
                user.Password = EncryptPassword(user.Password);
                user.CreationDate = DateTime.Now;
                user.Role = Roles.User;
                db.Users.Add(user);
                db.SaveChanges();
                HttpContext.Response.StatusCode = 200;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                HttpContext.Response.StatusCode = 400;
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
        #endregion
    }
}
