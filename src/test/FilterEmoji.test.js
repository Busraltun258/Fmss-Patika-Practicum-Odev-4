import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
describe("filter-emoji-render", () => {
    let emojiFilter;
    beforeEach(() => {
        //App componneti render edilir
        render(<App/>);
        //label a aldigim input alanini daha kolay bulmak icin getByFilterText i kuallniyorum.
        emojiFilter=screen.getByLabelText("emojiInput")
    })
    test('emoji filtreleme kismi test edilmeli ', () => {
        //inputa bir emoji girilir.
        const emoji="Grinning"
        //inputa eklemek icin userEvent kullanilir
        fireEvent.click(emojiFilter,emoji)
        expect(screen.getByText(emoji)).toBeInTheDocument()


    })


});