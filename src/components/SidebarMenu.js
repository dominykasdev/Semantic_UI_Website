import React, { useEffect } from 'react';
import {Menu, Sidebar} from 'semantic-ui-react';

  function SidebarMenu(props){
    return(
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={props.toggleSidebar}
            width='thin'
          >
            <Menu.Item className="yellow" active={props.activePage === 'Home'} href="#Home"><i className="home icon"></i>Home</Menu.Item>
            <Menu.Item className="yellow" active={props.activePage === 'Services'} href="#Services"><i className="cogs card icon"></i>Services</Menu.Item>
            <Menu.Item className="yellow" active={props.activePage === 'About'} href="#About"><i className="address card icon"></i>About</Menu.Item>
            <Menu.Item className="yellow" active={props.activePage === 'Portfolio'} href="#Portfolio"><i className="archive card icon"></i>Portfolio</Menu.Item>
            <Menu.Item className="yellow" active={props.activePage === 'Contact'} href="#Contact"><i className="at icon"></i>Contact</Menu.Item>
          </Sidebar>
    )

  }

  export default SidebarMenu;