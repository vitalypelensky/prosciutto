import React, {Component} from 'react';
import Styles from './styles.module.css'
import Content from "../../elements/content/Content";
import Header from "../../../components/elements/header/Header";
import Footer from "../../../components/elements/footer/Footer";
import {contacts} from "../../../model/model";

const { wrapper } = Styles

class Main extends Component {
    state = {scrollValue: 0};

    scrollToElementHandler = (elementId) => {
        let scrolledElement = document.getElementById(elementId)
        scrolledElement.scrollIntoView({ behavior: "smooth"});
    }

    scrollHandler = (e) => {
        let scrollValue = e.target.scrollTop
        this.setState({scrollValue: scrollValue})
    }

    render() {
        return (
            <div className={wrapper} onScroll={this.scrollHandler}>
                <Header scrollValue={this.state.scrollValue}
                        onScrollToElement={this.scrollToElementHandler}/>
                <Content onScrollToElement={this.scrollToElementHandler}/>
                <Footer contacts={contacts}/>
            </div>
        );
    }
}

export default Main;
