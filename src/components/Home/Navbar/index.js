import React from 'react'
import './index.scss'

export function NavBar() {
    return (
        <div className="navbar-header">
                <div className="nav-box-container">
                    <div className="d-flex logo-section ai-center">
                        <img src={require('../../../assets/images/geniobits_logo.png')} alt="GENIOBITS" />
                    </div>
                    <div className="d-flex logo-section">
                        <div className='profile-section-container'>
                            <div id="profile-section" className='center-flex'>
                                <img src={require('../../../assets/images/avtar.svg').default} alt={"User"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
