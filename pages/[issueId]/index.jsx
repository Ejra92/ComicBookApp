import CustomImageComponent from '../../components/CustomImageComponent'
import CreditsContainer from '../../components/IssueDetails/CreditsConteiner'

import styles from '../../styles/issuedetails.module.scss'

const API_KEY = 'fda891808f152a9d86f2b33696515f85e383592f'

const url = `https://comicvine.gamespot.com/api/issues/?api_key=${ API_KEY }&format=json&sort=date_added:desc&filter=name:true&limit=12`

const IssueDetails = ( { issue } ) => {

    const { 
        image,
        ...creditsContainerProps
    } = issue

    const customImageProps = {
        // inlineStyles: { width: '48%' },
        styles: styles.containerImage,
        alt: `issue detail image`,
        src: image.original_url,
        width: '700px',
        height: '933px'
    }

    return (
        <div className={ styles.issueDetails }>
            <CustomImageComponent { ...customImageProps } />

            <CreditsContainer { ...creditsContainerProps } />
        </div>
    )

}


export const getStaticPaths = async () => {

    let issues =  await fetch( url )
      
    issues = await issues.json()
  
    const paths = issues.results.map( issue => ( { 
      params: { issueId: issue.api_detail_url.split( 'issue/' )[ 1 ].split( '/' )[ 0 ] }
    } ) )
  
    return { paths, fallback: false }
  
}

const generateNewObjs = arr => arr.map( async element => {

    let response

    response = await fetch( `${element.api_detail_url}?api_key=${ API_KEY }&format=json&field_list=image,name` )

    response = await response.json()

    const { name = '', image } = response.results

    return {
        name,
        image: image.original_url
    }
    
} )


export const getStaticProps = async ( { params } ) => {

    const { issueId } = params

    const props = {}

    const url = `https://comicvine.gamespot.com/api/issue/${ issueId }/?api_key=${ API_KEY }&format=json`
  
    try {
  
        let issue =  await fetch( url )
        
        issue = await issue.json()

        let { image }  = issue.results

        const character_credits = await Promise.all( generateNewObjs( issue.results.character_credits ) )
        const team_credits = await Promise.all( generateNewObjs( issue.results.team_credits ) )
        const location_credits = await Promise.all( generateNewObjs( issue.results.location_credits ) )
        const concept_credits = await Promise.all( generateNewObjs( issue.results.concept_credits ) )

        props.issue = { 
            image,
            character_credits,
            team_credits,
            location_credits,
            concept_credits,
        } 
      
    } catch ( e ) {
      
        props.error = e
  
    }
    
    return { props }
  
}

export default IssueDetails