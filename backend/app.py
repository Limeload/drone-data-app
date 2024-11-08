from flask import Flask, jsonify, send_from_directory
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATASET_DIR = os.path.join(os.path.dirname(__file__), 'datasets')


# list of datasets
@app.route('/api/datasets', methods=['GET'])
def list_datasets():
    datasets = [f for f in os.listdir(DATASET_DIR) if f.endswith('.json')]
    return jsonify({"datasets": datasets})

# filter list of datasets
@app.route('/api/dataset/<filename>', methods=['GET'])
def get_dataset(filename):
    try:
        if filename in os.listdir(DATASET_DIR):
            return send_from_directory(DATASET_DIR, filename)
        else:
            return jsonify({"error": "File not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
