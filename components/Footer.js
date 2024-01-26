import React from 'react';

class Footer extends React.Component {
    render() {
        return (
        <footer id="foot" className="socials">
            <h2 className="hover-effect">Contact informatie</h2> 
            <a href="mailto: info@sanjazagers.com" >Verzend een Email</a>
                <p><a href="https://www.linkedin.com/in/sanjazagers">Of stuur een berichtje op LinkedIn</a></p>
                <div className='social-images'>
                    <a href="https://www.linkedin.com/in/sanjazagers"> <img src='images/LinkedIn_icon.png' alt='LinkedIn icon'></img> </a>
                    <a href="https://github.com/SanjaZagers"> <img src='images/github_icon.png' alt='Github icon'></img> </a>
                    <a href="mailto: info@sanjazagers.com" ><img src='images/mail-icon.png' alt='email icon'></img> </a> 
                </div>
        </footer>
        )
    }
} 

export default Footer; 