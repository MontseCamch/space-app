import Photo from "/profile.png";
import "./About.css";

function About() {
    return (
        <div className="info-container">
            <img class="profile-photo" src={Photo} alt="profile photo"></img>
            <div class="text-container">
                <h2 class="personal-info">Montserrat Camacho - montserratcamch@gmail.com</h2>
                <h3 class="description">Soy Licenciada en Diseño y Comunicación Visual, especializada en el área audiovisual, fotografía y multimedia. Actualmente estoy participando en el Bootcamp Java Full Stack Developer de Generation México.</h3>
            </div>
        </div>
    )
}

export default About;