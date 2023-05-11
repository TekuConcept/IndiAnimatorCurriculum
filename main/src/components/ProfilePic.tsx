import DefaultProfilePic from './../resources/default-profile-2.png'
import './ProfilePic.scss'

export interface ProfilePicProps {
    imgurl: string
    alturl?: string
}

export default function ProfilePic(props: ProfilePicProps) {
    const alturl = props.alturl || DefaultProfilePic
    return <div className="profile-pic">
        <div className="border part-a"></div>
        <div className="border part-b"></div>
        <img
            src={props.imgurl}
            alt=""
            onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = alturl
            }}>
        </img>
    </div>
}
