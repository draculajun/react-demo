import IndustryApi from "../api/industry";
import {Component} from "react";
import Menu from "../components/index/Menu";
import './index.css'

export class Index extends Component {

    state = {
        menuInfoList: [],
    }

    componentDidMount() {
        IndustryApi.getIndustryAndIndus().then(res => {
            this.setState({menuInfoList: res.data.List})
        })
    }

    render() {
        return (
            <div className='indexContainer'>
                <Menu className='menu' menuInfoList={this.state.menuInfoList}></Menu>
                <div className="rollPic">container</div>
            </div>
        )
    }
}