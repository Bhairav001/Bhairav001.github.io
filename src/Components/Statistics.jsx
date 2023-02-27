
// import React from 'react'
// import {Box,Text,Image,Center,Heading,useColorModeValue,Flex} from '@chakra-ui/react'
// import Githubcalendar from "react-github-calendar";
// // import { Link } from 'react-router-dom';
// import { Link, animateScroll as scroll, scroller } from "react-scroll";
// const Statistics = () => {
//   return (
//     <Box w='90%' m='auto' mb='30px'   pt={{base:'10px',md:'100px'}}>
//                <Link name='statistics'> 
//                   <Center p={"12"}>
//                     <Heading size={"lg"} color='blue.600' borderBottom='4px solid gray' > GitHub </Heading>
//                 </Center>
//        <Flex m='auto' w='60%' gap='30px' flexDirection={{base:'column',md:'row'}}  >
//         <Image  src='https://github-readme-stats.vercel.app/api/top-langs?username=Bhairav001&show_icons=true&locale=en&layout=compact' alt='lang used'/>
//         <Image  src="https://github-readme-stats.vercel.app/api?username=Bhairav001&show_icons=true&locale=en" alt='github slate'/>
//        </Flex>
//        <Box fontWeight={"bold"} color='blue' marginLeft="40px">
//                 <Center p={"12"}>
//                     <Heading size={"lg"} color='blue.600' borderBottom='4px solid gray' textAlign={"center"}> GitHub Calender</Heading>
//                 </Center>
//                 <Githubcalendar
//                     username="Bhairav001"
//                     blockSize={18}
//                     blockMargin={5}
//                     fontSize={16}
//                     color='blue'
//                 />
//             </Box>
//        </Link>
//     </Box>
//   )
// }

// export default Statistics
import React from "react";
import GitHubCalendar from 'react-github-calendar';




  const Statistics=()=>{
    const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 12;
    
      return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();
    
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
    return(
      <div 
      name="statistics"
      className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
      <div>
      <p className="text-blue-600	 text-4xl font-bold inline border-b-4 border-gray-500">
          Statistics
        </p>
      </div>
      <div className="flex gap-9  justify-center mt-14">
      <p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=Bhairav001&show_icons=true&locale=en&layout=compact&theme=algolia" alt="bhairavgotam" /></p>
      <p><img align="center" src="https://github-readme-stats.vercel.app/api?username=Bhairav001&show_icons=true&locale=en&theme=algolia" alt="bhairavgotam" /></p>
      </div>
      <div className="flex justify-center items-center  mt-16 text-6xl font-medium">
        <GitHubCalendar 
     username="Bhairav001"
  // transformData={selectLastHalfYear} 
     year={"last"}
     color={"blue"}
     fontSize={20}
 
/>
      </div>

      <div style={{marginTop:"60px"}}>
          <img className="flex justify-center items-center" alt="Bhairav Gotam Activity Graph" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Bhairav001&theme=2077"/>
        </div>
     </div>
    )

  }

export default Statistics;
