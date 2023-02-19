import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
// import { CheckIcon } from '@mui/icons-material';
import {  Root, 
    Label,
    InputWrapper,
    StyledTag,
    Listbox 
} from '../components/myprofile'

import axios from 'axios';
import data from '../../jobData.json'

export const MyProfile = () => {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: [data[0]],
        multiple: true,
        options: data[0],
        getOptionLabel: (option) => option.title,
    });

    console.log(data[0])
    axios.get()
    return (
        <Box>
            <Typography fontSize={30}>Dashboard</Typography>
            <Stack direction='column'>

                <div {...getRootProps()}>
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
                        {/* <CheckedIcon fontSize="small" /> */}
                        </li>
                    ))}
                    </Listbox>
                ) : null}

            </Stack>

        </Box>
    )
}