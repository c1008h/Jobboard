import React from 'react'
import { Typography, Grid, Avatar, Box, Stack } from '@mui/material'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useState } from "react"
import { createRoot } from "react-dom/client"
import FileUpload from "react-mui-fileuploader"

// import { CheckIcon } from '@mui/icons-material';
import {  Root, 
    Label,
    InputWrapper,
    StyledTag,
    Listbox 
} from '../components/myprofile/SkillComponent'

import axios from 'axios';
import {searchSkill} from '../utils/api'

export const MyProfile = () => {
    // data = searchSkill
    // const {
    //     getRootProps,
    //     getInputLabelProps,
    //     getInputProps,
    //     getTagProps,
    //     getListboxProps,
    //     getOptionProps,
    //     groupedOptions,
    //     value,
    //     focused,
    //     setAnchorEl,
    // } = useAutocomplete({
    //     id: 'customized-hook-demo',
    //     defaultValue: [data[0]],
    //     multiple: true,
    //     options: data[0],
    //     getOptionLabel: (option) => option.title,
    // });

    // console.log(data[0])
    // axios.get()
    const [filesToUpload, setFilesToUpload] = useState([])

    const handleFilesChange = (files) => {
        // Update chosen files
        setFilesToUpload([...files])
    };

    const uploadFiles = () => {
        // Create a form and post it to server
        let formData = new FormData()
        filesToUpload.forEach((file) => formData.append("files", file))

        fetch("/file/upload", {
            method: "POST",
            body: formData
        })
    }

    return (
        <Box>
            <Typography fontSize={30}>My Profile</Typography>
            <Stack direction='column'>

                {/* <div {...getRootProps()}>
                    <Label {...getInputLabelProps()}>Customized hook</Label>
                    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                    {value.map((option, index) => (
                        <StyledTag label={option.title} {...getTagProps({ index })} />
                    ))}

                    <input {...getInputProps()} />
                    </InputWrapper>
                </div>
                {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                        <li {...getOptionProps({ option, index })}>
                        <span>{option.title}</span>
                        <CheckedIcon fontSize="small" /> 
                        </li>
                  ))} 
                   </Listbox>
                 ) : null )} */}

            </Stack>
            <div style={{ padding: '5%' }}>
            <Grid container spacing={20}>
                <Grid item xs={4}>
                    <div style={{paddingBottom: '5%', fontSize:'20px'}}>
                    <b>Administrator</b>
                    </div>
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 150, height: 150, fontSize:50,}}>A</Avatar>
                    <hr></hr>
                    <div>
                    <b>Bio</b>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </Grid>
                
                <Grid item xs={8}>
                    test
                        <>
                            <FileUpload
                                multiFile={true}
                                onFilesChange={handleFilesChange}
                                onContextReady={(context) => { }}
                            />
                            <button onClick={uploadFiles}>Upload</button>
                        </>
                </Grid>
                
            </Grid>
            </div>

        </Box>
    )
}