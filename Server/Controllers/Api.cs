using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Linq;
using System.Net;
#nullable disable

namespace Server.Controllers
{
    public class Api:ControllerBase
    {
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
                byte[] bytes = SHA256Managed.Create().ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                user.Password = BitConverter.ToString(bytes).Replace("-", "").ToLower();
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
    }
}
