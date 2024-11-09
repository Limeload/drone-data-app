from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)

DATASET_DIR = os.path.join(os.path.dirname(__file__), 'datasets')

genai.configure(api_key=os.environ["GOOGLE_GENAI_API_KEY"])

@app.route('/api/datasets', methods=['GET'])
def list_datasets():
    datasets = [f for f in os.listdir(DATASET_DIR) if f.endswith('.json')]
    return jsonify({"datasets": datasets})

@app.route('/api/dataset/<filename>', methods=['GET'])
def get_dataset(filename):
    try:
        if filename in os.listdir(DATASET_DIR):
            return send_from_directory(DATASET_DIR, filename)
        else:
            return jsonify({"error": "File not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/query', methods=['POST'])
def query():
    data = request.json
    prompt_text = data.get('query')

    try:
        model = genai.GenerativeModel(model_name='gemini-1.5-flash')
        response = model.generate_content(query=prompt_text)
        return jsonify({'response': response.text})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
