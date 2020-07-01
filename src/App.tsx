import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { AccountsOverview } from './components/accounts-overview'
import { AccountViewDetailed } from './components/account-view-detailed'
import { Account } from './types'

function App() {
  const [accounts, setAccounts] = useState<Account[]>([])

  useEffect(() => {
    setAccounts([
      {
        name: 'Bank of Fubar',
        balance: 400
      },
      {
        name: 'Spøkelse GmbH.',
        balance: 200
      },
      {
        name: 'Evil CC Co',
        balance: -150
      },
      {
        name: 'BigEvilBank Inc.',
        balance: -50
      },
    ].map((account, idx) => {
      return {
        ...account,
        id: idx.toString()
      }
    }))
  }, [])

  return (
    <Router>
      <div>
        <div className="container">
          <div
            className="row"
            style={{
              marginBottom: '1rem'
            }}
          >
            <div className="col">
              <h1>Menta</h1>
            </div>
          </div>
          <Switch>
            <Route path="/" exact>
              <AccountsOverview accounts={accounts} />
            </Route>
            <Route path="/accounts/:id" exact>
              <AccountViewDetailed accounts={accounts} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
