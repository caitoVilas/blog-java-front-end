import banner from '../assets/images/javaBanner3.jpg'

const Header = () => {

    return(
        <div>
            <br /><br /><br />
            <img src={banner} alt={banner} className="header" />
        </div>
    );
};

export default Header;