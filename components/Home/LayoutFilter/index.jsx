import Buttons from './Buttons'

import styles from './styles.module.scss'

const layoutFilter = () => {

    return (
        <div className={ styles.layoutFilter } >
            <p> Latest Issues </p>
            
            <Buttons />
        </div>
    )

}

export default layoutFilter