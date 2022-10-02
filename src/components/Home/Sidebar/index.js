import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

export const menuList = [
    { id: '/apps/job-roles', title: 'My Apps' },
    { id: '/apps/departments', title: 'Departments' },
    { id: '/apps/resources', title: 'Resources' }
]

export function SideBar() {
    const location = useLocation()
    const [activeIndex, setActiveIndex] = useState(0)

    const getActiveIndex = val => {
        switch (val) {
            case 'home':
                return 0
            case 'resources':
                return 1
            default:
                return 0
        }
    }

    useEffect(() => {
        const { pathname } = location
        if (!!pathname) {
            const splittedPath = (pathname.split("/")).filter(e => String(e).trim())
            if (!!splittedPath && !!splittedPath[1]) {
                setActiveIndex(getActiveIndex(splittedPath[1]))
            }
        }
        // eslint-disable-next-line
    }, [location.pathname])

    return (
        <div className='sidebar-container'>
            {
                menuList.map((menu, i) => {
                    return <div key={i} className={`sidebar-menu-item center-flex ${(i === activeIndex) ? 'active' : ''}`}>
                        <Link to={menu.id}>
                            <div name={menu.icon} />
                            <div className='menu-item-title'>{menu.title}</div>
                        </Link></div>
                })
            }
        </div>
    )
}
