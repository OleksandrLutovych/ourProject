using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

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
        public void CreateNewUser(User user)
        {
            using(MySQLDbContext db = new MySQLDbContext())
            {
                byte[] bytes = SHA256Managed.Create().ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                user.Password = BitConverter.ToString(bytes).Replace("-", "").ToLower();
                user.CreationDate = DateTime.Now;
                user.Role = Roles.User;
                db.Users.Add(user);
                db.SaveChanges();
            }
        }
    }
}
