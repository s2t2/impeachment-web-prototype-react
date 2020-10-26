import React, { PureComponent } from 'react'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Cell} from 'recharts'

import {formatNumber} from "../../Utils/Decorators"
import Spinner from "../../Spinner"
import {legendRed, legendBlue} from '../../Utils/Colors'

//import cachedData from './data'
const cachedData = [
    {"name": "Community 0", "bot_count": 571, "barFill": legendBlue},
    {"name": "Community 1", "bot_count": 110, "barFill": legendRed}
]

export default class BotCommunitiesHistogram extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
    }

    render() {
        const chartTitle = `Bot Communities (n communities = 2)`

        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            var barFill = "#ccc"
            console.log("DATA", data, "FILL", barFill)

            spinIntoChart = (
                <span>
                    <Card.Text className="app-center">
                        {chartTitle}
                    </Card.Text>

                    <div style={{width: "100%", height: 350}}>
                        <ResponsiveContainer>
                            <BarChart data={data} layout="horizontal"
                                margin={{top: 0, right: 5, left: 5, bottom: 20}}
                                barSize={150}
                                barCategoryGap={10}
                                >

                                <YAxis type="number" dataKey="bot_count" domain={[0, 700]}>
                                    <Label value="Bot Count" position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="name" tick={{fontSize: 14}}>
                                    <Label value="Community Label" position="insideBottom" offset={-15}/>
                                </XAxis>
                                <CartesianGrid strokeDasharray="1 1"/>
                                <Tooltip
                                    //content={this.tooltipContent}
                                    cursor={{fill: 'transparent', stroke:'#000'}}
                                    //cursor={false}
                                    //position={{ y:-5 }}
                                    labelFormatter={this.tooltipLabelFormatter}
                                    formatter={this.tooltipFormatter}
                                />

                                {/*
                                <Bar dataKey="bot_count" fill={barFill} onClick={this.handleBarClick}
                                    //label={{position: "insideTop", offset: 15}}
                                    label={{position: "top", offset:10}}
                                    //label={<BarLabel/>}
                                />
                                */}
                                <Bar dataKey="bot_count" fill="#ccc" onClick={this.handleBarClick} label={{position: "top", offset:10}}>
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={entry["bot_count"]} fill={entry["barFill"]}/>
                                        ))
                                    }
                                </Bar>

                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </span>
            )
        }
        return (
            <span>
                <Card>
                    <Card.Body>
                        {spinIntoChart}
                    </Card.Body>
                </Card>
            </span>
        );
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        //this.fetchData()
        setTimeout(function(){
            this.setState({parsedResponse: cachedData})
        }.bind(this), 1000) // let you see the spinner
    }

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
    }

    tooltipLabelFormatter(value){
        //console.log("LABEL FORMATTER", value)
        return value
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [formatNumber(value), "Bots"]
    }



}
