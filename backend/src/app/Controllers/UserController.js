const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({"apiKey":"4c6dcb6d-d46b-48d8-a26b-5677fc77c29c"})



class UserController {

  async publish(req, res){
    /**
    * Desestructurar lose datos a solicitar
    */
    const { name, last_name, document_id } = req.body   

    const values = {
      "name": name,
      "last_name": last_name,
      "document_id": document_id
    };

    const HubDbTableRowV3Request = { values }
    const tableIdOrName = "developer_test_5"
    const message = "Usuario registrado"

    try {
      await hubspotClient.cms.hubdb.rowsApi.createTableRow(tableIdOrName, HubDbTableRowV3Request)
      const apiResponse = await hubspotClient.cms.hubdb.tablesApi.publishDraftTable(tableIdOrName)
      // console.log(JSON.stringify(apiResponse.body, null, 2))
      return res.status(200).json({
        error: false,
        message
      }) 
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }
  }

  async show(req, res) {

    try {
      const apiResponse = await hubspotClient.cms.hubdb.rowsApi.getTableRows('developer_test_5')
      const usersResposes = apiResponse.body.results
      const users = [] 
      let i = 0
      usersResposes.forEach((user) => {
        users.push({
          id: usersResposes[i].id,
          name: usersResposes[i].values.name,
          last_name: usersResposes[i].values.last_name,
          document_id: usersResposes[i].values.document_id,
        })
        i++
      })
      return users
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }
  }

  async remove(req, res) {

    const rowId = req.params.id
    const message = "Usuario borrado"

    try {
      await hubspotClient.cms.hubdb.rowsApi.purgeDraftTableRow('developer_test_5', rowId)
      const apiResponse = await hubspotClient.cms.hubdb.tablesApi.publishDraftTable('developer_test_5')
      //console.log(JSON.stringify(apiResponse.body, null, 2))
      return res.status(200).json({
        error: false,
        message
      })
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }

  }

  async update(req, res) {
    /**
    * Desestructurar lose datos a solicitar
    */
    const { name, last_name, document_id } = req.body
    const rowId = req.params.id
    console.log(rowId)
    console.log(req.body)
    const message = "Usuario actualizado"   

     const values = {
       "name": name,
       "last_name": last_name,
       "document_id": document_id
     };
 
     const HubDbTableRowV3Request = { values }
     const tableIdOrName = "developer_test_5"
 
     try {
       await hubspotClient.cms.hubdb.rowsApi.updateDraftTableRow(tableIdOrName, rowId, HubDbTableRowV3Request)
       const apiResponse = await hubspotClient.cms.hubdb.tablesApi.publishDraftTable(tableIdOrName)
       //console.log(JSON.stringify(apiResponse.body, null, 2))
       return res.status(200).json({
         error: false,
         message
       }) 
     } catch (e) {
       e.message === 'HTTP request failed'
         ? console.error(JSON.stringify(e.response, null, 2))
         : console.error(e)
     }
  }

}

module.exports = new UserController();