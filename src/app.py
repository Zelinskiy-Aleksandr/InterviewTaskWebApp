from flask import Flask, flash
from flask import render_template, request

from forms import NetworkForm

app = Flask(__name__)
app.secret_key = "super secret key"



@app.route("/")
def index():
    return render_template('index.html')

@app.route("/network_task", methods=['GET', 'POST'])
def network_task():
    form= NetworkForm(request.form)
    if request.method == 'POST' and form.validate():
        if form.IP.data == '127.0.0.1':
            return render_template('internal_error.html')
        flash('Data was saved successfully')
    return render_template('network_task.html', form=form)

@app.route("/home_content")
def home_content():
    return render_template('home_content.html')




