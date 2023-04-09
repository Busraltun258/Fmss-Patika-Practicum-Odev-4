import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
    static propTypes = {
        textChange: PropTypes.func
    };

    handleChange = event => {
        this.props.textChange(event);
    };
//emoji filtrelemek icin label etiketini kullaniyorum . Bu sekilde getByLabel ile input alanini bbulabilirim.
    render() {
        return (
            <div className="component-search-input">
                <div>

                    <label className="emojiFilter">
                        emojiInput

                        <input onChange={this.handleChange}/>
                    </label>
                </div>
            </div>
        );
    }
}
