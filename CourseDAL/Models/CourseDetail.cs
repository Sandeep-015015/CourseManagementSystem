using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace CourseDAL.Models
{
    public class CourseDetail
    {

        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string? CourseName { get; set; } = string.Empty;

        [Required]
        [StringLength(30)]
        public string? Technology{ get; set; } = string.Empty;

        public int Duration { get; set; }

        public bool AvailabiltyStatus { get; set; }



    }
}
