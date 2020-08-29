import React from 'react'
import TopBar from './TopBar'
import Rest from './Rest'

const BasicLayout = () => {
    return (
        <div className='flex flex-col min-h-screen h-screen'>
            <TopBar />
            <Rest />
        </div>
    )
}

export default BasicLayout
