import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import { IError, IRouterContext, ITest, IPregunta, IPreguntaTipo, IAlternativa } from '../../types';
import RadioInput2 from '../form/RadioInput2';

interface IPregProps {
  params?: IPregunta[];
  resultsTotalProps?: {};
  resultsVProps?: {};
  resultsXProps?: {};
  resultsYProps?: {};
  resultsZProps?: {};
  results1Props?: {};
  results2Props?: {};
  results3Props?: {};
  results4Props?: {};
  results5Props?: {};
  results6AProps?: {};
  results6BProps?: {};
  results7Props?: {};
  results8AProps?: {};
  results8BProps?: {};
  resultsSProps?: {};
  resultsCProps?: {};
  resultsCCrops?: {};
  resultsAProps?: {};
  resultsHProps?: {};
  resultsNProps?: {};
  resultsDProps?: {};
  resultsBProps?: {};
  resultsTProps?: {};
  resultsSSProps?: {};
  resultsCCProps?: {};
  resultsPPProps?: {};
}

interface IResultState {
  editableAlter?: IAlternativa[];
  resultsTotal?: {};
  resultsV?: {};
  resultsX?: {};
  resultsY?: {};
  resultsZ?: {};
  results1?: {};
  results2?: {};
  results3?: {};
  results4?: {};
  results5?: {};
  results6A?: {};
  results6B?: {};
  results7?: {};
  results8A?: {};
  results8B?: {};
  resultsS?: {};
  resultsC?: {};
  resultsP?: {};
  resultsA?: {};
  resultsH?: {};
  resultsN?: {};
  resultsD?: {};
  resultsB?: {};
  resultsT?: {};
  resultsSS?: {};
  resultsCC?: {};
  resultsPP?: {};
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
      resultsV: Object.assign({}, props.resultsVProps),
      resultsX: Object.assign({}, props.resultsXProps),
      resultsY: Object.assign({}, props.resultsYProps),
      resultsZ: Object.assign({}, props.resultsZProps),
      results1: Object.assign({}, props.results1Props),
      results2: Object.assign({}, props.results2Props),
      results3: Object.assign({}, props.results3Props),
      results4: Object.assign({}, props.results4Props),
      results5: Object.assign({}, props.results5Props),
      results6A: Object.assign({}, props.results6AProps),
      results6B: Object.assign({}, props.results6BProps),
      results7: Object.assign({}, props.results7Props),
      results8A: Object.assign({}, props.results8AProps),
      results8B: Object.assign({}, props.results8BProps),
      resultsS: Object.assign({}, props.resultsSProps),
      resultsC: Object.assign({}, props.resultsCProps),
      resultsP: Object.assign({}, props.resultsCCrops),
      resultsA: Object.assign({}, props.resultsAProps),
      resultsH: Object.assign({}, props.resultsHProps),
      resultsN: Object.assign({}, props.resultsNProps),
      resultsD: Object.assign({}, props.resultsDProps),
      resultsB: Object.assign({}, props.resultsBProps),
      resultsT: Object.assign({}, props.resultsTProps),
      resultsSS: Object.assign({}, props.resultsSSProps),
      resultsCC: Object.assign({}, props.resultsCCProps),
      resultsPP: Object.assign({}, props.resultsPPProps),
      editableAlter: Object.assign({}, props.params ),
      progress: 'progress scale-transition scale-out'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(name: any, pos: number, question: string, value: any) {
    const { editableAlter, resultsTotal, resultsV, resultsX, resultsY, resultsZ, results1, results2, results3, results4, results5, results6A, results6B, results7, results8A, results8B, resultsS, resultsC, resultsP, resultsA, resultsH, resultsN, resultsD, resultsB, resultsT, resultsSS, resultsCC, resultsPP  } = this.state;
    console.log( value );
    for (const propiedad in name) {
      if (name.hasOwnProperty(propiedad)) {
        // console.log('En la propiedad ' + propiedad + ' hay este valor: ' + JSON.stringify(name[propiedad].name));
        const tipo = JSON.parse(JSON.stringify(name[propiedad].name));
        // console.log( tipo );

      const tipos = ['Esquizoide', 'Evitativo', 'Dependiente', 'Histriónico', 'Narcisista', 'Antisocial', 'Agresivo-sádico', 'Compulsivo', 'Pasivo-agresivo', 'Autoderrotista',  'Esquizotípico', 'Borderline', 'Paranoide', 'Ansiedad', 'Somatoformo', 'Bipolar', 'Distimia', 'Dependencia de alcohol', 'Dependencia de drogas', 'Desorden del pensamiento', 'Depresión mayor', 'Desorden delusional', 'Validez', 'Deseabilidad Social', 'Autodescalificación'];
        if ( tipo === tipos[0] ) {
          if ( value === 'Verdadero') {
            const poss3 = [2, 13, 19, 34, 81, 143, 161];
            const poss2 = [10, 33, 47, 83, 106, 124, 150, 20];
            const poss1 = [16, 22, 25, 46, 53, 85, 108, 141, 142, 159, 160];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [48];
            const poss1 = [14, 28, 60, 78, 95, 103, 111, 125];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[1]  ) {
          if ( value === 'Verdadero') {
            const poss3 = [3, 8, 49, 63, 77, 120, 141, 158];
            const poss2 = [19, 23, 25, 27, 32, 47, 56, 57, 83, 102, 110, 115, 118, 150, 150, 171];
            const poss1 = [2, 34, 45, 81, 85, 106, 109, 113, 133, 139, 147, 160];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [14, 21, 28, 125, 163];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[2] ) {
          if ( value === 'Verdadero') {
            const poss3 = [10, 31, 42, 78, 108, 133, 145, 159, 173];
            const poss2 = [34, 57, 60, 77, 81, 97];
            const poss1 = [49, 54, 75, 110, 125, 149, 168];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [4];
            const poss1 = [7, 12, 21, 28, 40, 41, 43, 74, 91, 92, 101, 147, 162, 163];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[3] ) {
          if ( value === 'Verdadero') {
            const poss3 = [14, 20, 28, 48, 60, 86, 111, 125, 137, 170];
            const poss2 = [9, 42, 43, 66, 103, 133, 166, 51];
            const poss1 = [7, 37, 40, 41, 56, 89, 91, 95, 128, 130, 142, 162, 171, 172, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [158];
            const poss1 = [3, 19, 39, 51, 77, 126];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[4] ) {
          if ( value === 'Verdadero') {
            const poss3 = [1, 6, 15, 37, 89, 91, 129, 131, 142, 166];
            const poss2 = [4, 14, 16, 41, 86, 103, 111, 125, 137, 165, 170, 171, 172];
            const poss1 = [2, 12, 22, 28, 32, 43, 55, 60, 80, 85, 126, 1329, 130, 134, 135, 143, 146, 163];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [42, 149, 158];
            const poss1 = [81, 31, 45, 51, 78, 106];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[5] ) {
          if ( value === 'Verdadero') {
            const poss3 = [7, 40, 92, 94, 103, 116, 130, 147, 162, 172];
            const poss2 = [1, 12, 20, 22, 38, 43, 55, 73, 74, 80, 86, 87, 91, 129, 142, 144, 165];
            const poss1 = [15, 32, 44, 48, 64, 85, 101, 104, 111, 113, 140, 157, 171];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [42, 78, 81];
            const poss1 = [34, 77];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[6] ) {
          if ( value === 'Verdadero') {
            const poss3 = [4, 9, 12, 30, 41, 44, 101, 134, 148, 163];
            const poss2 = [1, 21, 64, 74, 82, 84, 91, 107, 115, 121, 129, 155, 166];
            const poss1 = [7, 32, 38, 40, 43, 58, 66, 80, 86, 95, 135, 142, 146, 147, 165];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [42, 77, 78];
            const poss1 = [31, 71, 106, 145];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[7] ) {
          if ( value === 'Verdadero') {
            const poss3 = [21, 39, 46, 61, 75, 88, 126, 138, 149, 153];
            const poss2 = [64, 134, 148, 159, 161, 163];
            const poss1 = [4, 32, 74, 78, 81];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [20, 48, 86, 145];
            const poss1 = [7, 40, 43, 50, 60, 66, 77, 92, 95, 103, 111, 128, 155];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[8] ) {
          if ( value === 'Verdadero') {
            const poss3 = [22, 50, 55, 66, 95, 104, 107, 135, 156, 165];
            const poss2 = [9, 16, 28, 43, 64, 73, 74, 77, 82, 86, 101, 115, 123, 128, 155];
            const poss1 = [1, 4, 12, 21, 23, 25, 51, 58, 110, 120, 129, 139, 171];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [149, 159];
            const poss1 = [6];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[9] ) {
          if ( value === 'Verdadero') {
            const poss3 = [23, 57, 65, 110, 121, 139, 154, 168];
            const poss2 = [10, 16, 28, 42, 45, 51, 54, 56, 77, 106, 115, 120, 132, 145, 155];
            const poss1 = [8, 18, 25, 31, 63, 71, 73, 81, 82, 99, 128, 133, 141, 167, 171, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [74];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[10] ) {
          if ( value === 'Verdadero') {
            const poss3 = [24, 47, 69, 83, 102, 112, 118, 150];
            const poss2 = [2, 3, 8, 31, 38, 49, 63, 77, 85, 100, 113, 120, 123, 124, 133, 141, 158, 164];
            const poss1 = [10, 13, 19, 23, 25, 53, 108, 130, 136, 147, 160, 161, 162, 165];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [168];
            const poss1 = [14, 48, 60];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[11] ) {
          if ( value === 'Verdadero') {
            const poss3 = [25, 43, 56, 58, 73, 82, 113, 115, 128, 155, 171];
            const poss2 = [5, 22, 23, 26, 27, 35, 50, 59, 66, 79, 91, 95, 97, 101, 129, 136, 140, 142, 156];
            const poss1 = [7, 36, 40, 44, 51, 53, 54, 57, 65, 67, 72, 74, 77, 78, 94, 99, 103, 104, 108, 110, 130, 132, 135, 139, 144, 147, 154, 162, 165, 167, 178, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[12] ) {
          if ( value === 'Verdadero') {
            const poss3 = [16, 32, 38, 64, 74, 84, 85, 146, 164];
            const poss2 = [15, 24, 37, 46, 80, 89, 100, 103, 123, 126, 129, 131];
            const poss1 = [6, 12, 21, 22, 30, 39, 41, 43, 44, 55, 61, 63, 68, 75, 98, 127, 135, 138, 143, 163, 165, 171, 172];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[13] ) {
          if ( value === 'Verdadero') {
            const poss3 = [18, 51, 67, 114, 117];
            const poss2 = [29, 33, 53, 71, 96, 97, 109, 167];
            const poss1 = [8, 16, 26, 36, 54, 78, 99, 108, 132, 145, 153];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [166];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[14] ) {
          if ( value === 'Verdadero') {
            const poss3 = [29, 33, 68, 71, 72, 96];
            const poss2 = [18, 51, 53, 67, 98, 114];
            const poss1 = [5, 26, 31, 36, 42, 50, 56, 60, 66, 78, 102, 109, 117, 118, 137, 145, 170, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [41];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[15] ) {
          if ( value === 'Verdadero') {
            const poss3 = [11, 93, 151, 174];
            const poss2 = [14, 20, 28, 50, 60, 86, 103, 125, 128, 134, 137, 170];
            const poss1 = [17, 37, 40, 58, 686, 67, 73, 89, 95, 98, 101, 111, 121, 127, 131, 166, 172];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [19, 42, 158, 161];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
      }
    }
    const agregarTotal = Object.assign({}, resultsTotal, {[question]: +value });
    this.setState({ resultsTotal: agregarTotal });
  }

  onSubmit(event) {
    event.preventDefault();

    const { editableAlter, resultsTotal, resultsV, resultsX, resultsY, resultsZ, results1, results2, results3, results4, results5, results6A, results6B, results7, results8A,
      results8B, resultsS, resultsC, resultsP, resultsA, resultsH, resultsN, resultsD, resultsB, resultsT, resultsSS, resultsCC, resultsPP  } = this.state;

    if ( Object.getOwnPropertyNames(resultsTotal).sort().length < Object.getOwnPropertyNames(editableAlter).sort().length ) {
      // alert( 'Debe contestar todas las preguntas!' );
      console.log( results1 );
      console.log( results2 );
      console.log( results3 );
      const total1 = Object.values(results1).reduce((a, b) => a + b); // Total
      const total2 = Object.values(results2).reduce((a, b) => a + b); // Total
      const total3 = Object.values(results3).reduce((a, b) => a + b); // Total
      console.log( 'Total 1: ' + total1 );
      console.log( 'Total 2: ' + total2 );
      console.log( 'Total 3: ' + total3 );

    } else {
      this.test();
    }
  }

  test  = () => {
    this.setState ({
      progress: 'progress scale-transition scale-in'
    });
  }

  render() {
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
                      <RadioInput2 object={editableAlter} error={error} name={pregunta.tipos} pos={pregunta.posicion} question={pregunta.pregunta} options={pregunta.alternativas} onChange={this.onInputChange} />
                      {pregunta.tipos.map(tipo => (
                        <li className='collection-item' key={tipo.id}>{tipo.name}</li>
                      ))}
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