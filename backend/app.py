from flask import Flask, request, jsonify
from flask_cors import CORS
from threading import Thread
import pyttsx3
import datetime
import speech_recognition as sr
import wikipedia
import webbrowser
import os
import smtplib

engine = pyttsx3.init('sapi5')

voices= engine.getProperty('voices') #getting details of current voice

engine.setProperty('voice', voices[1].id)
app = Flask(__name__)
CORS(app)

def speak(audio):
    def tts():
        engine = pyttsx3.init()  # Reinitialize within the thread
        engine.say(audio)
        engine.runAndWait()
    Thread(target=tts).start()  # Run TTS in a separate thread to avoid blocking

@app.route('/', methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # Get JSON data from the frontend
        data = request.json
        return jsonify({"message": "Data received successfully!", "data": data})
    return "Hello, World!"


@app.route('/jarvis')
def jarvis():
    speak("Hello, my name is Jarvis. I am built on top of Python. How can I help you?")
    return "Hello, World! I'm a newborn Jarvis!"

if __name__ == '__main__':
    app.run(debug=True)
