import Image from 'next/image'

const blurImgUrl = `https://i.pinimg.com/564x/18/14/46/1814466e7cdf8e12263a8a211ebd830d.jpg`

const CustomImageComponent = props => {

    const {
        inlineStyles,
        styles,
        alt,
        src,
        width,
        height,
        empty
    } = props

    return (
        <div style={ inlineStyles }  className={ styles }>
            <Image 
                alt={ alt }
                src={ src }
                width={ width }
                height={ height }
                placeholder={ empty ? 'empty' : 'blur' }
                blurDataURL={ blurImgUrl }
            />
        </div>
    )

}

export default CustomImageComponent