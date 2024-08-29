from flask import Flask, request, jsonify, render_template
from .database import create_user, get_user

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/sign_in')
def sign_in():
    return render_template('sign_in.html')

@app.route('/sign_up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        # Extract form data
        username = request.form.get('Full name')
        email = request.form.get('Email')
        password = request.form.get('Password')
        phone_number = request.form.get('Phone number')

        # Create a new user document
        userdata = {
            "Full name": username,
            "Email": email,
            "Password": password, # You should hash the password before storing it
            "Phone number": phone_number
        }
        user_id = create_user(userdata)

        return jsonify({"message": "User created successfully"}), 201

    # Render the signup page for GET requests
    return render_template('sign_up.html')

    @app.route('/dashboard', methods=['GET', 'POST'])
    def dashboard():
        return render_template('dashboard.html')



if __name__ == '__main__':
    app.run(debug=True)
