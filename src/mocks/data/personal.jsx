import { MdLocalPhone, MdOutlineAlternateEmail,MdInfoOutline } from "react-icons/md";
import imgPerfil from '@assets/images/daniel.png';

const PersonalInformation = {
  idPerson: 1028,
  imagPath: imgPerfil,
}

const optionsPersonalInformation = [
    {
      text: '+62 845 2341283',
      subText: 'Phone',
      icon: <MdLocalPhone size="20px" />,
    },
    {
      text: 'Savannah',
      subText: 'Username',
      icon: <MdOutlineAlternateEmail  size="20px" />,
    },
    {
      text: 'Product Designer',
      subText: 'Status',
      icon: <MdInfoOutline size="20px" />,
    },
  ];

export { optionsPersonalInformation, PersonalInformation };