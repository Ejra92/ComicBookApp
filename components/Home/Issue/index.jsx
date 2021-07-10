import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import CustomImageComponent from '../../CustomImageComponent'

import styles from './styles.module.scss'

const getLayoutState = ( { layout } ) => layout

const Issue = props => {

    const {
        name,
        issue_number,
        image,
        date_added,
        api_detail_url
    } = props

    const router = useRouter()

    const layout = useSelector( getLayoutState )

    const issueStyles = layout === 'grid' ? 'issueGrid' : 'issueList'

    const customImageProps = {
        inlineStyles: layout === 'list' ? { width: '48%' } : {},
        styles: styles.containerImage,
        alt: `${ name }/${ issue_number } image`,
        src: image.original_url,
        width: '700px',
        height: '933px'
    }

    const handleClick = () => router.push( `/${ api_detail_url }` )

    return ( 
        <div onClick={ handleClick } className={ styles[ issueStyles ] }>
            <CustomImageComponent { ...customImageProps } />

            <div style={ layout === 'list' ? { width: '48%' } : {} } className={ styles.containerText }>
                <h2> <strong> { name }  #{ issue_number } </strong> </h2>

                <p> { format( new Date( date_added ), 'MMMM dd, yyyy' )  } </p>
            </div>
        </div> 
    )

}

export default Issue