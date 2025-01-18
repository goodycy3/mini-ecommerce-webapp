from flask import Flask, render_template, request, redirect # type: ignore

app = Flask(__name__)

@app.route('/')
def index():
    # Render the front-end HTML file (index.html)
    return render_template('index.html')

@app.route('/about')
def about():
    # Render the About Us page
    return render_template('about.html')

@app.route('/contact')
def contact():
    # Render the Contact Us page
    return render_template('contact.html')

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    print(f"Received contact form submission from {name} ({email}): {message}")
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
