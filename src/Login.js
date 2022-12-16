import { Box, Button, VStack, Text, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { generateRandomString } from './common'

const client_id = '14b9506bc8f84bf698641d4e7033e7fe'
const redirect_uri = 'http://localhost:3000/callback'
const state = generateRandomString(16)
const scope = 'user-read-playback-state%20user-read-currently-playing%20user-read-playback-position'

var url = 'https://accounts.spotify.com/authorize';
url += '?client_id=' + client_id;
url += '&response_type=code';
url += '&redirect_uri=' + redirect_uri;
url += '&scope=' + scope;
url += '&state=' + state;

function onLoginClick() {
    console.log(url)
    const spotifyLoginWindow = window.open(url)
}

export default function Login() {

    return (
        <Box w="100vw" h="100vh" bg="red">
            <VStack w="100%" h="100%" bg="gray.800" justify="center" align="center" spacing="8">
                <Heading fontSize="3xl" color="white">Spotify Lyrics View</Heading>
                <Button colorScheme="whatsapp" onClick={() => onLoginClick()}>
                    Log in
                </Button>
            </VStack>
        </Box>
    )
}
