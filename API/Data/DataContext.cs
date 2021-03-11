using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MedicineInfo> MedicineInfo { get; set; }
        public DbSet<EventInfo> EventInfo { get; set; }
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<MedicineEvent> MedicineEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MedicineEvent>().HasKey(me => new { me.UserId, me.MedicineId });
        }
    }
}