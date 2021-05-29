import React, {useState} from 'react';
import video from "../../assets/images/contact.mp4";

const Contact = () => {
    const [state, setState] = useState({
        formArray: [
            {
                icon: 'userIcon',
                isHidden: false,
                placeholder: "Please enter your Name here"
            },
            {
                icon: 'emailIcon',
                isHidden: true,
                placeholder: "Please enter your Email"
            },
            {
                icon: 'messageIcon',
                isHidden: true,
                placeholder: "Type your Messsage"
            }
        ],
        currentItemIndex: 0
    }
    );

    let { formArray , currentItemIndex} = state

    const nextBtnClickHandler = (e) => {
        e.preventDefault();
        if(currentItemIndex === 2) {
            return;
        }
        currentItemIndex++;
        
        const newState = formArray.map((it, index) => {
            it.isHidden = true;
            if(index === currentItemIndex) {
                it.isHidden = false
            }
            return it;
        });
        setState({formArray:newState, currentItemIndex});
    }

    const backBtnClickHandler = (e) => {
        e.preventDefault();
        if(currentItemIndex === 0) {
            return;
        }
        currentItemIndex--;
        
        const newState = formArray.map((it, index) => {
            it.isHidden = true;
            if(index === currentItemIndex) {
                it.isHidden = false
            }
            return it;
        });
        setState({formArray:newState, currentItemIndex});
    }
    return (
        <div className="contact">
            <video className="contact_video" autoPlay muted loop>
                <source src={video}></source>
            </video>
            <div className="contact_form">
                {
                    formArray.map(it => {
                        return (
                            <div key={it.icon} style={{display: it.isHidden ? 'none' : 'block'}}>
                                <i className={it.icon}></i>
                                <div>
                                <input type="text" className="contact_input u-margin-bottom-md" placeholder={it.placeholder} />
                                </div>
                            </div>
                        )
                    })
                    
                }
                <span className="contact_action">
                <a href="" onClick={backBtnClickHandler} className="btn-text">&larr; Back</a>
                { currentItemIndex < 2 ? <a href="" onClick={nextBtnClickHandler} className="btn-text">Next &rarr;</a> : <a href="" onClick={nextBtnClickHandler} className="btn-text">Submit &#8625;</a>}
                </span>
            </div>
        </div>
    )
}

export default Contact
