using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using test_back.Domain.Entities;

namespace test_back.Infrastructure.Persistence
{
    public partial class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }
        public DbSet<Flight> Flights { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Flight>(entity =>
            {
                entity.ToTable("Flights");

                entity.Property(f => f.Id)
                    .ValueGeneratedOnAdd() 
                    .IsRequired();        

                entity.Property(f => f.FlightNumber)
                    .HasMaxLength(20)   
                    .IsRequired();      

                entity.Property(f => f.Origin)
                    .HasMaxLength(100)   
                    .IsRequired();

                entity.Property(f => f.Destination)
                    .HasMaxLength(100)  
                    .IsRequired();

                entity.Property(f => f.DepartureDate)
                    .IsRequired();

                entity.Property(f => f.DepartureTime)
                    .IsRequired();

                entity.Property(f => f.ArrivalDate)
                    .IsRequired();

                entity.Property(f => f.FlightDuration)
                    .IsRequired(); 

                entity.Property(f => f.AvailableSeats)
                    .IsRequired();

                entity.Property(f => f.TicketPrice)
                    .HasColumnType("decimal(18,2)") 
                    .IsRequired();

                entity.Property(f => f.FlightStatus)
                    .HasMaxLength(50)
                    .IsRequired();

                entity.Property(f => f.CorreoSoporte)
                    .HasMaxLength(100)
                    .IsRequired();
            });
        }
    }
}
