import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion, faBell, faChevronDown, faCommentDots, faStickyNote, faUser, faSearch} from '@fortawesome/free-solid-svg-icons'

function IconFA(props) {
    switch (props.type) {
        case "logo":
            return <FontAwesomeIcon className="icon logo" icon={faStickyNote} />    
        case "search":
            return <FontAwesomeIcon className="icon search-icon" icon={faSearch} />
        case "updates":
            return <FontAwesomeIcon className="icon" icon={faBell} />
        case "inbox":
            return <FontAwesomeIcon className="icon" icon={faCommentDots} />
        case "user":
            return <FontAwesomeIcon className="icon" icon={faUser} />
        case "arrow":
            return <FontAwesomeIcon className="icon" icon={faChevronDown} />
        case "plus":
            return <FontAwesomeIcon className="icon footer-btn plus-btn" icon={faPlus} />
        case "question":
            return <FontAwesomeIcon className="icon footer-btn question-btn" icon={faQuestion} />
        default:
            break;
    }
}

export default IconFA