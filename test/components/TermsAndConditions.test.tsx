import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event';
describe('TermsAndConditions', () => {
    const renderComponent = () => {
        render(<TermsAndConditions />)
        return {
            heading: screen.getByRole('heading'),
            checkbox: screen.getByRole('checkbox'),
            button: screen.getByRole('button')
        }
    }
    it('should render with correct text and initial state', () => {
        // Tartibga solish
        const { heading, checkbox, button } = renderComponent()
        //  Matnni tekshirish
        expect(heading).toHaveTextContent('Terms & Conditions')
        //  Checkboxni tekshirish
        expect(checkbox).not.toBeChecked()
        //  Buttonni tekshirish
        expect(button).toBeDisabled();
    })
    it('should enable the button when the checkbox is checked', async () => {
        // Tartibga solish
        const { checkbox, button } = renderComponent()
        //  Checkboxni topish
        const user = userEvent.setup();
        await user.click(checkbox);
        //  Buttonni tekshirish
        expect(button).not.toBeDisabled();

    })
})