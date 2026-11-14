import  { useState } from 'react'
import axiosInstance from '../Services/CourseService'

const DeleteCourse = ({ refresh }) => {

    const [id, setId] = useState('')

    const deleteCourse = () => {

        axiosInstance.delete('/' + id)
            .then(() => {
                alert('Course deleted successfully')
                setId('')
                refresh()
            })
            .catch(error => {
                console.log(error)
                alert('Unable to delete course')
            })
    }

    return (
        <div>
            <h2>Delete Course</h2>

            <label>Course ID: </label>

            <input
                type="number"
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="Enter Course ID"
            />

            <button onClick={deleteCourse}>Delete Course</button>
        </div>
    )
}

export default DeleteCourse