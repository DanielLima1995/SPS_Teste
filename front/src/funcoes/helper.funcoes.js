class Helpers{
    error(err, defaultMessage="Ocorreu um erro"){
      if (err.response && err.response.data) {
        return typeof err.response.data === 'string' ? err.response.data : (err?.error ?? err.message)
      } else if (err.message) {
        return typeof err.message === 'string' ? err.message : err.error
      }
      return defaultMessage
    }
}

export default new Helpers();