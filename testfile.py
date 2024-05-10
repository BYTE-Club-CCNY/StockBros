from flask import Flask, jsonify, request
import worldnewsapi

app = Flask(__name__)

@app.route('/api/news')
def get_news():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')

    configuration = worldnewsapi.Configuration()    
    configuration.api_key['apiKey'] = '4d04daab28474997a5a94bf752fd3c76' 
    api_instance = worldnewsapi.NewsApi(worldnewsapi.ApiClient(configuration))

    try:
        sn_response  = api_instance.search_news(text="tornado", 
                                                number=1, 
                                                source_countries="us", 
                                                earliest_publish_date=start_date, 
                                                latest_publish_date=end_date,
                                                sort="publish-time", 
                                                sort_direction="desc")
        news_data = [{'title': article.title, 'url': article.url} for article in sn_response.news]
        return jsonify(news_data)

    except worldnewsapi.ApiException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)