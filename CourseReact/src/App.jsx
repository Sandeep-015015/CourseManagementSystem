import  { useState } from 'react'
import AddCourse from './Components/AddCourse'
import ViewAllCourses from './Components/ViewAllCourses'
import DeleteCourse from './Components/DeleteCourse'

const App = () => {

    const [showAdd, setShowAdd] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0)

    const refresh = () => setRefreshKey(refreshKey + 1)

    return (
        <div>
            <h1>Student Course Management System</h1>

            {showAdd ?
                <AddCourse refresh={refresh} goBack={() => setShowAdd(false)} />
                :
                <>
                    <DeleteCourse refresh={refresh} />

                    <hr />

                    <ViewAllCourses
                        refreshKey={refreshKey}
                        addCourse={() => setShowAdd(true)}
                    />
                </>
            }
        </div>
    )
}

export default App