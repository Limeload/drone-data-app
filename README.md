# Drone Flight Data Analysis

This project implements a frontend and backend system for querying and displaying drone flight data. The system features a simple interface that allows users to interact with drone metadata, query specific data, and receive relevant responses.

## Overview
1. Frontend: Developed using Angular and TypeScript.
2. Backend: Developed using Python Flask to handle user queries.

## Features Implemention

| **Feature**                               | **Description**                                                                                                    | **Estimated Time** | **Status**       | **Notes**                                      |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------|------------------|------------------------------------------------|
| **1. Frontend Setup (Angular)**           | Set up Angular project, install dependencies, and configure basic structure.                                       | 5 minutes          | *Completed*          | Quick setup for frontend structure.           |
| **2. Backend Setup (Flask)**              | Set up Flask project, install dependencies, and configure basic structure for API.                                | 5 minutes          | *Completed*          | Quick setup for backend structure.            |
| **3. Display Drone Data**                 | Create a simple table to display essential drone data (e.g., image ID, timestamp, altitude, battery level).        | 20 minutes         | Pending          | Focus on showing a few key fields.            |
| **4. Query Input Field**                  | Implement an input field where users can type simple queries related to drone data.                                | 15 minutes         | Pending          | Simple text input for queries.                |
| **5. Mock AI Response**                   | Implement mock responses based on the drone data, return data such as altitude, battery level, etc.                | 20 minutes         | Pending          | Hardcode responses for now.                   |
| **6. API Setup (Flask)**                  | Set up Flask backend with `/query` endpoint to handle user queries.                                                | 20 minutes         | Pending          | Use mock logic for queries.                   |
| **7. Query Handling (Frontend + Backend)**| Connect frontend input to backend and display the mock response.                                                   | 20 minutes         | Pending          | Minimal communication with Flask.             |
| **8. Basic Styling**                      | Make the UI responsive with minimal CSS adjustments.                                                               | 10 minutes         | Pending          | Focus on mobile-first responsiveness.         |
| **9. Documentation**                      | Provide basic instructions for running both frontend and backend locally.                                         | 10 minutes         | Pending          | Simple setup instructions.                    |

### Total Estimated Time: **2 hours**

*If time permits, Docker can be used to containerize both the frontend and backend, simplifying deployment and ensuring environment consistency. This will be implemented after core functionality if time allows.*
