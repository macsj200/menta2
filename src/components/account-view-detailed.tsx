import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Account, Transaction } from '../types'
import { TransactionView } from './transaction-view'

export const AccountViewDetailed: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
  const { id } = useParams()
  const account = accounts.find(account => account.id === id)

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    setTransactions([
      {
        name: 'Foo Bagels',
        amount: 20
      }
    ].map((transaction, idx) => {
      return {
        ...transaction,
        id: idx.toString()
      }
    }))
  }, [])

  return (
    <div className="row">
      <div
        className="col"
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <span>Name: {account?.name}</span>
        <span>Number of transactions: {transactions.length}</span>
        {transactions.map(transaction => <TransactionView key={transaction.id} transaction={transaction} />)}
      </div>
    </div>
  )
}