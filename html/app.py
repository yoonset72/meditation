from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

RAPIDAPI_KEY = '171cf50e32mshcbf7ea8a75b569ap1c9de8jsn91d64dbc0942'
RAPIDAPI_HOST = 'therapy-chatbot1.p.rapidapi.com'

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message')
    if not message:
        return jsonify({'error': 'No message provided'}), 400

    url = f"https://{RAPIDAPI_HOST}/get/{message}"

    headers = {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
    }

    try:
        response = requests.get(url, headers=headers)   
        response.raise_for_status()
        data = response.json()
        reply = data.get('response', str(data))
        return jsonify({'reply': reply})
    except Exception as e:
        print(e)
        return jsonify({'error': 'API request failed'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
