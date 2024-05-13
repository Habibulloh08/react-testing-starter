import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet'
import React from 'react'
describe('Greet', () => {
    it("should render Hello with name the name is provider", () => {
        render(<Greet name="John" />)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Hello John/i)
    })
    it("should render Login if no name is provided", () => {
        render(<Greet />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/Login/i)
    })
})