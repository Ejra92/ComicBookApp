import styles from '../styles.module.scss'
import Button from './Button'


const LayoutButtons = () => {

    return (
        <div className={ styles.layoutButtons }>
            <Button type="list" />

            <Button type="grid" />
        </div>
    )

}

export default LayoutButtons