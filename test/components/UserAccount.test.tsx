import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'

import UserAccount from '../../src/components/UserAccount'
import React from 'react'
import { User } from '../../src/entities'

describe('UserAccount', () => {
    it('should render user name', () => {
        const user: User = { id: 1, name: 'John' };
        render(<UserAccount user={user} />);

        expect(screen.getByText(user.name)).toBeInTheDocument();
    })
    it('should render edit button if user is admin', () => {
        const user: User = { id: 1, name: 'John', isAdmin: true };
        render(<UserAccount user={user} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Edit/i);
    })
    it('should not render edit button if user is not admin', () => {
        const user: User = { id: 1, name: 'John' };
        render(<UserAccount user={user} />);
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    })
})