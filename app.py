from flask import Flask, request, jsonify, render_template, redirect
from werkzeug.security import generate_password_hash, check_password_hash
from .database import create_user, get_user

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = request.get_json(force=True)
        full_name = data['Full name']
        email = data['Email']
        password = data['Password']  # You should hash the password before storing it
        phone = data['Phone number']

          # Create a new user document
        userdata = {
            "Full name": full_name,
            "Email": email,
            "Password": password, # You should hash the password before storing it
            "Phone number": phone
        }
        user_id = create_user(userdata)

         # Redirect to a success page or show a success message
        return redirect('/dashboard')

    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/sign_in')
def sign_in():
    return render_template('sign_in.html')



@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')



if __name__ == '__main__':
    app.run(debug=True)
