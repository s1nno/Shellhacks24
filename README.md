Smart Scholar is your one-stop solution for quick and smart tutoring, designed to help users extract questions from images and get step-by-step explanations or direct answers. Built for ShellHacks 2024 by Hayden Sandler, Thalia Castro, and Brandon Gerber, this application uses image-to-text conversion and AI-powered APIs to provide a seamless educational experience.

Features
Image to Text Conversion: Upload an image containing a question or text, and the app extracts the text using the API Ninjas Image-to-Text API.
AI-Powered Explanations: Get an explanation on how to approach the extracted question without giving away the answer, powered by OpenAI's GPT-3.5-turbo.
AI-Powered Answers: Receive the correct answer along with an explanation on how it was derived.
Technologies Used
React: Front-end JavaScript framework for building a dynamic user interface.
Axios: Promise-based HTTP client for making API requests.
API Ninjas Image-to-Text API: Extracts text from images.
OpenAI API: Provides detailed explanations and answers using GPT-3.5-turbo.
Installation
Clone this repository:

bash
Copy code
git clone https://github.com/yourusername/smart-scholar.git
Navigate to the project directory:

bash
Copy code
cd smart-scholar
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root of your project with the following environment variables:

plaintext
Copy code
REACT_APP_NINJA_API_KEY=your_ninja_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
Run the app locally:

bash
Copy code
npm start
Usage
Upload an image with a question.
The app extracts the text from the image.
You can choose to either:
Get an Explanation: Provides an approach for solving the question.
Get Answer and Explanation: Supplies the answer and explains how it was solved.
Demo
[Add a link to your demo or video walkthrough]

Team
Brandon Gerber
Hayden Sandler
Thalia Castro
