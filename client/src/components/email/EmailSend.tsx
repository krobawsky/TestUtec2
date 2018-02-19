import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { url, submitForm } from '../../util';

import Input from '../form/Input';

import { Digits, NotEmpty } from '../form/Constraints';

import { IInputChangeHandler, IFieldError, IError, IAlumno, IRouterContext } from '../../types';

interface IAlumnoEditorProps {
  initialEmail?: IAlumno;
}

interface IAlumnoEditorState {
  alumno?: IAlumno;
  error?: IError;
};

export default class EmailSend extends React.Component<IAlumnoEditorProps, IAlumnoEditorState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      alumno: Object.assign({}, props.initialEmail)
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const { alumno } = this.state;

    const url = alumno.isNew ? '/api/send-mail' : '/api/alumno/' + alumno.id;
    submitForm(alumno.isNew ? 'POST' : 'PUT', url, alumno, (status, response) => {
      if (status === 200 || status === 201) {
        const newAlumno = response as IAlumno;
        this.context.router.push({
          pathname: '/emailform/emailenviado'
        });
      } else {
        console.log('ERROR?!...', response);
        this.setState({ error: response });
      }
    });
  }

  onInputChange(name: string, value: string, fieldError: IFieldError) {
    const { alumno, error } = this.state;
    const modifiedEmail = Object.assign({}, alumno, { [name]: value });
    const newFieldErrors = error ? Object.assign({}, error.fieldErrors, {[name]: fieldError }) : {[name]: fieldError };
    this.setState({
      alumno: modifiedEmail,
      error: { fieldErrors: newFieldErrors }
    });
  }

  render() {
    const { alumno, error } = this.state;
    return (
      <span>
        <a className='btn-floating btn-large blue button-collapse' data-activates='slide-out'>
        <i className='material-icons'>menu</i>
        </a>
      <ul id='slide-out' className='side-nav'>
      <li><a><i className='material-icons'>ADMINISTRADOR</i></a></li>
      <li><a><img src='/images/admi.png' width='210' id='img' height='200' /></a></li>
      <li><a><i className='material-icons'>e</i></a></li>
         <li><a><i className='material-icons'>e</i></a></li>
         <li><a><i className='material-icons'>e</i></a></li>
      <li><a className='subheader'>Opciones</a></li>
        <li><a href='/welcome' title='Enviar'><i className='material-icons'>send</i>Enviar Test</a></li>
        <li><a href='/grupos' title='Grupos'><i className='material-icons'>group_add</i>Añadir grupos</a></li>
        <li><div className='divider'></div></li>
        <li><a className='subheader'>Resultados</a></li>
        <li><a href='/alumnos/list' title='Alumnos'><i className='material-icons'>person</i>Alumnos</a></li>
        <li><a href='/grupo/list' title='Grupos'><i className='material-icons'>group</i>Grupos</a></li>
        <li><div className='divider'></div></li>
        <li><a href='/'><i className='material-icons'>exit_to_app</i>CERRAR SESIÓN</a></li>
      </ul>
      <br/><br/>
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <span className='card-title'>Enviar Test</span>
                  <div className='row'>
                  <form className='col s12' method='POST' action={url('/api/send-mail')}>
                    <div className='row'>
                      <div className='col s12'>
                        Para:
                        <div className='input-field col12'>
                        <Input object={alumno} error={error}  label='' name='lastName' onChange={this.onInputChange} />
                         </div>
                      </div>
                   </div>
                  <div className='row'>
                    <div className='col s12'> Test:
                      <div className='row'>
                        <div className='col s12'>
                        <div className='input-field col s12'>
                          <select multiple >
                          <option value='' disabled selected>Seleccione los test</option>
                          <option value='1'>Test 1</option>
                          <option value='2'>Test 2</option>
                          <option value='3'>Test 3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                      <div className='col s12'>
                        Asunto:
                        <div className='input-field inline'>
                        <Input object={alumno} error={error}  label='' name='firstName' onChange={this.onInputChange} />
                         </div>
                      </div>
                   </div>
                   <div className='col s12'>
                        Texto:
                        <div className='input-field col12'>
                        <Input object={alumno} error={error}  label='' name='correo' onChange={this.onInputChange} />
                         </div>
                      </div>
                  </form>
            </div>
        <div className='right'>
        <button className='btn btn-default' type='submit' onClick={this.onSubmit}>{alumno.isNew ? 'Aceptar' : 'Update Owner'}<i className='material-icons right'>send</i></button>
        </div>
        <br/>
            </div>
          </div>
        </div>
     </div>
      </span>
    );
  }
}