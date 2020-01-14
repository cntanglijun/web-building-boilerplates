/* global XMLHttpRequest */

const xhr = new XMLHttpRequest()

function buildParam(prefix, obj, add) {
  if (Array.isArray(obj)) {
    obj.forEach((value, index) => {
      if (/\[\]$/.test(prefix)) {
        add(prefix, value)
      } else {
        buildParam(prefix + '[' + (typeof value === 'object' && value != null ? index : '') + ']', value, add)
      }
    })
  } else if (typeof obj === 'object') {
    for (const name in obj) {
      buildParam(prefix + '[' + name + ']', obj[name], add)
    }
  } else {
    add(prefix, obj)
  }
}

function formatParam(data) {
  const s = []

  if (Array.isArray(data)) {
    data.forEach((value, key) => {
      add(key, value)
    })
  } else {
    for (const prefix in data) {
      buildParam(prefix, data[prefix], add)
    }
  }

  function add(key, valueOfFunction) {
    const value = typeof valueOfFunction === 'function' ? valueOfFunction() : valueOfFunction
    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value == null ? '' : value)
  }

  return s.join('&')
}

function isFormData(object) {
  return Object.prototype.toString.call(object) === '[object FormData]'
}

function ajax({ url = '', method = 'GET', data = {}, ...others } = {}) {

  method === 'GET' && (url += '?' + formatParam(data))

  return new Promise((resolve, reject) => {

    xhr.open(method, url)

    if (others.headers) {
      for (const head in others.headers) {
        xhr.setRequestHeader(head, others.headers[head])
      }
    }

    if (method === 'POST') {
      if (!isFormData(data)) {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      }
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(xhr)
        }
      }
    }

    if (method === 'GET') {
      xhr.send(null)
    } else {
      if (others.formPost) {
        xhr.send(data)
      } else {
        xhr.send(JSON.stringify(data))
      }
    }
  })
}

export default ajax
