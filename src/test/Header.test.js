import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
describe("Baslik test", () => {
    let emojiSearch;
    beforeEach(() => {
        //header componnetim app coomponnetin icinde kullaniliyor. Bu yuzden App componneti render ediliyor.
        render(<App/>);
        // Header componentinde Emoji Search anahtar kelimemi bulamyi sagliyorum.
        emojiSearch= screen.getByText("Emoji Search");

    });
    test('baslik render edilmeli',()=>{
        //dokumanda ilgili yazi var mi seklinde bekler
       expect(emojiSearch).toBeInTheDocument()
    })

})




