# Drone Flight Data Analysis

This project implements a frontend and backend system for querying and displaying drone flight data. The system features a simple interface that allows users to interact with drone metadata, query specific data, and receive relevant responses.

## Overview
1. Frontend: Developed using Angular and TypeScript.
2. Backend: Developed using Python Flask to handle user queries.
3. AI Integration: OpenAI service is used to simulate AI-driven query results

## Features Implemention

1. Frontend (Angular + TypeScript)
- Drone Data Display:
Implemented a responsive user interface using Angular.
Data is displayed in a table format, showcasing the drone metadata (image ID, timestamp, altitude, battery level, etc.).

- Query Input: Users can enter natural language queries like "What is the altitude of the second image?" or "What is the battery level of the drone during the last image?" into an input box.

- Response Display: The app shows the OpenAI response in a user-friendly manner.

- Responsive Design: The UI is designed to be mobile-friendly and adjusts to various screen sizes.

2. Backend (Python Flask)
- API Endpoints: Implemented a Flask API with a /query endpoint.The API receives a query from the frontend and returns a mock response.

- AI Response Logic: Simulated the AI service by creating basic logic to return relevant data based on the user’s query (e.g., fetching the altitude, battery level, etc., from the provided dataset).

- Dataset: Integrated the provided dataset of drone flight images, containing information such as altitude, battery level, image tags, and timestamps.

3. AI Integration (Mock)
- Queries like *"What is the altitude of the second image?"* or *"What is the battery level of the drone during the last image?"* are processed by basic logic and returned as mock data.

# Instructions

### Prerequisites
- Node.js: Required to run the Angular frontend.
- Python 3.x: Required to run the Flask backend.

**Frontend Setup (Angular)**
1. Clone the repository:

```
git clone git@github.com:Limeload/drone-data-app.git
cd drone-data-app/frontend
```
2. Install dependencies:

```
npm install
```

3. Run the Angular app:

```
ng serve
```
*Open the browser and navigate to http://localhost:4200.*

**Backend Setup (Flask)**
1. Navigate to the backend folder:

```
cd drone-data-app/backend
```

3. Set up a virtual environment:

```
python3 -m venv venv
source venv/bin/activate
# On Windows, use `venv\Scripts\activate`
```
4. Install dependencies:

```
pip install -r requirements.txt
```

5. Run the Flask API:
```
flask run
```
*The backend should be accessible at http://localhost:5000.*

| **Feature**                               | **Description**                                                                                                    | **Estimated Time** | **Status**       | **Notes**                                      |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------|------------------|------------------------------------------------|
| **1. Frontend Setup (Angular)**           | Set up Angular project, install dependencies, and configure basic structure.                                       | 5 minutes          | *Completed*          | Quick setup for frontend structure.           |
| **2. Backend Setup (Flask)**              | Set up Flask project, install dependencies, and configure basic structure for API.                                | 5 minutes          | *Completed*          | Quick setup for backend structure.            |
| **3. Display Drone Data**                 | Create a simple table to display essential drone data (e.g., image ID, timestamp, altitude, battery level).        | 20 minutes         | *Completed*          | Focus on showing a few key fields.            |
| **4. Query Input Field**                  | Implement an input field where users can type simple queries related to drone data.                                | 15 minutes         | *Completed*           | Simple text input for queries.                |
| **5. Mock AI Response**                   | Implement mock responses based on the drone data, return data such as altitude, battery level, etc.                | 20 minutes         | *Completed*          | Hardcode responses for now.                   |
| **6. API Setup (Flask)**                  | Set up Flask backend with `/query` endpoint to handle user queries.                                                | 20 minutes         | *Completed*           | Use mock logic for queries.                   |
| **7. Query Handling (Frontend + Backend)**| Connect frontend input to backend and display the mock response.                                                   | 20 minutes         | *Completed*          | Minimal communication with Flask.             |
| **8. Basic Styling**                      | Make the UI responsive with minimal CSS adjustments.                                                               | 10 minutes         | *Completed*           | Focus on mobile-first responsiveness.         |
| **9. Documentation**                      | Provide basic instructions for running both frontend and backend locally.                                         | 10 minutes         | *Completed*           | Simple setup instructions.                    |

### Total Estimated Time: **2 hours**

*If time permits, Docker can be used to containerize both the frontend and backend, simplifying deployment and ensuring environment consistency. This will be implemented after core functionality if time allows.*
