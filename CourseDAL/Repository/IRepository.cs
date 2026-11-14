using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CourseDAL.Models;

namespace CourseDAL.Repository
{
    public interface IRepository
    {
        List<CourseDetail> ViewAllCourses();

        bool AddCourse(CourseDetail course);

        bool RemoveCourse(int id);
    }
}
