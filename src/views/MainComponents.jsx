import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import EditorComponents from './EditorComponents';

const IntroduceContent = styled.div`
    position: relative;
    border: 0.0625rem solid #d7e2eb;
    border-radius: 0.75rem;
    overflow: hidden;
    padding: 1.5rem;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 4rem;
`;

const MainComponents = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <EditorComponents editorState={editorState} setEditorState={setEditorState} />
                </Grid>
                <Grid item xs={6}>
                    <IntroduceContent dangerouslySetInnerHTML={{__html: editorToHtml}}/>
                </Grid>
            </Grid>
        </>
    )
};

export default MainComponents;
