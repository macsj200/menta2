import React from 'react'
import { Account } from '../types'
import { Link } from 'react-router-dom'

const roundToTwoDecimals = (num: number) => Math.floor(num * 100) / 100

const colors = [
  'primary',
  'success',
  'info',
]

const mapStringToColor = (str: string, balance: number) => {
  if (balance < 0) {
    return 'danger'
  }
  const sum = str.split('').map((char) => char.charCodeAt(0)).reduce((acc, curr) => acc + curr, 0)
  const idx = sum % colors.length
  return colors[idx]
}

export const AccountView: React.FC<{ account: Account, totalBalance: number }> = ({ account, totalBalance }) => {
  const balancePercentage = Math.abs(roundToTwoDecimals(account.balance / totalBalance * 100))

  return (
    <div
      className="row"
      style={{
        marginTop: '0.5rem'
      }}
    >
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{account.name}</h5>
                <Link
                  to={`/accounts/${account.id}`}
                  className="btn btn-primary"
                >More Info</Link>
                <p className="card-text">
                  Balance: {account.balance}
                </p>
                <p className="card-text">
                  Percentage: {balancePercentage}
                </p>
                <div className="progress">
                  <div className={`progress-bar bg-${mapStringToColor(account.name, account.balance)}`} role="progressbar" style={{
                    width: `${balancePercentage}%`
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}