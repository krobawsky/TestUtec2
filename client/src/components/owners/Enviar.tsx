import * as React from 'react';


export default () => (
<div>
    <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <span className='card-title'>Enviar Test</span>
    <div className='row'>
      <form className='col s12'>
        <div className='row'>
          <div className='col s12'>
          Para:
            <div className='input-field col12'>
            <input id='email' type='email' className='validate'/>
            <label for='email' data-error='wrong' data-success='right'>Ingrese correo del alumno </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'> Test:
            <div className='row'>
              <div className='col s12'>
              <div className='input-field col s12'>
                <select multiple>
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
      </form>
    </div>
        <div className='right'>
        <button className='btn waves-effect waves-light' type='submit' name='action'>Enviar
        <i className='material-icons right'>send</i>
        </button>
        </div>
        <br/>
            </div>
          </div>
        </div>
     </div>
  </div>
);