/* eslint-disable react/jsx-key */
import { Children } from 'react'
import CustomImageComponent from '../../../CustomImageComponent'
import styles from '../styles.module.scss'

const Credits = ( { name, arr } ) => {


    return (
        <div className={ styles.credits }>
            <h2> { name } </h2>

            <div className={ styles.container }>
                { arr.length > 0 && Children.toArray( arr.map( credit => {

                    return (
                        <div className={ styles.credit }>
                            <CustomImageComponent
                                inlineStyles={ { marginRight: '10px' } }
                                alt={ 'credit img' }
                                src={ credit.image }
                                styles={ styles.creditImage }
                                width='30px'
                                height='30px'
                                empty
                            />

                            <p> { credit.name } </p>
                        </div>
                    )

                } ) ) }

                { arr.length === 0 && (
                    <div style={ { color: '#000' } } className={ styles.credit }>
                        <p> Not available </p>
                    </div>
                ) }
            </div>
        </div>
    )

}

export default Credits