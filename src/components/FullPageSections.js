// import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import { SectionsContainer, Section } from 'react-fullpage';
import { Button, Transition } from 'semantic-ui-react';

// const colours = ["#06d689", "#2ec4b6", "#e71d36", "#ff9f1c"]; //original colours
const colours = ["#6dd5cc", "#51e2ac", "#ee6173", "#ee6173"]; //lightened colours
const body = document.querySelector("body");
// const Section = props => {
//   return <div className={`section Container animate ${props.sectionClass}`}>{props.children}</div>;
// };
const anchors = ["Home", "Services", "About", "Portfolio", "Contact"];
let prevCol;

const getCol = () => {
  let newCol = Math.round(Math.random() * colours.length);
  while (prevCol == newCol) {
    newCol = Math.round(Math.random() * colours.length);
  }
  if (prevCol !== newCol) {
    prevCol = newCol;
    return newCol;
  }

};

// const skillList = () => {
//   const skillSet = ["CSS","JS","PHP","ASP.NET","JSON","SEO","REACT","NODE.JS","SCSS","SQL","KUSTO","WORDPRESS","CMS","MVC","REST API"];

//   const skills = skillSet.map(skill => {
//     console.log(skill);
//     return <SkillBlock content={skill}/>;
//   });
//   return skills;

// }



// class FullpageWrapper extends Component {
//   state = { animation: "fade up", duration: 500, visible: false }

//   // handleChange = (e, {name, value}) => this.setState({[name]: value});

//   toggleVisibility = () => {
//     this.setState((prevState) => ({ visible: !prevState.visible }))
//   }

//   render() {
//     return (
//       <SectionsContainer
//         anchors={anchors}
//         navigation
//         //navigationTooltips={anchors}
//         sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
//         onLeave={(origin, destination, direction) => {
//           body.style.backgroundColor = colours[getCol()];
//         }}>

//         <Section content={"Home"} className="">
//           <div className="ui grid centered aligned column fullScreenHeight">
//             <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
//               <Button onClick={this.toggleVisibility}>Try!</Button>
//               <Transition animation="fade up" duration="500" visible={this.state.visible}>
//                 <div className="row middle aligned"><h1>Dominykas.dev</h1></div>
//               </Transition>
//               <div className="row middle aligned"><p>Web Developer, lover of history, philosphy and politics.</p></div>
//               <div className="row middle aligned"><p>Interested in martial arts, camping and archery.</p></div>
//               <div className="row middle aligned"><p>Amatuer photographer.</p></div>

//             </div>
//           </div>
//         </Section>
//         <Section content={"Services"}>
//           <div className="ui grid centered aligned column fullScreenHeight">
//             <div className="column middle aligned sixteen wide mobile twelve wide tablet eight wide computer">
//               <div className="row middle aligned"><h2>Services</h2></div>
//               <div className="ui row aligned equal width grid stackable">
//                 <div className="ui column aligned">
//                   <h3><i className="thumbs up outline icon" />Website and web app development</h3>
//                   <p>I'm experienced in working in all aspects of web development. I will keep you up to date with the progress during development. Whether its a simple one page site, a blog or an online shop I can lend my knowledge and skills, and help your vision come to life. <a href="mailto:contact@dominykas.dev?subject=I'd like a website">Contact me now for a quote!</a></p>
//                 </div>
//                 <div className="ui column aligned">
//                   <h3><i className="hashtag icon" />Intergrate social media</h3>
//                   <p>Using social media is a great way to keep in contact with your customers/followers and gain new ones as well. I can help you set up you social media accounts such as Facebook, Twitter, Instagram etc., and increase your brand's outreach. I can also sync your pre-existing social media accounts to your website so your audience can keep up to date.</p>
//                 </div>
//                 <div className="ui column aligned">
//                   <h3><i className="wrench check icon" />Website management</h3>
//                   <p>If you already own a website and it needs maintenance, I can help. I can do regular updates to your website if required. I can offer suggestions to improve your SEO, layout or anything else that may improve user experience for you or your audience/customers.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="iconContainer">{skillList()}</div> */}
//         </Section>
//         <Section content={"About Me"}>
//           <div className="ui grid centered aligned column fullScreenHeight">
//             <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
//               <h2 className="header">About Me</h2>
//               <p>Hi, I'm Dominykas, currently a web developer working at Covance.</p>
//               <p>I've been developing websites since 2016, learning everything from design, UI, cross-browser compatibility, responsive design to animation, APIs, CMS frameworks, data visualisation, SEO, JQuery, PHP, JS ES6, React and Node.js and more.</p>
//             </div>
//             {/* <div className="iconContainer">{skillList()}</div> */}
//           </div>
//         </Section>
//         <Section content={"Portfolio"}>
//           <div className="ui grid centered aligned column fullScreenHeight portfolioPage">
//             <div className="column middle aligned sixteen wide mobile twelve wide tablet eight wide computer">
//               <div className="row middle aligned"><h2>Portfolio</h2></div>
//               <div className="row middle aligned">
//                 <h3>Websites</h3>
//                 <div><a target="_blank" className="animated" href="https://www.121tarotreadings.com/">121 Tarot Readings</a></div>

//                 <div><a target="_blank" className="row animated" href="https://thepcsurgeon.co.uk/">The PC Surgeon</a></div>
//                 <div><a target="_blank" className="row animated" href="https://hashashinsgallery.com/">The Hashashins Club (coming soon)</a></div>
//               </div>
//               <div className="row middle aligned">
//                 <h3>Projects</h3>
//                 <Transition.Group animation="fade up" duration="500">

//                   <a target="_blank" className="animated" href="https://dominykas.dev/projects/crypto_app/">Crypto tracking web app (React-Redux)</a>
//                   <a target="_blank" className="animated" href="">Social media project (in development)</a>
//                   <a target="_blank" className="animated" href="https://codepen.io/domdev/">CodePen Mini Projects</a>
//                 </Transition.Group>

//               </div>
//             </div>
//           </div>
//         </Section>
//         <Section content={"Contact"} className="">
//           {/* <div className="ui grid twelve fullScreenHeight">
//             <div className="ui center aligned grid container">
//               <h2 className="ui header middle">Contact Me</h2>
//             </div>
//             <div className="ui center aligned eight grid row">            
//               <a target="_blank" className="ui grid four wide middle column" href="https://www.linkedin.com/in/dominykas-genys-bb466795/">
//                 <i className="linkedin icon massive"></i>
//               </a>
//               <a target="_blank" className="ui grid four wide middle column" href="mailto:contact@dominykas.dev">
//                 <i className="mail icon massive"></i>
//               </a>
//               <a target="_blank" className="ui grid four wide middle column" href="https://github.com/dominykasdev">
//                 <i className="github icon massive"></i>
//               </a>
//             </div>
//           </div>      */}
//           <div className="ui grid centered aligned column fullScreenHeight contactPage">
//             {/* <div className="row middle aligned eight wide">
//               <h2 className="ui row middle">Contact Me</h2>
//             </div> */}
//             <div className="column middle aligned equal width grid">
//               <h2 className="ui row middle aligned sixteen wide">Contact Me</h2>
//               <a target="_blank" className="column" href="https://www.linkedin.com/in/dominykas-genys-bb466795/">
//                 <i className="linkedin icon massive yellow animated"></i>
//               </a>
//               <a target="_blank" className="column" href="mailto:contact@dominykas.dev">
//                 <i className="mail icon massive yellow animated"></i>
//               </a>
//               <a target="_blank" className="column" href="https://codepen.io/domdev/">
//                 <i className="codepen icon massive yellow animated"></i>
//               </a>
//               <a target="_blank" className="column" href="https://github.com/dominykasdev">
//                 <i className="github icon massive yellow animated"></i>
//               </a>
//             </div>
//           </div>
//         </Section>
//       </SectionsContainer>
//     )
//   }
// }

const FullpageWrapper = (props, destinationSection) => (
  <ReactFullpage
    menu="#menu"
    anchors={anchors}
    navigation
    //navigationTooltips={anchors}
    // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    afterLoad={(origin, destination, direction) => {
      destinationSection = destination;
      destinationSection.item.classList.add("active");
      props.destination(destination.anchor);
    }}
    onLeave={(origin, destination, direction) => {
      body.style.backgroundColor = colours[getCol()];
    }}

    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <ReactFullpage.Wrapper>
          <div content={"Home"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight">
              <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
                <div className="row middle aligned"><h1>Dominykas.dev</h1></div>
                <div className="row middle aligned"><p>Web Developer, lover of history, philosophy and politics.</p></div>
                <div className="row middle aligned"><p>Interested in martial arts, camping and archery.</p></div>
                <div className="row middle aligned"><p>Amatuer photographer.</p></div>
              </div>
            </div>
          </div>
          <div content={"Services"} className="section servicesPage">
            <div className="ui grid centered aligned column fullScreenHeight">
              <div className="column middle aligned sixteen wide mobile twelve wide tablet eight wide computer">
                <div className="row middle aligned"><h2>Services</h2></div>
                <div className="ui row aligned equal width grid stackable">
                  <div className="ui column aligned">
                    <h3><i className="thumbs up outline icon" />Website and web app development</h3>
                    <p>I'm experienced in working in all aspects of web development. I will keep you up to date with the progress during development. Whether its a simple one page site, a blog or an online shop I can lend my knowledge and skills, and help your vision come to life.<br/><a href="mailto:contact@dominykas.dev?subject=I'd like a website">Contact me now for a quote!</a></p>
                  </div>
                  <div className="ui column aligned">
                    <h3><i className="hashtag icon" />Intergrate social media</h3>
                    <p>Using social media is a great way to keep in contact with your customers/followers and gain new ones as well. I can help you set up you social media accounts such as Facebook, Twitter, Instagram etc., and increase your brand's outreach. I can also sync your pre-existing social media accounts to your website so your audience can keep up to date.</p>
                  </div>
                  <div className="ui column aligned">
                    <h3><i className="wrench check icon" />Website management</h3>
                    <p>If you already own a website and it needs maintenance, I can help. I can do regular updates to your website if required. I can offer suggestions to improve your SEO, layout or anything else that may improve user experience for you or your audience/customers.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="iconContainer">{skillList()}</div> */}
          </div>
          <div content={"About Me"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight">
              <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
                <h2 className="header">About Me</h2>
                <p>Hi, I'm Dominykas, currently a web developer working at Covance.</p>
                <p>I've been developing websites since 2016, learning everything from design, UI, cross-browser compatibility, responsive design, animation, APIs, CMS frameworks, data visualisation, SEO, JQuery, PHP, ES6, ReactJS, Redux, Node.js, and more.</p>
              </div>
              {/* <div className="iconContainer">{skillList()}</div> */}
            </div>
          </div>
          <div content={"Portfolio"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight portfolioPage">
              <div className="column middle aligned sixteen wide mobile twelve wide tablet eight wide computer">
                <div className="row middle aligned"><h2>Portfolio</h2></div>
                <div className="row middle aligned">
                  <h3>Websites</h3>
                  <div><a target="_blank" className="delayAnimation800 animated fadeIn" href="https://www.psychicfuture.com/">Psychic Future</a></div>
                  <div><a target="_blank" className="delayAnimation1000 animated fadeIn" href="https://thepcsurgeon.co.uk/">The PC Surgeon</a></div>
                  <div><a target="_blank" className="delayAnimation1200 animated fadeIn" href="https://hashashinsgallery.com/">The Hashashins Club (coming soon)</a></div>
                </div>
                <div className="row middle aligned">
                  <h3>Projects</h3>
                  <div><a target="_blank" className="delayAnimation1400 animated fadeIn" href="https://dominykas.dev/projects/crypto_app/">Crypto tracking web app (React-Redux)</a></div>
                  <div><a className="delayAnimation1600 animated fadeIn" href="">Social media project (in development)</a></div>
                  <div><a target="_blank" className="delayAnimation1800 animated fadeIn" href="https://codepen.io/domdev/">CodePen Mini Projects</a></div>
                </div>
              </div>
            </div>
          </div>
          <div content={"Contact"} className="section">
            {/* <div className="ui grid twelve fullScreenHeight">
            <div className="ui center aligned grid container">
              <h2 className="ui header middle">Contact Me</h2>
            </div>
            <div className="ui center aligned eight grid row">            
              <a target="_blank" className="ui grid four wide middle column" href="https://www.linkedin.com/in/dominykas-genys-bb466795/">
                <i className="linkedin icon massive"></i>
              </a>
              <a target="_blank" className="ui grid four wide middle column" href="mailto:contact@dominykas.dev">
                <i className="mail icon massive"></i>
              </a>
              <a target="_blank" className="ui grid four wide middle column" href="https://github.com/dominykasdev">
                <i className="github icon massive"></i>
              </a>
            </div>
          </div>      */}
            <div className="ui grid centered aligned column fullScreenHeight contactPage">
              {/* <div className="row middle aligned eight wide">
              <h2 className="ui row middle">Contact Me</h2>
            </div> */}
              <div className="column middle aligned equal width grid">
                <h2 className="ui row middle aligned sixteen wide">Contact Me</h2>
                <a target="_blank" className="column" href="https://www.linkedin.com/in/dominykas-genys-bb466795/">
                  <i className="linkedin icon massive yellow animated"></i>
                </a>
                <a target="_blank" className="column" href="mailto:contact@dominykas.dev">
                  <i className="mail icon massive yellow animated"></i>
                </a>
                <a target="_blank" className="column" href="https://codepen.io/domdev/">
                  <i className="codepen icon massive yellow animated"></i>
                </a>
                <a target="_blank" className="column" href="https://github.com/dominykasdev">
                  <i className="github icon massive yellow animated"></i>
                </a>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      )
    }} />
);

export default FullpageWrapper;
