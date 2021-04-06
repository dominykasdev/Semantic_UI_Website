import React, {memo} from 'react';

const iconList = [
    "circle outline",
    "square outline",
    "plus",
    "folder",
    "thumbs up outline",
    "bell outline",
    "wifi",
    "cog",
    "coffee",
    "html5",
    "js",
    "npm",
    "react",
    "sass",
    "wordpress",
    "css3"
];

const randomisedStyles = () => {
    const randomisedStyles = {
        "left": Math.floor(Math.random() * 90) + 1 + 'vw',
        "transform": 'rotate(' + Math.floor(Math.random() * 360) + 1 + 'deg)',
        "fontSize": Math.floor(Math.random() * 10) + 4 + 'em',
        "animationDelay": Math.floor(Math.random() * 5) + 1 + 's',
        "animationDuration": Math.floor(Math.random() * 10) + 5 + 's'
    }
    return randomisedStyles;
}

const AnimatedBackground = React.memo(props => {
    return (
        <div className="ui animatedBackground">
            <AnimatedIcon icon={iconList[0]} />
            <AnimatedIcon icon={iconList[1]} />
            <AnimatedIcon icon={iconList[0]} />
            <AnimatedIcon icon={iconList[1]} />
            <AnimatedIcon icon={iconList[4]} />
            <AnimatedIcon icon={iconList[5]} />
            <AnimatedIcon icon={iconList[6]} />
            <AnimatedIcon icon={iconList[7]} />
            <AnimatedIcon icon={iconList[8]} />
        </div>
    )
})

const AnimatedIcon = (props) => {
    let rand = { ...randomisedStyles() };

    if(rand !== {}){
       return (
       <i className={`ui ${props.icon} icon massive white`} style={rand} />
    ) 
    } else{
        return (<div></div>)
    }
}

export default AnimatedBackground;