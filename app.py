from flask import Flask, request, jsonify, render_template
from .database import create_user, get_user

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/tips')
def tips():
    return render_template('tips.html')

@app.route('/brands')
def brands():
    return render_template('brands.html')

@app.route('/materials')
def materials():
    return render_template('materials.html')

@app.route('/diy')
def diy():
    return render_template('diy.html')

@app.route('/styling')
def styling():
    return render_template('styling.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/sign_in')
def sign_in():
    return render_template('sign_in.html')

@app.route('/sign_up')
def sign_up():
    return render_template('sign_up.html')

if __name__ == '__main__':
    app.run(debug=True)
