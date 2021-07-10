import { useEffect } from 'react'
import NProgress from 'nprogress'
import router from 'next/router'

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 })

const useLoader = () => {

    useEffect(() => {

        const handleRouteChangeStart = () => NProgress.start()
        const handleRouteChangeDoneOrError  = () => NProgress.done()
        
        router.events.on( 'routeChangeStart', handleRouteChangeStart )
        router.events.on( 'routeChangeComplete' , handleRouteChangeDoneOrError )
        router.events.on( 'routeChangeError' , handleRouteChangeDoneOrError )
    
        return () => {
            router.events.off( 'routeChangeError', handleRouteChangeStart )
            router.events.off( 'routeChangeComplete', handleRouteChangeDoneOrError )
            router.events.off( 'routeChangeError', handleRouteChangeDoneOrError )
        }
    
    }, [])

}

export default useLoader