import style from '../layout/footer.module.css'
import FacebookIcon from '../img/facebookIcon.png'
import GithubIcon from '../img/githubIcon.png'
import LinkedinIcon from '../img/linkedinIcon.png'
import InstagramIcon from '../img/instagramIcon.png'

function Footer() {
    return(
        <div className={style.footer_container} >

        <div className={style.footerImg_container}>
                <img src={FacebookIcon}/>
                <img src={GithubIcon}/>
                <img src={LinkedinIcon}/>
                <img src={InstagramIcon}/>
            </div>

            <p>HomeControl <span>since 2022</span></p>

            

        </div>
    )
}
export default Footer