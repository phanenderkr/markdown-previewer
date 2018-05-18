import React from 'react';
import DisplayMarkdown from './DisplayMarkdown';
import marked from 'marked';
import markdown from 'markdown-it';

class MarkdownApp extends React.Component {
    state = {
        text: ''
    };

    onChangeText = e => {
        const text = e.target.value;
        this.setState(() => ({
            text
        }));
    };

    render() {
        const md = new markdown();
        return (
            <div>
                <textarea name="markdown" id="" cols="30" rows="10" autoFocus={true} onChange={this.onChangeText} />
                <DisplayMarkdown markdownText={md.render(this.state.text)} />
            </div>
        );
    }
}

export default MarkdownApp;
