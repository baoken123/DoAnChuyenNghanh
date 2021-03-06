import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default class Widget extends Component {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
        script.async = true;
        script.innerHTML = this._ref.current.appendChild(script);
    }
    render() {
        return (
            <div className="application">
             <TradingViewWidget
                symbol="NASDAQ:AAPL"
                theme={Themes.DARK}
                locale="vi_VN"
            />
            <div class="tradingview-widget-container" ref={this._ref}>
                <div class="tradingview-widget-container__widget"></div>
            </div>
        </div>
        )
    }
}
