from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Welcome to my Flask application"


@app.route("/about")
def about():
    return "This is the About page"


@app.route("/contact")
def contact():
    return "Contact us"


if __name__ == "__main__":
    app.run(debug=True)