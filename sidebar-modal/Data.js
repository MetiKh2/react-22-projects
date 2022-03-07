import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <HomeIcon />,
    },
    {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <GroupIcon />,
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
        icon: <FolderIcon />,
    },
    {
        id: 4,
        url: '/calendar',
        text: 'calendar',
        icon: <CalendarTodayIcon />,
    },
    {
        id: 5,
        url: '/documents',
        text: 'documents',
        icon: <DynamicFormIcon />,
    },
];

export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FacebookIcon />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <TwitterIcon />,
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <LinkedInIcon />,
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <InstagramIcon />,
    }

];