import React from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

const MenuItemHandler = (index) => {
    console.log(index);
}

const Header = (props) => {
    return (
        // <div className="ui top menu fixed">
        //     {/* <Button animated="left" on="" onClick={props.onToggleSidebar} className="sideBarButton fixed top narrow" color="red">
        //         <Button.Content visible>
        //                 <Icon name="bars" />
        //             </Button.Content>
        //         <Button.Content hidden>
        //                 <Icon name="arrow left" />
        //             </Button.Content>
        //     </Button> */}
        <Menu className="top fixed">
            <Button onClick={props.onToggleSidebar} className="sideBarButton fixed top icon" color="red"><i className="bars icon white"></i></Button>
            <Menu.Item active={props.activePage === 'Home'} className="item yellow" icon="home" content="Home" href="#Home"></Menu.Item>
            <Menu.Item active={props.activePage === 'Services'} className="item yellow" icon="cogs" content="Services" href="#Services"></Menu.Item>
            <Menu.Item active={props.activePage === 'About'} className="item yellow" icon="address card" content="About" href="#About"></Menu.Item>
            <Menu.Item active={props.activePage === 'Portfolio'} className="item yellow" icon="archive" content="Portfolio" href="#Portfolio"></Menu.Item>
            <Menu.Item active={props.activePage === 'Contact'} className="item yellow" icon="at" content="Contact" href="#Contact"></Menu.Item>
        </Menu>
    )
}

export default Header;