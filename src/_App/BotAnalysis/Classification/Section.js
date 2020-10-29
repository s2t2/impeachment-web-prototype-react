
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import BotProbabilitiesHistogram from './Bar'
import BotsMostActiveTable from './BotsMostActive'

export default function BotClassificationSection() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Detection</h3></Card.Title>

                    <h4 id="retweet-analysis">Retweet Analysis</h4>
                    <Card.Text>
                        The <a href="/about">previous bot detection research</a> suggests bots exhibit the primary behavior of retweeting humans at high frequencies.
                    </Card.Text>

                    <Card.Text>
                        We examined the retweets for each day in our <a href="/collection-timeline">collection period</a> to identify which users retweeted with sufficient frequency to differentiate them from humans. Based on these retweet frequencies, our bot classification model assigned each retweeter a "daily bot probability score" from <code>0</code> (not bot) to <code>1</code> (bot). An example distribution of daily bot probability scores is below.
                    </Card.Text>
                    {/*
                        <img src={exampleDailyBotProbabilities} alt="a histogram depicting bot probabilities" className="img-fluid"/>
                    */}
                    <BotProbabilitiesHistogram date="2020-02-01"/>

                    <h4 id="classification-results">Classification Results</h4>
                    <Card.Text>
                        After assigning daily bot probability scores for all users, we identified which users had at least one daily probability greater than 80%, and labeled these users as bots. In total, this method yielded 24,150 bots, which represents 0.67% of the total users and 0.87% of the total retweeters in our dataset.
                    </Card.Text>

                    <Card.Text>
                        Despite only representing less than 1% of all users, these bots were responsible for 20.9 million tweets (31% of the total tweets) and 20.1 million retweets (36% of the total tweets) in our dataset.
                    </Card.Text>


                    <h4 id="most-active-bots">Most Active Bots</h4>
                    <Card.Text>
                        The table below presents the top fifteen most active bots in our dataset.
                    </Card.Text>

                     <BotsMostActiveTable/>

                    <Card.Text>
                        NOTE: some of these accounts have since been deleted or suspended by Twitter.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
