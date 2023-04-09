import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import emojiList from '../emojiList.json'

describe("emoji-list-render", () => {
    let emojisList;
    beforeEach(() => {
        //App componneti render edilir
        render(<App/>);
        //emojilerin oldugu json dosyasindan 20 tanesinin kopyasi olusturulur.
        emojisList = emojiList.slice(0, 10);
    });
    test("Emoji listesi render edilmeli", () => {
        //emooji listesini map fonksiyonu ile tek tek gezeriz.
        //her bir emojiyi item olarak dusunebiliiriz.
        emojisList.map((item)=>{
            //dokumanda emojinin basligi var mi diye arariz.
            expect(screen.getByText(item.title)).toBeInTheDocument()

        })
    });

});