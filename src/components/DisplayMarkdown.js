import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const DisplayMarkdown = props => <div>{ReactHtmlParser(props.markdownText)}</div>;

export default DisplayMarkdown;
