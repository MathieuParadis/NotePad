import React from 'react';
import MarkdownView from 'react-showdown';


const Markdown = ({input}) => {
  return (
    <MarkdownView markdown={input} options={{ tables: true, emoji: true }} />
  );
};

export default Markdown

