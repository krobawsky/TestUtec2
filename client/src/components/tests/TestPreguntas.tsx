import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import { IError, IRouterContext, ITest, IPregunta, IAlternativa } from '../../types';
import RadioInput from '../form/RadioInput';

interface IPregProps {
  params?: IPregunta[];
  resultadoId?: string;
  resultsTotalProps?: {};
  results1Props?: {};
  results2Props?: {};
  results3Props?: {};
  results4Props?: {};
  results5Props?: {};
  results6Props?: {};
  results7Props?: {};
  results8Props?: {};
  results9Props?: {};
  results10Props?: {};
  results11Props?: {};
  results12Props?: {};
  results13Props?: {};
}

interface IResultState {
  editableAlter?: IAlternativa[];
  resultsTotal?: {};
  results1?: {};
  results2?: {};
  results3?: {};
  results4?: {};
  results5?: {};
  results6?: {};
  results7?: {};
  results8?: {};
  results9?: {};
  results10?: {};
  results11?: {};
  results12?: {};
  results13?: {};
  error?: IError;
  progress?: string;
}

interface IResultadoRequest {
  id?: number;
  test?: string;
  descripcion?: string;
  date?: string;
}

interface IValoresRequest {
  tipo?: string;
  value?: number;
  descripcion?: string;
}

export default class Pregunta extends React.Component<IPregProps, IResultState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      resultsTotal: Object.assign({}, props.resultsTotalProps),
      results1: Object.assign({}, props.results1Props),
      results2: Object.assign({}, props.results2Props),
      results3: Object.assign({}, props.results3Props),
      results4: Object.assign({}, props.results4Props),
      results5: Object.assign({}, props.results5Props),
      results6: Object.assign({}, props.results6Props),
      results7: Object.assign({}, props.results7Props),
      results8: Object.assign({}, props.results8Props),
      results9: Object.assign({}, props.results9Props),
      results10: Object.assign({}, props.results10Props),
      results11: Object.assign({}, props.results11Props),
      results12: Object.assign({}, props.results12Props),
      results13: Object.assign({}, props.results13Props),
      editableAlter: Object.assign({}, props.params ),
      progress: 'progress scale-transition scale-out'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(name: string, question: string, value: string) {
    const { editableAlter, resultsTotal, results1, results2, results3, results4, results5, results6, results7, results8, results9, results10, results11, results12, results13 } = this.state;
    // console.log( results[name] );
    const agregarTotal = Object.assign({}, resultsTotal, {[question]: +value });
    this.setState({ resultsTotal: agregarTotal });

    if ( name === 'Afrontamiento Directo') {
      const agregar = Object.assign({}, results1, {[question]: +value });
      this.setState({ results1: agregar });
    } else if ( name === 'Planificación de Actividades') {
      const agregar = Object.assign({}, results2, {[question]: +value });
      this.setState({ results2: agregar });
    } else if ( name === 'Superación de Actividades Competitivas') {
      const agregar = Object.assign({}, results3, {[question]: +value });
      this.setState({ results3: agregar });
    } else if ( name === 'Retracción del afrontamiento') {
      const agregar = Object.assign({}, results4, {[question]: +value });
      this.setState({ results4: agregar });
    } else if ( name === 'Búsqueda de soporte social') {
      const agregar = Object.assign({}, results5, {[question]: +value });
      this.setState({ results5: agregar });
    } else if ( name === 'Búsqueda de soporte emocional') {
      const agregar = Object.assign({}, results6, {[question]: +value });
      this.setState({ results6: agregar });
    } else if ( name === 'Reinterpretación positiva de la experiencia') {
      const agregar = Object.assign({}, results7, {[question]: +value });
      this.setState({ results7: agregar });
    } else if ( name === 'Aceptación') {
      const agregar = Object.assign({}, results8, {[question]: +value });
      this.setState({ results8: agregar });
    } else if ( name === 'Retomo a la religión') {
      const agregar = Object.assign({}, results9, {[question]: +value });
      this.setState({ results9: agregar });
    } else if ( name === 'Análisis de las emociones') {
      const agregar = Object.assign({}, results10, {[question]: +value });
      this.setState({ results10: agregar });
    } else if ( name === 'Negación') {
      const agregar = Object.assign({}, results11, {[question]: +value });
      this.setState({ results11: agregar });
    } else if ( name === 'Conductas inadecuadas') {
      const agregar = Object.assign({}, results12, {[question]: +value });
      this.setState({ results12: agregar });
    } else if ( name === 'Distracción') {
      const agregar = Object.assign({}, results13, {[question]: +value });
      this.setState({ results13: agregar });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    let resultadoId = this.props.resultadoId;

    const { editableAlter, resultsTotal, results1, results2, results3, results4, results5, results6, results7, results8, results9, results10, results11, results12, results13 } = this.state;

    if ( Object.getOwnPropertyNames(resultsTotal).sort().length < Object.getOwnPropertyNames(editableAlter).sort().length ) {
      alert( 'Debe contestar todas las preguntas!' );

    } else {
      this.test();

      // Dia actual
      const fec = new Date();
      let dd = fec.getDate();
      let mm = fec.getMonth() + 1;

      const yyyy = fec.getFullYear();
      if ( dd < 10) {
          dd = '0' + dd;
      }
      if ( mm < 10) {
          mm = '0' + mm;
      }
      const today = yyyy + '/' + mm + '/' + dd;

      // Update
      const resultRequest: IResultadoRequest = {
        test: 'Test del Estres',
        descripcion: '',
        date: today
      };
      const url = 'api/tests/results/' + resultadoId;
        submitForm('PUT', url, resultRequest, (status, response) => {
          if (status === 204) {
            console.log('OK!');
          } else {
            console.log('ERROR?!...', response);
            this.setState({ error: response });
          }
      });

      // For para los valores
      let num: number = 0;
      for ( num = 0; num < 13; num++ ) {

        if (num === 0) {
          // const valId = Math.floor(Math.random() * 999999); // Id
          const total = Object.values(results1).reduce((a, b) => a + b); // Total
          let desc = 'Realización de una acción directa y racional para solucionar el problema.'; // Desdcription
          const valuableRequest: IValoresRequest = {
            tipo: 'AD',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 1) {
          const total = Object.values(results2).reduce((a, b) => a + b);
          let desc = 'Análisis racional del problema para generar estrategias que puedan alterar la situación problema.';
          const valuableRequest: IValoresRequest = {
            tipo: 'PA',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 2) {
          const total = Object.values(results3).reduce((a, b) => a + b);
          let desc = 'Búsqueda de soluciones centrándose exclusivamente en el problema objetivo.';
          const valuableRequest: IValoresRequest = {
            tipo: 'SAC',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 3) {
          const total = Object.values(results4).reduce((a, b) => a + b);
          let desc = 'Pensamientos distractivos para evitar pensar en el problema.';
          const valuableRequest: IValoresRequest = {
            tipo: 'RA',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 4) {
          const total = Object.values(results5).reduce((a, b) => a + b);
          let desc = 'Buscar información y consejo en los demás sobre las posibles soluciones al problema.';
          const valuableRequest: IValoresRequest = {
            tipo: 'BSS',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 5) {
          const total = Object.values(results6).reduce((a, b) => a + b);
          let desc = 'Búsqueda de comprensión en los demás sobre la situación problema.';
          const valuableRequest: IValoresRequest = {
            tipo: 'BSE',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 6) {
          const total = Object.values(results7).reduce((a, b) => a + b);
          let desc = 'Afrontamiento activo enfocado a crear un nuevo significado a la situación problema, intentando sacar la parte positiva.';
          const valuableRequest: IValoresRequest = {
            tipo: 'RPE',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 7) {
          const total = Object.values(results8).reduce((a, b) => a + b);
          let desc = 'Aceptación de la situación negativa y de las consecuencias en la vida del sujeto.';
          const valuableRequest: IValoresRequest = {
            tipo: 'A',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 8) {
          const total = Object.values(results9).reduce((a, b) => a + b);
          let desc = 'Búsqueda de consuelo en un poder superior.';
          const valuableRequest: IValoresRequest = {
            tipo: 'RR',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 9) {
          const total = Object.values(results10).reduce((a, b) => a + b);
          let desc = 'Regularización de los recursos para expresar u ocultar nuestros sentimientos.';
          const valuableRequest: IValoresRequest = {
            tipo: 'AE',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 10) {
          const total = Object.values(results11).reduce((a, b) => a + b);
          let desc = 'Ausencia de aceptación del problema, por lo que se evita distorsionando la realidad para que su valoración sea acorde con nuestra valoración.';
          const valuableRequest: IValoresRequest = {
            tipo: 'N',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 11) {
          const total = Object.values(results12).reduce((a, b) => a + b);
          let desc = 'Consumo de drogas, alcohol, conductas que ponen en riesgo la integra del sujeto.';
          const valuableRequest: IValoresRequest = {
            tipo: 'CI',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 12) {
          const total = Object.values(results13).reduce((a, b) => a + b);
          let desc = 'Concentrarse en otros elementos y evitar/postergar enfrentar el conflicto.';
          const valuableRequest: IValoresRequest = {
            tipo: 'D',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              this.context.router.push({
                pathname: '/'
              });
            } else {
              console.log('Error?!...', response);
            }
          });
        }
      }
    }
  }
   test  = () => {
    this.setState ({
      progress: 'progress scale-transition scale-in'
    });
  }

  render() {
     // const { params } = this.props;
    let params = this.props.params;
    const { editableAlter, error } = this.state;
    params.sort((a, b) => Number(a.posicion) - Number(b.posicion));

    return (
       <div>
        <div className='col-sm-12'>
            <form onSubmit={this.onSubmit}>
              <ul className='collection with-header'>
                <li className='collection-header'><h4 className='cyan-text text-darken-3'>Preguntas</h4></li>
                {params.map(pregunta => (
                  <li className='collection-item' key={pregunta.id}>
                    <div>
                      <br/>
                      <span className='title cyan-text text-darken-4'>{pregunta.posicion})  {pregunta.pregunta}</span>
                     <RadioInput object={editableAlter} error={error} name={pregunta.tipo.name} question={pregunta.pregunta} options={pregunta.alternativas} onChange={this.onInputChange} />
                      <br/>
                    </div>
                  </li>
                ))}
                <li className='collection-item center-align'>
                  <div>
                    <br/>
                    <button className='btn waves-effect waves-teal btn-large' type='submit'>Finalizar test!<i className='material-icons right'>send</i></button>
                    <div className={this.state.progress}>
                      <div className='indeterminate'></div>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
            <br/><br/><br/>
        </div>
      </div>
    );
  }
}