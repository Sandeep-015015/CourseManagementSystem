import  { useState, useEffect } from 'react'
import axiosInstance from '../Services/CourseService'

const ViewAllCourses = ({ refreshKey, addCourse }) => {

    const [courses, setCourses] = useState([])

    const viewCourses = () => {
        axiosInstance.get('')
            .then(response => setCourses(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        viewCourses()
    }, [refreshKey])

    return (
        <div>
            <h2>Available Courses</h2>

            <button onClick={addCourse}>Add New Course</button>

            <br /><br />

            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Course Name</th>
                        <th>Technology</th>
                        <th>Duration</th>
                        <th>Availability</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.courseName}</td>
                            <td>{c.technology}</td>
                            <td>{c.duration}</td>
                            <td>{c.availabilityStatus ? 'Available' : 'Not Available'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewAllCourses