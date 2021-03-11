using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class MedicineInfo
    {
        [Key]
        public int MedicineId { get; set; }
        public int TotalPortion { get; set; }
        public string MedicineName { get; set; } 
    }
}