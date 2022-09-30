import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchAllDepartments } from '../../actions/department';
import Departments from '../Departments';

const Resources = () => (
    <div className="center-flex">
        Not Described
    </div>
)

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllDepartments())
        // eslint-disable-next-line
    }, [])

    return (
        <div className="home-page-container">
            <Routes>
                <Route path={"/"} element={<Departments />} />
                <Route path={"/departments"} element={<Departments />} />
                <Route path={"/resources"} element={<Resources />} />
            </Routes>
        </div>
    );
}

export default Home;