'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { TrashIcon } from '@radix-ui/react-icons'

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      role: 'User',
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'User',
    },
  ])

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'New User',
      email: 'newuser@example.com',
      role: 'User',
    }
    setUsers([...users, newUser])
  }

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
          <Button className="ml-auto" onClick={addUser} size="sm">
            Add User
          </Button>
        </div>
        <div className="border bg-secondary shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        className="text-red-500"
                        size="icon"
                        variant="outline"
                        onClick={() => deleteUser(user.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}

export default UsersPage
