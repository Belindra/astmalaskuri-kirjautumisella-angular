using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class MedicineEvent
    {
        public int UserId { get; set; }
        public int MedicineId { get; set; }
        public int UsedPortionTotal { get; set; }
    }
}