import React from 'react'
import { Transaction } from '../types'

export const TransactionView: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
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
                <h5 className="card-title">{transaction.name}</h5>
                <p className="card-text">
                  Amount: {transaction.amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}