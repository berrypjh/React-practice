import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorComponents = ({ editorState, setEditorState }) => {
    const onEditorStateChange = (editor) => {
        console.log(draftToHtml(convertToRaw(editor.getCurrentContent())))
        setEditorState(editor);
    };

    return (
        <>
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: false },
                }} 
                placeholder="내용을 작성해주세요."
                localization={{
                  locale: 'ko',
                }}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </>
    )
}

export default EditorComponents