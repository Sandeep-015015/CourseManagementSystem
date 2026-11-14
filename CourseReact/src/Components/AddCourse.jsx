import  { useState } from 'react'
import axiosInstance from '../Services/CourseService'

const AddCourse = ({ refresh, goBack }) => {

    const [courseName, setCourseName] = useState('')
    const [technology, setTechnology] = useState('')
    const [duration, setDuration] = useState('')
    const [availabilityStatus, setAvailabilityStatus] = useState(true)

    const addCourse = () => {

        const course = {
            courseName: courseName,
            technology: technology,
            duration: Number(duration),
            availabilityStatus: availabilityStatus
        }

        axiosInstance.post('', course)
            .then(() => {
                alert('Course added successfully')
                setCourseName('')
                setTechnology('')
                setDuration('')
                setAvailabilityStatus(true)
                refresh()
                goBack()
            })
            .catch(error => {
                console.log(error)
                console.log(error.response)
                console.log(error.response?.data)
                alert(error.response?.data || 'Unable to add course')
            })
            
    }

    return (
        <div>
            <h2>Add course</h2>

            <div>
                <label>course Name: </label>
                <input type="text" value={courseName}
                    onChange={e => setCourseName(e.target.value)} />
            </div>

            <br />

            <div>
                <label>technology: </label>
                <input type="text" value={technology}
                    onChange={e => setTechnology(e.target.value)} />
            </div>

            <br />

            <div>
                <label>Duration: </label>
                <input type="number" value={duration}
                    onChange={e => setDuration(e.target.value)} />
            </div>

            <br />

            <div>
                <label>Availability: </label>
                <select value={availabilityStatus}
                    onChange={e => setAvailabilityStatus(e.target.value === 'true')}>
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>
            </div>

            <br />

            <button onClick={addCourse}>Add Course</button>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default AddCourse