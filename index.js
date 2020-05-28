let _id = null

const promises = []

let connection

async function startConnection() {
  if (connection) return

  const peerConnectionConfig = [
    { sdpSemantics: "unified-plan" },
    { sdpSemantics: "plan-b" }
  ]

  connection = new RTCPeerConnection(peerConnectionConfig[0]);

  connection.addEventListener('icecandidate', onIceCandidate);

  const offer = await connection.createOffer({
    offerToReceiveAudio: 1,
    offerToReceiveVideo: 1
  })
  connection.setLocalDescription(offer)

  function onIceCandidate({ candidate }) {
    if (!candidate) return

    if (candidate.protocol == 'udp') {
      _id = candidate.foundation
      promises.forEach(resolve => resolve(_id))
      promises.length = 0
    }
  }
}

async function biri() {
  if (typeof RTCPeerConnection == 'undefined')
    throw new Error(`This browser doesn't support WebRTC, so biri cannot provide a unique, static ID for this machine.`)

  if (_id) return _id

  const promise = new Promise(resolve => {
    startConnection()
    promises.push(resolve)
  })

  return promise
}

module.exports = biri
