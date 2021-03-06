import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import EbookFree from '../TBook/EbookFree';
import ListForm from '../ListForm';
import Home from '../TBook/Home';
import Login from '../Login-firebase/Login';
import EbookFree2 from '../TBook/EbookFree2';
import EbookFree3 from '../TBook/EbookFree3';
import ChungKhoan from '../TBook/ChungKhoan';
import KDKK from '../TBook/KDKK';
import Widget from '../TBook/Widget';
import WidgetFolow from '../TBook/WidgetFolow';
import PTcoban from '../TBook/PTcoban';
import Fibonanci from '../TBook/PT-kithuat/Fibonanci';
import NenNhat from '../TBook/PT-kithuat/NenNhat';
import Eliot from '../TBook/PT-kithuat/Eliot';
import FiboRetracement from '../TBook/PT-kithuat/FiboRetracement';
import FiboExtention from '../TBook/PT-kithuat/FiboExtention';
import NenNhatDaoChieu from '../TBook/PT-kithuat/NenNhatDaoChieu';
import NenNhatTiepDien from '../TBook/PT-kithuat/NenNhatTiepDien';
import VideoPT from '../TBook/PT-kithuat/VideoPT';
import VideoPTBoling from '../TBook/PT-kithuat/VideoPTBoling';
import VideoPTFibo from '../TBook/PT-kithuat/VideoPTFibo';
import VideoPTNangCao from '../TBook/PT-kithuat/VideoPTNangCao';

export default class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route  path="/Eliot" component={Eliot} />

                    <Route  path="/Fibonanci" component={Fibonanci} />
                    <Route  path="/FiboRetrace" component={FiboRetracement} />
                    <Route  path="/FiboExtention" component={FiboExtention} />

                    <Route  path="/nen-nhat" component={NenNhat} />
                    <Route  path="/nendaochieu" component={NenNhatDaoChieu} />
                    <Route  path="/nentiepdien" component={NenNhatTiepDien} />

                    <Route  path="/videoNenNhat" component={VideoPT} />
                    <Route  path="/videoBoLing" component={VideoPTBoling} />
                    <Route  path="/videoFiBo" component={VideoPTFibo} />
                    <Route  path="/videoNangCao" component={VideoPTNangCao} />

                    <Route  path="/ptconban" component={PTcoban} />
                    <Route  path="/widgetfolow" component={WidgetFolow} />
                    {/* <Route  path="/widget" component={Widget} /> */}
                    <Route  path="/list-form" component={ListForm} />
                    <Route  path="/Ebook-free" component={EbookFree} />
                    <Route  path="/Ebook-free2" component={EbookFree2} />
                    <Route  path="/Ebook-free3" component={EbookFree3} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/ChungKhoan" component={ChungKhoan} />
                    <Route  path="/" component={KDKK} />     
                </Switch>
            </div>
            
        )
    }
}
