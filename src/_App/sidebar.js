
//import React from 'react'

import TweetCollection from './TweetCollection/Page'
import CollectionTimeline from './TweetCollection/Timeline/Page'
import CollectionTopics from './TweetCollection/Topics/Page'
import CollectionResults from './TweetCollection/Results/Page'

import BotAnalysis from './BotAnalysis/Page' // SectionIndex
import BotClassification from './BotAnalysis/Classification/Page'
import BotCommunities from "./BotAnalysis/Communities/Page"
import BotActivity from './BotAnalysis/Activity/Page'
import BotBeneficiaries from './BotAnalysis/Beneficiaries/Page'
import BotLanguage from './BotAnalysis/Language/Page'
import BotImpact from './BotAnalysis/Impact/Page'

import OpinionAnalysis from './OpinionAnalysis/Page' // SectionIndex
import OpinionModels from './OpinionAnalysis/Models/Page'
import UserOpinions from './OpinionAnalysis/User/Page'
import TopUserOpinions from './OpinionAnalysis/TopUsers/Page'

var sidebar = [
    {
        "key": "bot-analysis",
        "title": "Bot Analysis",
        "component": BotAnalysis,
        "sections": [
            {"key": "bot-impact",           "title": "Bot Impact",          "component": BotImpact},
            {"key": "bot-beneficiaries",    "title": "Bot Beneficiaries",   "component": BotBeneficiaries},
            {"key": "bot-language",         "title": "Bot Language",        "component": BotLanguage},
            {"key": "bot-activity",         "title": "Bot Activity",        "component": BotActivity},
            {"key": "bot-communities",      "title": "Bot Communities",    "component": BotCommunities},
            {"key": "bot-detection",        "title": "Bot Detection",      "component": BotClassification}
        ]
    },
    {
        "key": "opinion-analysis",
        "title": "Opinion Analysis",
        "component": OpinionAnalysis,
        "sections": [
            {"key": "top-user-opinions",    "title": "Top User Opinions",   "component": TopUserOpinions},
            {"key": "user-opinions",        "title": "User Opinions",       "component": UserOpinions},
            {"key": "opinion-models",       "title": "Opinion Models",      "component": OpinionModels},
        ]
    },
    {
        "key": "tweet-collection",
        "title": "Tweet Collection",
        "component": TweetCollection,
        "sections": [
            {"key": "collection-results",       "title": "Collection Results",  "component": CollectionResults},
            {"key": "collection-timeline",      "title": "Collection Timeline",  "component": CollectionTimeline},
            {"key": "collection-topics",        "title": "Collection Topics",  "component": CollectionTopics},
        ]
    },

]

export default sidebar
