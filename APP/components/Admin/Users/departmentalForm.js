import styles from './userUpdate.module.css'
import Select from '../../Customs/Select'
import {ACTIONS} from '../../../state/userUpdateReducer'

import Section from './section'

export default function departmentalForm({sections=[], dispatch, state}) {
    return (
        <div className={styles.departmental} >
            <h4>Sections</h4>
            <div className={styles.dbox} >
                {sections.map((val,key)=>{return  <Section dispatch={dispatch} state={state} section={val} key={key} newSection={false} />})}
                {state.newSection.map((val,key)=>{
                    return  <Section dispatch={dispatch} state={state} section={val} key={key} newsSection={true} />})}
            </div>

        </div>
    )
}
