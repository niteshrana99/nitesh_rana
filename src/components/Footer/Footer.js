import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_left">
                <p className="footer_left_heading">Let's Work Together</p>
                <p className="footer_left_text">Have a project / opportunity you'd like to discuss ?</p>
                <button className="round_btn">Get in Touch</button>
            </div>
            <div className="footer_right">
                <ul className="footer_list">
                    <li className="footer_list-item">
                        <i className="fa-email"></i> &nbsp;Email
                    </li>
                    <li className="footer_list-item">
                        <i className="fa-linkedin"></i> &nbsp;Linkedin
                    </li>
                    <li className="footer_list-item">
                        <i className="fa-facebook"></i> &nbsp;Facebook
                    </li>
                    <li className="footer_list-item">
                    <i className="fa-medium"></i> &nbsp;Medium
                    </li>
                </ul>
            </div>    
        </footer>
    )
}

export default Footer
