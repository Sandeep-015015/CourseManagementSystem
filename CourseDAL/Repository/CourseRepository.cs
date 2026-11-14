using CourseDAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CourseDAL.Repository
{
    public class CourseRepository : IRepository
    {
        public bool AddCourse(CourseDetail course)
        {
            try
            {
                using (var context = new CourseDbContext())
                {
                    context.CourseDetails.Add(course);
                    context.SaveChanges();
                    return true;
                }

            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return false;
            }
        }

        public bool RemoveCourse(int id)
        {
            try
            {
                using (var context = new CourseDbContext())
                {
                    var course = context.CourseDetails.Find(id);
                    if (course != null)
                    {
                        context.CourseDetails.Remove(course);
                        context.SaveChanges();
                        return true;
                    }
                    return false; // Course not found
                }

            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return false;
            }
        }

        public List<CourseDetail> ViewAllCourses()
        {
            try
            {
                using (var context = new CourseDbContext())
                {
                    return context.CourseDetails.ToList();
                }

            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return new List<CourseDetail>(); // Return an empty list in case of an error
            }
        }
    }
}
