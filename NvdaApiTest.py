import worldnewsapi

# Init Newsapi ############################
configuration = worldnewsapi.Configuration()    
# Replace with your API Key
configuration.api_key['apiKey'] = '4d04daab28474997a5a94bf752fd3c76' 
# Create an instance of the API class
api_instance = worldnewsapi.NewsApi(worldnewsapi.ApiClient(configuration))

print("===================================strt============================================")

start_date ="2024-01-01" #input("Enter start date in YYYY-MM-DD format:")
end_date = "2024-05-01"   #input("Enter end date in YYYY-MM-DD format:")

try:
    sn_response  = api_instance.search_news(text="nvidia", 
                                            number=5, 
                                            source_countries="us,gb", 
                                            earliest_publish_date=start_date, 
                                            latest_publish_date=end_date,
                                            sort="publish-time", 
                                            sort_direction="desc",
                                            entities="ORG:Nvidia"
                                            #news_sources = ""
                                            )

    print ("Number of results: "+str(sn_response.available))
    print("=====================================try==========================================")
except worldnewsapi.ApiException as e:
    print("Exception when calling NewsApi->search_news: %s\n" % e)
    print("===================================except============================================")
    exit(-1)

for article in sn_response.news:
    print ("Title:"+article.title+" Pub-Date: "+str(article.publish_date)+" URL: "+article.url)
    print("====================================for===========================================")
    
    ## "financialpost.com,CNBC.com,cnn.com,bbc.co.uk,vox.com,yahoo.com,nypost.com,reuters.com,foxnews.com,washingtonpost.com"