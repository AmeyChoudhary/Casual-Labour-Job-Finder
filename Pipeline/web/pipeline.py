# generates the welcome audio file 
from Pipeline_support.tts import func_tts

welcome = "welcome"
hello = "Hi! Please choose your preferred language"

func_tts(hello,"English",welcome, "./app/static/")