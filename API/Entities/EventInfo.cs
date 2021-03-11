using System;
using System.ComponentModel.DataAnnotations;


namespace API.Entities
{
    public class EventInfo
    {
        [Key]
        public int EventId { get; set; }
        public int UserId { get; set; }
        public int MedicineId { get; set; }
        public int UsedPortionNow { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;   
    }
}