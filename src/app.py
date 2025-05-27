from flask import Flask, flash
from flask import render_template, request

from forms import NetworkForm, FeeForm

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

@app.route("/fee_task", methods=['GET', 'POST'])
def fee_task():
    form= FeeForm(request.form)
    if request.method == 'POST' and form.validate():
        amount = form.amount.data
        if (amount <= 100000):
            fee = int(amount * 0.01)
        elif (amount > 100000 and amount <= 500000):
            fee = int(amount * 0.007)
        elif (amount > 500000 and amount < 1000000):
            fee = int(amount * 0.006)
        else:
            fee = int(amount * 0.001)
        form.fee.data = fee
    return render_template('fee_task.html', form=form)

@app.route("/home_content")
def home_content():
    return render_template('home_content.html')




