import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App() {
    return (
        <div>
            <div className='hero is-primary'>
                <div className='hero-body'>
                    <div className='title'>Personal Digital Assistants</div>
                </div>
            </div>

            <div className='container'>
                <div className='section'>
                    <div className='columns'>
                        <div className='column'>
                            <ProfileCard 
                                title="alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}  
                                description="Alexa create mode"
                            />
                        </div>
                        <div className='column'>
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana19" 
                                image={CortanaImage} 
                                description="Cortana create mode"
                            />
                        </div>
                        <div className='column'>
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage} 
                                description="Siri was make by apple"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App