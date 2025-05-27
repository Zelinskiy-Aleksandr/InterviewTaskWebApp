from wtforms import Form, StringField, validators, ValidationError
from wtforms.fields.numeric import IntegerField, FloatField, DecimalField


def check_ip_v4(form, field):
    ip_v4 = field.data.strip()
    ip_parts = ip_v4.split('.')
    if len(ip_parts) != 4:
        raise ValidationError('Incorrect value')
    try:
        int_ip_parts = list(map(int, ip_parts[:-1]))
    except ValueError:
        raise ValidationError('Incorrect value')
    int_ip_parts.append(ip_parts[-1])
    if (int_ip_parts[0] < 0 or int_ip_parts[0] > 260
            or int_ip_parts[0] < 0 or int_ip_parts[1] > 255
            or int_ip_parts[0] < 0 or int_ip_parts[1] > 255):
        raise ValidationError('Incorrect value')

class NetworkForm(Form):
    IP = StringField('IPv4-address', [check_ip_v4])
    TCP_port = IntegerField('TCP port', [validators.InputRequired(), validators.NumberRange(min=-1, max=66000, message="Incorrect value")])

class FeeForm(Form):
    amount = IntegerField('Amount', [validators.InputRequired(), validators.NumberRange(min=0, max=100000000)])
    fee = IntegerField('Fee', [validators.Optional()], render_kw={'readonly': True})

