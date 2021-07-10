import Credits from './Credits'

import styles from './styles.module.scss'

const CreditsContainer = props => {

    const { 
        character_credits,
        team_credits,
        location_credits,
        concept_credits
    } = props

    return (
        <div className={ styles.creditsContainer }>
            <Credits name={ 'Characters' } arr={ character_credits } />

            <Credits name={ 'Teams' } arr={ team_credits } />

            <Credits name={ 'Locations' } arr={ location_credits } />

            <Credits name={ 'Concepts' } arr={ concept_credits } />
        </div>
    )

}

export default CreditsContainer