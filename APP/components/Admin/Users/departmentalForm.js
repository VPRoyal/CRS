import styles from './userUpdate.module.css'
import Select from '../../Customs/Select'
import Section from './section'
export default function departmentalForm({sections=[], newSections=[], secUpdate}) {
    return (
        <div className={styles.departmental} >
            <h4>Sections</h4>
            <div className={styles.dbox} >        
                {sections.map((val,key)=>{return  <Section update={(obj)=>{}} section={val} key={key} editable={true} />})}
                {newSections.map((val,key)=>{return  <Section section={val} key={key} editable={false} />})}
            </div>

        </div>
    )
}
