'use client'

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const MaintenancePage = () => {
    return (
        <div>
            <div className='text-foreground text-4xl font-bold mt-24 text-center'>
                We are under maintenance for this page, will be live soon.
            </div>
            
            <DotLottieReact
                src="https://lottie.host/d102bf90-90b9-461c-b01a-d298c1e2bf52/0XUd3XmDkJ.lottie"
                loop
                autoplay
            />
        </div>
    )
}

export default MaintenancePage;