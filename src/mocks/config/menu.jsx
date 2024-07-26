import { MdOutlineSettings, MdNotificationsNone, MdOutlineHttps, MdOutlineGTranslate, MdOutlineDarkMode   } from "react-icons/md";
import { Switch } from "../../components/layout/Swicth";
const optionsMenu = [
    {
        text: 'General Setting',
        icon: <MdOutlineSettings size="20px"/>,
    },
    {
        text: 'Notifications',
        icon: <MdNotificationsNone size="20px"/>,
    },
    {
        text: 'Privacy and Security',
        icon: <MdOutlineHttps size="20px"/>,
    },
    {
        text: 'Languange',
        icon: <MdOutlineGTranslate size="20px"/>,
    },
    {
        text: 'Dark Mode',
        icon: <MdOutlineDarkMode size="20px"/>,
        button: <Switch/>,
    },
];

export { optionsMenu };