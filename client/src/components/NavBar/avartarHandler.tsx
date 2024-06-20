import dropdownIcon from '../../static/dropdown-icon.svg'
import '../../styling/avatar.style.scss'


interface AvatarProps {
    src?: string;
    alt: string;
    name?: string;
}

const AvatarHandler: React.FC<AvatarProps> = ({src, alt, name}) => {

    return(
        <div className="avatar-wrapper">
            <img
            src={src}
            alt={alt}
            className="avatar-image"
            />
            <span className="avatar-name">{name}</span>
            <img src={dropdownIcon} alt="dropdown-menu" className="dropdown-icon" />
        </div>
    )
}

export default AvatarHandler