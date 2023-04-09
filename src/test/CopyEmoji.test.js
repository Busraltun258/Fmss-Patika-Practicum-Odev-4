import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
describe("copy-emoji-render", () => {
    let copyEmoji;
    beforeEach(() => {
        //App componneti render edilir
        render(<App/>);
        //Joy emojisini koopyalamak icin seceriz.
        copyEmoji = screen.getByText("Joy")
    });
    test('emoji kopyalama islemi gerceklestirilmeli ', () => {
        fireEvent.click(copyEmoji)
        //copy emoji ogesinin data-clipboard-text ozniteliginin 😂 bu dgere sahip olup olmadigini bakar.
        expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😂")

    })

});