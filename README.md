# CoviBot

## About 
[------------]


## Invite Bot
[--------------]


## Website
[------------]


## CoWin API
[CoWin API](https://github.com/cowinapi/developer.cowin) is a public api hosted by CoWin to get vaccine information in different parts of India.


## Dialogflow
![flowchar.png](https://lh3.googleusercontent.com/f0bamKZBdTkGXLH4vbFSfPpAevqg1NPglW7g1JIuWaqoDjX5PysrXtoCs8i2uQGg1KPnjyVn2p-pibDNra311qDzPhgZuZRUIuUCG15SjQZjRfC3UgPMMysm-QFGlTP5PfFkGq2qCrE)

We have used dialogflow as our NLP agent to process the user queries from the telegram bot and produce intents from those queries so that we can reply with the relevent information to the user back.

For instance, vaccine information queries from the user will be processed and matched with "vaccine" intent which is pre-defined by us and dialgoflow will call a post request to our server hosted in azure using webhook feature, our server using the pincode in the query calls the CoWin api to get the vaccine information in that region and sends it back to the dialogflow as fulfillment and finally dialogflow will send that information back to the user.

## Dependencies
[------------]


## Deployment
[------------]
