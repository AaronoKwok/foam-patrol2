import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

/* fontAwesome list */
export const iconList = (arr) => {
    return arr.map((bullet, index) => {
        return  <div className="info-space">
                    <FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/>
                    <p className="bullet-point">{bullet}</p>
                </div>
    })
}