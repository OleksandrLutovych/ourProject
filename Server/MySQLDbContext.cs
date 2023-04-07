using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Server
{

    public class MySQLDbContext:DbContext
    {
        public static string ConnectionString;
        public DbSet<User> Users { get; set; }
        public MySQLDbContext()
        { 
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server = 127.0.0.1;Port=3306;Database=test ;Uid=root;Pwd=", new MySqlServerVersion(new Version()));
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasIndex(x => x.Id);
            modelBuilder.Entity<User>().Property(x => x.Name);
            modelBuilder.Entity<User>().Property(x => x.LastName);
            modelBuilder.Entity<User>().Property(x => x.Email);
            modelBuilder.Entity<User>().Property(x => x.Password);
            modelBuilder.Entity<User>().Property(x => x.CreationDate);
            modelBuilder.Entity<User>().Property(x => x.Role);
            base.OnModelCreating(modelBuilder);
        }
    }
}
