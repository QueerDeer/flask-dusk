from flask import Flask
from flask import render_template
import os

app = Flask(__name__)


@app.route('/')
def hello():
    message = "Hello, Helen"
    return render_template('index.html', message=message)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

