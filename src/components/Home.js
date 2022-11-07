import React, { Component } from 'react'

export class Home extends Component {

  records=[
        {
          "companyName": "6WunderKinder",
          "dealName": "DealName",
          "softwareName": "Scopevisio",
          "type": "SaaS",
          "status": "Archival Phase",
          "integrationManager": "",
          "accountingAdmin": "Karlsim"
        },
        {
          "companyName": "Acompli",
          "dealName": "DealName",
          "softwareName": "Quickbooks",
          "type": "Desktop",
          "status": "Archival Phase",
          "integrationManager": "",
          "accountingAdmin": "Gina Hough"
        },
        {
          "companyName": "Adallom",
          "dealName": "DealName",
          "softwareName": "Netsuite",
          "type": "SaaS",
          "status": "Archival Phase",
          "integrationManager": "",
          "accountingAdmin": "Becky Telander"
        },
        {
          "companyName": "AppDepot",
          "dealName": "DealName",
          "softwareName": "Quickbooks",
          "type": "Desktop",
          "status": "Onboarded Phase",
          "integrationManager": "",
          "accountingAdmin": "Gina Hough"
        },
        {
          "companyName": "Avere Systems- Inc",
          "dealName": "DealName",
          "softwareName": "Xero",
          "type": "SaaS",
          "status": "Onboarded Phase",
          "integrationManager": "",
          "accountingAdmin": "Steve Galore"
        }
      ]
  
  constructor(props) {
    super(props);
    this.state = {
        records:this.records
    }
}

  render() { 
    const row = this.state.records.map((item, i)=>{
      return <tr key={i}>
      <td>{item.companyName}</td>
      <td>{item.dealName}</td>
      <td>{item.softwareName}</td>
      <td>{item.type}</td>
      <td>{item.status}</td>
      <td>{item.integrationManager}</td>
      <td>{item.accountingAdmin}</td>
      <td>
        <button type="button" class="btn btn-info mx-1">View</button>
        <button type="button" class="btn btn-warning mx-1">Edit</button>
        <button type="button" class="btn btn-secondary mx-1">Audit</button>
      </td>
      </tr>
    })

    return (
      <div className="container my-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">CompanyName</th>
              <th scope="col">DealName</th>
              <th scope="col">SoftwareName</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">IntegrationManager</th>
              <th scope="col">AccountingAdmin</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home