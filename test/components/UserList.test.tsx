import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import React from 'react'
import { User } from '../../src/entities'

describe('UserList', () => {
    it('should render no users when the users array is empty', () => {
        render(<UserList users={[]} />)

        expect(screen.getByText(/No users/i)).toBeInTheDocument()

    })
    it('should render no users when the users array is empty', () => {
        const users: User[] = [
            { id: 1, name: 'John', },
            { id: 2, name: 'Doe', }
        ];
        render(<UserList users={users} />)

        users.forEach(user => {
            const link = screen.getByRole('link', { name: user.name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        })


    })
})
