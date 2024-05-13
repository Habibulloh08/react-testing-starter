import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'
import React from 'react'

describe('ProductImageGallery', () => {
    it('should render nothing if given an empty array', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement()
    })

    it('should render a list of image', () => {
        const imageUrls = ['url1', 'url2'];
        render(<ProductImageGallery imageUrls={imageUrls} />);
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
        expect(images[0]).toHaveAttribute('src', 'url1')
    })
})