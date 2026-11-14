using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CourseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly CourseDAL.Repository.IRepository _repository;

        public CourseController(CourseDAL.Repository.IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAllCourses()
        {
            try
            {
                var courses = _repository.ViewAllCourses();
                return Ok(courses);

            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving courses.");
            }
        }

        [HttpPost]
        public IActionResult AddCourse([FromBody] CourseDAL.Models.CourseDetail course)
        {
            try
            {
                if (course == null)
                {
                    return BadRequest("Course data is null.");
                }
                var result = _repository.AddCourse(course);
                if (result)
                {
                    return Ok("Course added successfully.");
                }
                else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while adding the course.");
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while adding the course.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveCourse(int id)
        {
            try
            {
                var result = _repository.RemoveCourse(id);
                if (result)
                {
                    return Ok("Course removed successfully.");
                }
                else
                {
                    return NotFound("Course not found.");
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while removing the course.");
            }
        }

        
    }
}
