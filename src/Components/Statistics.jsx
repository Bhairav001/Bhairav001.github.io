
import React from 'react'
import {Box,Text,Image,Center,Heading,useColorModeValue,Flex} from '@chakra-ui/react'
import Githubcalendar from "react-github-calendar";
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll, scroller } from "react-scroll";
const Github = () => {
  return (
    <Box w='90%' m='auto' mb='30px'   pt={{base:'10px',md:'100px'}}>
               <Link name='statistics'> 
                  <Center p={"12"}>
                    <Heading size={"lg"} color='blue.600' borderBottom='4px solid gray' > GitHub </Heading>
                </Center>
       <Flex m='auto' w='60%' gap='30px' flexDirection={{base:'column',md:'row'}}  >
        <Image  src='https://github-readme-stats.vercel.app/api/top-langs?username=Bhairav001&show_icons=true&locale=en&layout=compact' alt='lang used'/>
        <Image  src="https://github-readme-stats.vercel.app/api?username=Bhairav001&show_icons=true&locale=en" alt='github slate'/>
       </Flex>
       <Box fontWeight={"bold"} color='blue' marginLeft="40px">
                <Center p={"12"}>
                    <Heading size={"lg"} color='blue.600' borderBottom='4px solid gray' textAlign={"center"}> GitHub Calender</Heading>
                </Center>
                <Githubcalendar
                    username="Bhairav001"
                    blockSize={18}
                    blockMargin={5}
                    fontSize={16}
                    color='blue'
                />
            </Box>
       </Link>
    </Box>
  )
}

export default Github

