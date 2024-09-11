from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, session
from flask_bcrypt import Bcrypt
from flask_login import login_required, login_user, current_user
from . import create_app
from werkzeug.security import generate_password_hash, check_password_hash
from .models import create_user, get_user, User
from .login_manager_setup import login_manager



app = create_app('development')

login_manager.init_app(app)



bcrypt = Bcrypt(app)

@login_manager.user_loader
def load_user(user_id):
    return User.objects(id=user_id).first()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = request.get_json(force=True)
        full_name = data['Full name']
        email = data['Email']
        password = data['Password']
        phone = data['Phone number']

        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

          # Create a new user document
        userdata = {
            "fullname": full_name,
            "email": email,
            "password_hash": password_hash, # You should hash the password before storing it
            "phone_number": phone
        }
        user_id = create_user(userdata)

         # Redirect to a success page or show a success message
        return redirect(url_for('login'))
    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        remember_me = request.form.get('remember_me', False)
        user = User.objects(email=email).first()
        if user and bcrypt.check_password_hash(user.password_hash, password):
            login_user(user, force=True)
            session['logged_in'] = True
            session['user_email'] = email
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard.html'))
        else:
            flash('Invalid username or password.')
    return render_template('login.html')

@app.route('/about')
@login_required
def about():
    return render_template('about.html')

'''
@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')
    if current_user.is_authenticated:
        return render_template('dashboard.html')
    else:
        return redirect(url_for('login'))
'''



if __name__ == '__main__':
    app.run(debug=True)
