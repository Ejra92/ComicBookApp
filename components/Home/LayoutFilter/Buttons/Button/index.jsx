import { useDispatch, useSelector } from 'react-redux'
import { faList, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { changeLayoutAction } from '../../../../../store/LayoutDuck'

const getLayoutState = ( { layout } ) => layout

const Button = ( { type } ) => {

    const layout  = useSelector( getLayoutState )

    const dispatch = useDispatch()

    const changeLayoutTo = () => dispatch( changeLayoutAction( type === 'list' ? 'list' : 'grid' ) )

    const activeStyles = layout === type ? { color: 'green' } : {  }

    return (
        <div onClick={ changeLayoutTo } >
            <FontAwesomeIcon style={ activeStyles } icon={ type === 'list' ? faList : faTh } fixedWidth />

            <button style={ activeStyles } >
                { type === 'list' ? 'List' : 'Grid' }
            </button>
        </div>
    )

}

export default Button