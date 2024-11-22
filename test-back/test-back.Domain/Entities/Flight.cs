using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace test_back.Domain.Entities
{
    public class Flight
    {
        public int Id { get; set; }             
        public string FlightNumber { get; set; } 
        public string Origin { get; set; }        
        public string Destination { get; set; }  
        public DateTime DepartureDate { get; set; } 
        public TimeSpan DepartureTime { get; set; } 
        public DateTime ArrivalDate { get; set; } 
        public decimal FlightDuration { get; set; }
        public int AvailableSeats { get; set; }    
        public decimal TicketPrice { get; set; }  
        public string FlightStatus { get; set; } 
        public string CorreoSoporte { get; set; } 
    }
}
