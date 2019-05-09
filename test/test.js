const {BigBed} = require('@gmod/bbi')
const {RemoteFile} = require('generic-filehandle')
const fetch = require('node-fetch')

test('gets info from a remote bigbed file from UniBind database', async () => {
  const bbi = new BigBed({
    filehandle: new RemoteFile("https://unibind.uio.no/static/UniBind_hubs/hg38/UniBind_allTFBSs.bb", {fetch})
  })
})
