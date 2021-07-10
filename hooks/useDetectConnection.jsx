import { useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const modes = [ 'offline', 'online' ]

const useDetectConnection = () => {

    useEffect( () => {

        if( typeof window === 'undefined' ) return
        
        const handle = mode => mode === 'online' ? toast.success( `Connected` ) : toast.error( `Connection lost` )
        
        modes.forEach( mode => window.addEventListener( mode, () => handle( mode ) ) ) 

        return () => {

            modes.forEach( mode => window.removeEventListener( mode, handle ) ) 

        }

    }, [] )

    return <ToastContainer position={ 'top-center' } />

}

export default useDetectConnection