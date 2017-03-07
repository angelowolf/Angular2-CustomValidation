import { ErrorValidacion } from './ErrorValidacion';
export class Errors {

  errors: ErrorValidacion[];

  /**
  * Create a new Errors instance.
  */
  constructor () {
    this.errors = []
  }

  /**
  * Determine if an errors exists for the given field.
  *
  * @param {string} field
  */
  has (field) {
    return !!this.errors.find(elem => elem.campo === field)
  }

  /**
  * Determine if we have any errors.
  */
  any () {
    return Object.keys(this.errors).length > 0
  }

  /**
  * Retrieve the error message for a field.
  *
  * @param {string} field
  */
  get (field) {
    const resultado = this.errors.find(elem => elem.campo === field)

    if (resultado !== undefined) {
      return this.errors.find(elem => elem.campo === field)['mensajeError']
    }
  }

  /**
  * Record the new errors.
  *
  * @param {object} errors
  */
  record (errors) {
    this.errors = errors
  }

  /**
  * Clear one or all error fields.
  *
  * @param {string|null} field
  */
  clear (field?) {
    if (field) {
      this.errors = this.errors.filter(elem => elem.campo !== field)
      return
    } else {
      this.errors = []
    }
  }
}