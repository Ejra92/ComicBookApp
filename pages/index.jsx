import { Children } from 'react'
import { useSelector } from 'react-redux'

import Issue from '../components/Home/Issue'
import LayoutFilter from '../components/Home/LayoutFilter'

import styles from '../styles/home.module.scss'


const API_KEY = 'fda891808f152a9d86f2b33696515f85e383592f'

const url = `https://comicvine.gamespot.com/api/issues/?api_key=${ API_KEY }&format=json&sort=date_added:desc&filter=name:true&limit=12`


const getLayoutState = ( { layout } ) => layout

const Home = ( { issues = [], e = '' } ) => {

  const layout = useSelector( getLayoutState )

  const stylesIssuesContainer = layout === 'grid' ? 'issuesContainerGrid' : 'issuesContainerList'

  return (
    <>
      <LayoutFilter />

      <div className={ styles[ stylesIssuesContainer ] } >
        { Children.toArray( issues.map( Issue ) ) }
      </div>
    </>
  )

}

export const getStaticProps = async () => {

  const props = {}

  try {

    let data =  await fetch( url )
  
    data = await data.json()

    data = data.results.map( generateNewObj )

    props.issues = data
    
  } catch ( e ) {
    
    props.error = e

  }
  
  return { props }

}

function generateNewObj( issue ) {

  return { 
    name: issue.name,
    issue_number: issue.issue_number,
    image: issue.image,
    date_added: issue.date_added,
    api_detail_url: issue.api_detail_url.split( 'issue/' )[ 1 ].split( '/' )[ 0 ],
  } 

}

export default Home