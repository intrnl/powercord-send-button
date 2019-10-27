function classnames (...classes) {
  const accu = []

  for (let i = 0, len = classes.length; i < len; i++) {
    const val = classes[i]
    const type = typeof val

    if (type === 'string') {
      accu.push(val)
    } else if (Array.isArray(val)) {
      accu.push(classnames(...val))
    } else if (type === 'object' && val !== null) {
      for (let [key, value] of Object.entries(val || {}))
        if (value) accu.push(key)
    }
  }

  return accu.join(' ')
}

module.exports = classnames
