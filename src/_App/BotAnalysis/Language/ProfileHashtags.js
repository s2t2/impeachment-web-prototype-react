import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
//import {orderBy} from 'lodash'

import Spinner from "../../Spinner"
import {formatNumber} from "../../Utils/Decorators" // bigNumberLabel
import {legendBlue, legendRed} from "../../Utils/Colors"
//import HashtagsBarChart from "./HashtagsBarChart"
import {topTags0, topTags1} from "../../../data/bot_opinion_communities/top_profile_tags"

//var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

const HashtagsBarChart = function(props){
    const {data, barFill} = props
    console.log("DATA", data, "FILL", barFill)

    var chartContainerStyle = { width: "100%", height: 500}
    var chartMargins = {top: 5, right: 30, left: 150, bottom: 5}

    return (
        <div style={chartContainerStyle}>
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={chartMargins}>
                    <XAxis type="number" dataKey="bot_count" tickFormatter={formatNumber}/>
                    <YAxis type="category" dataKey="tag" />
                    <CartesianGrid strokeDasharray="1 1"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="bot_count" fill={barFill}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default class ProfileHashtags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoCharts = <Spinner/>
        if (this.state.parsedResponse) {
            //var tags = this.state.parsedResponse;
            //var community0 = orderBy(tags.filter(function (t) {return t["community_id"] === 0}), "pct", "desc")
            //var community1 = orderBy(tags.filter(function (t) {return t["community_id"] === 1}), "pct", "desc")

            var data0 = this.state.parsedResponse.data0
            var data1 = this.state.parsedResponse.data1

            spinIntoCharts = <span>
                {/*
                <h4 className='app-center'>Top Hashtags in Bot Profiles</h4>
                */}
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Top Hashtags in Anti-Trump Bot Profiles
                                </Card.Text>

                                 <HashtagsBarChart data={data0} barFill={legendBlue} metric="bot_count" //tickFormatter={bigNumberLabel}
                                 />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Top Hashtags in Pro-Trump Bot Profiles
                                </Card.Text>

                                <HashtagsBarChart data={data1} barFill={legendRed} metric="bot_count" //tickFormatter={bigNumberLabel}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </span>
        }

        return (
            <Container fluid>
                {spinIntoCharts}
            </Container>
        );
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        this.fetchData()
    }

    fetchData() {
        //var requestUrl = `${API_URL}/api/v0/top_profile_tags?limit=20`
        //console.log("REQUEST URL:", requestUrl)
        //fetch(requestUrl).then(function (response) {
        //    // console.log("RAW RESPONSE", "STATUS", response.status, response.statusText,
        //    // response.ok, "HEADERS", response.headers, response.url)
        //    return response.json()
        //})
        //.then(function (json) {
        //    console.log("FETCHED", json.length, "ITEMS")
        //    this.setState({parsedResponse: json})
        //}.bind(this))
        //.catch(function (err) {
        //    console.error("FETCH ERR", err)
        //})

        this.setState({parsedResponse: {"data0": topTags0, "data1": topTags1}})
    }

}
