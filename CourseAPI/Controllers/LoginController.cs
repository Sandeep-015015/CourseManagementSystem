using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
    [HttpPost]
    public IActionResult Login(LoginModel model)
    {
        try
        {
            if (model.Username == "admin" && model.Password == "12345")
            {
                return Ok("Login Successful");
            }

            return Unauthorized("Invalid Username or Password");
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}