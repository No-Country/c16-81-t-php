export const cleanFormDataValues = (formDataValues) => Object.keys(formDataValues).reduce( (acum, currentKey) => {
    const value = formDataValues[currentKey]
    
    if( value ){
      return { ...acum, [currentKey]:value }
    }

    return acum
  }, {})