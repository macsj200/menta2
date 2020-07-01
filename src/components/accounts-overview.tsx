import React from 'react'
import { Account } from '../types'
import { AccountView } from './account-view'

export const AccountsOverview: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
  const assets = accounts.filter(account => account.balance > 0)
  const liabilities = accounts.filter(account => account.balance < 0)

  const assetsTotalBalance = assets.reduce((acc, curr) => acc + curr.balance, 0)
  const liabilitiesTotalBalance = liabilities.reduce((acc, curr) => acc + curr.balance, 0)

  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Accounts</h2>
          <span>Net worth: {assetsTotalBalance + liabilitiesTotalBalance}</span>
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: '1rem'
        }}
      >
        <div className="col">
          <h3>Assets</h3>
          <span>Total balance: {assetsTotalBalance}</span>
          {assets.map((account) => <AccountView key={account.id} account={account} totalBalance={assetsTotalBalance} />)}
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: '1rem'
        }}
      >
        <div className="col">
          <h3>Liabilities</h3>
          <span>Total balance: {liabilitiesTotalBalance}</span>
          {liabilities.map((account) => <AccountView key={account.id} account={account} totalBalance={liabilitiesTotalBalance} />)}
        </div>
      </div>
    </div>
  )
}