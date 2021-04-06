import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import '../src/css/style.css'
import FullPageSections from './components/FullPageSections';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';
// import { Ref } from 'semantic-ui-react';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {

    const pageRef = React.useRef();
    const [toggle, setToggle] = useState(false); //Hook
    const [page, setActivePage] = useState('home');

    function toggleSidebar() {
        setToggle(!toggle);
    }

    function toggleSidebarOffClick() {
        setToggle(false);
    }

    function toggleMenuItem(activeItem) {
        setActivePage(activeItem);
    }

    return (
        <div>
            <AnimatedBackground />
            <Header onToggleSidebar={toggleSidebar} activePage={page} />
            <SidebarMenu toggleSidebar={toggle} toggleOffClick={pageRef} activePage={page} />
            {/* <Menu /> */}
            <div className="pusher" onClick={toggleSidebarOffClick}>
                <FullPageSections destination={toggleMenuItem} />
            </div>
        </div>
        );
}

ReactDOM.render(<App />, document.querySelector('#root'));