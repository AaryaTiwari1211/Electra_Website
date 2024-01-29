import logo from '/logo.svg';
import facebook from '/facebook.png';
import linkedin from '/linkedin.png';
export const FooterData = {
    logo: logo,
    links: [
        {
            title: 'About',
            url: '/about'
        },
        {
            title: 'Products & Services',
            url: '/services'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
        {
            title: 'Clients',
            url: '/clients'
        }
    ],
    address: [
        "Head Office : Gat No.229",
        "Alandi-Markal Road, Opp. Caparo India, Markal Pune-412105, Maharashtra, India Telephone: 91-2135-306915",        
        "Fax No: 91 - 2135 - 306915",
        "Email: marketing@electraenterprises.in",
    ],
    social_media: [
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/electraenterprisespune/',
            image: facebook
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/company/electra-enterprises-pune/',
            image: linkedin
        }
    ]
}