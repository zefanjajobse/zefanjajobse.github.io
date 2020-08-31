let request = new XMLHttpRequest()

function addItem(key, data) {
    let serverList = document.querySelector('#Servers').querySelector('table')
    newitem = document.createElement('tr')
    serverName = document.createElement('th')
    serverName.textContent = data[key].prefix
    playerAmount = document.createElement('th')
    playerAmount.textContent = data[key].serverInfo
    inQueue = document.createElement('th')
    inQueue.textContent = (data[key].inQue + " waiting")
    newitem.appendChild(serverName)
    newitem.appendChild(playerAmount)
    newitem.appendChild(inQueue)
    serverList.appendChild(newitem)
}

request.open('GET', 'https://bob.jobse.space/api', true)
request.onload = function () {
  let data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    Object.keys(data).forEach(key => addItem(key, data))
  } else {
    console.log('error')
  }
}

request.send()