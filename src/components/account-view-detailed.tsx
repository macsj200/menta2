import React from 'react'
import { useParams } from 'react-router-dom'
import { Account } from '../types'

export const AccountViewDetailed: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
  const { id } = useParams()
  const account = accounts.find(account => account.id === id)
  return (
    <div className="row">
      <div className="col">
        <span>Name: {account?.name}</span>
      </div>
    </div>
  )
}