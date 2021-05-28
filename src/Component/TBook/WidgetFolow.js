import React, { Component } from 'react';
import TradingViewWidget, { Themes   } from 'react-tradingview-widget';

export default class WidgetFolow extends Component {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js'
        script.async = true;
        script.innerHTML = /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
        this._ref.current.appendChild(script);
    }
    render() {
        return (
            <div className="application">
             <TradingViewWidget
                symbol="NASDAQ"
                theme={Themes.DARK}
                locale="vi_VN"
                hotlist="true"
                details="true"
                calendar="true"
                withdateranges="true"
                timezone="exchange"
                allow_symbol_change="true"
                width="1349"
                
            />
            <div class="tradingview-widget-container" ref={this._ref}>
                <div class="tradingview-widget-container__widget"></div>
            </div>
        </div>
        )
    }
}